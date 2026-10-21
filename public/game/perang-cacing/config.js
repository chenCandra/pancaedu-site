/**
 * Semua angka yang bisa dituning buat Perang Cacing, dikumpulkan di satu
 * tempat (pola sama seperti public/game/serbuan-antariksa/config.js) --
 * dipisah dari game.js biar gampang di-seimbangkan tanpa bongkar logika.
 */
(function (root) {
  'use strict';

  var KonfigGame = {
    lebarKanvas: 960,
    tinggiKanvas: 540,

    // Fisika karakter (satuan PIKSEL, arcade -- SENGAJA dipisah dari
    // gravitasi proyektil yang pakai satuan meter, lihat fisika.js).
    gravitasiKarakter: 1500,
    lompatImpuls: 620,
    kecepatanJalan: 220,
    percepatanJalanTanah: 1800,
    percepatanJalanUdara: 700,
    kecepatanJatuhMaks: 1600,
    stepMaksNaik: 6,
    radiusKarakter: 14,
    jatuhAmanPx: 90,

    // Fisika proyektil (satuan METER, sama gravitasi default Duel Meriam).
    gravitasiProyektil: 10,
    pikselPerMeter: 10,
    jarakMaksDragBidik: 160, // px drag mentok
    v0MinBidik: 8,
    v0MaksBidik: 42,

    nyawaAwal: 100,
    jumlahPemainMin: 2,
    jumlahPemainMaks: 8,
  };

  // damage/radius dalam PIKSEL (radiusHancur = radius lubang di medan,
  // radiusDamage = radius jangkauan kerusakan ke karakter -- biasanya
  // sedikit lebih besar dari radiusHancur, biar "nyaris kena" tetap sakit).
  var KonfigSenjata = {
    bazoka: {
      id: 'bazoka', nama: 'Bazoka', ikon: '🚀', jenis: 'proyektil',
      v0Min: 8, v0Max: 42, damage: 35, radiusHancur: 42, radiusDamage: 70,
      fuse: 0, amunisiAwal: Infinity,
    },
    granat: {
      id: 'granat', nama: 'Granat', ikon: '💣', jenis: 'memantul',
      v0Min: 5, v0Max: 22, damage: 45, radiusHancur: 48, radiusDamage: 85,
      fuse: 3.0, restitusi: 0.55, gesekanPantul: 0.8, amunisiAwal: 5,
    },
    dinamit: {
      id: 'dinamit', nama: 'Dinamit', ikon: '🧨', jenis: 'ditaruh',
      damage: 75, radiusHancur: 70, radiusDamage: 130,
      fuse: 5.0, amunisiAwal: 2,
    },
    tendangan: {
      id: 'tendangan', nama: 'Tendangan', ikon: '🥾', jenis: 'instan',
      jangkauan: 44, damage: 12, knockback: 420, amunisiAwal: Infinity,
    },
  };

  var KonfigPeta = [
    { id: 'perbukitan', nama: 'Perbukitan', ikon: '⛰️' },
    { id: 'lembah', nama: 'Lembah', ikon: '🏞️' },
    { id: 'pulauKembar', nama: 'Pulau Kembar', ikon: '🏝️' },
    { id: 'gua', nama: 'Gua', ikon: '🕳️' },
  ];

  // 8 warna kontras buat sampai 8 pemain -- dikurasi khusus (bukan 6 warna
  // tema arena yang dipakai katalog), supaya kebagian semua tanpa dobel.
  var WarnaPemain = [
    '#1d6fe0', '#db2f77', '#16a34a', '#f5b301',
    '#8b3ddb', '#f2760a', '#0891b2', '#64748b',
  ];

  root.KonfigGame = KonfigGame;
  root.KonfigSenjata = KonfigSenjata;
  root.KonfigPeta = KonfigPeta;
  root.WarnaPemain = WarnaPemain;
})(typeof window !== 'undefined' ? window : globalThis);
