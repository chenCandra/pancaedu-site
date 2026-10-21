/**
 * Fisika Perang Cacing -- modul JS murni (bukan modul ES/tanpa build), dipakai
 * LANGSUNG oleh game di browser (<script src="fisika.js">, semua fungsi jadi
 * properti window.CacingFisika) DAN oleh test Node
 * (scripts/test-fisika-perang-cacing.mjs, lewat sandbox new Function) -- satu
 * sumber kebenaran, pola sama seperti public/game/duel-meriam/fisika.js.
 *
 * Isinya CUMA matematika murni (tidak menyentuh canvas/DOM sama sekali) --
 * biar bisa dites di Node tanpa browser:
 * - Proyektil (bazoka/granat): dalam SATUAN METER, rumus gerak parabola
 *   persis seperti Duel Meriam (G_DEFAULT = 10 m/s^2).
 * - Karakter (jalan/lompat): dalam SATUAN PIKSEL, dituning untuk rasa
 *   platformer yang enak (SENGAJA dipisah dari gravitasi proyektil meter --
 *   lompat bukan konten pedagogis, cuma gerak karakter).
 * - Kerusakan ledakan & silhouette medan (perbukitan/lembah/pulau kembar).
 */
(function (root) {
  'use strict';

  var G_BUMI = 9.8;
  var G_DEFAULT = 10;
  var G_BULAN = 1.6;
  var G_MARS = 3.7;

  function keRadian(derajat) {
    return (derajat * Math.PI) / 180;
  }

  function clamp(v, min, max) {
    return v < min ? min : v > max ? max : v;
  }

  /** Dekati `target` dari `nilai`, tidak pernah melompati target lebih dari maksDelta per panggilan. */
  function gerakkanMenuju(nilai, target, maksDelta) {
    if (Math.abs(target - nilai) <= maksDelta) return target;
    return nilai + (target > nilai ? maksDelta : -maksDelta);
  }

  // ---------- Proyektil (satuan meter, sama persis pola Duel Meriam) ----------

  /** Posisi horizontal pada waktu t, termasuk pengaruh angin (aAngin, m/s^2, boleh 0). */
  function posisiX(x0, arah, v0, sudutDerajat, aAngin, t) {
    var sudutRad = keRadian(sudutDerajat);
    return x0 + arah * v0 * Math.cos(sudutRad) * t + 0.5 * aAngin * t * t;
  }

  /** Posisi vertikal pada waktu t (tanah di y=0 makin besar y makin tinggi). */
  function posisiY(y0, v0, sudutDerajat, g, t) {
    var sudutRad = keRadian(sudutDerajat);
    return y0 + v0 * Math.sin(sudutRad) * t - 0.5 * g * t * t;
  }

  /** Komponen kecepatan vertikal pada waktu t -- dipakai granat buat tahu kapan memantul/jatuh. */
  function kecepatanY(v0, sudutDerajat, g, t) {
    var sudutRad = keRadian(sudutDerajat);
    return v0 * Math.sin(sudutRad) - g * t;
  }

  // ---------- Kerusakan ledakan ----------

  /**
   * Kerusakan akibat ledakan pada jarak tertentu -- menurun LINEAR dari
   * `damage` penuh di jarak 0 sampai 0 tepat di `radiusDamage`. Selalu
   * monoton (dipakai test properti) dan tidak pernah negatif.
   */
  function hitungKerusakan(jarak, radiusDamage, damage) {
    if (radiusDamage <= 0 || jarak >= radiusDamage) return 0;
    if (jarak <= 0) return Math.round(damage);
    return Math.round(damage * (1 - jarak / radiusDamage));
  }

  // ---------- PRNG seeded (sama seperti Duel Meriam, mulberry32) ----------

  function buatRngBerurut(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ---------- Silhouette medan (fungsi tinggi murni, dipakai medan.js buat gambar+ukir) ----------

  /** Parameter acak buat preset "Perbukitan" -- 3 gelombang sinus dijumlah. */
  function buatParamPerbukitan(rng) {
    var gelombang = [];
    for (var i = 0; i < 3; i++) {
      gelombang.push({
        amp: 24 + rng() * 46,
        freq: 0.004 + rng() * 0.01,
        fase: rng() * Math.PI * 2,
      });
    }
    return { jenis: 'perbukitan', baselineFrac: 0.6, gelombang: gelombang };
  }

  /** Parameter acak buat preset "Lembah" -- tepi tinggi, tengah rendah (bentuk mangkuk) + sedikit noise. */
  function buatParamLembah(rng) {
    var gelombang = [];
    for (var i = 0; i < 2; i++) {
      gelombang.push({ amp: 10 + rng() * 18, freq: 0.006 + rng() * 0.012, fase: rng() * Math.PI * 2 });
    }
    return { jenis: 'lembah', tepiFrac: 0.28 + rng() * 0.08, tengahFrac: 0.76 + rng() * 0.08, gelombang: gelombang };
  }

  /** Parameter acak buat preset "Pulau Kembar" -- 2 gundukan terpisah jurang di tengah. */
  function buatParamPulauKembar(rng) {
    return {
      jenis: 'pulauKembar',
      lebarJurangFrac: 0.2 + rng() * 0.08,
      tinggiPulauFrac: 0.42 + rng() * 0.16,
      gelombang: [{ amp: 14 + rng() * 16, freq: 0.01 + rng() * 0.015, fase: rng() * Math.PI * 2 }],
    };
  }

  /** Parameter acak buat preset "Gua" -- perbukitan biasa, lubang terowongan diukir belakangan oleh medan.js. */
  function buatParamGua(rng) {
    var param = buatParamPerbukitan(rng);
    param.jenis = 'gua';
    param.jumlahTerowongan = 3 + Math.floor(rng() * 3);
    return param;
  }

  function jumlahkanGelombang(gelombang, x) {
    var total = 0;
    for (var i = 0; i < gelombang.length; i++) {
      var g = gelombang[i];
      total += g.amp * Math.sin(x * g.freq + g.fase);
    }
    return total;
  }

  /**
   * Tinggi permukaan tanah (dari ATAS kanvas, satuan piksel-y) pada kolom x,
   * untuk param hasil buatParam*() di atas. `lebar`/`tinggi` = ukuran kanvas.
   * Return null kalau kolom itu memang kosong (jurang Pulau Kembar) -- tidak
   * ada tanah sama sekali di kolom tersebut.
   */
  function tinggiPermukaanDi(param, x, lebar, tinggi) {
    if (param.jenis === 'perbukitan' || param.jenis === 'gua') {
      var dasar = tinggi * param.baselineFrac;
      return clamp(dasar - jumlahkanGelombang(param.gelombang, x), tinggi * 0.15, tinggi * 0.92);
    }
    if (param.jenis === 'lembah') {
      var frac = param.tepiFrac + (param.tengahFrac - param.tepiFrac) * Math.sin((Math.PI * x) / lebar);
      return clamp(tinggi * frac + jumlahkanGelombang(param.gelombang, x), tinggi * 0.15, tinggi * 0.95);
    }
    if (param.jenis === 'pulauKembar') {
      var setengah = lebar / 2;
      var jarakKeTengah = Math.abs(x - setengah);
      var batasJurang = lebar * param.lebarJurangFrac * 0.5;
      if (jarakKeTengah < batasJurang) return null; // jurang -- tidak ada tanah
      var dasarPulau = tinggi * (1 - param.tinggiPulauFrac);
      return clamp(dasarPulau - jumlahkanGelombang(param.gelombang, x), tinggi * 0.15, tinggi * 0.92);
    }
    return tinggi * 0.6;
  }

  // ---------- Fisika karakter (satuan piksel, tick tetap) ----------

  /**
   * Satu langkah simulasi fisika karakter. `k` (object, DIMUTASI langsung):
   * {x, y, vx, vy, diTanah, menghadap, jatuhMulaiY, radius, hidup}.
   * `input`: {kiri, kanan, lompatBaruDitekan}.
   * `cb`: {apakahSolidDiSekitar(x,y,radius) -> bool, cariTanahTerdekat(x, dariY, maxJarak) -> y|null}
   * -- di-inject supaya fungsi ini TIDAK menyentuh canvas/DOM dan tetap bisa
   * dites di Node dengan callback palsu. `konfig` angka-angka tuning (lihat
   * config.js KonfigGame -- tapi dioper manual ke sini, bukan baca global,
   * biar modul ini berdiri sendiri).
   *
   * Return: {kerusakanJatuh: number, keluarBatas: boolean} -- game.js yang
   * menerapkan efeknya (kurangi nyawa / eliminasi), fungsi ini cuma hitung.
   */
  function langkahFisikaKarakter(k, input, dt, cb, konfig) {
    var hasil = { kerusakanJatuh: 0, keluarBatas: false };
    if (!k.hidup) return hasil;

    var target = input.kiri ? -konfig.kecepatanJalan : input.kanan ? konfig.kecepatanJalan : 0;
    var percepatan = (k.diTanah ? konfig.percepatanJalanTanah : konfig.percepatanJalanUdara) * dt;
    k.vx = gerakkanMenuju(k.vx, target, percepatan);
    if (target !== 0) k.menghadap = target > 0 ? 1 : -1;

    if (input.lompatBaruDitekan && k.diTanah) {
      k.vy = -konfig.lompatImpuls;
      k.diTanah = false;
    }

    k.vy = Math.min(k.vy + konfig.gravitasiKarakter * dt, konfig.kecepatanJatuhMaks);

    // --- gerak horizontal, dengan auto step-up lereng landai ---
    var xBaru = clamp(k.x + k.vx * dt, k.radius, konfig.lebarKanvas - k.radius);
    if (cb.apakahSolidDiSekitar(xBaru, k.y, k.radius)) {
      var naik = null;
      for (var dy = 1; dy <= konfig.stepMaksNaik; dy++) {
        if (!cb.apakahSolidDiSekitar(xBaru, k.y - dy, k.radius)) { naik = dy; break; }
      }
      if (naik !== null) k.y -= naik;
      else { xBaru = k.x; k.vx = 0; }
    }
    k.x = xBaru;

    // --- gerak vertikal ---
    var yBaru = k.y + k.vy * dt;
    if (k.vy >= 0) {
      var jarakCek = k.vy * dt + 6;
      var tanahY = cb.cariTanahTerdekat(k.x, k.y + k.radius, jarakCek);
      if (tanahY !== null && yBaru + k.radius >= tanahY) {
        if (!k.diTanah && k.jatuhMulaiY != null) {
          var jarakJatuh = tanahY - k.radius - k.jatuhMulaiY;
          if (jarakJatuh > konfig.jatuhAmanPx) {
            hasil.kerusakanJatuh = clamp(Math.floor((jarakJatuh - konfig.jatuhAmanPx) / 6), 0, 40);
          }
        }
        k.y = tanahY - k.radius;
        k.vy = 0;
        k.diTanah = true;
        k.jatuhMulaiY = null;
      } else {
        k.y = yBaru;
        k.diTanah = false;
        if (k.jatuhMulaiY == null) k.jatuhMulaiY = k.y;
      }
    } else {
      if (cb.apakahSolidDiSekitar(k.x, yBaru - k.radius, k.radius)) {
        k.vy = 0;
      } else {
        k.y = yBaru;
        k.diTanah = false;
      }
    }

    if (k.y > konfig.tinggiKanvas + 80) {
      hasil.keluarBatas = true;
    }

    return hasil;
  }

  var CacingFisika = {
    G_BUMI: G_BUMI,
    G_DEFAULT: G_DEFAULT,
    G_BULAN: G_BULAN,
    G_MARS: G_MARS,
    clamp: clamp,
    gerakkanMenuju: gerakkanMenuju,
    posisiX: posisiX,
    posisiY: posisiY,
    kecepatanY: kecepatanY,
    hitungKerusakan: hitungKerusakan,
    buatRngBerurut: buatRngBerurut,
    buatParamPerbukitan: buatParamPerbukitan,
    buatParamLembah: buatParamLembah,
    buatParamPulauKembar: buatParamPulauKembar,
    buatParamGua: buatParamGua,
    tinggiPermukaanDi: tinggiPermukaanDi,
    langkahFisikaKarakter: langkahFisikaKarakter,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CacingFisika;
  } else {
    root.CacingFisika = CacingFisika;
  }
})(typeof window !== 'undefined' ? window : globalThis);
