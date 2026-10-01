/**
 * Fisika Balap Mobil (GLB, GLBB, gaya gesekan) -- modul JS murni (bukan
 * modul ES/tanpa build), dipakai LANGSUNG oleh game di browser dan oleh
 * test Node (scripts/test-fisika-balap-mobil.mjs). Sama seperti
 * duel-meriam/fisika.js -- satu sumber kebenaran.
 *
 * Konvensi:
 * - GLB (Gerak Lurus Beraturan): kecepatan v tetap sepanjang lintasan.
 * - GLBB (Gerak Lurus Berubah Beraturan): kecepatan awal v0 + percepatan
 *   tetap a. Gesekan direpresentasikan sebagai PERLAMBATAN tambahan
 *   (aGesek, m/s^2) yang mengurangi percepatan efektif mobil GLBB --
 *   langsung dalam satuan percepatan, bukan koefisien mu (lebih cocok
 *   buat murid yang baru belajar GLB/GLBB, belum tentu sudah sampai bab
 *   dinamika/Hukum Newton).
 */
(function (root) {
  'use strict';

  /** Jarak tempuh GLB pada waktu t. */
  function jarakGLB(v, t) {
    return v * t;
  }

  /** Jarak tempuh GLBB pada waktu t (a boleh negatif -- perlambatan). */
  function jarakGLBB(v0, a, t) {
    return v0 * t + 0.5 * a * t * t;
  }

  /** Kecepatan sesaat GLBB pada waktu t. */
  function kecepatanGLBB(v0, a, t) {
    return v0 + a * t;
  }

  /**
   * Waktu tempuh GLB buat menempuh jarak s. null kalau mobil tidak
   * bergerak (v <= 0) -- tidak akan pernah sampai.
   */
  function waktuTempuhGLB(v, s) {
    if (v <= 0) return null;
    return s / v;
  }

  /**
   * Waktu tempuh GLBB buat menempuh jarak s (akar positif dari
   * s = v0*t + 1/2*a*t^2). null kalau mobil tidak mungkin sampai (a <= 0
   * DAN v0 <= 0 -- tidak ada dorongan sama sekali).
   */
  function waktuTempuhGLBB(v0, a, s) {
    if (Math.abs(a) < 1e-9) {
      return waktuTempuhGLB(v0, s);
    }
    if (a > 0) {
      // Akar kuadratik positif: t = (-v0 + sqrt(v0^2 + 2as)) / a
      var diskriminan = v0 * v0 + 2 * a * s;
      if (diskriminan < 0) return null;
      return (-v0 + Math.sqrt(diskriminan)) / a;
    }
    // a < 0 (perlambatan) -- mobil berhenti di jarak maksimum v0^2/(2|a|)
    // sebelum sempat sampai s, kalau jaraknya tidak cukup.
    var jarakMaksimum = (v0 * v0) / (2 * -a);
    if (jarakMaksimum < s) return null;
    var diskriminan2 = v0 * v0 + 2 * a * s;
    if (diskriminan2 < 0) return null;
    return (-v0 + Math.sqrt(diskriminan2)) / a;
  }

  /** Percepatan efektif mobil GLBB setelah dikurangi gesekan (tidak boleh negatif akibat gesekan -- gesekan cuma mengurangi, bukan membalik arah). */
  function percepatanEfektif(aMesin, aGesek) {
    return Math.max(0, aMesin - (aGesek || 0));
  }

  var BalapFisika = {
    jarakGLB: jarakGLB,
    jarakGLBB: jarakGLBB,
    kecepatanGLBB: kecepatanGLBB,
    waktuTempuhGLB: waktuTempuhGLB,
    waktuTempuhGLBB: waktuTempuhGLBB,
    percepatanEfektif: percepatanEfektif,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BalapFisika;
  } else {
    root.BalapFisika = BalapFisika;
  }
})(typeof window !== 'undefined' ? window : globalThis);
