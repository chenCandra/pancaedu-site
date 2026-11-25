# Cara Menambah Latihan Baru

Latihan Kenzie dirancang supaya menambah latihan baru itu gampang: **cukup
taruh satu file HTML baru di folder ini, lalu push** -- tidak perlu edit
`daftar.json` secara manual, karena file itu dibuat ULANG OTOMATIS setiap
kali proyek di-build (lihat `scripts/generate-latihan-daftar.mjs`, dipanggil
dari `npm run build` di `package.json`).

## Langkah singkat

1. **Salin `_TEMPLATE.html`** jadi file baru di folder ini. Nama file pakai
   pola `<kategori>-<nomor>.html`, huruf kecil, pisah pakai tanda hubung,
   tanpa spasi. Contoh: `matematika-01.html`, `paskibra-02.html`,
   `bahasa-inggris-01.html`.

2. **Isi dua bagian metadata** di file itu (keduanya ada di template,
   ditandai `[GANTI INI]`):
   - Blok `<script type="application/json" id="latihan-meta">` -- ini yang
     dibaca skrip build untuk membuat kartu di beranda. **Harus JSON murni**
     (tanpa komentar, tanpa koma berlebih).
   - `window.DATA_LATIHAN` -- ini yang dibaca browser saat latihan
     dikerjakan. Field `id` di keduanya **harus sama persis** dengan nama
     file (tanpa `.html`).

3. **Isi array `soal`** dengan butir-butir soal pilihan ganda (A-E). Lihat
   komentar di `_TEMPLATE.html` untuk field apa saja yang wajib diisi per
   soal (`teks`, `opsi`, `jawaban`, `topik`, `tingkat`, `pembahasan`, dan
   opsional `trik` / `jebakan`).

   Urutan soal dan urutan opsi A-E **tidak perlu kamu acak sendiri** --
   mesin kuis (`mesin.js`) otomatis mengacak keduanya setiap kali latihan
   dimulai.

4. **Cek dulu sebelum push.** Jalankan salah satu dari ini di terminal,
   dari folder utama proyek (bukan dari dalam folder `public/latihan/`):

   ```
   node scripts/generate-latihan-daftar.mjs
   ```

   Kalau ada kesalahan (field kosong, `id` tidak cocok nama file, JSON
   rusak, dll), skrip ini akan menyebutkan file mana dan masalah apa, dan
   **tidak akan menulis ulang `daftar.json`** sampai kesalahan itu
   diperbaiki. Kesalahan yang sama juga akan menghentikan `npm run build`
   (dan deploy), jadi lebih baik ketahuan di langkah ini.

5. **Jalankan `astro dev` lalu buka `/latihan/`** untuk memastikan latihan
   barumu muncul di beranda dan bisa dikerjakan sampai selesai (termasuk
   cek di ukuran layar HP).

6. **Commit & push ke `main`** seperti biasa. `daftar.json` akan dibuat
   ulang otomatis lagi di proses build/deploy, jadi kamu tidak perlu commit
   perubahan `daftar.json` secara manual (walau kalau ikut ter-commit juga
   tidak masalah).

## Field metadata (`latihan-meta` / `DATA_LATIHAN`)

| Field | Wajib? | Keterangan |
|---|---|---|
| `id` | Ya | Harus sama persis dengan nama file (tanpa `.html`) |
| `judul` | Ya | Judul yang tampil di kartu beranda & judul laman |
| `kategori` | Ya | Dipakai buat mengelompokkan kartu di beranda, mis. "Paskibra", "Matematika" |
| `deskripsi` | Tidak | Satu kalimat singkat, tampil di kartu beranda |
| `ikon` | Tidak | Satu emoji, tampil di kartu beranda (default `📝`) |
| `warna` | Tidak | Salah satu: `merah`, `kuning`, `oranye`, `biru`, `hijau`, `ungu`, `pink`, `teal` (default `biru`) |
| `jumlahSoal` | Ya | Jumlah soal (dipakai di kartu beranda) -- harus cocok dengan panjang array `soal` di `DATA_LATIHAN` |
| `waktuMenit` | Ya | Lama waktu pengerjaan dalam menit |

## Kalau ingin menambah mata pelajaran/kategori baru

Tidak perlu konfigurasi tambahan apa pun -- kategori di beranda otomatis
mengikuti field `kategori` yang kamu isi. Kategori baru akan otomatis
punya judul bagiannya sendiri di beranda, selama ada minimal satu file
latihan dengan kategori itu.
