// Duel Meriam Parabola -- logika game. Vanilla JS polos (tanpa build),
// bergantung pada fisika.js (dimuat sebelum file ini, lihat index.html) yang
// mengisi window.DuelFisika.
(function () {
  'use strict';
  var F = window.DuelFisika;

  // ---------- Ambil elemen DOM ----------
  var $ = function (id) { return document.getElementById(id); };
  var layarSetup = $('layar-setup');
  var layarMain = $('layar-main');
  var layarMenang = $('layar-menang');
  var btnMulai = $('btn-mulai');

  var panelBiru = $('panel-biru');
  var panelMerah = $('panel-merah');
  var nyawaBiruEl = $('nyawa-biru');
  var nyawaMerahEl = $('nyawa-merah');
  var perisaiBiruEl = $('perisai-biru');
  var perisaiMerahEl = $('perisai-merah');
  var infoStrip = $('info-strip');
  var labelGiliran = $('label-giliran');

  var kanvas = $('kanvas-game');
  var ctx = kanvas.getContext('2d');
  var bannerHasil = $('banner-hasil');

  var sliderSudut = $('slider-sudut');
  var inputSudut = $('input-sudut');
  var sliderV0 = $('slider-v0');
  var inputV0 = $('input-v0');
  var blokTebak = $('blok-tebak');
  var inputTebakan = $('input-tebakan');
  var btnKunciTebakan = $('btn-kunci-tebakan');
  var btnTembak = $('btn-tembak');
  var btnRumus = $('btn-rumus');
  var btnPembahasan = $('btn-pembahasan');
  var btnJeda = $('btn-jeda');
  var btnMute = $('btn-mute');
  var btnMainLagi = $('btn-main-lagi');

  var hasilPanel = $('hasil-tembakan');
  var hasilTinggi = $('hasil-tinggi');
  var hasilJarak = $('hasil-jarak');
  var hasilSelisih = $('hasil-selisih');
  var hasilStatus = $('hasil-status');

  var teksPemenang = $('teks-pemenang');

  // ---------- State ----------
  var TOLERANSI_KENA = 4; // meter -- lebar benteng
  var TOLERANSI_TEBAKAN = 5; // meter -- syarat perisai Mode Hitung

  var state = {
    nyawaMaks: 3,
    kesulitan: 'mudah',
    g: 10,
    anginAktif: false,
    angin: 0,
    medan: null,
    pemainAktif: 'biru',
    nyawa: { biru: 3, merah: 3 },
    perisai: { biru: 0, merah: 0 },
    statistik: {
      biru: { tembakan: 0, kena: 0, akurasiTerbaik: null },
      merah: { tembakan: 0, kena: 0, akurasiTerbaik: null },
    },
    sedangAnimasi: false,
    tebakanTerkunci: false,
    tebakanNilai: null,
    acakSulit: { v0: 25, sudut: 45 },
    lastShot: null,
    muted: false,
    pxPerMeterX: 1,
    pxPerMeterY: 1,
    trailAnimasi: null,
  };

  // ---------- Layar ----------
  function gantiLayar(id) {
    [layarSetup, layarMain, layarMenang].forEach(function (l) { l.classList.remove('aktif'); });
    $(id).classList.add('aktif');
  }

  // ---------- Setup screen ----------
  document.querySelectorAll('[data-grup]').forEach(function (grup) {
    grup.querySelectorAll('.opsi-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        grup.querySelectorAll('.opsi-btn').forEach(function (b) { b.classList.remove('aktif'); });
        btn.classList.add('aktif');
      });
    });
  });

  function bacaOpsi(grup) {
    var aktif = document.querySelector('[data-grup="' + grup + '"] .opsi-btn.aktif');
    return aktif ? aktif.dataset.nilai : null;
  }

  btnMulai.addEventListener('click', function () {
    inisAudio();
    state.nyawaMaks = parseInt(bacaOpsi('nyawa'), 10);
    state.kesulitan = bacaOpsi('kesulitan');
    state.g = parseFloat(bacaOpsi('gravitasi'));
    state.anginAktif = bacaOpsi('angin') === 'hidup';
    state.nyawa = { biru: state.nyawaMaks, merah: state.nyawaMaks };
    state.perisai = { biru: 0, merah: 0 };
    state.statistik = {
      biru: { tembakan: 0, kena: 0, akurasiTerbaik: null },
      merah: { tembakan: 0, kena: 0, akurasiTerbaik: null },
    };
    state.pemainAktif = 'biru';
    gantiLayar('layar-main');
    rondeBaru();
    perbaruiUiPemain();
    resizeKanvas();
  });

  btnMainLagi.addEventListener('click', function () {
    gantiLayar('layar-setup');
  });

  // ---------- Ronde & medan ----------
  function rondeBaru() {
    state.medan = F.buatMedanAcak();
    if (state.kesulitan === 'mudah') state.medan.tinggiBukit = 0;
    state.angin = state.anginAktif ? (Math.random() * 2 - 1) * 3 : 0;
    // Acuan tinggi tetap SATU RONDE PENUH -- dasar dari tembakan "tinggi &
    // jauh" yang masuk akal (v0=50, sudut=45) di gravitasi match ini, jadi
    // skala Y tidak pernah berubah gara-gara slider digeser (lihat hitungSkalaY).
    state.tinggiAcuan = Math.max(F.hitungTinggiMaksimum(50, 45, state.g), state.medan.tinggiBukit, 5);
    if (state.kesulitan === 'sulit') {
      state.acakSulit = {
        v0: Math.round(5 + Math.random() * 45),
        sudut: Math.round(5 + Math.random() * 80),
      };
      state.tebakanTerkunci = false;
      inputTebakan.value = '';
    }
    hasilPanel.classList.remove('tampil');
    sembunyikanBanner();
    state.trailAnimasi = null;
    siapkanKontrolGiliran();
    perbaruiInfoStrip();
    gambarUlang();
  }

  function siapkanKontrolGiliran() {
    var kunciSlider = state.kesulitan === 'sulit';
    sliderSudut.disabled = kunciSlider;
    inputSudut.disabled = kunciSlider;
    sliderV0.disabled = kunciSlider;
    inputV0.disabled = kunciSlider;

    if (kunciSlider) {
      sliderSudut.value = state.acakSulit.sudut;
      inputSudut.value = state.acakSulit.sudut;
      sliderV0.value = state.acakSulit.v0;
      inputV0.value = state.acakSulit.v0;
      blokTebak.style.display = 'flex';
      btnTembak.disabled = true;
    } else {
      sliderSudut.value = 45; inputSudut.value = 45;
      sliderV0.value = 25; inputV0.value = 25;
      blokTebak.style.display = 'none';
      btnTembak.disabled = false;
    }

    labelGiliran.textContent =
      (state.pemainAktif === 'biru' ? '🔵 Giliran Pemain Biru' : '🔴 Giliran Pemain Merah') +
      (kunciSlider ? ' -- hitung dulu jarak jatuhnya!' : '');
    labelGiliran.style.color = state.pemainAktif === 'biru' ? 'var(--biru)' : 'var(--pink)';
  }

  btnKunciTebakan.addEventListener('click', function () {
    var nilai = parseFloat(inputTebakan.value);
    if (isNaN(nilai)) return;
    state.tebakanNilai = nilai;
    state.tebakanTerkunci = true;
    btnTembak.disabled = false;
    inputTebakan.disabled = true;
    btnKunciTebakan.disabled = true;
  });

  // ---------- Sinkronisasi slider <-> kotak angka ----------
  function pasangSinkron(slider, kotak, min, max) {
    slider.addEventListener('input', function () {
      kotak.value = slider.value;
      gambarUlang();
    });
    kotak.addEventListener('input', function () {
      var v = Math.max(min, Math.min(max, parseFloat(kotak.value) || min));
      slider.value = v;
      gambarUlang();
    });
  }
  pasangSinkron(sliderSudut, inputSudut, 0, 90);
  pasangSinkron(sliderV0, inputV0, 5, 50);

  // ---------- Info strip ----------
  function labelGravitasi(g) {
    if (Math.abs(g - 9.8) < 0.01) return 'Bumi (9,8 m/s²)';
    if (Math.abs(g - 1.6) < 0.01) return 'Bulan (1,6 m/s²)';
    if (Math.abs(g - 3.7) < 0.01) return 'Mars (3,7 m/s²)';
    return 'Standar (' + g + ' m/s²)';
  }

  function perbaruiInfoStrip() {
    var html = '';
    html += '<span>🪐 ' + labelGravitasi(state.g) + '</span>';
    html += '<span>📏 Jarak Benteng: ' + state.medan.jarak.toFixed(0) + ' m</span>';
    if (state.medan.tinggiBukit > 1) html += '<span>⛰️ Bukit: ' + state.medan.tinggiBukit.toFixed(0) + ' m</span>';
    if (state.anginAktif) {
      var arahAngin = state.angin >= 0 ? '→' : '←';
      html += '<span>💨 Angin: ' + Math.abs(state.angin).toFixed(1) + ' m/s² ' + arahAngin + '</span>';
    }
    html += '<span>🎚️ ' + (state.kesulitan === 'mudah' ? 'Mudah' : state.kesulitan === 'sedang' ? 'Sedang' : 'Sulit / Mode Hitung') + '</span>';
    infoStrip.innerHTML = html;
  }

  // ---------- UI nyawa & perisai ----------
  function perbaruiUiPemain() {
    nyawaBiruEl.textContent = '❤️'.repeat(state.nyawa.biru) + '🖤'.repeat(state.nyawaMaks - state.nyawa.biru);
    nyawaMerahEl.textContent = '❤️'.repeat(state.nyawa.merah) + '🖤'.repeat(state.nyawaMaks - state.nyawa.merah);
    perisaiBiruEl.textContent = state.perisai.biru > 0 ? '🛡️ x' + state.perisai.biru : '';
    perisaiMerahEl.textContent = state.perisai.merah > 0 ? '🛡️ x' + state.perisai.merah : '';
    panelBiru.classList.toggle('giliran', state.pemainAktif === 'biru');
    panelMerah.classList.toggle('giliran', state.pemainAktif === 'merah');
  }

  // ---------- Kanvas: skala & gambar ----------
  var MARGIN_KIRI_KANAN_M = 15;
  var MARGIN_ATAS_PX = 20;
  var MARGIN_BAWAH_PX = 34; // ruang label grid

  function resizeKanvas() {
    var rect = kanvas.parentElement.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    kanvas.width = rect.width * dpr;
    kanvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    hitungSkalaX();
    gambarUlang();
  }
  window.addEventListener('resize', resizeKanvas);

  function lebarKanvasCss() { return kanvas.parentElement.clientWidth; }
  function tinggiKanvasCss() { return kanvas.parentElement.clientHeight; }

  function hitungSkalaX() {
    if (!state.medan) return;
    var viewWidth = state.medan.jarak + MARGIN_KIRI_KANAN_M * 2;
    state.pxPerMeterX = lebarKanvasCss() / viewWidth;
  }

  function keXpx(xWorld) {
    return (xWorld + MARGIN_KIRI_KANAN_M) * state.pxPerMeterX;
  }

  // Skala vertikal dihitung SEKALI per ronde (lihat rondeBaru -> state.tinggiAcuan),
  // BUKAN dari nilai slider yang sedang digeser -- sebelumnya skala Y ikut
  // nilai v0/sudut slider SAAT ITU, jadi tiap slider digeser, tinggi bukit
  // di layar ikut "bernapas" (padahal tinggi bukit sungguhan tidak berubah
  // sama sekali). Sekarang tanah & bukit selalu stabil selama satu ronde.
  function hitungSkalaY() {
    var groundY = tinggiKanvasCss() - MARGIN_BAWAH_PX;
    var areaTinggi = groundY - MARGIN_ATAS_PX;
    state.pxPerMeterY = areaTinggi / state.tinggiAcuan;
  }

  function keYpx(yWorld) {
    var groundY = tinggiKanvasCss() - MARGIN_BAWAH_PX;
    return groundY - yWorld * state.pxPerMeterY;
  }

  function gambarUlang() {
    if (!state.medan) return;
    hitungSkalaY();
    var w = lebarKanvasCss(), h = tinggiKanvasCss();
    ctx.clearRect(0, 0, w, h);
    var groundYpx = keYpx(0);

    // Tanah
    ctx.fillStyle = '#bfe6a8';
    ctx.fillRect(0, groundYpx, w, h - groundYpx);
    ctx.strokeStyle = '#8fcf74';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, groundYpx); ctx.lineTo(w, groundYpx); ctx.stroke();

    // Grid tiap 10 m + label
    ctx.fillStyle = 'rgba(38,36,59,0.55)';
    ctx.font = '10px Nunito, sans-serif';
    ctx.textAlign = 'center';
    for (var m = 0; m <= state.medan.jarak; m += 10) {
      var xp = keXpx(m);
      ctx.strokeStyle = 'rgba(38,36,59,0.08)';
      ctx.beginPath(); ctx.moveTo(xp, MARGIN_ATAS_PX); ctx.lineTo(xp, groundYpx); ctx.stroke();
      ctx.fillText(m + 'm', xp, h - 14);
    }

    // Bukit
    if (state.medan.tinggiBukit > 0.5) {
      var kiri = Math.max(0, state.medan.xBukit - state.medan.lebarBukit);
      var kanan = Math.min(state.medan.jarak, state.medan.xBukit + state.medan.lebarBukit);
      ctx.beginPath();
      ctx.moveTo(keXpx(kiri), groundYpx);
      var langkah = 20;
      for (var i = 0; i <= langkah; i++) {
        var x = kiri + ((kanan - kiri) * i) / langkah;
        var yTanah = F.tinggiMedanDi(x, state.medan);
        ctx.lineTo(keXpx(x), keYpx(yTanah));
      }
      ctx.lineTo(keXpx(kanan), groundYpx);
      ctx.closePath();
      ctx.fillStyle = '#7bbf5e';
      ctx.fill();
      ctx.strokeStyle = '#5b9e42';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Meriam -- punya giliran digambar dengan sudut slider saat ini (laras
    // ikut berputar live sambil diatur), yang satunya diam di sudut netral.
    var sudutBiru = state.pemainAktif === 'biru' ? parseFloat(sliderSudut.value) : 45;
    var sudutMerah = state.pemainAktif === 'merah' ? parseFloat(sliderSudut.value) : 45;
    gambarMeriam(keXpx(0), groundYpx, '#1d6fe0', sudutBiru, 1);
    gambarMeriam(keXpx(state.medan.jarak), groundYpx, '#db2f77', sudutMerah, -1);

    // Jejak tembakan terakhir / sedang berlangsung
    if (state.trailAnimasi && state.trailAnimasi.length > 1) {
      ctx.strokeStyle = 'rgba(38,36,59,0.35)';
      ctx.setLineDash([5, 4]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      state.trailAnimasi.forEach(function (p, i) {
        var xp2 = keXpx(p.x), yp2 = keYpx(p.y);
        if (i === 0) ctx.moveTo(xp2, yp2); else ctx.lineTo(xp2, yp2);
      });
      ctx.stroke();
      ctx.setLineDash([]);
    }

    if (state.posisiPeluru) {
      ctx.fillStyle = state.pemainAktif === 'biru' ? '#1d6fe0' : '#db2f77';
      ctx.beginPath();
      ctx.arc(keXpx(state.posisiPeluru.x), keYpx(state.posisiPeluru.y), 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function gambarMeriam(xp, groundYpx, warna, sudutDerajat, arahHadap) {
    var sudutRad = (sudutDerajat * Math.PI) / 180;
    ctx.save();
    ctx.translate(xp, groundYpx);

    // Roda
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(0, -9, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Badan (warna tim), di atas roda
    ctx.fillStyle = warna;
    ctx.beginPath();
    ctx.arc(0, -13, 8, Math.PI, 0);
    ctx.fill();

    // Laras -- berputar sesuai sudut elevasi & menghadap arah lawan
    ctx.translate(0, -13);
    ctx.scale(arahHadap, 1);
    ctx.rotate(-sudutRad);
    ctx.fillStyle = '#4b5563';
    ctx.fillRect(2, -4, 30, 8);
    ctx.beginPath();
    ctx.arc(2, 0, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function bangkitkanTitikLintasan(v0, sudut, arah, x0, g, aAngin) {
    var titik = [];
    var dt = 0.03, t = 0, tMaks = 15;
    while (t <= tMaks) {
      var x = F.posisiX(x0, arah, v0, sudut, aAngin, t);
      var y = F.posisiY(0, v0, sudut, g, t);
      var tanah = F.tinggiMedanDi(x, state.medan);
      titik.push({ x: x, y: Math.max(y, tanah) });
      // t > 0 WAJIB -- lihat catatan di fisika.js simulasikanTembakan.
      if (t > 0 && y <= tanah) break;
      t += dt;
    }
    return titik;
  }

  // ---------- Tembak ----------
  btnTembak.addEventListener('click', tembak);

  function tembak() {
    if (state.sedangAnimasi || btnTembak.disabled) return;

    var v0 = parseFloat(sliderV0.value);
    var sudut = parseFloat(sliderSudut.value);
    var penembak = state.pemainAktif;
    var lawan = penembak === 'biru' ? 'merah' : 'biru';
    var arah = penembak === 'biru' ? 1 : -1;
    var x0 = penembak === 'biru' ? 0 : state.medan.jarak;
    var xTarget = penembak === 'biru' ? state.medan.jarak : 0;

    bunyiTembak();
    state.sedangAnimasi = true;
    btnTembak.disabled = true;
    btnJeda.disabled = true;
    sembunyikanBanner();
    hasilPanel.classList.remove('tampil');

    var hasil = F.simulasikanTembakan({
      v0: v0, sudutDerajat: sudut, g: state.g, arah: arah, aAngin: state.angin,
      x0: x0, y0: 0, medan: state.medan,
    });

    var titikLintasan = bangkitkanTitikLintasan(v0, sudut, arah, x0, state.g, state.angin);
    state.trailAnimasi = [];

    var waktuJatuh = hasil.tJatuh || 0;
    var mulai = null;

    function frame(now) {
      if (!mulai) mulai = now;
      var tBerlalu = (now - mulai) / 1000;
      var frac = waktuJatuh > 0 ? Math.min(1, tBerlalu / waktuJatuh) : 1;
      var idx = Math.floor(frac * (titikLintasan.length - 1));
      var titikSaatIni = titikLintasan[idx] || titikLintasan[titikLintasan.length - 1];
      state.posisiPeluru = titikSaatIni;
      state.trailAnimasi = titikLintasan.slice(0, idx + 1);
      gambarUlang();

      if (frac < 1) {
        requestAnimationFrame(frame);
      } else {
        selesaiTembakan(hasil, { v0: v0, sudut: sudut, penembak: penembak, lawan: lawan, x0: x0, xTarget: xTarget });
      }
    }
    requestAnimationFrame(frame);
  }

  function selesaiTembakan(hasil, konteks) {
    state.sedangAnimasi = false;
    state.posisiPeluru = null;
    btnJeda.disabled = false;

    var jarakJatuhDariPenembak = Math.abs(hasil.xJatuh - konteks.x0);
    var selisihKeTarget = Math.abs(hasil.xJatuh - konteks.xTarget);
    var kena = selisihKeTarget <= TOLERANSI_KENA;
    var tinggiMaks = F.hitungTinggiMaksimum(konteks.v0, konteks.sudut, state.g);

    var stat = state.statistik[konteks.penembak];
    stat.tembakan++;
    if (kena) stat.kena++;
    if (stat.akurasiTerbaik === null || selisihKeTarget < stat.akurasiTerbaik) {
      stat.akurasiTerbaik = selisihKeTarget;
    }

    // Mode Hitung: cek tebakan jarak jatuh (dari sudut pandang penembak)
    if (state.kesulitan === 'sulit' && state.tebakanTerkunci) {
      var selisihTebakan = Math.abs(state.tebakanNilai - jarakJatuhDariPenembak);
      if (selisihTebakan <= TOLERANSI_TEBAKAN) {
        state.perisai[konteks.penembak]++;
      }
    }

    state.lastShot = {
      penembak: konteks.penembak, v0: konteks.v0, sudut: konteks.sudut, g: state.g, angin: state.angin,
      tinggiMaks: tinggiMaks, jarakJatuh: jarakJatuhDariPenembak, selisih: selisihKeTarget,
      kena: kena, kenaBukit: hasil.kenaBukit,
    };

    hasilTinggi.textContent = tinggiMaks.toFixed(1) + ' m';
    hasilJarak.textContent = jarakJatuhDariPenembak.toFixed(1) + ' m';
    hasilSelisih.textContent = selisihKeTarget.toFixed(1) + ' m';
    hasilStatus.textContent = kena ? '🎯 KENA!' : (hasil.kenaBukit ? '💥 Kena Bukit' : '💨 Meleset');
    hasilPanel.classList.add('tampil');

    tampilkanBanner(
      kena ? '🎯 Kena! Selisih ' + selisihKeTarget.toFixed(1) + ' m' : (hasil.kenaBukit ? '💥 Nyangkut di bukit!' : '💨 Meleset ' + selisihKeTarget.toFixed(1) + ' m'),
      kena ? 'kena' : 'meleset'
    );

    if (kena) {
      bunyiKena();
      if (state.perisai[konteks.lawan] > 0) {
        state.perisai[konteks.lawan]--;
        tampilkanBanner('🛡️ Perisai ' + (konteks.lawan === 'biru' ? 'Biru' : 'Merah') + ' menahan serangan!', 'kena');
      } else {
        state.nyawa[konteks.lawan]--;
      }
      perbaruiUiPemain();

      if (state.nyawa[konteks.lawan] <= 0) {
        setTimeout(function () { tampilkanLayarMenang(konteks.penembak); }, 900);
        return;
      }
      state.pemainAktif = konteks.lawan;
      setTimeout(function () { rondeBaru(); perbaruiUiPemain(); }, 1200);
    } else {
      bunyiMeleset();
      state.pemainAktif = konteks.lawan;
      setTimeout(function () {
        if (state.kesulitan === 'sulit') {
          state.acakSulit = { v0: Math.round(5 + Math.random() * 45), sudut: Math.round(5 + Math.random() * 80) };
          state.tebakanTerkunci = false;
          inputTebakan.value = '';
          inputTebakan.disabled = false;
          btnKunciTebakan.disabled = false;
        }
        siapkanKontrolGiliran();
        perbaruiUiPemain();
        gambarUlang();
      }, 1200);
    }
  }

  function tampilkanBanner(teks, kelas) {
    bannerHasil.textContent = teks;
    bannerHasil.className = 'banner-hasil tampil ' + kelas;
  }
  function sembunyikanBanner() {
    bannerHasil.className = 'banner-hasil';
  }

  // ---------- Layar pemenang ----------
  function tampilkanLayarMenang(pemenang) {
    gantiLayar('layar-menang');
    bunyiMenang();
    teksPemenang.textContent = (pemenang === 'biru' ? '🔵 Pemain Biru' : '🔴 Pemain Merah') + ' Menang!';
    ['biru', 'merah'].forEach(function (p) {
      var s = state.statistik[p];
      $('stat-' + p + '-tembakan').textContent = s.tembakan;
      $('stat-' + p + '-persen').textContent = s.tembakan > 0 ? Math.round((s.kena / s.tembakan) * 100) + '%' : '0%';
      $('stat-' + p + '-akurat').textContent = s.akurasiTerbaik !== null ? s.akurasiTerbaik.toFixed(1) + ' m' : '-';
    });
  }

  // ---------- Modal ----------
  function bukaModal(id) { $(id).classList.add('tampil'); }
  function tutupModal(id) { $(id).classList.remove('tampil'); }
  document.querySelectorAll('[data-tutup]').forEach(function (btn) {
    btn.addEventListener('click', function () { tutupModal(btn.dataset.tutup); });
  });

  btnRumus.addEventListener('click', function () { bukaModal('modal-rumus'); });

  btnPembahasan.addEventListener('click', function () {
    var isi = $('isi-pembahasan');
    if (!state.lastShot) {
      isi.innerHTML = '<p>Belum ada tembakan.</p>';
    } else {
      var ls = state.lastShot;
      isi.innerHTML =
        '<p><strong>Penembak:</strong> ' + (ls.penembak === 'biru' ? 'Biru' : 'Merah') + '</p>' +
        '<p><strong>v₀ = ' + ls.v0 + ' m/s, θ = ' + ls.sudut + '°, g = ' + ls.g + ' m/s²' + (ls.angin ? ', angin = ' + ls.angin.toFixed(1) + ' m/s²' : '') + '</strong></p>' +
        '<p>Tinggi maksimum: H = (v₀ sin θ)² / (2g) = ' + ls.tinggiMaks.toFixed(2) + ' m</p>' +
        '<p>Jarak jatuh dari meriam: ' + ls.jarakJatuh.toFixed(2) + ' m</p>' +
        '<p>Selisih ke benteng lawan: ' + ls.selisih.toFixed(2) + ' m -- ' + (ls.kena ? 'cukup dekat, KENA! 🎯' : 'masih meleset, coba ubah sudut/kecepatannya.') + '</p>';
    }
    bukaModal('modal-pembahasan');
  });

  btnJeda.addEventListener('click', function () { bukaModal('modal-jeda'); });

  // ---------- Audio (Web Audio API) ----------
  var audioCtx = null;
  function inisAudio() {
    if (!audioCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
  }
  function nada(frekuensi, durasi, tipe, volumeAwal) {
    if (state.muted || !audioCtx) return;
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = tipe || 'sine';
    osc.frequency.value = frekuensi;
    gain.gain.setValueAtTime(volumeAwal || 0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durasi);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + durasi);
  }
  function bunyiTembak() { nada(220, 0.18, 'sawtooth', 0.12); }
  function bunyiKena() { nada(660, 0.12, 'square', 0.15); setTimeout(function () { nada(880, 0.18, 'square', 0.12); }, 90); }
  function bunyiMeleset() { nada(140, 0.25, 'sine', 0.1); }
  function bunyiMenang() {
    [523, 659, 784, 1047].forEach(function (f, i) {
      setTimeout(function () { nada(f, 0.3, 'triangle', 0.15); }, i * 140);
    });
  }

  btnMute.addEventListener('click', function () {
    state.muted = !state.muted;
    btnMute.textContent = state.muted ? '🔇' : '🔊';
  });

  // ---------- Keyboard ----------
  window.addEventListener('keydown', function (e) {
    if (!layarMain.classList.contains('aktif')) return;
    if (document.querySelector('.overlay-modal.tampil')) return;
    var tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT') return;
    if (state.kesulitan === 'sulit') return; // slider terkunci

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      var s = parseFloat(sliderSudut.value) + (e.key === 'ArrowUp' ? 1 : -1);
      s = Math.max(0, Math.min(90, s));
      sliderSudut.value = s; inputSudut.value = s;
      gambarUlang();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      var v = parseFloat(sliderV0.value) + (e.key === 'ArrowRight' ? 1 : -1);
      v = Math.max(5, Math.min(50, v));
      sliderV0.value = v; inputV0.value = v;
      gambarUlang();
    } else if (e.key === ' ') {
      e.preventDefault();
      tembak();
    }
  });
})();
