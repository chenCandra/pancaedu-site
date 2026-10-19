// Serbuan Antariksa -- game arcade tembak-menembak. Vanilla JS polos
// (tanpa build), bergantung pada config.js (window.KonfigGame) dan
// audio.js (window.AudioGame) yang dimuat sebelum file ini.
(function () {
  'use strict';

  var K = window.KonfigGame;
  var $ = function (id) { return document.getElementById(id); };

  var KUNCI_SKOR = 'serbuan-antariksa:skor-tertinggi';
  function bacaSkorTertinggi() {
    try { return parseInt(localStorage.getItem(KUNCI_SKOR), 10) || 0; } catch (e) { return 0; }
  }
  function simpanSkorTertinggi(skor) {
    try { localStorage.setItem(KUNCI_SKOR, String(skor)); } catch (e) { /* abaikan */ }
  }

  // ---------- DOM ----------
  var layarMenu = $('layar-menu');
  var layarMain = $('layar-main');
  var btnMulai = $('btn-mulai');
  var skorTertinggiMenuEl = $('skor-tertinggi-menu');
  var caraMainSentuh = $('cara-main-sentuh');
  var caraMainKeyboard = $('cara-main-keyboard');

  var kanvasWrap = $('kanvas-wrap');
  var kanvas = $('kanvas-game');
  var ctx = kanvas.getContext('2d');

  var hudNyawa = $('hud-nyawa');
  var hudSkor = $('hud-skor');
  var hudGelombang = $('hud-gelombang');

  var btnJeda = $('btn-jeda');
  var overlayJeda = $('overlay-jeda');
  var btnLanjut = $('btn-lanjut');
  var btnMuteJeda = $('btn-mute-jeda');

  var overlayGameOver = $('overlay-gameover');
  var skorAkhirEl = $('skor-akhir');
  var skorTertinggiBaruEl = $('skor-tertinggi-baru');
  var skorTertinggiLamaEl = $('skor-tertinggi-lama');
  var skorTertinggiGameoverEl = $('skor-tertinggi-gameover');
  var btnMainLagi = $('btn-main-lagi');

  var joystickArea = $('joystick-area');
  var joystickKnob = $('joystick-knob');
  var btnTembakSentuh = $('btn-tembak-sentuh');

  var audio = new window.AudioGame(K);

  // ---------- Deteksi perangkat sentuh ----------
  var punyaSentuh = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  if (punyaSentuh) {
    document.body.classList.add('punya-sentuh');
    caraMainSentuh.hidden = false;
  } else {
    caraMainKeyboard.hidden = false;
  }

  // ---------- State global ----------
  var dunia = { lebar: 0, tinggi: 0 };
  var state = {
    layar: 'menu', // menu | main | jeda | gameover
    waktuSebelumnya: 0,
    waktuBerjalan: 0,
    skor: 0,
    spawnTimer: 0,
    spawnInterval: K.musuh.spawnIntervalAwal,
    getarT: 0,
    rafId: null,
  };

  var pemain = {
    x: 0, y: 0, radius: K.pemain.radiusTabrakan,
    nyawa: K.pemain.nyawaAwal,
    kebalT: 0, cooldownT: 0,
    tembakanGandaT: 0, perisaiT: 0,
  };

  // ---------- Object pools ----------
  function buatPool(ukuran, pabrik) {
    var arr = [];
    for (var i = 0; i < ukuran; i++) arr.push(pabrik());
    return arr;
  }
  function ambilSlot(pool) {
    for (var i = 0; i < pool.length; i++) {
      if (!pool[i].aktif) return pool[i];
    }
    return null; // pool penuh -- lewati, jangan sampai bikin array tak terbatas
  }

  var peluruPemain = buatPool(K.peluru.maksimalPemain, function () {
    return { aktif: false, x: 0, y: 0, vy: 0, radius: 4 };
  });
  var peluruMusuh = buatPool(K.peluru.maksimalMusuh, function () {
    return { aktif: false, x: 0, y: 0, vx: 0, vy: 0, radius: 4 };
  });
  var musuhList = buatPool(K.musuhMaksimal, function () {
    return { aktif: false, jenis: 'pesawat', x: 0, y: 0, vx: 0, vy: 0, nyawa: 1, nyawaMaks: 1, radius: 14, warna: '#fff', kilatT: 0, cooldownT: 0 };
  });
  var partikelList = buatPool(K.partikel.maksimal, function () {
    return { aktif: false, x: 0, y: 0, vx: 0, vy: 0, hidup: 0, hidupMaks: 1, warna: '#fff', ukuran: 2 };
  });
  var powerUpList = buatPool(6, function () {
    return { aktif: false, x: 0, y: 0, jenis: 'tembakanGanda' };
  });

  var bintangList = []; // dekor latar, dibuat ulang tiap resize

  // ---------- Layar ----------
  function gantiLayar(id) {
    [layarMenu, layarMain].forEach(function (l) { l.classList.remove('aktif'); });
    $(id).classList.add('aktif');
  }

  skorTertinggiMenuEl.textContent = bacaSkorTertinggi();

  btnMulai.addEventListener('click', function () {
    audio.inisialisasi();
    gantiLayar('layar-main');
    mulaiPermainan();
  });

  btnMainLagi.addEventListener('click', function () {
    overlayGameOver.classList.remove('tampil');
    mulaiPermainan();
  });

  // ---------- Mulai permainan ----------
  function mulaiPermainan() {
    state.layar = 'main';
    state.skor = 0;
    state.waktuBerjalan = 0;
    state.spawnTimer = 0;
    state.spawnInterval = K.musuh.spawnIntervalAwal;
    pemain.nyawa = K.pemain.nyawaAwal;
    pemain.kebalT = 0;
    pemain.cooldownT = 0;
    pemain.tembakanGandaT = 0;
    pemain.perisaiT = 0;

    [peluruPemain, peluruMusuh, musuhList, partikelList, powerUpList].forEach(function (pool) {
      pool.forEach(function (o) { o.aktif = false; });
    });

    resizeKanvas();
    pemain.x = dunia.lebar / 2;
    pemain.y = dunia.tinggi - 70;

    perbaruiHud();
    overlayGameOver.classList.remove('tampil');
    overlayJeda.classList.remove('tampil');
    audio.mulaiMusik();

    state.waktuSebelumnya = performance.now();
    if (state.rafId) cancelAnimationFrame(state.rafId);
    state.rafId = requestAnimationFrame(loop);
  }

  // ---------- Kanvas & resize ----------
  function resizeKanvas() {
    var rect = kanvasWrap.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    kanvas.width = rect.width * dpr;
    kanvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    dunia.lebar = rect.width;
    dunia.tinggi = rect.height;
    pemain.x = Math.min(pemain.x || dunia.lebar / 2, dunia.lebar - pemain.radius);
    pemain.y = Math.min(pemain.y || dunia.tinggi - 70, dunia.tinggi - pemain.radius);
    buatBintang();
  }
  window.addEventListener('resize', resizeKanvas);

  function buatBintang() {
    bintangList = [];
    var jumlah = Math.round((dunia.lebar * dunia.tinggi) / 7000);
    for (var i = 0; i < jumlah; i++) {
      bintangList.push({
        x: Math.random() * dunia.lebar,
        y: Math.random() * dunia.tinggi,
        r: Math.random() * 1.6 + 0.4,
        kecepatan: Math.random() * 30 + 15,
      });
    }
  }

  // ---------- Input keyboard ----------
  var tombol = {};
  window.addEventListener('keydown', function (e) {
    tombol[e.key.toLowerCase()] = true;
    if (state.layar === 'main' && [' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].indexOf(e.key.toLowerCase()) !== -1) {
      e.preventDefault();
    }
    if (e.key === 'Escape' && state.layar === 'main') togglePause();
  });
  window.addEventListener('keyup', function (e) { tombol[e.key.toLowerCase()] = false; });
  window.addEventListener('blur', function () { tombol = {}; sentuh.aktif = false; sentuhTembak = false; });

  // ---------- Input sentuh (joystick + tombol tembak), lewat Pointer Events ---------
  var sentuh = { aktif: false, dx: 0, dy: 0 };
  var sentuhTembak = false;
  var joystickPointerId = null;
  var JOY_RADIUS = 46;

  joystickArea.addEventListener('pointerdown', function (e) {
    joystickPointerId = e.pointerId;
    sentuh.aktif = true;
    joystickArea.setPointerCapture(e.pointerId);
    perbaruiJoystick(e);
  });
  joystickArea.addEventListener('pointermove', function (e) {
    if (e.pointerId !== joystickPointerId) return;
    perbaruiJoystick(e);
  });
  function lepasJoystick(e) {
    if (e.pointerId !== joystickPointerId) return;
    joystickPointerId = null;
    sentuh.aktif = false;
    sentuh.dx = 0; sentuh.dy = 0;
    joystickKnob.style.transform = 'translate(0px, 0px)';
  }
  joystickArea.addEventListener('pointerup', lepasJoystick);
  joystickArea.addEventListener('pointercancel', lepasJoystick);

  function perbaruiJoystick(e) {
    var rect = joystickArea.getBoundingClientRect();
    var cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
    var dx = e.clientX - cx, dy = e.clientY - cy;
    var jarak = Math.min(JOY_RADIUS, Math.hypot(dx, dy));
    var sudut = Math.atan2(dy, dx);
    var kx = Math.cos(sudut) * jarak, ky = Math.sin(sudut) * jarak;
    joystickKnob.style.transform = 'translate(' + kx + 'px, ' + ky + 'px)';
    sentuh.dx = kx / JOY_RADIUS;
    sentuh.dy = ky / JOY_RADIUS;
  }

  btnTembakSentuh.addEventListener('pointerdown', function (e) { sentuhTembak = true; btnTembakSentuh.setPointerCapture(e.pointerId); });
  btnTembakSentuh.addEventListener('pointerup', function () { sentuhTembak = false; });
  btnTembakSentuh.addEventListener('pointercancel', function () { sentuhTembak = false; });

  // ---------- Jeda ----------
  function togglePause() {
    if (state.layar === 'main') {
      state.layar = 'jeda';
      overlayJeda.classList.add('tampil');
      audio.hentikanMusik();
    } else if (state.layar === 'jeda') {
      state.layar = 'main';
      overlayJeda.classList.remove('tampil');
      state.waktuSebelumnya = performance.now();
      audio.mulaiMusik();
    }
  }
  btnJeda.addEventListener('click', togglePause);
  btnLanjut.addEventListener('click', togglePause);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden && state.layar === 'main') togglePause();
  });

  function perbaruiTeksMute() {
    btnMuteJeda.textContent = audio.muted ? '🔇 Suara Mati' : '🔊 Suara Hidup';
  }
  btnMuteJeda.addEventListener('click', function () {
    audio.toggleMute();
    perbaruiTeksMute();
  });
  perbaruiTeksMute();

  // ---------- Spawn musuh & power-up ----------
  function spawnMusuh() {
    var slot = ambilSlot(musuhList);
    if (!slot) return;
    var peluangMeteor = Math.min(0.55, 0.15 + state.waktuBerjalan * 0.01);
    var jenisKey = Math.random() < peluangMeteor ? 'meteor' : 'pesawat';
    var cfg = K.musuh.jenis[jenisKey];
    var kecepatanTambahan = state.waktuBerjalan * K.musuh.kecepatanNaikPerDetik;

    slot.aktif = true;
    slot.jenis = jenisKey;
    slot.radius = cfg.radius;
    slot.x = K.musuh.jarakAmanDariTepi + Math.random() * (dunia.lebar - K.musuh.jarakAmanDariTepi * 2);
    slot.y = -slot.radius - 10;
    slot.vx = (Math.random() - 0.5) * 40;
    slot.vy = cfg.kecepatanDasar + kecepatanTambahan;
    slot.nyawa = cfg.nyawa;
    slot.nyawaMaks = cfg.nyawa;
    slot.warna = cfg.warna;
    slot.kilatT = 0;
    slot.cooldownT = Math.random() * 0.6;
  }

  function spawnPowerUp(x, y) {
    if (Math.random() > K.powerUp.peluangMuncul) return;
    var slot = ambilSlot(powerUpList);
    if (!slot) return;
    var daftar = K.powerUp.jenis;
    slot.aktif = true;
    slot.x = x; slot.y = y;
    slot.jenis = daftar[Math.floor(Math.random() * daftar.length)];
  }

  function spawnPartikel(x, y, warna, jumlah) {
    for (var i = 0; i < jumlah; i++) {
      var slot = ambilSlot(partikelList);
      if (!slot) return;
      var sudut = Math.random() * Math.PI * 2;
      var kecepatan = Math.random() * 160 + 40;
      slot.aktif = true;
      slot.x = x; slot.y = y;
      slot.vx = Math.cos(sudut) * kecepatan;
      slot.vy = Math.sin(sudut) * kecepatan;
      slot.hidupMaks = Math.random() * 0.4 + 0.3;
      slot.hidup = slot.hidupMaks;
      slot.warna = warna;
      slot.ukuran = Math.random() * 2.5 + 1.5;
    }
  }

  function tembakPeluruPemain(offsetX) {
    var slot = ambilSlot(peluruPemain);
    if (!slot) return;
    slot.aktif = true;
    slot.x = pemain.x + offsetX;
    slot.y = pemain.y - pemain.radius;
    slot.vy = -K.pemain.kecepatanPeluru;
    slot.radius = 4;
  }

  function tembakPeluruMusuh(musuh) {
    var slot = ambilSlot(peluruMusuh);
    if (!slot) return;
    var dx = pemain.x - musuh.x, dy = pemain.y - musuh.y;
    var jarak = Math.hypot(dx, dy) || 1;
    slot.aktif = true;
    slot.x = musuh.x; slot.y = musuh.y;
    slot.vx = (dx / jarak) * K.musuh.kecepatanPeluruMusuh;
    slot.vy = (dy / jarak) * K.musuh.kecepatanPeluruMusuh;
    slot.radius = 4;
    audio.tembakMusuh();
  }

  // ---------- Loop utama ----------
  function loop(now) {
    state.rafId = requestAnimationFrame(loop);
    if (state.layar !== 'main') { state.waktuSebelumnya = now; return; }
    var dt = Math.min(0.05, (now - state.waktuSebelumnya) / 1000);
    state.waktuSebelumnya = now;
    perbarui(dt);
    gambar();
  }

  function perbarui(dt) {
    state.waktuBerjalan += dt;

    // Gerak pemain
    var dx = 0, dy = 0;
    if (tombol['arrowleft'] || tombol['a']) dx -= 1;
    if (tombol['arrowright'] || tombol['d']) dx += 1;
    if (tombol['arrowup'] || tombol['w']) dy -= 1;
    if (tombol['arrowdown'] || tombol['s']) dy += 1;
    if (sentuh.aktif) { dx = sentuh.dx; dy = sentuh.dy; }
    var magnitudo = Math.hypot(dx, dy);
    if (magnitudo > 1) { dx /= magnitudo; dy /= magnitudo; }
    pemain.x += dx * K.pemain.kecepatan * dt;
    pemain.y += dy * K.pemain.kecepatan * dt;
    pemain.x = Math.max(pemain.radius, Math.min(dunia.lebar - pemain.radius, pemain.x));
    pemain.y = Math.max(pemain.radius, Math.min(dunia.tinggi - pemain.radius, pemain.y));

    // Tembak
    pemain.cooldownT -= dt;
    var tembakDitekan = tombol[' '] || sentuhTembak;
    if (tembakDitekan && pemain.cooldownT <= 0) {
      if (pemain.tembakanGandaT > 0) { tembakPeluruPemain(-10); tembakPeluruPemain(10); }
      else tembakPeluruPemain(0);
      audio.tembak();
      pemain.cooldownT = K.pemain.cooldownTembak;
    }
    if (pemain.kebalT > 0) pemain.kebalT -= dt;
    if (pemain.tembakanGandaT > 0) pemain.tembakanGandaT -= dt;
    if (pemain.perisaiT > 0) pemain.perisaiT -= dt;

    // Spawn musuh (interval makin pendek seiring waktu)
    state.spawnInterval = Math.max(K.musuh.spawnIntervalMin, K.musuh.spawnIntervalAwal - state.waktuBerjalan * K.musuh.percepatanSpawnPerDetik);
    state.spawnTimer -= dt;
    if (state.spawnTimer <= 0) {
      spawnMusuh();
      state.spawnTimer = state.spawnInterval;
    }

    // Update peluru pemain
    peluruPemain.forEach(function (p) {
      if (!p.aktif) return;
      p.y += p.vy * dt;
      if (p.y < -20) p.aktif = false;
    });

    // Update musuh
    musuhList.forEach(function (m) {
      if (!m.aktif) return;
      m.x += m.vx * dt;
      m.y += m.vy * dt;
      if (m.x < m.radius || m.x > dunia.lebar - m.radius) m.vx *= -1;
      if (m.kilatT > 0) m.kilatT -= dt;
      if (m.y > dunia.tinggi + 40) { m.aktif = false; return; }

      m.cooldownT -= dt;
      if (m.cooldownT <= 0 && m.y > 0 && m.y < dunia.tinggi * 0.85) {
        if (Math.random() < K.musuh.peluangTembakPerDetik * dt * 12) {
          tembakPeluruMusuh(m);
          m.cooldownT = 0.5 + Math.random() * 0.8;
        }
      }
    });

    // Update peluru musuh
    peluruMusuh.forEach(function (p) {
      if (!p.aktif) return;
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.y < -20 || p.y > dunia.tinggi + 20 || p.x < -20 || p.x > dunia.lebar + 20) p.aktif = false;
    });

    // Update partikel
    partikelList.forEach(function (pt) {
      if (!pt.aktif) return;
      pt.x += pt.vx * dt; pt.y += pt.vy * dt;
      pt.vx *= 0.96; pt.vy *= 0.96;
      pt.hidup -= dt;
      if (pt.hidup <= 0) pt.aktif = false;
    });

    // Update power-up
    powerUpList.forEach(function (pu) {
      if (!pu.aktif) return;
      pu.y += K.powerUp.kecepatanJatuh * dt;
      if (pu.y > dunia.tinggi + 20) pu.aktif = false;
    });

    tabrakan();

    if (state.getarT > 0) state.getarT -= dt;

    if (pemain.nyawa <= 0) akhiriPermainan();

    perbaruiHud();
  }

  function jarakKuadrat(ax, ay, bx, by) {
    var dx = ax - bx, dy = ay - by;
    return dx * dx + dy * dy;
  }

  function tabrakan() {
    // Peluru pemain vs musuh
    peluruPemain.forEach(function (p) {
      if (!p.aktif) return;
      musuhList.forEach(function (m) {
        if (!m.aktif || !p.aktif) return;
        var batas = (p.radius + m.radius) * (p.radius + m.radius);
        if (jarakKuadrat(p.x, p.y, m.x, m.y) <= batas) {
          p.aktif = false;
          m.nyawa -= 1;
          m.kilatT = K.layar.kilatDurasi;
          spawnPartikel(p.x, p.y, '#facc15', K.partikel.jumlahLedakanKecil / 2);
          if (m.nyawa <= 0) {
            m.aktif = false;
            state.skor += K.musuh.jenis[m.jenis].skor;
            var besar = m.jenis === 'meteor';
            spawnPartikel(m.x, m.y, m.warna, besar ? K.partikel.jumlahLedakanBesar : K.partikel.jumlahLedakanKecil);
            if (besar) audio.pecahMeteorBesar(); else audio.kenaMusuh();
            spawnPowerUp(m.x, m.y);
          } else {
            audio.kenaMusuh();
          }
        }
      });
    });

    if (pemain.kebalT > 0) return; // lagi kebal, lewati sisa cek tabrakan ke pemain

    // Peluru musuh vs pemain
    peluruMusuh.forEach(function (p) {
      if (!p.aktif) return;
      var batas = (p.radius + pemain.radius) * (p.radius + pemain.radius);
      if (jarakKuadrat(p.x, p.y, pemain.x, pemain.y) <= batas) {
        p.aktif = false;
        kenaiPemain();
      }
    });

    // Musuh vs pemain (tabrakan langsung)
    musuhList.forEach(function (m) {
      if (!m.aktif) return;
      var batas = (m.radius + pemain.radius) * (m.radius + pemain.radius);
      if (jarakKuadrat(m.x, m.y, pemain.x, pemain.y) <= batas) {
        m.aktif = false;
        spawnPartikel(m.x, m.y, m.warna, K.partikel.jumlahLedakanKecil);
        kenaiPemain();
      }
    });

    // Power-up vs pemain
    powerUpList.forEach(function (pu) {
      if (!pu.aktif) return;
      var batas = (14 + pemain.radius) * (14 + pemain.radius);
      if (jarakKuadrat(pu.x, pu.y, pemain.x, pemain.y) <= batas) {
        pu.aktif = false;
        ambilPowerUp(pu.jenis);
      }
    });
  }

  function ambilPowerUp(jenis) {
    audio.ambilPowerUp();
    if (jenis === 'tembakanGanda') pemain.tembakanGandaT = K.powerUp.durasiEfek;
    else if (jenis === 'perisai') pemain.perisaiT = K.powerUp.durasiEfek;
    else if (jenis === 'nyawaTambahan') pemain.nyawa = Math.min(K.pemain.nyawaMaksimal, pemain.nyawa + 1);
  }

  function kenaiPemain() {
    if (pemain.perisaiT > 0) {
      pemain.perisaiT = 0;
      pemain.kebalT = 0.4;
      audio.kenaPemain();
      return;
    }
    pemain.nyawa -= 1;
    pemain.kebalT = K.pemain.kedipKebalTabrakan;
    state.getarT = K.layar.getarDurasi;
    audio.kenaPemain();
    spawnPartikel(pemain.x, pemain.y, '#60a5fa', K.partikel.jumlahLedakanKecil);
  }

  function akhiriPermainan() {
    state.layar = 'gameover';
    audio.hentikanMusik();
    audio.gameOver();
    var tertinggi = bacaSkorTertinggi();
    var rekorBaru = state.skor > tertinggi;
    if (rekorBaru) { simpanSkorTertinggi(state.skor); tertinggi = state.skor; }
    skorAkhirEl.textContent = state.skor;
    skorTertinggiBaruEl.hidden = !rekorBaru;
    skorTertinggiLamaEl.hidden = rekorBaru;
    skorTertinggiGameoverEl.textContent = tertinggi;
    skorTertinggiMenuEl.textContent = tertinggi;
    overlayGameOver.classList.add('tampil');
  }

  // ---------- HUD ----------
  function perbaruiHud() {
    hudNyawa.textContent = '❤️'.repeat(Math.max(0, pemain.nyawa));
    hudSkor.textContent = 'Skor: ' + state.skor;
    var gelombang = 1 + Math.floor(state.skor / K.skor.kelipatanGelombang);
    hudGelombang.textContent = 'Gelombang ' + gelombang;
  }

  // ---------- Render ----------
  function gambar() {
    var w = dunia.lebar, h = dunia.tinggi;
    ctx.save();
    if (state.getarT > 0) {
      var kekuatan = K.layar.getarKuat * (state.getarT / K.layar.getarDurasi);
      ctx.translate((Math.random() - 0.5) * kekuatan, (Math.random() - 0.5) * kekuatan);
    }

    var grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#0b1022');
    grad.addColorStop(1, '#171033');
    ctx.fillStyle = grad;
    ctx.fillRect(-20, -20, w + 40, h + 40);

    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    bintangList.forEach(function (b) {
      b.y += b.kecepatan * 0.016;
      if (b.y > h) b.y = 0;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });

    powerUpList.forEach(function (pu) {
      if (!pu.aktif) return;
      ctx.font = '22px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var ikon = pu.jenis === 'tembakanGanda' ? '⭐' : pu.jenis === 'perisai' ? '🛡️' : '❤️';
      ctx.fillText(ikon, pu.x, pu.y);
    });

    musuhList.forEach(function (m) {
      if (!m.aktif) return;
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.fillStyle = m.kilatT > 0 ? '#ffffff' : m.warna;
      if (m.jenis === 'meteor') {
        ctx.beginPath();
        for (var i = 0; i < 8; i++) {
          var sudut = (i / 8) * Math.PI * 2;
          var r = m.radius * (0.8 + (i % 2 === 0 ? 0.2 : 0));
          var px = Math.cos(sudut) * r, py = Math.sin(sudut) * r;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(0, m.radius);
        ctx.lineTo(-m.radius, -m.radius);
        ctx.lineTo(m.radius, -m.radius);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    });

    ctx.fillStyle = '#fbbf24';
    peluruPemain.forEach(function (p) {
      if (!p.aktif) return;
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.radius * 0.6, p.radius * 1.6, 0, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = '#f87171';
    peluruMusuh.forEach(function (p) {
      if (!p.aktif) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    partikelList.forEach(function (pt) {
      if (!pt.aktif) return;
      ctx.globalAlpha = Math.max(0, pt.hidup / pt.hidupMaks);
      ctx.fillStyle = pt.warna;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.ukuran, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    gambarPemain();

    ctx.restore();
  }

  function gambarPemain() {
    var kedip = pemain.kebalT > 0 && Math.floor(pemain.kebalT * 12) % 2 === 0;
    if (kedip) return;

    ctx.save();
    ctx.translate(pemain.x, pemain.y);

    if (pemain.perisaiT > 0) {
      ctx.strokeStyle = 'rgba(96,165,250,0.8)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, 0, pemain.radius + 7, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Api mesin
    ctx.fillStyle = 'rgba(251,191,36,0.85)';
    ctx.beginPath();
    ctx.moveTo(-5, pemain.radius - 2);
    ctx.lineTo(5, pemain.radius - 2);
    ctx.lineTo(0, pemain.radius + 10 + Math.random() * 6);
    ctx.closePath();
    ctx.fill();

    var grad = ctx.createLinearGradient(0, -pemain.radius, 0, pemain.radius);
    grad.addColorStop(0, '#93c5fd');
    grad.addColorStop(1, '#1d6fe0');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, -pemain.radius);
    ctx.lineTo(-pemain.radius, pemain.radius);
    ctx.lineTo(0, pemain.radius * 0.5);
    ctx.lineTo(pemain.radius, pemain.radius);
    ctx.closePath();
    ctx.fill();

    if (pemain.tembakanGandaT > 0) {
      ctx.fillStyle = '#facc15';
      ctx.beginPath(); ctx.arc(-pemain.radius * 0.6, 2, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(pemain.radius * 0.6, 2, 2.5, 0, Math.PI * 2); ctx.fill();
    }

    ctx.restore();
  }
})();
