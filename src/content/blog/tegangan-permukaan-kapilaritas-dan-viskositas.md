---
title: "Tegangan Permukaan, Kapilaritas, dan Viskositas"
description: "Kenapa serangga bisa 'berjalan' di atas air, kenapa air naik sendiri lewat pipa sempit, dan kenapa madu mengalir jauh lebih lambat dari air -- tiga sifat fluida yang sering luput diperhatikan."
category: materi
mapel: "Fisika"
kelas: "XI"
pubDate: 2026-09-14
tags: ["Tegangan Permukaan", "Kapilaritas", "Viskositas", "Fluida Statis", "Fisika Kelas XI"]
kuis:
  - soal: "Tegangan permukaan terjadi karena..."
    pilihan: ["Gravitasi menarik molekul fluida ke bawah", "Gaya kohesi antar-molekul di permukaan fluida saling tarik-menarik lebih kuat dari sekitarnya", "Fluida selalu ingin membeku", "Tekanan atmosfer mendorong fluida"]
    jawaban: 1
    penjelasan: "Molekul di permukaan fluida hanya ditarik oleh molekul di sisi dan bawahnya (tidak ada tarikan dari atas), membuat permukaan berkontraksi seperti membran elastis tipis."
  - soal: "Air bisa naik sendiri di pipa kapiler yang sangat sempit karena..."
    pilihan: ["Adhesi air-kaca lebih kuat dari kohesi antar-molekul air", "Kohesi air lebih kuat dari adhesinya ke kaca", "Air punya massa jenis sangat kecil", "Tekanan atmosfer mendorong air naik"]
    jawaban: 0
    penjelasan: "Karena gaya adhesi (tarik-menarik air-kaca) lebih kuat dari kohesi (tarik-menarik antar molekul air), air 'menempel dan menyeret' dirinya naik di dinding pipa sempit."
  - soal: "Raksa (air raksa) di pipa kapiler kaca justru TURUN (meniskus cembung), bukan naik. Ini karena..."
    pilihan: ["Raksa lebih berat dari air", "Kohesi raksa lebih kuat dari adhesinya ke kaca", "Raksa tidak punya tegangan permukaan", "Raksa berwujud gas"]
    jawaban: 1
    penjelasan: "Pada raksa, gaya kohesi antar-molekul raksa jauh lebih kuat dari adhesinya ke kaca, sehingga raksa 'menarik dirinya sendiri' menjauhi dinding dan permukaannya turun (meniskus cembung) -- kebalikan dari air."
  - soal: "Viskositas suatu fluida menyatakan..."
    pilihan: ["Berat jenis fluida", "Kekentalan atau gesekan internal antar-lapisan fluida yang mengalir", "Suhu fluida", "Warna fluida"]
    jawaban: 1
    penjelasan: "Viskositas adalah ukuran kekentalan fluida -- madu punya viskositas jauh lebih tinggi dari air, makanya mengalir lebih lambat."
  - soal: "Menurut Hukum Stokes, gaya gesek yang dialami bola kecil yang jatuh dalam fluida kental dirumuskan Fs = 6πηrv. Kalau jari-jari bola (r) diperbesar 2 kali, gaya geseknya menjadi..."
    pilihan: ["Tetap sama", "2 kali lebih besar", "4 kali lebih besar", "Setengah kali"]
    jawaban: 1
    penjelasan: "Fs berbanding lurus dengan r (pangkat 1), jadi kalau r menjadi 2 kali, Fs juga menjadi 2 kali lebih besar (dengan η dan v tetap)."
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
</style>

Menutup Fluida Statis, kita bahas tiga sifat fluida yang jarang disadari tapi menjelaskan banyak fenomena sehari-hari: kenapa serangga bisa "berjalan" di air, kenapa air naik sendiri lewat pipa sempit, dan kenapa madu mengalir jauh lebih lambat dari air.

## 💧 Tegangan Permukaan

Molekul-molekul di DALAM fluida ditarik ke segala arah secara merata oleh molekul-molekul sekitarnya (gaya kohesi), sehingga gaya-gaya itu saling meniadakan. Tapi molekul di PERMUKAAN cuma ditarik oleh molekul di samping dan bawahnya (tidak ada molekul fluida di atasnya) -- akibatnya permukaan fluida berkontraksi, berperilaku seperti membran elastis tipis yang menegang. Inilah **tegangan permukaan** ($\gamma$).

$$\gamma = \frac{F}{d}$$

- $\gamma$ = tegangan permukaan (N/m)
- $F$ = gaya yang bekerja pada permukaan (N)
- $d$ = panjang permukaan/keliling kontak (m)

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🐛</span><h4>Serangga Air (Water Strider)</h4><p>Kakinya menyebarkan berat tubuhnya ke area luas tanpa memecah "membran" permukaan air, sehingga bisa "berjalan" di atasnya.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">💧</span><h4>Tetesan Air Berbentuk Bulat</h4><p>Tegangan permukaan menarik permukaan tetesan sekecil mungkin -- dan bentuk dengan luas permukaan terkecil untuk volume tertentu adalah BOLA.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">📌</span><h4>Jarum Mengapung di Air</h4><p>Jarum baja (lebih rapat dari air) bisa "mengapung" kalau diletakkan hati-hati mendatar, ditopang oleh tegangan permukaan, bukan gaya apung.</p></div>
</div>
</div>

## 📈 Kapilaritas

**Kapilaritas** adalah naik atau turunnya permukaan fluida di dalam pipa yang sangat sempit (pipa kapiler), akibat perbandingan antara dua gaya:
- **Adhesi**: gaya tarik-menarik antara molekul fluida dengan dinding pipa
- **Kohesi**: gaya tarik-menarik antar-molekul fluida itu sendiri

$$h = \frac{2\gamma\cos\theta}{\rho \cdot g \cdot r}$$

- $h$ = kenaikan/penurunan fluida dalam pipa (m)
- $\theta$ = sudut kontak fluida dengan dinding pipa
- $r$ = jari-jari pipa kapiler (m)

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Fluida</th><th>Adhesi vs Kohesi</th><th>Yang Terjadi</th></tr></thead>
<tbody>
<tr><td>Air di pipa kaca</td><td>Adhesi &gt; Kohesi</td><td><em>NAIK</em>, meniskus cekung (melengkung ke bawah)</td></tr>
<tr><td>Air raksa di pipa kaca</td><td>Kohesi &gt; Adhesi</td><td><em>TURUN</em>, meniskus cembung (melengkung ke atas)</td></tr>
</tbody>
</table>
</div>
</div>

Contoh nyata: air merambat naik lewat sumbu kompor minyak, air merembes naik dari akar ke daun tanaman lewat pembuluh kapiler yang sangat sempit, dan tinta merambat naik di kertas tisu.

## 🍯 Viskositas

**Viskositas** adalah ukuran kekentalan fluida -- gesekan internal antar-lapisan fluida saat mengalir. Madu dan oli punya viskositas tinggi (mengalir lambat, "kental"), sementara air dan bensin punya viskositas rendah (mengalir cepat, "encer").

Untuk benda kecil (bola) yang bergerak dalam fluida kental, gaya gesek yang dialaminya dirumuskan lewat **Hukum Stokes**:

$$F_s = 6\pi\eta r v$$

- $F_s$ = gaya gesek Stokes (N)
- $\eta$ (eta) = koefisien viskositas fluida (Pa·s)
- $r$ = jari-jari bola (m)
- $v$ = kecepatan bola relatif terhadap fluida (m/s)

Saat sebuah bola dijatuhkan ke dalam fluida kental, awalnya ia dipercepat oleh gravitasi -- tapi makin cepat bola bergerak, makin besar pula gaya gesek Stokes yang melawannya. Akhirnya tercapai keadaan di mana berat bola (dikurangi gaya apung) persis diimbangi oleh gaya gesek: bola bergerak dengan kecepatan TETAP, disebut **kecepatan terminal**.

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">💧</span><h4>Viskositas Rendah</h4><p>Air, bensin, alkohol -- mengalir cepat dan mudah, gesekan internalnya kecil.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🛢️</span><h4>Viskositas Sedang</h4><p>Oli mesin, minyak goreng -- terasa lebih "berat" saat dituang dibanding air.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🍯</span><h4>Viskositas Tinggi</h4><p>Madu, selai, aspal cair -- mengalir sangat lambat, hampir seperti padatan pada suhu ruang.</p></div>
</div>
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kapilaritas selalu membuat fluida NAIK di pipa sempit."</strong><br>
Tidak selalu. <strong class="mtr-right">Arahnya (naik atau turun) bergantung pada perbandingan adhesi vs kohesi fluida itu terhadap dinding pipanya</strong> -- air naik (adhesi lebih kuat), tapi air raksa justru TURUN (kohesi lebih kuat). Bukan sifat universal semua fluida.
</div>

## 🤔 Coba Pikirkan

1. Kenapa serangga air strider bisa "berjalan" di atas air tanpa tenggelam, padahal massa jenis tubuhnya lebih besar dari air?
2. Kalau kamu menjatuhkan kelereng ke dalam air dan ke dalam madu secara bersamaan dari ketinggian yang sama, mana yang lebih dulu mencapai dasar wadah? Kenapa?

<div class="mtr-cta">
<p>Fluida Statis sudah tuntas. Sekarang kita masuk ke Fluida Dinamis -- fluida yang MENGALIR. Kita mulai dari aturan paling dasar: kenapa aliran air menyembur lebih deras saat ujung selang ditekan.</p>
<a href="/materi/asas-kontinuitas-dan-debit-aliran" class="btn btn-primary">🔀 Lanjut ke Asas Kontinuitas dan Debit Aliran →</a>
</div>
