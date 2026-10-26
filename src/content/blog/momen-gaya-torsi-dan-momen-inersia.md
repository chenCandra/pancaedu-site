---
title: "Momen Gaya (Torsi) dan Momen Inersia"
description: "Kenapa kunci pas bertangkai panjang lebih mudah memutar baut keras, dan kenapa roda sepeda lebih sulit diputar dibanding bola pejal bermassa sama? Belajar momen gaya (torsi) dan momen inersia -- gerbang menuju dinamika rotasi."
category: materi
mapel: Fisika
kelas: XI
pubDate: 2026-10-12
tags: ["Momen Gaya", "Torsi", "Momen Inersia", "Fisika Kelas XI", "Fase F", "Gerak dan Gaya"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/torsi-dan-dinamika-rotasi.html"
  judul: "Laboratorium Maya: Torsi dan Dinamika Rotasi"
  sumber: "Lab Maya PancaEdu"
  tinggi: 980
kuis:
  - soal: "Rumus momen gaya (torsi) adalah..."
    pilihan: ["τ = F × r × sinθ", "τ = F × r", "τ = F / r", "τ = m × r"]
    jawaban: 0
    penjelasan: "τ = F×r×sinθ -- torsi bergantung pada gaya, jarak lengan gaya ke sumbu putar, dan sudut antara gaya dan lengan."
  - soal: "Kenapa kunci pas bertangkai PANJANG lebih mudah memutar baut yang keras dibanding tangkai pendek, untuk gaya tangan yang sama?"
    pilihan: ["Tangkai lebih panjang berarti lengan gaya (r) lebih besar, sehingga torsi (τ=F×r×sinθ) yang dihasilkan juga lebih besar", "Tangkai panjang membuat gaya tangan otomatis lebih besar", "Tangkai panjang mengubah arah gravitasi", "Panjang tangkai tidak memengaruhi torsi sama sekali"]
    jawaban: 0
    penjelasan: "Torsi berbanding lurus dengan lengan gaya (r) -- tangkai lebih panjang berarti r lebih besar, sehingga torsi yang dihasilkan gaya yang sama juga lebih besar."
  - soal: "Kalau gaya diberikan TEPAT SEJAJAR dengan lengan gaya (θ=0° atau 180°), berapa torsi yang dihasilkan?"
    pilihan: ["Nol, karena sinθ=sin0°=0", "Maksimum", "Sama dengan F×r", "Tidak bisa ditentukan"]
    jawaban: 0
    penjelasan: "τ=F×r×sinθ. Kalau θ=0° atau 180°, sinθ=0, sehingga torsinya NOL -- gaya yang sejajar lengan tidak menghasilkan efek putar sama sekali."
  - soal: "Sebuah gaya 40 N diberikan tegak lurus (θ=90°) pada lengan sepanjang 0,5 m. Berapa torsinya?"
    pilihan: ["20 N·m", "40 N·m", "0,5 N·m", "80 N·m"]
    jawaban: 0
    penjelasan: "τ = F×r×sinθ = 40×0,5×sin90° = 40×0,5×1 = 20 N·m."
  - soal: "Momen inersia (I) suatu benda menyatakan..."
    pilihan: ["'Kelembaman rotasi' -- seberapa sulit mengubah kecepatan sudut benda itu, bergantung bentuk dan sebaran massanya", "Massa total benda saja", "Kecepatan rotasi benda", "Gaya yang bekerja pada benda"]
    jawaban: 0
    penjelasan: "Momen inersia adalah 'versi rotasi' dari massa -- menyatakan seberapa sulit mengubah kecepatan sudut (rotasi) suatu benda, dan BUKAN cuma bergantung massa total, tapi juga bagaimana massa itu TERSEBAR relatif terhadap sumbu putar."
  - soal: "Dua benda punya massa yang SAMA: benda A adalah cincin (massa terpusat di tepi), benda B adalah bola pejal (massa tersebar merata sampai ke pusat), dengan jari-jari yang sama. Manakah yang punya momen inersia lebih BESAR?"
    pilihan: ["Cincin (benda A), karena massanya terkonsentrasi lebih jauh dari sumbu putar", "Bola pejal (benda B)", "Keduanya sama persis", "Tidak bisa dibandingkan tanpa tahu kecepatan rotasinya"]
    jawaban: 0
    penjelasan: "Momen inersia lebih besar kalau massa terkonsentrasi LEBIH JAUH dari sumbu putar. Cincin (I=MR²) punya momen inersia lebih besar daripada bola pejal (I=⅖MR²) dengan massa dan jari-jari yang sama, karena semua massa cincin ada di tepi."
  - soal: "Rumus momen inersia untuk piringan pejal (disk) yang berputar pada sumbu di pusatnya adalah..."
    pilihan: ["I = ½MR²", "I = MR²", "I = ⅖MR²", "I = ⅓MR²"]
    jawaban: 0
    penjelasan: "Piringan pejal: I = ½MR² -- salah satu rumus momen inersia standar untuk bentuk-bentuk umum."
  - soal: "Piringan pejal bermassa 4 kg dengan jari-jari 0,5 m. Berapa momen inersianya?"
    pilihan: ["0,5 kg·m²", "1 kg·m²", "2 kg·m²", "0,25 kg·m²"]
    jawaban: 0
    penjelasan: "I = ½MR² = ½×4×0,5² = ½×4×0,25 = 0,5 kg·m²."
  - soal: "Cincin (hoop) bermassa 3 kg dengan jari-jari 0,4 m. Berapa momen inersianya? (I=MR² untuk cincin)"
    pilihan: ["0,48 kg·m²", "1,2 kg·m²", "0,24 kg·m²", "3 kg·m²"]
    jawaban: 0
    penjelasan: "I = MR² = 3×0,4² = 3×0,16 = 0,48 kg·m²."
  - soal: "Kenapa roda sepeda (mirip cincin, massa di tepi) terasa lebih 'berat diputar' dibanding bola pejal bermassa dan berjari-jari sama?"
    pilihan: ["Momen inersia roda (cincin, I=MR²) lebih besar dari bola pejal (I=⅖MR²), sehingga lebih sulit diubah kecepatan sudutnya", "Roda sepeda sebenarnya lebih berat massa totalnya", "Bola pejal tidak punya momen inersia sama sekali", "Tidak ada perbedaan sama sekali antara keduanya"]
    jawaban: 0
    penjelasan: "Massa roda (mirip cincin) terkonsentrasi di tepi (jauh dari sumbu), menghasilkan momen inersia lebih besar (I=MR²) dibanding bola pejal (I=⅖MR², massa tersebar sampai pusat) -- makanya roda terasa lebih 'lembam' diputar."
  - soal: "Dua gaya sama besar diberikan pada lengan yang sama panjang, tapi gaya A tegak lurus lengan (θ=90°) dan gaya B membentuk sudut 30° terhadap lengan. Manakah yang menghasilkan torsi lebih besar?"
    pilihan: ["Gaya A (θ=90°), karena sin90°=1 lebih besar dari sin30°=0,5", "Gaya B (θ=30°)", "Keduanya menghasilkan torsi sama besar", "Tidak bisa ditentukan tanpa tahu besar gayanya"]
    jawaban: 0
    penjelasan: "τ=F×r×sinθ -- untuk F dan r yang sama, torsi maksimum dicapai saat sinθ maksimum (θ=90°, sinθ=1). Gaya A menghasilkan torsi lebih besar daripada gaya B (sin30°=0,5)."
  - soal: "Batang tipis (massa M, panjang L) berputar pada sumbu di salah satu UJUNGnya punya momen inersia..."
    pilihan: ["I = ⅓ML²", "I = ½ML²", "I = ML²", "I = ⅕ML²"]
    jawaban: 0
    penjelasan: "Batang berputar pada sumbu di ujungnya: I = ⅓ML² -- salah satu rumus momen inersia standar."
  - soal: "Batang bermassa 3 kg sepanjang 1 m, berputar pada sumbu di ujungnya. Berapa momen inersianya?"
    pilihan: ["1 kg·m²", "3 kg·m²", "0,33 kg·m²", "1,5 kg·m²"]
    jawaban: 0
    penjelasan: "I = ⅓ML² = ⅓×3×1² = 1 kg·m²."
  - soal: "Satuan SI untuk momen inersia adalah..."
    pilihan: ["kg·m²", "N·m", "kg·m/s", "kg/m²"]
    jawaban: 0
    penjelasan: "Momen inersia I = k×M×R² punya satuan kg (massa) dikali m² (jarak kuadrat) = kg·m²."
  - soal: "Satuan SI untuk momen gaya (torsi) adalah..."
    pilihan: ["N·m (Newton-meter)", "kg·m²", "Joule", "Watt"]
    jawaban: 0
    penjelasan: "τ=F×r×sinθ punya satuan N (gaya) dikali m (jarak) = N·m -- meski satuannya mirip Joule (kg·m²/s²), torsi dan usaha adalah konsep yang berbeda."
draft: false
---

<style>
.mtr-def {
  border-left: 3px solid var(--gold);
  background: var(--gold-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-formula {
  text-align: center;
  font-size: 1.0625rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: #1e3a8a;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border: 1.5px solid #93c5fd;
  border-left: 5px solid #2563eb;
  border-radius: var(--radius-sm);
  padding: 0.75rem 1.1rem;
  margin-block: 1rem;
}

.mtr-note {
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-table-scroll {
  overflow-x: auto;
  margin-block: 1.25rem;
}

.mtr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
  min-width: 30rem;
}

.mtr-table th,
.mtr-table td {
  border: 1px solid var(--border);
  padding: 0.6rem 0.8rem;
  text-align: left;
}

.mtr-table th {
  background: var(--surface);
  font-weight: 600;
}

/* ---------- Kotak rumus: gaya "scrapbook" berwarna -- kartu krem sedikit
   miring + tempelan selolip di sudut, di atas latar gradasi pink/magenta
   dengan tepi atas disobek (clip-path). Playful, bukan kotak monokrom.
   Dipakai konsisten di semua materi yang ada rumusnya. ---------- */
.mtr-formula-utama {
  margin-block: 2rem;
  padding: 1.75rem 1.25rem 1.35rem;
  border-radius: 20px;
  background: linear-gradient(150deg, #3b82f6 0%, #1d4ed8 100%);
  box-shadow: 0 14px 30px rgba(29, 78, 216, 0.32);
  position: relative;
  clip-path: polygon(0% 11px, 4% 2px, 8% 13px, 12% 4px, 16% 12px, 20% 1px, 24% 10px, 28% 3px, 32% 13px, 36% 2px, 40% 11px, 44% 4px, 48% 12px, 52% 1px, 56% 10px, 60% 3px, 64% 13px, 68% 2px, 72% 11px, 76% 4px, 80% 12px, 84% 1px, 88% 10px, 92% 3px, 96% 13px, 100% 2px, 100% 100%, 0% 100%);
}
.mtr-formula-card {
  position: relative;
  background: #fdf0e0;
  border-radius: 14px;
  padding: 1.6rem 1.25rem;
  margin: 0.35rem auto 1.35rem;
  max-width: 22rem;
  transform: rotate(-1.4deg);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
}
.mtr-formula-card::before, .mtr-formula-card::after {
  content: '';
  position: absolute;
  width: 3.6rem;
  height: 1.6rem;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
}
.mtr-formula-card::before { top: -0.75rem; left: -0.6rem; transform: rotate(-16deg); }
.mtr-formula-card::after { top: -0.75rem; right: -0.6rem; transform: rotate(13deg); }
.mtr-formula-rumus {
  font-family: 'Courier New', monospace;
  font-weight: 800;
  font-size: 1.4rem;
  text-align: center;
  color: #26243b;
  letter-spacing: 0.01em;
}
.mtr-formula-rumus + .mtr-formula-rumus { margin-top: 0.6rem; }
.mtr-formula-keterangan-judul {
  color: #fff;
  font-weight: 800;
  font-family: var(--font-display);
  font-size: 0.9375rem;
  margin: 0 0 0.6rem;
}
.mtr-formula-keterangan {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: #dbeafe;
}
.mtr-formula-keterangan strong { color: #fff; font-family: 'Courier New', monospace; font-style: italic; }

.mtr-ilustrasi { margin-block: 1.75rem; padding: 1.25rem; border-radius: 1rem; background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #93c5fd; text-align: center; }
.mtr-ilustrasi svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
.mtr-ilustrasi-caption { margin: 0.75rem 0 0; font-size: 0.875rem; color: #1e3a8a; font-weight: 600; }

</style>

## 🌱 Apersepsi

Semua materi sebelumnya di bab ini membahas gerak LURUS (translasi). Sekarang kita masuk ke jenis gerak yang berbeda: ROTASI (berputar). Pernah coba buka pintu dengan mendorong di bagian yang dekat engsel? Rasanya jauh lebih berat dibanding mendorong di tepi pintu (dekat pegangan/kenop), padahal gaya dorongmu sama saja. Hal yang sama terjadi saat membuka baut: kunci pas bertangkai panjang lebih gampang memutar baut yang keras dibanding tangkai pendek. Jawabannya ada di konsep **momen gaya (torsi)**.

## 🤔 Coba Pikirkan

Kamu mau membuka baut yang sangat keras. Menurutmu, lebih efektif mendorong kunci pas di dekat bautnya (lengan pendek) atau di ujung tangkai yang jauh dari baut (lengan panjang), untuk gaya dorong tangan yang sama?

## 🔎 Eksplorasi Konsep

### Momen Gaya (Torsi)

<div class="mtr-formula-utama">
  <div class="mtr-formula-card">
    <div class="mtr-formula-rumus">τ = F × r × sinθ</div>
  </div>
  <p class="mtr-formula-keterangan-judul">Keterangan:</p>
  <ul class="mtr-formula-keterangan">
    <li><strong>τ</strong> (tau) = momen gaya/torsi (N·m)</li>
    <li><strong>F</strong> = besar gaya (N)</li>
    <li><strong>r</strong> = lengan gaya, jarak dari sumbu putar ke titik gaya bekerja (m)</li>
    <li><strong>θ</strong> = sudut antara arah gaya dan lengan gaya</li>
  </ul>
</div>

Torsi adalah "versi rotasi" dari gaya -- ia menentukan seberapa efektif suatu gaya MEMUTAR benda pada sumbunya. Semakin besar F, semakin besar r, dan semakin dekat θ ke 90° (gaya tegak lurus lengan), semakin besar torsinya.

<div class="mtr-def">
🔧 Torsi maksimum dicapai saat gaya diberikan TEGAK LURUS terhadap lengan (θ=90°, sinθ=1). Kalau gaya SEJAJAR lengan (θ=0° atau 180°), torsinya NOL -- tidak ada efek memutar sama sekali.
</div>

Inilah sebabnya pintu terasa berat didorong dekat engsel: lengan gaya (r) jadi kecil, sehingga torsinya kecil meski gaya dorongmu sama. Mendorong di tepi pintu (jauh dari engsel) memberi lengan (r) yang jauh lebih besar, menghasilkan torsi yang jauh lebih besar untuk gaya dorong yang sama persis.

<div class="mtr-ilustrasi">
<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="400" height="220" fill="#eff6ff"/>
<circle cx="50" cy="170" r="10" fill="#1e3a8a"/>
<text x="30" y="200" font-size="13" fill="#1e3a8a" font-weight="700">Engsel</text>
<line x1="50" y1="170" x2="340" y2="60" stroke="#3b82f6" stroke-width="10" stroke-linecap="round"/>
<circle cx="170" cy="129" r="7" fill="#1e3a8a"/>
<line x1="170" y1="129" x2="170" y2="80" stroke="#ef4444" stroke-width="5"/>
<polygon points="170,80 162,94 178,94" fill="#ef4444"/>
<text x="178" y="92" font-size="13" fill="#ef4444" font-weight="700">F (dekat engsel)</text>
<circle cx="320" cy="68" r="7" fill="#1e3a8a"/>
<line x1="320" y1="68" x2="320" y2="19" stroke="#059669" stroke-width="5"/>
<polygon points="320,19 312,33 328,33" fill="#059669"/>
<text x="246" y="17" font-size="13" fill="#059669" font-weight="700">F (jauh dari engsel)</text>
<line x1="50" y1="178" x2="170" y2="178" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
<text x="90" y="194" font-size="12" fill="#64748b">r kecil</text>
<line x1="50" y1="185" x2="320" y2="185" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
<text x="220" y="212" font-size="12" fill="#64748b">r besar</text>
</svg>
<p class="mtr-ilustrasi-caption">Gaya dorong yang sama (F) menghasilkan torsi lebih besar kalau diberikan pada lengan (r) yang lebih panjang -- seperti mendorong pintu di tepinya, bukan dekat engsel.</p>
</div>

### Momen Inersia

Kalau massa adalah "kelembaman" pada gerak LURUS (semakin besar massa, semakin sulit dipercepat), **momen inersia (I)** adalah kelembaman pada gerak ROTASI -- seberapa sulit mengubah kecepatan sudut suatu benda. Bedanya, momen inersia TIDAK cuma bergantung massa total, tapi juga bagaimana massa itu **tersebar** relatif terhadap sumbu putar.

<div class="mtr-table-scroll">
<table class="mtr-table">
<tr><th>Bentuk Benda</th><th>Momen Inersia (poros di pusat, kecuali disebutkan lain)</th></tr>
<tr><td>Cincin/Hoop (massa di tepi)</td><td>I = MR²</td></tr>
<tr><td>Piringan Pejal (disk)</td><td>I = ½MR²</td></tr>
<tr><td>Bola Pejal</td><td>I = ⅖MR²</td></tr>
<tr><td>Batang tipis, poros di ujung</td><td>I = ⅓ML²</td></tr>
</table>
</div>

<div class="mtr-note">
⚠️ <strong>Hati-hati miskonsepsi:</strong> <del>momen inersia hanya bergantung pada massa total benda</del>. Yang benar: momen inersia SANGAT bergantung pada SEBARAN massa. Cincin dan bola pejal dengan massa dan jari-jari SAMA punya momen inersia BERBEDA (cincin lebih besar), karena massa cincin terkonsentrasi jauh dari sumbu (di tepi), sedangkan bola pejal tersebar sampai ke pusat.
</div>

## 🧠 Mari Kita Analisis

Fajar bilang: **"Dua benda dengan massa yang sama pasti punya momen inersia yang sama juga, asalkan jari-jarinya sama."**

Menurutmu, apakah pernyataan Fajar ini tepat?

Coba pikirkan dulu sebelum lanjut baca. ...

Pernyataan Fajar **keliru**. Momen inersia bergantung pada BENTUK benda (bagaimana massa tersebar), bukan cuma massa dan jari-jari saja. Cincin (I=MR²) dan bola pejal (I=⅖MR²) dengan massa dan jari-jari yang SAMA punya momen inersia yang BERBEDA, karena sebaran massanya berbeda.

## 🧮 Contoh Soal

### Contoh 1 — Menghitung Torsi

Gaya 50 N diberikan tegak lurus (θ=90°) pada lengan sepanjang 0,4 m. Berapa torsinya?

<div class="mtr-formula">τ = F×r×sinθ = 50×0,4×sin90° = 50×0,4×1 = 20 N·m</div>

### Contoh 2 — Torsi dengan Sudut Miring

Gaya 60 N diberikan pada lengan 0,3 m dengan sudut 30° terhadap lengan (sin30°=0,5). Berapa torsinya?

<div class="mtr-formula">τ = F×r×sinθ = 60×0,3×0,5 = 9 N·m</div>

### Contoh 3 — Momen Inersia Berbagai Bentuk

Bandingkan momen inersia tiga benda bermassa 2 kg dengan jari-jari 0,5 m yang SAMA: cincin, piringan pejal, dan bola pejal.

<div class="mtr-formula">Cincin: I = MR² = 2×0,5² = 0,5 kg·m²</div>
<div class="mtr-formula">Piringan pejal: I = ½MR² = ½×2×0,5² = 0,25 kg·m²</div>
<div class="mtr-formula">Bola pejal: I = ⅖MR² = 0,4×2×0,5² = 0,2 kg·m²</div>

Cincin punya momen inersia PALING BESAR (massa paling jauh dari sumbu), bola pejal PALING KECIL (massa paling tersebar ke pusat).

## 💡 Coba Pikirkan Lagi

Tadi kamu menebak posisi paling efektif mendorong kunci pas untuk membuka baut keras. Sekarang setelah belajar konsepnya, gimana -- jawabanmu masih sama?

Jawaban ilmiahnya: mendorong di UJUNG tangkai (lengan panjang) lebih efektif, karena torsi berbanding lurus dengan lengan gaya (r) -- untuk gaya dorong yang sama, lengan lebih panjang menghasilkan torsi lebih besar.

## 🔥 Tantangan HOTS

Sebuah pintu didorong dengan gaya 15 N pada jarak 0,8 m dari engselnya, membentuk sudut 90° terhadap pintu. Bandingkan torsi ini dengan torsi yang dihasilkan kalau gaya yang SAMA didorong pada jarak 0,4 m dari engsel (juga tegak lurus). Berapa kali lipat perbedaan torsinya?

<div class="mtr-note">
💭 <strong>Petunjuk:</strong> hitung τ untuk masing-masing jarak (r=0,8 m dan r=0,4 m), lalu bandingkan rasionya.
</div>

## 🪞 Refleksi

✨ Coba lengkapi kalimat ini di catatanmu: **"Sekarang saya paham bahwa momen gaya dan momen inersia itu ..."**

Atau renungkan: bagian mana yang masih terasa membingungkan -- pengaruh sudut pada torsi, atau kenapa bentuk benda memengaruhi momen inersia?

## 🌟 Ringkasan

* 🔧 Momen gaya (torsi): **τ = F×r×sinθ** -- maksimum saat gaya tegak lurus lengan, nol saat sejajar lengan.
* 🔧 Momen inersia (I): "kelembaman rotasi", bergantung bentuk DAN sebaran massa, bukan cuma massa total.
* 🔧 Cincin (I=MR²) &gt; Piringan Pejal (I=½MR²) &gt; Bola Pejal (I=⅖MR²) untuk massa dan jari-jari yang sama.

