---
title: "Energi Tak Terbarukan"
description: "Kenalan sama sumber energi tak terbarukan -- minyak bumi, batu bara, gas alam, dan nuklir -- cara terbentuknya, pemanfaatannya, dan kenapa manusia perlu berhati-hati dengan ketergantungan padanya."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-29
tags: ["Energi", "Sumber Energi", "Energi Tak Terbarukan", "Fisika Kelas X", "Fase E"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/non-renewable-energy-lab.html"
  judul: "Non-Renewable Energy Lab"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1300
kuis:
  - soal: "Kenapa bahan bakar fosil (minyak bumi, batu bara, gas alam) digolongkan sebagai sumber energi tak terbarukan?"
    pilihan: ["Karena harganya mahal", "Karena butuh waktu jutaan tahun untuk terbentuk, jauh lebih lambat dari kecepatan pemakaiannya", "Karena tidak bisa dibakar", "Karena cuma ada di satu negara saja"]
    jawaban: 1
    penjelasan: "Fosil terbentuk dari sisa makhluk hidup purba yang terkubur & mengalami tekanan-panas selama jutaan tahun -- proses ini jauh lebih lambat dibanding kecepatan manusia menambangnya."
  - soal: "Ketiga bahan bakar fosil (minyak bumi, batu bara, gas alam) punya kesamaan asal, yaitu berasal dari..."
    pilihan: ["Reaksi nuklir di dalam Bumi", "Sisa makhluk hidup purba yang terkubur dan mengalami tekanan serta panas selama jutaan tahun", "Aktivitas gunung berapi", "Proses pembekuan air laut"]
    jawaban: 1
    penjelasan: "Ketiganya terbentuk dari sisa organisme purba (tumbuhan/hewan/plankton) yang terkubur lapisan bumi dan mengalami tekanan & panas dalam waktu sangat lama."
  - soal: "Energi nuklir memanfaatkan reaksi..."
    pilihan: ["Pembakaran biasa seperti bahan bakar fosil", "Fisi (pembelahan) inti atom, biasanya uranium", "Fotosintesis", "Gesekan mekanis"]
    jawaban: 1
    penjelasan: "PLTN memanfaatkan reaksi fisi nuklir -- inti atom berat (mis. uranium) dipecah, melepaskan energi dalam jumlah sangat besar."
  - soal: "Salah satu kekurangan utama energi fosil dibanding energi terbarukan adalah..."
    pilihan: ["Tidak bisa menghasilkan listrik sama sekali", "Menghasilkan emisi gas rumah kaca saat dibakar, berkontribusi pada pemanasan global", "Tidak bisa dipakai untuk transportasi", "Harganya selalu lebih mahal dari energi terbarukan"]
    jawaban: 1
    penjelasan: "Pembakaran bahan bakar fosil melepaskan karbon dioksida dan gas rumah kaca lain, yang berkontribusi pada pemanasan global -- salah satu alasan utama dorongan transisi ke energi terbarukan."
  - soal: "Manakah pernyataan yang paling tepat soal energi nuklir?"
    pilihan: ["Energi nuklir cuma dipakai untuk senjata, tidak ada manfaat lain", "Energi nuklir bisa menghasilkan listrik dalam jumlah besar tanpa emisi karbon langsung, tapi punya isu keamanan & limbah radioaktif", "Energi nuklir termasuk sumber energi terbarukan", "Energi nuklir tidak berbahaya sama sekali"]
    jawaban: 1
    penjelasan: "PLTN bisa menghasilkan listrik besar tanpa emisi karbon langsung -- tapi tetap punya tantangan serius soal keamanan reaktor dan pengelolaan limbah radioaktif."
draft: false
---

<style>
.mtr-table-wrap, .mtr-cards { margin-block: 2rem; }

.mtr-table-scroll {
  overflow-x: auto;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  background: var(--surface);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow: var(--shadow-sm);
}

.mtr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
}

.mtr-table th, .mtr-table td {
  padding: 0.65rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

.mtr-table thead th {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--ink-soft);
  background-color: var(--accent-soft);
}

.mtr-table tbody tr:last-child td { border-bottom: none; }
.mtr-table td em { color: var(--accent); font-style: normal; font-weight: 600; }

.mtr-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  gap: 1rem;
}

.mtr-card {
  background: var(--surface);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
}

.mtr-card-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
.mtr-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1rem; }
.mtr-card p { font-size: 0.8438rem; color: var(--ink-soft); margin: 0; }

.mtr-note {
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-note strong.mtr-wrong { color: var(--rose); }
.mtr-note strong.mtr-right { color: var(--teal); }

.mtr-cta {
  margin-block: 2.5rem 1rem;
  padding: 1.5rem;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
}

.mtr-cta p { margin: 0 0 1rem; color: var(--ink-soft); }
</style>

Di materi [Sumber Energi](/materi/sumber-energi), kita sudah kenalan sama klasifikasi terbarukan dan tak terbarukan. Sekarang kita bahas dulu kategori yang paling banyak dipakai dunia saat ini: **energi tak terbarukan**.

## ⛏️ Bahan Bakar Fosil

Tiga jenis bahan bakar fosil yang paling umum sama-sama berasal dari sisa makhluk hidup purba yang terkubur, mengalami tekanan dan panas selama jutaan tahun.

<div class="mtr-cards">
<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">🛢️</span>
    <h4>Minyak Bumi</h4>
    <p>Diolah jadi bensin, solar, dan berbagai produk petrokimia -- bahan bakar transportasi paling umum.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">⚫</span>
    <h4>Batu Bara</h4>
    <p>Banyak dipakai buat pembangkit listrik tenaga uap (PLTU) -- salah satu sumber listrik terbesar dunia.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🔥</span>
    <h4>Gas Alam</h4>
    <p>Dipakai buat memasak (LPG), pembangkit listrik, sampai bahan baku industri -- pembakarannya relatif lebih bersih dari batu bara.</p>
  </div>
</div>
</div>

<div class="mtr-note">
💡 Proses pembentukan fosil butuh waktu <strong>jutaan tahun</strong> -- sedangkan manusia bisa menghabiskan cadangan yang tersedia dalam hitungan puluhan sampai ratusan tahun saja. Itulah inti kenapa sumber ini disebut tak terbarukan.
</div>

## ☢️ Energi Nuklir

Berbeda dari bahan bakar fosil, energi nuklir tidak "dibakar" -- energi nuklir dilepas lewat reaksi **fisi** (pembelahan inti atom), biasanya memakai uranium sebagai bahan bakarnya. Reaktor nuklir memanfaatkan panas dari reaksi ini untuk menggerakkan turbin dan menghasilkan listrik, mirip prinsip PLTU tapi sumber panasnya berbeda.

<div class="mtr-note">
⚠️ Energi nuklir digolongkan tak terbarukan karena bahan bakarnya (uranium) tetap sumber daya tambang yang terbatas jumlahnya di alam -- meskipun energi yang dilepas per kilogram bahan bakarnya jauh lebih besar dibanding fosil.
</div>

## ⚖️ Kelebihan dan Kekurangan

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Aspek</th><th>Kelebihan</th><th>Kekurangan</th></tr>
</thead>
<tbody>
<tr><td>Bahan Bakar Fosil</td><td>Teknologi sudah matang, infrastruktur luas, energi per satuan volume tinggi</td><td>Menghasilkan emisi gas rumah kaca, cadangan makin menipis, pencemaran udara</td></tr>
<tr><td>Energi Nuklir</td><td>Menghasilkan listrik besar tanpa emisi karbon langsung, sangat efisien per kg bahan bakar</td><td>Risiko keamanan reaktor, limbah radioaktif butuh pengelolaan khusus dalam waktu sangat lama</td></tr>
</tbody>
</table>
</div>
</div>

Sekarang coba jadi "operator" mini pembangkit listrik tenaga uap di simulasi bawah ini -- pilih bahan bakarnya, nyalakan, dan biarkan berjalan sampai cadangannya benar-benar habis.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Energi nuklir sama saja dengan bom atom."</strong><br>
Terlalu sempit. <strong class="mtr-right">Reaktor PLTN dirancang untuk melepas energi secara terkendali dan bertahap</strong>, sangat berbeda dari reaksi berantai tak terkendali pada senjata nuklir.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Selama masih ada cadangan di perut bumi, minyak bumi tidak akan pernah habis."</strong><br>
Keliru. <strong class="mtr-right">Cadangan fosil jumlahnya terbatas dan terus berkurang</strong> seiring pemakaian, sementara pembentukannya baru terjadi lagi dalam skala waktu jutaan tahun -- praktis tidak relevan buat kehidupan manusia sekarang.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Gas alam sama kotornya dengan batu bara."</strong><br>
Kurang tepat. <strong class="mtr-right">Pembakaran gas alam menghasilkan emisi karbon yang relatif lebih rendah dibanding batu bara</strong> per satuan energi yang dihasilkan -- meski tetap sumber tak terbarukan yang menghasilkan emisi.
</div>

## 🎯 Intinya

Perhatikan bahwa hampir semua kelebihan energi tak terbarukan (teknologi matang, energi padat, infrastruktur sudah ada) berhadapan langsung dengan kekurangannya yang paling serius: **sumbernya terbatas dan dampak lingkungannya besar**. Ini bukan berarti energi tak terbarukan harus langsung ditinggalkan -- tapi menjelaskan kenapa dunia sedang berusaha **menyeimbangkan** ketergantungan padanya dengan sumber energi terbarukan, bukan memilih salah satu secara ekstrem.

## 🤔 Coba Pikirkan

Sebuah kota kecil selama puluhan tahun mengandalkan PLTU batu bara sebagai satu-satunya sumber listrik mereka.

1. Apa risiko yang dihadapi kota itu kalau terus bergantung pada satu sumber energi tak terbarukan saja?
2. Menurutmu, apakah solusinya harus langsung berhenti total memakai batu bara, atau ada pendekatan lain yang lebih realistis?

Coba diskusikan sebelum lanjut ke materi berikutnya.

<div class="mtr-cta">
<p>Sekarang saatnya kenalan sama alternatifnya -- sumber energi yang bisa terus "terisi ulang" secara alami.</p>
<a href="/materi/energi-terbarukan" class="btn btn-primary">☀️ Lanjut ke Energi Terbarukan →</a>
</div>
