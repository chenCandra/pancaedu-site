// Balap Mobil Fisika (real-time, disetir langsung) -- logika game.
// Vanilla JS polos (tanpa build), bergantung pada fisika.js (dimuat
// sebelum file ini) yang mengisi window.BalapFisika.
(function () {
  'use strict';
  var F = window.BalapFisika;
  var $ = function (id) { return document.getElementById(id); };

  var A_GAS = 6; // m/s^2, percepatan saat gas ditahan
  var A_GESEK_ALAMI = 2.5; // m/s^2, perlambatan saat gas dilepas
  var V_MAKS = 35; // m/s
  var PERSEN_TABRAKAN = 0.5; // kecepatan dipotong 50% kalau kena rintangan
  var LOOKAHEAD_M = 45; // jendela pandang di layar (meter)
  var JEDA_SETIR_MS = 150; // debounce ganti lajur
  var JUMLAH_LAJUR = 3;
  var JARAK_PRESET = { pendek: 250, sedang: 400, panjang: 600 };
  var BATAS_WAKTU_HEAT_MS = 60000;

  var layarSetup = $('layar-setup');
  var layarMain = $('layar-main');
  var layarMenang = $('layar-menang');
  var btnMulai = $('btn-mulai');
  var btnMainLagi = $('btn-main-lagi');

  var skorBiruEl = $('skor-biru');
  var skorMerahEl = $('skor-merah');
  var infoStrip = $('info-strip');

  var kanvasBiru = $('kanvas-biru');
  var ctxBiru = kanvasBiru.getContext('2d');
  var kanvasMerah = $('kanvas-merah');
  var ctxMerah = kanvasMerah.getContext('2d');

  var overlayBiru = $('overlay-biru');
  var overlayMerah = $('overlay-merah');
  var bannerBiru = $('banner-biru');
  var bannerMerah = $('banner-merah');

  var hudBiruV = $('hud-biru-v'), hudBiruS = $('hud-biru-s');
  var hudMerahV = $('hud-merah-v'), hudMerahS = $('hud-merah-s');

  var btnRumus = $('btn-rumus');
  var btnPembahasan = $('btn-pembahasan');
  var teksPemenang = $('teks-pemenang');

  var tombolDitekan = {};
  window.addEventListener('blur', function () { tombolDitekan = {}; });

  var state = {
    targetMenang: 2,
    jarakHeat: 400,
    skor: { biru: 0, merah: 0 },
    statistik: {
      biru: { menang: 0, tercepat: null },
      merah: { menang: 0, tercepat: null },
    },
    mobil: { biru: null, merah: null },
    rintangan: [],
    sedangBalapan: false,
    waktuMulai: 0,
    waktuTerakhirFrame: 0,
    lastHeat: null,
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
    state.jarakHeat = JARAK_PRESET[bacaOpsi('jarak')];
    state.skor = { biru: 0, merah: 0 };
    state.statistik = {
      biru: { menang: 0, tercepat: null },
      merah: { menang: 0, tercepat: null },
    };
    perbaruiSkorUi();
    perbaruiInfoStrip();
    gantiLayar('layar-main');
    mulaiHeat();
  });

  btnMainLagi.addEventListener('click', function () {
    state.sedangBalapan = false;
    gantiLayar('layar-setup');
  });

  function perbaruiInfoStrip() {
    infoStrip.innerHTML = '<span>📏 Jarak Heat: ' + state.jarakHeat + ' m</span><span>🏆 Target: ' + state.targetMenang + ' Menang</span>';
  }

  function perbaruiSkorUi() {
    skorBiruEl.textContent = state.skor.biru;
    skorMerahEl.textContent = state.skor.merah;
  }

  // ---------- Kontrol ----------
  window.addEventListener('keydown', function (e) {
    tombolDitekan[e.key] = true;
    if (!state.sedangBalapan) return;
    if (e.key === 'a' || e.key === 'A') setirMobil('biru', -1);
    else if (e.key === 'd' || e.key === 'D') setirMobil('biru', 1);
    else if (e.key === 'ArrowLeft') { setirMobil('merah', -1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { setirMobil('merah', 1); e.preventDefault(); }
    else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') e.preventDefault();
  });
  window.addEventListener('keyup', function (e) { tombolDitekan[e.key] = false; });

  function setirMobil(nama, arah) {
    var mobil = state.mobil[nama];
    if (!mobil) return;
    var now = performance.now();
    if (now - mobil.terakhirSetir < JEDA_SETIR_MS) return;
    var laneBaru = mobil.lane + arah;
    if (laneBaru < 0 || laneBaru >= JUMLAH_LAJUR) return;
    mobil.lane = laneBaru;
    mobil.terakhirSetir = now;
  }

  // ---------- Rintangan ----------
  function buatRintangan(jarak) {
    var daftar = [];
    var s = 40 + Math.random() * 15;
    while (s < jarak - 30) {
      daftar.push({ s: s, lane: Math.floor(Math.random() * JUMLAH_LAJUR) });
      s += 25 + Math.random() * 20;
    }
    return daftar;
  }

  function buatMobilBaru() {
    return {
      lane: 1, laneVisual: 1, v: 0, s: 0,
      terakhirSetir: 0, rintanganTerlewati: {}, kenaFlash: 0,
      selesai: false, waktuFinish: null,
    };
  }

  // ---------- Heat ----------
  function mulaiHeat() {
    state.rintangan = buatRintangan(state.jarakHeat);
    state.mobil.biru = buatMobilBaru();
    state.mobil.merah = buatMobilBaru();
    bannerBiru.classList.remove('tampil');
    bannerMerah.classList.remove('tampil');
    resizeKanvas();
    tampilkanCountdown(function () {
      state.sedangBalapan = true;
      state.waktuMulai = performance.now();
      state.waktuTerakhirFrame = performance.now();
      requestAnimationFrame(gameLoop);
    });
  }

  function tampilkanCountdown(selesai) {
    var n = 3;
    overlayBiru.hidden = false;
    overlayMerah.hidden = false;
    function tick() {
      if (n > 0) {
        overlayBiru.textContent = String(n);
        overlayMerah.textContent = String(n);
        n--;
        setTimeout(tick, 700);
      } else {
        overlayBiru.textContent = 'GO!';
        overlayMerah.textContent = 'GO!';
        setTimeout(function () {
          overlayBiru.hidden = true;
          overlayMerah.hidden = true;
          selesai();
        }, 450);
      }
    }
    tick();
  }

  function gameLoop(now) {
    if (!state.sedangBalapan) return;
    var dt = Math.min(0.05, (now - state.waktuTerakhirFrame) / 1000);
    state.waktuTerakhirFrame = now;

    ['biru', 'merah'].forEach(function (nama) {
      var mobil = state.mobil[nama];
      if (mobil.selesai) return;
      var gas = nama === 'biru' ? (tombolDitekan['w'] || tombolDitekan['W']) : tombolDitekan['ArrowUp'];
      var a = gas ? A_GAS : -A_GESEK_ALAMI;
      mobil.v = F.langkahKecepatan(mobil.v, a, dt, V_MAKS);
      mobil.s = F.langkahJarak(mobil.s, mobil.v, dt);
      mobil.laneVisual += (mobil.lane - mobil.laneVisual) * Math.min(1, dt * 10);

      state.rintangan.forEach(function (r, i) {
        var kunci = nama + '-' + i;
        if (mobil.rintanganTerlewati[kunci]) return;
        if (r.lane === mobil.lane && mobil.s >= r.s) {
          mobil.rintanganTerlewati[kunci] = true;
          if (mobil.s - r.s < 3) {
            mobil.v = F.terapkanTabrakan(mobil.v, PERSEN_TABRAKAN);
            mobil.kenaFlash = 0.3;
            kedipBanner(nama === 'biru' ? bannerBiru : bannerMerah, '💢 Kena Oli!');
          }
        }
      });
      if (mobil.kenaFlash > 0) mobil.kenaFlash -= dt;

      if (!mobil.selesai && mobil.s >= state.jarakHeat) {
        mobil.selesai = true;
        mobil.waktuFinish = (now - state.waktuMulai) / 1000;
      }
    });

    perbaruiHud();
    gambarTrack('biru');
    gambarTrack('merah');

    var keduanyaSelesai = state.mobil.biru.selesai && state.mobil.merah.selesai;
    var habisWaktu = now - state.waktuMulai > BATAS_WAKTU_HEAT_MS;
    if (keduanyaSelesai || habisWaktu) {
      selesaiHeat();
      return;
    }
    requestAnimationFrame(gameLoop);
  }

  function kedipBanner(el, teks) {
    el.textContent = teks;
    el.classList.add('tampil');
    setTimeout(function () { el.classList.remove('tampil'); }, 650);
  }

  function perbaruiHud() {
    var b = state.mobil.biru, m = state.mobil.merah;
    hudBiruV.textContent = b.v.toFixed(1) + ' m/s';
    hudBiruS.textContent = Math.min(state.jarakHeat, b.s).toFixed(0) + ' / ' + state.jarakHeat + ' m';
    hudMerahV.textContent = m.v.toFixed(1) + ' m/s';
    hudMerahS.textContent = Math.min(state.jarakHeat, m.s).toFixed(0) + ' / ' + state.jarakHeat + ' m';
  }

  function selesaiHeat() {
    state.sedangBalapan = false;
    var tBiru = state.mobil.biru.waktuFinish;
    var tMerah = state.mobil.merah.waktuFinish;
    var pemenang = null;
    if (tBiru !== null && (tMerah === null || tBiru < tMerah)) pemenang = 'biru';
    else if (tMerah !== null && (tBiru === null || tMerah < tBiru)) pemenang = 'merah';

    state.lastHeat = { tBiru: tBiru, tMerah: tMerah, jarak: state.jarakHeat, pemenang: pemenang };

    if (pemenang) {
      state.skor[pemenang]++;
      var waktuMenang = pemenang === 'biru' ? tBiru : tMerah;
      var statP = state.statistik[pemenang];
      statP.menang++;
      if (statP.tercepat === null || waktuMenang < statP.tercepat) statP.tercepat = waktuMenang;
      perbaruiSkorUi();
      kedipBannerFinish(pemenang === 'biru' ? bannerBiru : bannerMerah, '🏁 Finish Duluan!');

      if (state.skor[pemenang] >= state.targetMenang) {
        setTimeout(function () { tampilkanLayarMenang(pemenang); }, 1500);
        return;
      }
    } else {
      kedipBannerFinish(bannerBiru, '⏱️ Waktu Habis');
      kedipBannerFinish(bannerMerah, '⏱️ Waktu Habis');
    }
    setTimeout(mulaiHeat, 2200);
  }

  function kedipBannerFinish(el, teks) {
    el.textContent = teks;
    el.classList.add('tampil');
  }

  // ---------- Kanvas ----------
  function resizeKanvasSatu(canvas) {
    var ctx = canvas === kanvasBiru ? ctxBiru : ctxMerah;
    var rect = canvas.parentElement.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }
  function resizeKanvas() {
    resizeKanvasSatu(kanvasBiru);
    resizeKanvasSatu(kanvasMerah);
    if (state.mobil.biru) { gambarTrack('biru'); gambarTrack('merah'); }
  }
  window.addEventListener('resize', resizeKanvas);

  function gambarTrack(nama) {
    var canvas = nama === 'biru' ? kanvasBiru : kanvasMerah;
    var ctx = nama === 'biru' ? ctxBiru : ctxMerah;
    var mobil = state.mobil[nama];
    var w = canvas.parentElement.clientWidth, h = canvas.parentElement.clientHeight;
    var pxPerMeter = h / LOOKAHEAD_M;
    var laneWidth = w / JUMLAH_LAJUR;
    var carScreenY = h - 50;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#52525b';
    ctx.fillRect(0, 0, w, h);

    // Garis tepi jalan
    ctx.fillStyle = '#eab308';
    ctx.fillRect(0, 0, 4, h);
    ctx.fillRect(w - 4, 0, 4, h);

    // Garis lajur putus-putus, scroll sesuai jarak tempuh
    ctx.strokeStyle = 'rgba(255,255,255,0.45)';
    ctx.lineWidth = 3;
    var offset = (mobil.s * pxPerMeter) % 40;
    for (var lane = 1; lane < JUMLAH_LAJUR; lane++) {
      var x = lane * laneWidth;
      ctx.setLineDash([18, 18]);
      ctx.lineDashOffset = -offset;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    ctx.setLineDash([]);

    // Rintangan (tumpahan oli/kerikil)
    state.rintangan.forEach(function (r) {
      var jarakDepan = r.s - mobil.s;
      if (jarakDepan < -5 || jarakDepan > LOOKAHEAD_M) return;
      var y = carScreenY - jarakDepan * pxPerMeter;
      var x = r.lane * laneWidth + laneWidth / 2;
      ctx.fillStyle = 'rgba(66,42,16,0.8)';
      ctx.beginPath();
      ctx.ellipse(x, y, laneWidth * 0.3, 13, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(250,204,21,0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Garis finish
    var jarakFinishDepan = state.jarakHeat - mobil.s;
    if (jarakFinishDepan <= LOOKAHEAD_M && jarakFinishDepan >= -8) {
      var yFinish = carScreenY - jarakFinishDepan * pxPerMeter;
      var kotak = 6;
      for (var i = 0; i < kotak; i++) {
        ctx.fillStyle = i % 2 === 0 ? '#1f2937' : '#fff';
        ctx.fillRect((i * w) / kotak, yFinish - 4, w / kotak, 8);
      }
    }

    // Mobil sendiri
    var carX = mobil.laneVisual * laneWidth + laneWidth / 2;
    gambarMobilIkon(ctx, carX, carScreenY, nama === 'biru' ? '#1d6fe0' : '#db2f77', mobil.kenaFlash > 0);
  }

  function gambarMobilIkon(ctx, x, y, warna, flash) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = flash ? '#fde68a' : warna;
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(-13, -20, 26, 40, 6);
      ctx.fill();
    } else {
      ctx.fillRect(-13, -20, 26, 40);
    }
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.fillRect(-9, -14, 18, 12);
    ctx.restore();
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
    var lh = state.lastHeat;
    if (!lh) {
      isi.innerHTML = '<p>Belum ada balapan.</p>';
    } else {
      var waktuIdeal = F.waktuIdealOptimal(A_GAS, V_MAKS, lh.jarak).toFixed(2);
      isi.innerHTML =
        '<p><strong>Jarak heat:</strong> ' + lh.jarak + ' m</p>' +
        '<p><strong>🔵 Biru:</strong> ' + (lh.tBiru !== null ? lh.tBiru.toFixed(2) + ' s' : 'tidak selesai dalam batas waktu') + '</p>' +
        '<p><strong>🔴 Merah:</strong> ' + (lh.tMerah !== null ? lh.tMerah.toFixed(2) + ' s' : 'tidak selesai dalam batas waktu') + '</p>' +
        '<p><strong>Waktu ideal teoretis</strong> (gas penuh tanpa kena rintangan sama sekali): ' + waktuIdeal + ' s. Makin dekat waktumu ke angka ini, makin efisien caramu menyetir!</p>' +
        '<p>' + (lh.pemenang ? ((lh.pemenang === 'biru' ? '🔵 Biru' : '🔴 Merah') + ' menang karena waktunya lebih kecil.') : 'Heat ini tidak ada yang selesai dalam batas waktu -- coba lebih sering menggas.') + '</p>';
    }
    bukaModal('modal-pembahasan');
  });
})();
