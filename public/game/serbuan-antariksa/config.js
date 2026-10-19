/**
 * Serbuan Antariksa -- SEMUA angka penyeimbang (kecepatan, nyawa, damage,
 * spawn rate, dll) ada di sini, satu tempat, biar gampang diubah tanpa
 * harus mengerti seluruh game.js. Ubah angka di sini, simpan, refresh --
 * tidak perlu sentuh file lain buat atur ulang tingkat kesulitan.
 */
window.KonfigGame = {
  pemain: {
    kecepatan: 340, // px/detik (di ruang CSS, bukan px fisik layar)
    nyawaAwal: 3,
    nyawaMaksimal: 5,
    radiusTabrakan: 15,
    kedipKebalTabrakan: 1.6, // detik kebal & berkedip setelah kena hit
    cooldownTembak: 0.22, // detik jeda minimum antar tembakan (gas ditahan = auto-fire)
    kecepatanPeluru: 640,
  },

  musuh: {
    // Dua jenis musuh -- 'pesawat' cepat tapi lemah, 'meteor' lambat tapi tangguh.
    jenis: {
      pesawat: { nyawa: 1, radius: 14, kecepatanDasar: 130, skor: 10, warna: '#f472b6' },
      meteor: { nyawa: 3, radius: 22, kecepatanDasar: 70, skor: 25, warna: '#a3a3a3' },
    },
    spawnIntervalAwal: 1.15, // detik antar kemunculan musuh baru
    spawnIntervalMin: 0.38,
    percepatanSpawnPerDetik: 0.012, // interval berkurang sebesar ini tiap detik (makin lama makin padat)
    kecepatanNaikPerDetik: 1.4, // px/detik ditambahkan ke kecepatan dasar musuh tiap detik berjalan
    peluangTembakPerDetik: 0.35, // peluang musuh (yang sudah di layar) menembak tiap detik
    kecepatanPeluruMusuh: 230,
    jarakAmanDariTepi: 40, // px, musuh spawn di luar ini biar tidak muncul tiba-tiub di tepi
  },

  powerUp: {
    peluangMuncul: 0.16, // peluang sebuah power-up muncul tiap musuh kalah
    kecepatanJatuh: 90,
    durasiEfek: 8, // detik buat tembakanGanda & perisai
    jenis: ['tembakanGanda', 'perisai', 'nyawaTambahan'],
  },

  partikel: {
    maksimal: 240, // batas object pool -- jaga performa di HP kelas menengah
    jumlahLedakanKecil: 8,
    jumlahLedakanBesar: 16,
  },

  peluru: {
    maksimalPemain: 48,
    maksimalMusuh: 64,
  },

  musuhMaksimal: 40, // batas object pool musuh di layar sekaligus

  skor: {
    kelipatanGelombang: 150, // tiap skor ini bertambah, "Gelombang" di HUD naik 1 (kosmetik, penanda progres)
  },

  layar: {
    getarKuat: 9, // px, besar screen shake saat pemain kena hit
    getarDurasi: 0.22, // detik
    kilatDurasi: 0.09, // detik, lama flash putih saat entitas kena hit
  },

  audio: {
    volumeUtama: 0.22,
  },
};
