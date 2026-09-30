/**
 * Fisika Duel Meriam Parabola -- modul JS murni (bukan modul ES/tanpa build),
 * dipakai LANGSUNG oleh game di browser (<script src="fisika.js">, semua
 * fungsi jadi properti window.DuelFisika) DAN oleh test Node
 * (scripts/test-fisika-duel-meriam.js, via require(...)) -- satu sumber
 * kebenaran, supaya rumus yang dites persis rumus yang dipakai main.
 *
 * Konvensi:
 * - Sudut selalu dalam DERAJAT di parameter publik (sesuai slider di UI),
 *   dikonversi ke radian di dalam.
 * - arah: +1 = menembak ke kanan (dari benteng kiri), -1 = menembak ke kiri
 *   (dari benteng kanan).
 * - Titik x=0 SELALU di posisi benteng kiri. medan.jarak = jarak antar
 *   benteng (posisi benteng kanan = medan.jarak).
 */
(function (root) {
  'use strict';

  var G_BUMI = 9.8;
  var G_DEFAULT = 10; // default game (angka bulat, lebih gampang dihitung manual murid)
  var G_BULAN = 1.6;
  var G_MARS = 3.7;

  function keRadian(derajat) {
    return (derajat * Math.PI) / 180;
  }

  /** Posisi horizontal pada waktu t, termasuk pengaruh angin (a_angin, m/s^2, boleh 0). */
  function posisiX(x0, arah, v0, sudutDerajat, aAngin, t) {
    var sudutRad = keRadian(sudutDerajat);
    return x0 + arah * v0 * Math.cos(sudutRad) * t + 0.5 * aAngin * t * t;
  }

  /** Posisi vertikal pada waktu t (tanpa angin -- angin cuma memengaruhi arah horizontal). */
  function posisiY(y0, v0, sudutDerajat, g, t) {
    var sudutRad = keRadian(sudutDerajat);
    return y0 + v0 * Math.sin(sudutRad) * t - 0.5 * g * t * t;
  }

  /** Jangkauan ideal (tanpa angin, mendarat di ketinggian sama dengan tembakan, tanah datar). */
  function hitungJangkauan(v0, sudutDerajat, g) {
    var sudutRad = keRadian(sudutDerajat);
    return (v0 * v0 * Math.sin(2 * sudutRad)) / g;
  }

  /** Waktu terbang total sampai mendarat (tanah datar, tanpa angin). */
  function hitungWaktuTerbang(v0, sudutDerajat, g) {
    var sudutRad = keRadian(sudutDerajat);
    return (2 * v0 * Math.sin(sudutRad)) / g;
  }

  /** Tinggi maksimum lintasan (tanah datar, tanpa angin). */
  function hitungTinggiMaksimum(v0, sudutDerajat, g) {
    var sudutRad = keRadian(sudutDerajat);
    var vy = v0 * Math.sin(sudutRad);
    return (vy * vy) / (2 * g);
  }

  /**
   * Tinggi lintasan (tanpa angin) pada jarak horizontal x dari titik tembak
   * -- bentuk trayektori-sebagai-fungsi-x standar, didapat dari substitusi
   * t = x / (v0 cos th) ke persamaan y(t). Cuma valid untuk arah +1 (dipakai
   * buat pengecekan cepat "apa lintasan ini melewati bukit", BUKAN buat
   * animasi -- animasi tetap pakai posisiX/posisiY per-frame biar konsisten
   * dengan mode berangin).
   */
  function tinggiLintasanDiX(v0, sudutDerajat, g, x) {
    var sudutRad = keRadian(sudutDerajat);
    var cosT = Math.cos(sudutRad);
    if (Math.abs(cosT) < 1e-9) return -Infinity;
    var tanT = Math.tan(sudutRad);
    return x * tanT - (g * x * x) / (2 * v0 * v0 * cosT * cosT);
  }

  /**
   * Buat medan pertempuran acak: jarak antar benteng 60-150 m, satu bukit
   * segitiga di tengah dengan tinggi acak 0-25 m. `rng` opsional (fungsi
   * () => angka 0-1) supaya bisa dites deterministik (lihat buatRngBerurut).
   */
  function buatMedanAcak(rng) {
    rng = rng || Math.random;
    var jarak = 60 + rng() * 90; // 60 - 150 m
    var tinggiBukit = rng() * 25; // 0 - 25 m
    var xBukit = jarak / 2;
    var lebarBukit = Math.min(20, jarak * 0.25);
    return { jarak: jarak, xKiri: 0, xKanan: jarak, xBukit: xBukit, tinggiBukit: tinggiBukit, lebarBukit: lebarBukit };
  }

  /** Tinggi permukaan tanah (akibat bukit) pada posisi x manapun. 0 kalau di luar jangkauan bukit. */
  function tinggiMedanDi(x, medan) {
    if (!medan || medan.tinggiBukit <= 0) return 0;
    var jarakKeBukit = Math.abs(x - medan.xBukit);
    if (jarakKeBukit >= medan.lebarBukit) return 0;
    return medan.tinggiBukit * (1 - jarakKeBukit / medan.lebarBukit);
  }

  /**
   * Cek cepat (analitik, tanpa angin, arah +1 dari x=0): apakah lintasan
   * v0/sudut ini tetap di atas permukaan bukit di sepanjang rentang bukit.
   * Dipakai baik oleh game (validasi sebelum animasi) maupun test Node.
   */
  function melewatiBukit(v0, sudutDerajat, g, medan, jumlahSampel) {
    jumlahSampel = jumlahSampel || 20;
    if (!medan || medan.tinggiBukit <= 0) return true;
    var kiri = Math.max(0, medan.xBukit - medan.lebarBukit);
    var kanan = medan.xBukit + medan.lebarBukit;
    for (var i = 0; i <= jumlahSampel; i++) {
      var x = kiri + ((kanan - kiri) * i) / jumlahSampel;
      var tanah = tinggiMedanDi(x, medan);
      if (tanah <= 0) continue;
      var lintasan = tinggiLintasanDiX(v0, sudutDerajat, g, x);
      if (lintasan < tanah) return false;
    }
    return true;
  }

  /**
   * Simulasi satu tembakan LENGKAP (boleh pakai angin), step demi step --
   * ini yang dipakai game buat animasi frame-by-frame & deteksi
   * tabrakan/mendarat yang presisi. `medan` opsional (kalau tidak ada,
   * tanah dianggap rata di y=0).
   */
  function simulasikanTembakan(opsi) {
    var v0 = opsi.v0;
    var sudutDerajat = opsi.sudutDerajat;
    var g = opsi.g;
    var arah = opsi.arah;
    var aAngin = opsi.aAngin || 0;
    var x0 = opsi.x0 || 0;
    var y0 = opsi.y0 || 0;
    var medan = opsi.medan || null;
    var dt = opsi.dt || 0.01;
    var tMaks = opsi.tMaks || 30;

    var t = 0;
    while (t <= tMaks) {
      var x = posisiX(x0, arah, v0, sudutDerajat, aAngin, t);
      var y = posisiY(y0, v0, sudutDerajat, g, t);
      var tanah = medan ? tinggiMedanDi(x, medan) : 0;
      // t > 0 WAJIB -- di t=0 peluru ada persis di y0 (biasanya 0), sama
      // dengan tanah di titik tembak (juga 0), jadi y <= tanah SELALU benar
      // di titik start kalau dicek dari t=0. Tanpa penjagaan ini, setiap
      // tembakan "mendarat" seketika di posisi meriam sendiri (jarak 0).
      if (t > 0 && y <= tanah) {
        var kenaBukit = medan ? tinggiMedanDi(x, medan) > 0.01 : false;
        return { xJatuh: x, yJatuh: tanah, tJatuh: t, kenaBukit: kenaBukit };
      }
      t += dt;
    }
    return { xJatuh: null, yJatuh: null, tJatuh: null, kenaBukit: false };
  }

  /**
   * Cari tahu apakah ADA kombinasi v0/sudut (dalam rentang yang dibolehkan
   * UI) yang bisa mengenai benteng lawan (dalam toleransi) sambil melewati
   * bukit -- dipakai test Node buat memverifikasi 1000 medan acak SELALU
   * winnable, arah +1 dari benteng kiri (x=0) ke kanan (x=medan.jarak).
   */
  function adaTembakanBisaMengenai(medan, opsi) {
    opsi = opsi || {};
    var v0Min = opsi.v0Min || 5;
    var v0Max = opsi.v0Max || 50;
    var sudutMin = opsi.sudutMin || 5;
    var sudutMax = opsi.sudutMax || 85;
    var g = opsi.g || G_DEFAULT;
    var toleransi = opsi.toleransi || 3;
    for (var v0 = v0Min; v0 <= v0Max; v0 += 1) {
      for (var sudut = sudutMin; sudut <= sudutMax; sudut += 1) {
        var R = hitungJangkauan(v0, sudut, g);
        if (Math.abs(R - medan.jarak) > toleransi) continue;
        if (melewatiBukit(v0, sudut, g, medan)) return true;
      }
    }
    return false;
  }

  /** PRNG sederhana & deterministik (mulberry32) -- dipakai test biar hasil random bisa direproduksi. */
  function buatRngBerurut(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var DuelFisika = {
    G_BUMI: G_BUMI,
    G_DEFAULT: G_DEFAULT,
    G_BULAN: G_BULAN,
    G_MARS: G_MARS,
    posisiX: posisiX,
    posisiY: posisiY,
    hitungJangkauan: hitungJangkauan,
    hitungWaktuTerbang: hitungWaktuTerbang,
    hitungTinggiMaksimum: hitungTinggiMaksimum,
    tinggiLintasanDiX: tinggiLintasanDiX,
    buatMedanAcak: buatMedanAcak,
    tinggiMedanDi: tinggiMedanDi,
    melewatiBukit: melewatiBukit,
    simulasikanTembakan: simulasikanTembakan,
    adaTembakanBisaMengenai: adaTembakanBisaMengenai,
    buatRngBerurut: buatRngBerurut,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DuelFisika;
  } else {
    root.DuelFisika = DuelFisika;
  }
})(typeof window !== 'undefined' ? window : globalThis);
