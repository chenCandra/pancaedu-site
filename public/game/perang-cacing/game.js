/**
 * Perang Cacing -- game artileri giliran ber-gilir, hotseat 1 perangkat,
 * 2-8 pemain, terinspirasi Worms World Party. Lihat fisika.js (matematika
 * murni proyektil+karakter) dan medan.js (medan hancur berbasis canvas).
 *
 * Konvensi satuan (DISENGAJA beda, lihat fisika.js): proyektil bazoka/granat
 * dihitung di "meter" lalu dikonversi ke piksel lewat KG.pikselPerMeter
 * (supaya rumus F=posisiX/posisiY persis sama dengan Duel Meriam), sementara
 * gerak jalan/lompat karakter langsung di piksel (arcade feel, bukan konten
 * pedagogis).
 */
(function () {
  'use strict';

  var F = window.CacingFisika;
  var M = window.CacingMedan;
  var KG = window.KonfigGame;
  var KS = window.KonfigSenjata;
  var KP = window.KonfigPeta;
  var WARNA = window.WarnaPemain;
  var audio = new window.AudioCacing({ volumeUtama: 0.22 });

  var kanvas = document.getElementById('kanvas-game');
  var ctx = kanvas.getContext('2d');
  kanvas.width = KG.lebarKanvas;
  kanvas.height = KG.tinggiKanvas;

  var elBanner = document.getElementById('banner-hasil');
  var elGiliranLabel = document.getElementById('label-giliran');
  var elDaftarPemain = document.getElementById('daftar-pemain-hud');

  var state = {
    layarAktif: 'setup',
    jumlahPemain: 4,
    petaTerpilih: 'perbukitan',
    pemain: [],
    medan: null,
    giliranIndex: 0,
    modeKontrol: 'gerak',
    senjataTerpilih: 'bazoka',
    sedangAnimasi: false,
    proyektil: null,
    input: { kiri: false, kanan: false, lompatBaruDitekan: false },
    bidik: { sudutDerajat: 45, daya: 0, arah: 1, menekan: false, awalX: 0, awalY: 0, jarakTerakhir: 0 },
  };

  function clamp(v, a, b) { return F.clamp(v, a, b); }

  // ============ LAYAR (setup / ganti pemain / main / menang) ============

  function gantiLayar(id) {
    state.layarAktif = id;
    document.querySelectorAll('.layar').forEach(function (el) {
      el.classList.toggle('aktif', el.id === 'layar-' + id);
    });
  }

  // ============ SETUP ============

  var elChipJumlah = document.querySelectorAll('[data-grup="jumlah"] .opsi-btn');
  var elChipPeta = document.querySelectorAll('[data-grup="peta"] .opsi-btn');

  elChipJumlah.forEach(function (btn) {
    btn.addEventListener('click', function () {
      elChipJumlah.forEach(function (b) { b.classList.remove('aktif'); });
      btn.classList.add('aktif');
      state.jumlahPemain = parseInt(btn.dataset.nilai, 10);
    });
  });
  elChipPeta.forEach(function (btn) {
    btn.addEventListener('click', function () {
      elChipPeta.forEach(function (b) { b.classList.remove('aktif'); });
      btn.classList.add('aktif');
      state.petaTerpilih = btn.dataset.nilai;
    });
  });

  document.getElementById('btn-mulai').addEventListener('click', function () {
    audio.inisialisasi();
    mulaiPermainan();
  });

  function mulaiPermainan() {
    var rng = F.buatRngBerurut((Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0);
    var presetId = state.petaTerpilih === 'acak'
      ? KP[Math.floor(rng() * KP.length)].id
      : state.petaTerpilih;
    state.medan = M.buatMedan(presetId, rng, KG.lebarKanvas, KG.tinggiKanvas, F);

    state.pemain = [];
    for (var i = 0; i < state.jumlahPemain; i++) {
      var pos = carikanSpawnBebas(rng);
      state.pemain.push({
        nama: 'Pemain ' + (i + 1),
        warna: WARNA[i % WARNA.length],
        x: pos.x, y: pos.y, vx: 0, vy: 0, diTanah: true, menghadap: 1, jatuhMulaiY: null,
        radius: KG.radiusKarakter,
        nyawa: KG.nyawaAwal, nyawaMaks: KG.nyawaAwal, hidup: true,
        amunisi: { bazoka: Infinity, granat: KS.granat.amunisiAwal, dinamit: KS.dinamit.amunisiAwal, tendangan: Infinity },
      });
    }

    state.giliranIndex = -1;
    mulaiGiliranBerikutnya();
  }

  function carikanSpawnBebas(rng) {
    for (var coba = 0; coba < 12; coba++) {
      var pos = M.posisiSpawnAcak(state.medan, rng, KG.radiusKarakter);
      var bentrok = state.pemain.some(function (p) { return Math.abs(p.x - pos.x) < 55; });
      if (!bentrok) return pos;
    }
    return M.posisiSpawnAcak(state.medan, rng, KG.radiusKarakter);
  }

  // ============ GILIRAN / STATE MACHINE ============

  function pemainAktif() { return state.pemain[state.giliranIndex]; }

  function pemainHidupBerikutnya(dariIndex) {
    var n = state.pemain.length;
    for (var i = 1; i <= n; i++) {
      var idx = (dariIndex + i) % n;
      if (state.pemain[idx].hidup) return idx;
    }
    return -1;
  }

  function mulaiGiliranBerikutnya() {
    var idx = pemainHidupBerikutnya(state.giliranIndex);
    if (idx === -1) idx = 0;
    state.giliranIndex = idx;
    state.modeKontrol = 'gerak';
    state.senjataTerpilih = 'bazoka';
    state.input = { kiri: false, kanan: false, lompatBaruDitekan: false };
    state.bidik = { sudutDerajat: 45, daya: 0, arah: 1, menekan: false, awalX: 0, awalY: 0, jarakTerakhir: 0 };
    state.sedangAnimasi = false;
    state.proyektil = null;
    perbaruiUiAksi();
    perbaruiHud();
    audio.gantiGiliran();

    var p = pemainAktif();
    document.getElementById('teks-giliran').textContent = p.nama;
    document.getElementById('teks-giliran').style.color = p.warna;
    gantiLayar('gantiPemain');
  }

  function akhiriGiliran() {
    var hidup = state.pemain.filter(function (p) { return p.hidup; });
    if (hidup.length <= 1) {
      tampilkanLayarMenang(hidup[0] || null);
      return;
    }
    mulaiGiliranBerikutnya();
  }

  function tampilkanLayarMenang(pemenang) {
    var el = document.getElementById('teks-pemenang');
    if (pemenang) {
      el.textContent = '🏆 ' + pemenang.nama + ' Menang!';
      el.style.color = pemenang.warna;
      audio.menang();
    } else {
      el.textContent = 'Seri -- semua gugur bersamaan!';
      el.style.color = '';
    }
    gantiLayar('menang');
  }

  document.getElementById('btn-main-lagi').addEventListener('click', function () {
    gantiLayar('setup');
  });

  document.getElementById('btn-siap').addEventListener('click', function () {
    gantiLayar('main');
  });

  // ============ KERUSAKAN / ELIMINASI ============

  function terapkanKerusakan(k, dmg) {
    if (!k.hidup || dmg <= 0) return;
    k.nyawa = Math.max(0, k.nyawa - dmg);
    audio.kenaKarakter();
    if (k.nyawa <= 0) eliminasi(k);
  }

  function eliminasi(k) {
    if (!k.hidup) return;
    k.hidup = false;
    k.nyawa = 0;
  }

  // ============ SENJATA: eksekusi aksi ============

  var elTombolAksi = document.getElementById('btn-aksi');
  var elChipSenjata = document.querySelectorAll('.chip-senjata');

  elChipSenjata.forEach(function (chip) {
    chip.addEventListener('click', function () {
      if (state.sedangAnimasi || state.layarAktif !== 'main') return;
      var id = chip.dataset.senjata;
      var p = pemainAktif();
      if (p.amunisi[id] !== undefined && p.amunisi[id] <= 0) return;
      state.senjataTerpilih = id;
      state.modeKontrol = 'gerak';
      perbaruiUiAksi();
    });
  });

  elTombolAksi.addEventListener('click', function () {
    if (state.sedangAnimasi || state.layarAktif !== 'main') return;
    var senjata = KS[state.senjataTerpilih];
    if (senjata.jenis === 'proyektil' || senjata.jenis === 'memantul') {
      if (state.modeKontrol === 'gerak') {
        state.modeKontrol = 'bidik';
      } else {
        state.modeKontrol = 'gerak';
      }
      perbaruiUiAksi();
      return;
    }
    mulaiTembak();
  });

  document.getElementById('btn-lewati').addEventListener('click', function () {
    if (state.sedangAnimasi || state.layarAktif !== 'main') return;
    akhiriGiliran();
  });

  function mulaiTembak() {
    if (state.sedangAnimasi) return;
    var p = pemainAktif();
    var senjata = KS[state.senjataTerpilih];

    if (senjata.jenis === 'instan') { lakukanTendangan(p, senjata); return; }

    if (senjata.jenis === 'ditaruh') {
      if (p.amunisi.dinamit <= 0) return;
      p.amunisi.dinamit--;
      audio.pasangDinamit();
      state.sedangAnimasi = true;
      state.proyektil = {
        jenis: 'dinamit', senjata: senjata, pemilikIdx: state.giliranIndex,
        x: p.x, y: p.y - p.radius - 6, waktuSisa: senjata.fuse,
      };
      perbaruiUiAksi();
      return;
    }

    // bazoka / granat -- butuh bidikan
    if (senjata.id === 'granat' && p.amunisi.granat <= 0) return;
    if (p.amunisi[senjata.id] !== undefined && p.amunisi[senjata.id] !== Infinity) p.amunisi[senjata.id]--;

    var gPx = KG.gravitasiProyektil * KG.pikselPerMeter;
    var v0Px = state.bidik.daya * KG.pikselPerMeter;

    state.sedangAnimasi = true;
    state.modeKontrol = 'gerak';
    if (senjata.jenis === 'proyektil') {
      audio.tembakBazoka();
      state.proyektil = {
        jenis: 'proyektil', senjata: senjata, pemilikIdx: state.giliranIndex,
        x0: p.x, y0: p.y - p.radius - 4, t: 0,
        arah: state.bidik.arah, sudutDerajat: state.bidik.sudutDerajat, v0: v0Px, gPx: gPx,
        x: p.x, y: p.y - p.radius - 4,
      };
    } else {
      audio.lemparGranat();
      var sudutRad = (state.bidik.sudutDerajat * Math.PI) / 180;
      state.proyektil = {
        jenis: 'memantul', senjata: senjata, pemilikIdx: state.giliranIndex,
        x: p.x, y: p.y - p.radius - 4,
        vx: state.bidik.arah * v0Px * Math.cos(sudutRad),
        vy: -v0Px * Math.sin(sudutRad),
        gPx: gPx, waktuSisa: senjata.fuse,
      };
    }
    perbaruiUiAksi();
  }

  function lakukanTendangan(p, senjata) {
    state.sedangAnimasi = true;
    audio.tendang();
    perbaruiUiAksi();
    var target = null;
    var jarakTerdekat = Infinity;
    state.pemain.forEach(function (k) {
      if (k === p || !k.hidup) return;
      var dx = k.x - p.x;
      if (p.menghadap > 0 && dx < 0) return;
      if (p.menghadap < 0 && dx > 0) return;
      var jarak = Math.abs(dx) + Math.abs(k.y - p.y) * 0.3;
      if (Math.abs(dx) <= senjata.jangkauan && jarak < jarakTerdekat) { target = k; jarakTerdekat = jarak; }
    });
    if (target) {
      terapkanKerusakan(target, senjata.damage);
      target.vx += p.menghadap * senjata.knockback * 0.35;
      target.vy -= 90;
      target.diTanah = false;
      tampilkanBanner('🥾 ' + target.nama + ' tertendang!', 'kena');
    } else {
      tampilkanBanner('Tendangan meleset...', 'meleset');
    }
    setTimeout(selesaiAksi, 500);
  }

  function selesaiAksi() {
    state.sedangAnimasi = false;
    state.proyektil = null;
    setTimeout(akhiriGiliran, 650);
  }

  // ============ LEDAKAN ============

  function meledakDi(x, y, senjata, pemilikIdx) {
    if (senjata.radiusHancur > 0) M.lubangi(state.medan.ctx, state.medan, x, y, senjata.radiusHancur);
    audio.ledakan(senjata.radiusHancur >= 60);
    var kenaSiapa = [];
    state.pemain.forEach(function (k) {
      if (!k.hidup) return;
      var jarak = Math.hypot(x - k.x, y - k.y);
      var dmg = F.hitungKerusakan(jarak, senjata.radiusDamage, senjata.damage);
      if (dmg > 0) {
        terapkanKerusakan(k, dmg);
        var dx = k.x - x, dy = k.y - y, d = Math.hypot(dx, dy) || 1;
        var kekuatan = 240 * (1 - jarak / senjata.radiusDamage);
        k.vx += (dx / d) * kekuatan;
        k.vy -= 70 * (1 - jarak / senjata.radiusDamage);
        k.diTanah = false;
        kenaSiapa.push(k.nama + ' (-' + dmg + ')');
      }
    });
    tampilkanBanner(kenaSiapa.length ? '💥 ' + kenaSiapa.join(', ') : '💥 Meleset!', kenaSiapa.length ? 'kena' : 'meleset');
  }

  // ============ PROYEKTIL: tiap tick ============

  function tabrakanMedanAtauKarakter(pr) {
    if (M.apakahSolid(state.medan, pr.x, pr.y)) return true;
    for (var i = 0; i < state.pemain.length; i++) {
      if (i === pr.pemilikIdx) continue; // jangan tabrakan sama penembaknya sendiri saat baru lepas tembakan
      var k = state.pemain[i];
      if (!k.hidup) continue;
      if (Math.hypot(pr.x - k.x, pr.y - k.y) <= k.radius + 6) return true;
    }
    return false;
  }

  function langkahProyektil(dt) {
    var pr = state.proyektil;
    if (!pr) return;

    if (pr.jenis === 'dinamit') {
      pr.waktuSisa -= dt;
      if (pr.waktuSisa <= 0) {
        meledakDi(pr.x, pr.y, pr.senjata, pr.pemilikIdx);
        selesaiAksi();
      }
      return;
    }

    if (pr.jenis === 'proyektil') {
      pr.t += dt;
      var sudutRad = (pr.sudutDerajat * Math.PI) / 180;
      pr.x = pr.x0 + pr.arah * pr.v0 * Math.cos(sudutRad) * pr.t;
      pr.y = pr.y0 - (pr.v0 * Math.sin(sudutRad) * pr.t - 0.5 * pr.gPx * pr.t * pr.t);
      if (tabrakanMedanAtauKarakter(pr)) {
        meledakDi(pr.x, pr.y, pr.senjata, pr.pemilikIdx);
        selesaiAksi();
        return;
      }
      if (pr.x < -40 || pr.x > KG.lebarKanvas + 40 || pr.y > KG.tinggiKanvas + 100) {
        tampilkanBanner('Meleset keluar medan!', 'meleset');
        selesaiAksi();
      }
      return;
    }

    if (pr.jenis === 'memantul') {
      pr.waktuSisa -= dt;
      pr.vy += pr.gPx * dt;
      var xBaru = pr.x + pr.vx * dt;
      var yBaru = pr.y + pr.vy * dt;
      if (xBaru < 6 || xBaru > KG.lebarKanvas - 6) { pr.vx *= -0.7; xBaru = clamp(xBaru, 6, KG.lebarKanvas - 6); }
      if (M.apakahSolid(state.medan, xBaru, yBaru)) {
        pr.vy = -pr.vy * pr.senjata.restitusi;
        pr.vx *= pr.senjata.gesekanPantul;
        if (Math.abs(pr.vy) > 20) audio.pantulGranat();
      } else {
        pr.x = xBaru;
        pr.y = yBaru;
      }
      if (pr.waktuSisa <= 0 || pr.y > KG.tinggiKanvas + 100) {
        meledakDi(pr.x, pr.y, pr.senjata, pr.pemilikIdx);
        selesaiAksi();
      }
      return;
    }
  }

  // ============ FISIKA KARAKTER (hanya pemain aktif yang digerakkan input) ============

  function cbMedan() {
    return {
      apakahSolidDiSekitar: function (x, y, r) { return M.apakahSolidDiSekitar(state.medan, x, y, r); },
      cariTanahTerdekat: function (x, y, maxJarak) { return M.cariTanahTerdekat(state.medan, x, y, maxJarak); },
    };
  }

  function tickFisika(dt) {
    var cb = cbMedan();

    // Semua karakter kena gravitasi & bisa jatuh ke lubang bekas ledakan,
    // tapi HANYA pemain aktif yang digerakkan oleh input (standar hotseat
    // turn-based: karakter lain diam menunggu giliran).
    state.pemain.forEach(function (k, idx) {
      if (!k.hidup) return;
      var input = idx === state.giliranIndex && state.modeKontrol === 'gerak' && !state.sedangAnimasi
        ? state.input
        : { kiri: false, kanan: false, lompatBaruDitekan: false };
      var hasil = F.langkahFisikaKarakter(k, input, dt, cb, KG);
      if (hasil.kerusakanJatuh > 0) terapkanKerusakan(k, hasil.kerusakanJatuh);
      if (hasil.keluarBatas) eliminasi(k);
    });
    state.input.lompatBaruDitekan = false;

    if (state.sedangAnimasi) langkahProyektil(dt);

    // Cek kalau pemain aktif baru saja gugur di luar urutan penembakan (jatuh ke jurang saat jalan)
    if (!pemainAktif().hidup && !state.sedangAnimasi) {
      setTimeout(akhiriGiliran, 300);
      state.sedangAnimasi = true; // cegah dipanggil berulang sambil menunggu timeout
    }
  }

  // ============ INPUT GERAK (keyboard + tombol sentuh) ============

  function pasangTombolTahan(id, onTekan, onLepas) {
    var el = document.getElementById(id);
    el.addEventListener('pointerdown', function (e) { e.preventDefault(); onTekan(); try { el.setPointerCapture(e.pointerId); } catch (err) {} });
    el.addEventListener('pointerup', onLepas);
    el.addEventListener('pointercancel', onLepas);
    el.addEventListener('pointerleave', onLepas);
  }

  pasangTombolTahan('btn-kiri', function () { state.input.kiri = true; }, function () { state.input.kiri = false; });
  pasangTombolTahan('btn-kanan', function () { state.input.kanan = true; }, function () { state.input.kanan = false; });
  document.getElementById('btn-lompat').addEventListener('click', function () {
    if (state.modeKontrol === 'gerak' && !state.sedangAnimasi) { state.input.lompatBaruDitekan = true; audio.lompat(); }
  });

  var tombolTekan = {};
  window.addEventListener('keydown', function (e) {
    if (state.layarAktif !== 'main') return;
    tombolTekan[e.key] = true;
    if (state.modeKontrol === 'gerak' && !state.sedangAnimasi) {
      if (e.key === 'ArrowLeft') state.input.kiri = true;
      if (e.key === 'ArrowRight') state.input.kanan = true;
      if ((e.key === 'ArrowUp' || e.key === ' ') && !e.repeat) { state.input.lompatBaruDitekan = true; audio.lompat(); }
    } else if (state.modeKontrol === 'bidik' && !state.sedangAnimasi) {
      if (e.key === 'ArrowUp') state.bidik.sudutDerajat = clamp(state.bidik.sudutDerajat + 1, 1, 89);
      if (e.key === 'ArrowDown') state.bidik.sudutDerajat = clamp(state.bidik.sudutDerajat - 1, 1, 89);
      if (e.key === 'ArrowLeft') state.bidik.arah = -1;
      if (e.key === 'ArrowRight') state.bidik.arah = 1;
      if (e.key === ' ' && !e.repeat) { state.bidik._mulaiCas = performance.now(); }
    }
  });
  window.addEventListener('keyup', function (e) {
    tombolTekan[e.key] = false;
    if (e.key === 'ArrowLeft') state.input.kiri = false;
    if (e.key === 'ArrowRight') state.input.kanan = false;
    if (e.key === ' ' && state.modeKontrol === 'bidik' && state.bidik._mulaiCas) {
      var elapsed = clamp((performance.now() - state.bidik._mulaiCas) / 1200, 0, 1);
      state.bidik.daya = KG.v0MinBidik + elapsed * (KG.v0MaksBidik - KG.v0MinBidik);
      state.bidik._mulaiCas = null;
      if (elapsed > 0.04) mulaiTembak();
    }
  });

  // ============ INPUT BIDIK (drag mouse/sentuh langsung di kanvas) ============

  var penunjukBidikId = null;

  function posisiKanvasDariEvent(e) {
    var rect = kanvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * KG.lebarKanvas,
      y: ((e.clientY - rect.top) / rect.height) * KG.tinggiKanvas,
    };
  }

  kanvas.addEventListener('pointerdown', function (e) {
    if (state.modeKontrol !== 'bidik' || state.sedangAnimasi) return;
    var pos = posisiKanvasDariEvent(e);
    penunjukBidikId = e.pointerId;
    state.bidik.awalX = pos.x; state.bidik.awalY = pos.y;
    state.bidik.menekan = true;
    state.bidik.jarakTerakhir = 0; // cegah tap tanpa drag memicu tembakan pakai sisa data giliran lalu
    try { kanvas.setPointerCapture(penunjukBidikId); } catch (err) {}
  });
  kanvas.addEventListener('pointermove', function (e) {
    if (e.pointerId !== penunjukBidikId || !state.bidik.menekan) return;
    var pos = posisiKanvasDariEvent(e);
    var dx = state.bidik.awalX - pos.x;
    var dy = state.bidik.awalY - pos.y;
    var jarak = clamp(Math.hypot(dx, dy), 0, KG.jarakMaksDragBidik);
    state.bidik.sudutDerajat = clamp(Math.atan2(-dy, Math.abs(dx) || 0.0001) * (180 / Math.PI), 1, 89);
    state.bidik.arah = dx >= 0 ? 1 : -1;
    state.bidik.daya = KG.v0MinBidik + (jarak / KG.jarakMaksDragBidik) * (KG.v0MaksBidik - KG.v0MinBidik);
    state.bidik.jarakTerakhir = jarak;
  });
  function lepasBidik(e) {
    if (e.pointerId !== penunjukBidikId) return;
    state.bidik.menekan = false;
    penunjukBidikId = null;
    if (state.bidik.jarakTerakhir >= 12) mulaiTembak();
  }
  kanvas.addEventListener('pointerup', lepasBidik);
  kanvas.addEventListener('pointercancel', lepasBidik);

  // ============ UI: tombol aksi dinamis, chip senjata, HUD ============

  function perbaruiUiAksi() {
    var senjata = KS[state.senjataTerpilih];
    var p = pemainAktif();

    elChipSenjata.forEach(function (chip) {
      var id = chip.dataset.senjata;
      chip.classList.toggle('aktif', id === state.senjataTerpilih);
      var habis = p.amunisi[id] !== undefined && p.amunisi[id] <= 0;
      chip.classList.toggle('habis', habis);
      var elAmunisi = chip.querySelector('.chip-amunisi');
      if (elAmunisi) elAmunisi.textContent = p.amunisi[id] === Infinity ? '∞' : p.amunisi[id];
    });

    var blokGerak = document.getElementById('blok-kontrol-gerak');
    var blokBidik = document.getElementById('blok-kontrol-bidik');
    if (senjata.jenis === 'proyektil' || senjata.jenis === 'memantul') {
      if (state.modeKontrol === 'bidik') {
        elTombolAksi.textContent = '❌ Batal Bidik';
        blokGerak.style.display = 'none';
        blokBidik.style.display = 'flex';
      } else {
        elTombolAksi.textContent = '🎯 ' + senjata.nama + ': Mulai Bidik';
        blokGerak.style.display = 'flex';
        blokBidik.style.display = 'none';
      }
    } else if (senjata.jenis === 'ditaruh') {
      elTombolAksi.textContent = senjata.ikon + ' Pasang ' + senjata.nama;
      blokGerak.style.display = 'flex';
      blokBidik.style.display = 'none';
    } else {
      elTombolAksi.textContent = senjata.ikon + ' ' + senjata.nama + '!';
      blokGerak.style.display = 'flex';
      blokBidik.style.display = 'none';
    }
    elTombolAksi.disabled = state.sedangAnimasi;
  }

  function perbaruiHud() {
    elGiliranLabel.textContent = 'Giliran: ' + pemainAktif().nama;
    elGiliranLabel.style.color = pemainAktif().warna;

    elDaftarPemain.innerHTML = '';
    state.pemain.forEach(function (p, idx) {
      var el = document.createElement('div');
      el.className = 'kartu-hud-pemain' + (idx === state.giliranIndex ? ' giliran' : '') + (!p.hidup ? ' gugur' : '');
      el.style.setProperty('--warna-pemain', p.warna);
      var persenNyawa = Math.max(0, (p.nyawa / p.nyawaMaks) * 100);
      el.innerHTML =
        '<span class="titik-pemain"></span>' +
        '<span class="nama-hud">' + (p.hidup ? p.nama : '💀 ' + p.nama) + '</span>' +
        '<div class="bar-nyawa"><div class="isi-nyawa" style="width:' + persenNyawa + '%"></div></div>';
      elDaftarPemain.appendChild(el);
    });
  }

  var bannerTimeout = null;
  function tampilkanBanner(teks, kelas) {
    elBanner.textContent = teks;
    elBanner.className = 'banner-hasil tampil ' + (kelas || '');
    clearTimeout(bannerTimeout);
    bannerTimeout = setTimeout(function () { elBanner.classList.remove('tampil'); }, 1400);
  }

  document.getElementById('btn-mute').addEventListener('click', function (e) {
    var muted = audio.toggleMute();
    e.target.textContent = muted ? '🔇' : '🔊';
  });

  // ============ RENDER ============

  function gambarKarakter(p, aktif) {
    ctx.save();
    if (aktif) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius + 6, 0, Math.PI * 2);
      ctx.strokeStyle = '#fff59d';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.warna;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // mata (penanda arah hadap)
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(p.x + p.menghadap * 5, p.y - 3, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // bar nyawa kecil di atas kepala
    var lebarBar = p.radius * 2.2;
    var persen = Math.max(0, p.nyawa / p.nyawaMaks);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(p.x - lebarBar / 2, p.y - p.radius - 14, lebarBar, 5);
    ctx.fillStyle = persen > 0.5 ? '#16a34a' : persen > 0.2 ? '#f5b301' : '#db2f77';
    ctx.fillRect(p.x - lebarBar / 2, p.y - p.radius - 14, lebarBar * persen, 5);
    ctx.restore();
  }

  function gambarProyektil(pr) {
    if (pr.jenis === 'dinamit') {
      ctx.save();
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(pr.x - 6, pr.y - 8, 12, 16);
      ctx.fillStyle = '#facc15';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(Math.max(0, pr.waktuSisa).toFixed(1), pr.x, pr.y - 12);
      ctx.restore();
      return;
    }
    ctx.save();
    ctx.beginPath();
    ctx.arc(pr.x, pr.y, pr.jenis === 'memantul' ? 7 : 5, 0, Math.PI * 2);
    ctx.fillStyle = pr.jenis === 'memantul' ? '#166534' : '#f2760a';
    ctx.fill();
    ctx.restore();
  }

  function gambarPratinjauLintasan() {
    var p = pemainAktif();
    var senjata = KS[state.senjataTerpilih];
    var gPx = KG.gravitasiProyektil * KG.pikselPerMeter;
    var v0Px = state.bidik.daya * KG.pikselPerMeter;
    var sudutRad = (state.bidik.sudutDerajat * Math.PI) / 180;
    var x0 = p.x, y0 = p.y - p.radius - 4;

    ctx.save();
    ctx.setLineDash([5, 6]);
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (var i = 0; i <= 24; i++) {
      var t = i * 0.08;
      var x = x0 + state.bidik.arah * v0Px * Math.cos(sudutRad) * t;
      var y = y0 - (v0Px * Math.sin(sudutRad) * t - 0.5 * gPx * t * t);
      if (y > KG.tinggiKanvas + 20 || M.apakahSolid(state.medan, x, y)) break;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // garis ketapel dari karakter ke titik tarik
    ctx.strokeStyle = senjata.jenis === 'memantul' ? '#166534' : '#f2760a';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0 - state.bidik.arah * (state.bidik.jarakTerakhir || 0) * 0.6, y0 + (state.bidik.jarakTerakhir || 0) * 0.2);
    ctx.stroke();
    ctx.restore();
  }

  function gambar() {
    ctx.clearRect(0, 0, KG.lebarKanvas, KG.tinggiKanvas);
    if (!state.medan) return;
    ctx.drawImage(state.medan.kanvas, 0, 0);
    state.pemain.forEach(function (p, idx) {
      if (!p.hidup) return;
      gambarKarakter(p, idx === state.giliranIndex);
    });
    if (state.proyektil) gambarProyektil(state.proyektil);
    if (state.modeKontrol === 'bidik' && state.bidik.menekan) gambarPratinjauLintasan();
    perbaruiHud();
  }

  // ============ LOOP UTAMA (timestep tetap) ============

  var DT_TETAP = 1 / 60;
  var akumulator = 0;
  var waktuSebelumnya = null;

  function frameUtama(now) {
    if (state.layarAktif !== 'main') {
      waktuSebelumnya = null;
      requestAnimationFrame(frameUtama);
      return;
    }
    if (waktuSebelumnya == null) waktuSebelumnya = now;
    var delta = (now - waktuSebelumnya) / 1000;
    waktuSebelumnya = now;
    akumulator += Math.min(delta, 0.25);
    var langkah = 0;
    while (akumulator >= DT_TETAP && langkah < 5) {
      tickFisika(DT_TETAP);
      akumulator -= DT_TETAP;
      langkah++;
    }
    gambar();
    requestAnimationFrame(frameUtama);
  }
  requestAnimationFrame(frameUtama);
})();
