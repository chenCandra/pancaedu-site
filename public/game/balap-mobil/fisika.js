/**
 * Fisika Balap Mobil (real-time, bisa disetir) -- modul JS murni (bukan
 * modul ES/tanpa build), dipakai LANGSUNG oleh game di browser dan oleh
 * test Node (scripts/test-fisika-balap-mobil.mjs). Sama seperti
 * duel-meriam/fisika.js -- satu sumber kebenaran.
 *
 * Model gerak: dua keadaan sederhana selaras GLB/GLBB --
 * - Pedal gas ditahan -> percepatan tetap +aGas (GLBB, mesin menang
 *   melawan gesekan).
 * - Pedal gas dilepas -> perlambatan tetap -aGesekAlami (GLBB juga,
 *   tapi gesekan jalan yang menang, mobil melaju bebas lalu melambat).
 * - Kena rintangan (tumpahan oli/kerikil) -> kecepatan langsung
 *   dipotong sebagian (gesekan mendadak membesar), TIDAK PERNAH sampai
 *   negatif.
 * Posisi diintegrasikan step demi step (v & s) tiap frame -- fungsi di
 * sini murni dipakai per-langkah (dt kecil), gampang dites secara
 * numerik terhadap rumus GLBB analitik.
 */
(function (root) {
  'use strict';

  /** Satu langkah kecepatan: v baru setelah percepatan `a` selama `dt` detik, dijepit ke [0, vMaks]. */
  function langkahKecepatan(v, a, dt, vMaks) {
    var vBaru = v + a * dt;
    if (vBaru < 0) vBaru = 0;
    if (typeof vMaks === 'number' && vBaru > vMaks) vBaru = vMaks;
    return vBaru;
  }

  /** Satu langkah jarak: s baru setelah bergerak dengan kecepatan `v` selama `dt` detik. */
  function langkahJarak(s, v, dt) {
    return s + v * dt;
  }

  /** Efek kena rintangan gesekan tinggi (oli/kerikil) -- kecepatan dipotong sebagian, tidak pernah negatif. */
  function terapkanTabrakan(v, persenPengurangan) {
    return Math.max(0, v * (1 - persenPengurangan));
  }

  /**
   * Estimasi waktu tercepat SECARA TEORITIS kalau pedal gas ditahan terus
   * tanpa kena rintangan sama sekali (dipakai buat pembahasan, bukan
   * dipakai jalannya animasi). Dua kasus: sempat capai vMaks sebelum
   * finish, atau belum sempat (finish keburu sebelum vMaks tercapai).
   */
  function waktuIdealOptimal(aGas, vMaks, jarak) {
    var tKeVMaks = vMaks / aGas;
    var sSaatVMaks = 0.5 * aGas * tKeVMaks * tKeVMaks;
    if (sSaatVMaks >= jarak) {
      return Math.sqrt((2 * jarak) / aGas);
    }
    var sisaJarak = jarak - sSaatVMaks;
    var tSisa = sisaJarak / vMaks;
    return tKeVMaks + tSisa;
  }

  var BalapFisika = {
    langkahKecepatan: langkahKecepatan,
    langkahJarak: langkahJarak,
    terapkanTabrakan: terapkanTabrakan,
    waktuIdealOptimal: waktuIdealOptimal,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BalapFisika;
  } else {
    root.BalapFisika = BalapFisika;
  }
})(typeof window !== 'undefined' ? window : globalThis);
