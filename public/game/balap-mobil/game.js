// Balap Mobil Fisika -- logika game. Vanilla JS polos (tanpa build),
// bergantung pada fisika.js (dimuat sebelum file ini) yang mengisi
// window.BalapFisika.
(function () {
  'use strict';
  var F = window.BalapFisika;
  var $ = function (id) { return document.getElementById(id); };

  var layarSetup = $('layar-setup');
  var layarMain = $('layar-main');
  var layarMenang = $('layar-menang');
  var btnMulai = $('btn-mulai');
  var btnMainLagi = $('btn-main-lagi');

  var skorBiruEl = $('skor-biru');
  var skorMerahEl = $('skor-merah');
  var infoStrip = $('info-strip');
  var kanvas = $('kanvas-game');
  var ctx = kanvas.getContext('2d');
  var bannerHasil = $('banner-hasil');

  var btnBalap = $('btn-balap');
  var btnRumus = $('btn-rumus');
  var btnPembahasan = $('btn-pembahasan');

  var hasilRonde = $('hasil-ronde');
  var hasilWaktuBiru = $('hasil-waktu-biru');
  var hasilWaktuMerah = $('hasil-waktu-merah');
  var teksPemenang = $('teks-pemenang');

  var state = {
    targetMenang: 3,
    gesekanAktif: false,
    aGesek: 0,
    jarak: 100,
    skor: { biru: 0, merah: 0 },
    modeMobil: { biru: 'glb', merah: 'glb' },
    statistik: {
      biru: { menang: 0, tercepat: null },
      merah: { menang: 0, tercepat: null },
    },
    sedangAnimasi: false,
    lastRound: null,
    pxPerMeter: 1,
  };

  // ---------- Layar ----------
  function gantiLayar(id) {
    [layarSetup, layarMain, layarMenang].forEach(function (l) { l.classList.remove('aktif'); });
    $(id).classList.add('aktif');
  }

  // ---------- Setup ----------
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
    state.targetMenang = parseInt(bacaOpsi('target'), 10);
    state.gesekanAktif = bacaOpsi('gesekan') === 'hidup';
    state.skor = { biru: 0, merah: 0 };
    state.statistik = {
      biru: { menang: 0, tercepat: null },
      merah: { menang: 0, tercepat: null },
    };
    perbaruiSkorUi();
    gantiLayar('layar-main');
    rondeBaru();
  });

  btnMainLagi.addEventListener('click', function () {
    gantiLayar('layar-setup');
  });

  // ---------- Mode GLB/GLBB per mobil ----------
  document.querySelectorAll('[data-mode-grup]').forEach(function (grup) {
    var mobil = grup.dataset.modeGrup;
    grup.querySelectorAll('.mode-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        grup.querySelectorAll('.mode-btn').forEach(function (b) { b.classList.remove('aktif'); });
        btn.classList.add('aktif');
        state.modeMobil[mobil] = btn.dataset.nilai;
        document.querySelector('[data-panel="' + mobil + '-glb"]').style.display = btn.dataset.nilai === 'glb' ? '' : 'none';
        document.querySelector('[data-panel="' + mobil + '-glbb"]').style.display = btn.dataset.nilai === 'glbb' ? '' : 'none';
      });
    });
  });

  // ---------- Slider <-> label ----------
  function pasangSlider(id, suffix, satuDesimal) {
    var el = $(id);
    var val = $(id + '-val');
    el.addEventListener('input', function () {
      var angka = satuDesimal ? parseFloat(el.value).toFixed(1) : el.value;
      val.textContent = angka + ' ' + suffix;
    });
  }
  pasangSlider('biru-v', 'm/s');
  pasangSlider('biru-v0', 'm/s');
  pasangSlider('biru-a', 'm/s²', true);
  pasangSlider('merah-v', 'm/s');
  pasangSlider('merah-v0', 'm/s');
  pasangSlider('merah-a', 'm/s²', true);

  // ---------- Ronde ----------
  function rondeBaru() {
    state.jarak = Math.round(80 + Math.random() * 70); // 80-150 m
    state.aGesek = state.gesekanAktif ? Math.round((0.5 + Math.random() * 2.5) * 10) / 10 : 0;
    hasilRonde.classList.remove('tampil');
    sembunyikanBanner();
    perbaruiInfoStrip();
    resizeKanvas();
  }

  function perbaruiInfoStrip() {
    var html = '<span>📏 Jarak Lintasan: ' + state.jarak + ' m</span>';
    if (state.gesekanAktif) html += '<span>🛞 Gesekan: ' + state.aGesek.toFixed(1) + ' m/s²</span>';
    html += '<span>🏆 Target: ' + state.targetMenang + ' Menang</span>';
    infoStrip.innerHTML = html;
  }

  function perbaruiSkorUi() {
    skorBiruEl.textContent = state.skor.biru;
    skorMerahEl.textContent = state.skor.merah;
  }

  // ---------- Kanvas ----------
  function lebarKanvasCss() { return kanvas.parentElement.clientWidth; }
  function tinggiKanvasCss() { return kanvas.parentElement.clientHeight; }

  function resizeKanvas() {
    var rect = kanvas.parentElement.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    kanvas.width = rect.width * dpr;
    kanvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    state.pxPerMeter = lebarKanvasCss() / (state.jarak + 20);
    gambarUlang(0, 0);
  }
  window.addEventListener('resize', resizeKanvas);

  function keXpx(xMeter) {
    return 10 * state.pxPerMeter + xMeter * state.pxPerMeter;
  }

  function gambarUlang(posBiru, posMerah) {
    posBiru = posBiru || 0;
    posMerah = posMerah || 0;
    var w = lebarKanvasCss(), h = tinggiKanvasCss();
    ctx.clearRect(0, 0, w, h);

    var laneBiruY = h * 0.35, laneMerahY = h * 0.72;

    // Garis tengah putus-putus
    ctx.strokeStyle = 'rgba(38,36,59,0.12)';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath(); ctx.moveTo(0, h * 0.53); ctx.lineTo(w, h * 0.53); ctx.stroke();
    ctx.setLineDash([]);

    // Garis finish
    var xFinish = keXpx(state.jarak);
    ctx.strokeStyle = '#26243b';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(xFinish, 8); ctx.lineTo(xFinish, h - 8); ctx.stroke();
    ctx.font = '16px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏁', xFinish, 20);

    gambarMobil(keXpx(posBiru), laneBiruY, '#1d6fe0');
    gambarMobil(keXpx(posMerah), laneMerahY, '#db2f77');
  }

  function gambarMobil(xp, yp, warna) {
    ctx.save();
    ctx.translate(xp, yp);
    ctx.fillStyle = warna;
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(-14, -8, 28, 16, 4);
      ctx.fill();
    } else {
      ctx.fillRect(-14, -8, 28, 16);
    }
    ctx.fillStyle = '#334155';
    ctx.beginPath(); ctx.arc(-8, 8, 4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(8, 8, 4, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  // ---------- Fisika per mobil ----------
  function bacaParameter(nama) {
    var mode = state.modeMobil[nama];
    if (mode === 'glb') {
      return { mode: 'glb', v: parseFloat($(nama + '-v').value) };
    }
    return { mode: 'glbb', v0: parseFloat($(nama + '-v0').value), a: parseFloat($(nama + '-a').value) };
  }

  function hitungWaktu(param, jarak, aGesek) {
    if (param.mode === 'glb') return F.waktuTempuhGLB(param.v, jarak);
    var aEff = F.percepatanEfektif(param.a, aGesek);
    return F.waktuTempuhGLBB(param.v0, aEff, jarak);
  }

  function hitungPosisi(param, t, aGesek) {
    if (param.mode === 'glb') return Math.max(0, F.jarakGLB(param.v, t));
    var aEff = F.percepatanEfektif(param.a, aGesek);
    return Math.max(0, F.jarakGLBB(param.v0, aEff, t));
  }

  // ---------- Balapan ----------
  btnBalap.addEventListener('click', balapan);

  function balapan() {
    if (state.sedangAnimasi) return;
    var biru = bacaParameter('biru');
    var merah = bacaParameter('merah');
    var tBiru = hitungWaktu(biru, state.jarak, state.aGesek);
    var tMerah = hitungWaktu(merah, state.jarak, state.aGesek);

    if (tBiru === null && tMerah === null) {
      tampilkanBanner('😅 Kedua mobil tidak sampai finish! Atur ulang parameternya.', '');
      return;
    }

    state.sedangAnimasi = true;
    btnBalap.disabled = true;
    hasilRonde.classList.remove('tampil');
    sembunyikanBanner();

    var tTampil = Math.max(tBiru || 0, tMerah || 0, 1);
    var durasiAnimasiMs = Math.min(9000, Math.max(2200, tTampil * 320));
    var mulai = null;

    function frame(now) {
      if (!mulai) mulai = now;
      var frac = Math.min(1, (now - mulai) / durasiAnimasiMs);
      var tFisika = frac * tTampil;
      var posBiru = Math.min(state.jarak, hitungPosisi(biru, tFisika, state.aGesek));
      var posMerah = Math.min(state.jarak, hitungPosisi(merah, tFisika, state.aGesek));
      gambarUlang(posBiru, posMerah);

      if (frac < 1) {
        requestAnimationFrame(frame);
      } else {
        selesaiBalapan(tBiru, tMerah, biru, merah);
      }
    }
    requestAnimationFrame(frame);
  }

  function selesaiBalapan(tBiru, tMerah, biru, merah) {
    state.sedangAnimasi = false;
    btnBalap.disabled = false;

    var pemenang = null;
    if (tBiru !== null && (tMerah === null || tBiru < tMerah)) pemenang = 'biru';
    else if (tMerah !== null && (tBiru === null || tMerah < tBiru)) pemenang = 'merah';

    hasilWaktuBiru.textContent = tBiru !== null ? tBiru.toFixed(2) + ' s' : 'Tidak sampai';
    hasilWaktuMerah.textContent = tMerah !== null ? tMerah.toFixed(2) + ' s' : 'Tidak sampai';
    hasilRonde.classList.add('tampil');

    state.lastRound = {
      biru: biru, merah: merah, tBiru: tBiru, tMerah: tMerah,
      jarak: state.jarak, aGesek: state.aGesek, pemenang: pemenang,
    };

    if (pemenang) {
      state.skor[pemenang]++;
      var tMenang = pemenang === 'biru' ? tBiru : tMerah;
      var statP = state.statistik[pemenang];
      statP.menang++;
      if (statP.tercepat === null || tMenang < statP.tercepat) statP.tercepat = tMenang;
      perbaruiSkorUi();
      tampilkanBanner((pemenang === 'biru' ? '🔵 Mobil Biru' : '🔴 Mobil Merah') + ' menang ronde ini!', pemenang);

      if (state.skor[pemenang] >= state.targetMenang) {
        setTimeout(function () { tampilkanLayarMenang(pemenang); }, 1300);
        return;
      }
    } else {
      tampilkanBanner('😅 Seri -- tidak ada yang sampai finish.', '');
    }

    setTimeout(function () { rondeBaru(); }, 1900);
  }

  function tampilkanBanner(teks, kelas) {
    bannerHasil.textContent = teks;
    bannerHasil.className = 'banner-hasil tampil';
    if (kelas === 'biru') bannerHasil.style.color = 'var(--biru)';
    else if (kelas === 'merah') bannerHasil.style.color = 'var(--pink)';
    else bannerHasil.style.color = 'var(--tinta)';
  }
  function sembunyikanBanner() {
    bannerHasil.className = 'banner-hasil';
  }

  // ---------- Layar pemenang ----------
  function tampilkanLayarMenang(pemenang) {
    gantiLayar('layar-menang');
    teksPemenang.textContent = (pemenang === 'biru' ? '🔵 Mobil Biru' : '🔴 Mobil Merah') + ' Menang!';
    ['biru', 'merah'].forEach(function (p) {
      var s = state.statistik[p];
      $('stat-' + p + '-menang').textContent = s.menang;
      $('stat-' + p + '-tercepat').textContent = s.tercepat !== null ? s.tercepat.toFixed(2) + ' s' : '-';
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
    var lr = state.lastRound;
    if (!lr) {
      isi.innerHTML = '<p>Belum ada balapan.</p>';
    } else {
      var teksParam = function (p) {
        if (p.mode === 'glb') return 'GLB, v = ' + p.v + ' m/s';
        var aEff = F.percepatanEfektif(p.a, lr.aGesek);
        var ket = lr.aGesek > 0 ? ' (percepatan efektif = ' + aEff.toFixed(1) + ' m/s² setelah gesekan)' : '';
        return 'GLBB, v₀ = ' + p.v0 + ' m/s, a = ' + p.a + ' m/s²' + ket;
      };
      isi.innerHTML =
        '<p><strong>Jarak lintasan:</strong> ' + lr.jarak + ' m' + (lr.aGesek > 0 ? ', gesekan ' + lr.aGesek.toFixed(1) + ' m/s²' : '') + '</p>' +
        '<p><strong>🔵 Biru:</strong> ' + teksParam(lr.biru) + ' → waktu tempuh ' + (lr.tBiru !== null ? lr.tBiru.toFixed(2) + ' s' : 'tidak sampai finish') + '</p>' +
        '<p><strong>🔴 Merah:</strong> ' + teksParam(lr.merah) + ' → waktu tempuh ' + (lr.tMerah !== null ? lr.tMerah.toFixed(2) + ' s' : 'tidak sampai finish') + '</p>' +
        '<p>' + (lr.pemenang ? ((lr.pemenang === 'biru' ? '🔵 Biru' : '🔴 Merah') + ' menang karena waktu tempuhnya lebih kecil.') : 'Ronde ini seri / tidak ada yang sampai finish.') + '</p>';
    }
    bukaModal('modal-pembahasan');
  });
})();
