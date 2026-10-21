/**
 * Medan Perang Cacing -- SATU-SATUNYA tempat di situs ini yang memanipulasi
 * canvas per-piksel (destructible terrain). Beda dari fisika.js (murni
 * matematika, bisa dites di Node), modul ini WAJIB browser (butuh
 * document.createElement('canvas') + getImageData) jadi tidak diikutkan di
 * harness test Node -- tapi fungsi tinggi/parameter yang dipakainya tetap
 * murni dari fisika.js (CacingFisika), supaya bagian yang testable tetap
 * dites.
 *
 * Representasi: kanvas offscreen (alpha = padat/kosong) + cermin Uint8Array
 * `mask` yang disinkronkan HANYA saat medan berubah (generate awal + tiap
 * ledakan), bukan tiap frame -- query solid/tidak jadi O(1) lookup array.
 * Ledakan "melubangi" pakai globalCompositeOperation='destination-out' +
 * ctx.arc(), lalu mask disinkronkan ulang cuma di kotak-pembatas ledakan
 * (bukan seluruh kanvas) biar tetap murah berapa pun besar medannya.
 */
(function (root) {
  'use strict';

  function sinkronkanMask(ctx, medan, bx, by, bw, bh) {
    bx = Math.max(0, bx); by = Math.max(0, by);
    bw = Math.min(medan.lebar - bx, bw); bh = Math.min(medan.tinggi - by, bh);
    if (bw <= 0 || bh <= 0) return;
    var data = ctx.getImageData(bx, by, bw, bh).data;
    for (var row = 0; row < bh; row++) {
      for (var col = 0; col < bw; col++) {
        var alpha = data[(row * bw + col) * 4 + 3];
        var gx = bx + col, gy = by + row;
        medan.mask[gy * medan.lebar + gx] = alpha > 40 ? 1 : 0;
      }
    }
  }

  /** Lubangi medan di (x,y) radius `radius` -- dipakai ledakan senjata DAN pembuatan gua. */
  function lubangi(ctx, medan, x, y, radius) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    var bx = Math.floor(x - radius - 2), by = Math.floor(y - radius - 2);
    var bw = Math.ceil(radius * 2 + 4), bh = Math.ceil(radius * 2 + 4);
    sinkronkanMask(ctx, medan, bx, by, bw, bh);
  }

  function apakahSolid(medan, x, y) {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || x >= medan.lebar || y < 0 || y >= medan.tinggi) return false;
    return medan.mask[y * medan.lebar + x] === 1;
  }

  /** Sampel beberapa titik di sekeliling lingkaran (bukan rasterisasi penuh) -- cukup buat tabrakan karakter. */
  function apakahSolidDiSekitar(medan, cx, cy, radius) {
    if (apakahSolid(medan, cx, cy)) return true;
    for (var sudut = 0; sudut < 360; sudut += 45) {
      var rad = (sudut * Math.PI) / 180;
      if (apakahSolid(medan, cx + Math.cos(rad) * radius, cy + Math.sin(rad) * radius)) return true;
    }
    return false;
  }

  /** Cari y tanah terdekat dari (x, dariY) ke bawah sampai maxJarak px -- juga menoleransi karakter sudah agak terbenam (dy mulai -4). */
  function cariTanahTerdekat(medan, x, dariY, maxJarak) {
    var xi = Math.round(x);
    for (var dy = -4; dy <= maxJarak; dy++) {
      var y = Math.round(dariY + dy);
      if (apakahSolid(medan, xi, y)) return y;
    }
    return null;
  }

  /**
   * Gambar silhouette tanah dari fungsi tinggi (bisa return null = kosong,
   * dipakai Pulau Kembar buat jurang tengah) -- generik buat SEMUA preset,
   * jadi tidak perlu cabang per-preset di sini.
   */
  function gambarSilhouette(ctx, param, lebar, tinggi, F) {
    var langkah = 3;
    var segmen = [];
    var sedang = null;
    for (var x = 0; x <= lebar; x += langkah) {
      var y = F.tinggiPermukaanDi(param, x, lebar, tinggi);
      if (y === null) {
        if (sedang) { segmen.push(sedang); sedang = null; }
      } else {
        if (!sedang) sedang = [];
        sedang.push([x, y]);
      }
    }
    if (sedang) segmen.push(sedang);

    ctx.fillStyle = '#7a5231';
    segmen.forEach(function (titik) {
      if (titik.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(titik[0][0], tinggi + 4);
      titik.forEach(function (p) { ctx.lineTo(p[0], p[1]); });
      ctx.lineTo(titik[titik.length - 1][0], tinggi + 4);
      ctx.closePath();
      ctx.fill();
    });

    ctx.strokeStyle = '#3f7d3a';
    ctx.lineWidth = 6;
    ctx.lineJoin = 'round';
    segmen.forEach(function (titik) {
      if (titik.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(titik[0][0], titik[0][1]);
      titik.forEach(function (p) { ctx.lineTo(p[0], p[1]); });
      ctx.stroke();
    });
  }

  /** Jalan acak ber-cabang yang melubangi medan berulang-ulang -- cara murah bikin gua/terowongan (pakai primitif `lubangi` yang sama dengan ledakan senjata). */
  function ukirGua(ctx, medan, rng, jumlahTerowongan) {
    for (var i = 0; i < jumlahTerowongan; i++) {
      var x = rng() * medan.lebar;
      var y = medan.tinggi * 0.32 + rng() * medan.tinggi * 0.4;
      var sudut = rng() * 50 - 25;
      var langkah = 16 + Math.floor(rng() * 14);
      for (var j = 0; j < langkah; j++) {
        lubangi(ctx, medan, x, y, 11 + rng() * 9);
        sudut += rng() * 34 - 17;
        x += Math.cos((sudut * Math.PI) / 180) * 15;
        y += Math.sin((sudut * Math.PI) / 180) * 9;
        if (x < 16 || x > medan.lebar - 16 || y < 16 || y > medan.tinggi - 16) break;
      }
    }
  }

  /** Bangun medan baru dari preset (perbukitan/lembah/pulauKembar/gua). `F` = window.CacingFisika. */
  function buatMedan(presetId, rng, lebar, tinggi, F) {
    var kanvas = document.createElement('canvas');
    kanvas.width = lebar;
    kanvas.height = tinggi;
    var ctx = kanvas.getContext('2d', { willReadFrequently: true });

    var param;
    if (presetId === 'lembah') param = F.buatParamLembah(rng);
    else if (presetId === 'pulauKembar') param = F.buatParamPulauKembar(rng);
    else if (presetId === 'gua') param = F.buatParamGua(rng);
    else param = F.buatParamPerbukitan(rng);

    var medan = {
      kanvas: kanvas, ctx: ctx, lebar: lebar, tinggi: tinggi,
      mask: new Uint8Array(lebar * tinggi), preset: presetId, param: param,
    };

    gambarSilhouette(ctx, param, lebar, tinggi, F);
    sinkronkanMask(ctx, medan, 0, 0, lebar, tinggi);
    if (presetId === 'gua') ukirGua(ctx, medan, rng, param.jumlahTerowongan);

    return medan;
  }

  /** Cari titik kosong di atas tanah padat buat menaruh karakter di awal ronde. */
  function posisiSpawnAcak(medan, rng, radius) {
    for (var coba = 0; coba < 60; coba++) {
      var x = Math.round(radius + 2 + rng() * (medan.lebar - (radius + 2) * 2));
      for (var y = 16; y < medan.tinggi - 6; y++) {
        if (apakahSolid(medan, x, y)) {
          if (!apakahSolid(medan, x, y - radius * 2 - 4)) return { x: x, y: y - radius };
          break;
        }
      }
    }
    return { x: medan.lebar / 2, y: 40 };
  }

  root.CacingMedan = {
    buatMedan: buatMedan,
    lubangi: lubangi,
    apakahSolid: apakahSolid,
    apakahSolidDiSekitar: apakahSolidDiSekitar,
    cariTanahTerdekat: cariTanahTerdekat,
    posisiSpawnAcak: posisiSpawnAcak,
  };
})(typeof window !== 'undefined' ? window : globalThis);
