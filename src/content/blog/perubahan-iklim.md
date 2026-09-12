---
title: "Perubahan Iklim"
description: "Penyebab perubahan iklim (efek rumah kaca yang diperparah aktivitas manusia), dampaknya bagi bumi, dan upaya mitigasi maupun adaptasi yang sedang dilakukan -- termasuk Perjanjian Paris."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-09-13
tags: ["Perubahan Iklim", "Pemanasan Global", "Fisika Kelas X", "Fase E"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/perubahan-iklim.html"
  judul: "Climate Change Simulator"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1650
kuis:
  - soal: "Efek rumah kaca adalah proses alami di mana..."
    pilihan: ["Bumi menjadi terlalu dingin karena tidak ada sinar matahari", "Gas rumah kaca di atmosfer menahan sebagian panas matahari, menjaga bumi tetap hangat", "Rumah kaca di kebun menghasilkan gas beracun", "Matahari memancarkan lebih banyak panas dari biasanya"]
    jawaban: 1
    penjelasan: "Efek rumah kaca alami itu penting -- tanpanya, bumi akan jauh lebih dingin dan tidak layak huni. Masalahnya muncul saat efek ini DIPERKUAT BERLEBIHAN oleh aktivitas manusia."
  - soal: "Penyebab utama peningkatan gas rumah kaca akibat aktivitas manusia adalah..."
    pilihan: ["Pembakaran bahan bakar fosil dan deforestasi", "Terlalu banyak pohon ditanam", "Matahari yang semakin panas", "Gunung berapi yang tidak pernah meletus"]
    jawaban: 0
    penjelasan: "Pembakaran bahan bakar fosil (lihat materi Energi Tak Terbarukan) dan deforestasi (penebangan hutan) adalah dua penyebab utama meningkatnya gas rumah kaca akibat manusia."
  - soal: "Manakah yang TERMASUK dampak perubahan iklim?"
    pilihan: ["Kenaikan permukaan laut akibat mencairnya es kutub", "Cuaca menjadi selalu stabil dan mudah diprediksi", "Semua spesies makhluk hidup diuntungkan", "Suhu bumi menjadi lebih dingin secara merata"]
    jawaban: 0
    penjelasan: "Mencairnya es di kutub dan gletser menyebabkan kenaikan permukaan laut -- salah satu dampak paling nyata dari perubahan iklim."
  - soal: "Upaya menanam kembali hutan yang gundul untuk menyerap lebih banyak CO2 disebut..."
    pilihan: ["Deforestasi", "Reboisasi", "Adaptasi", "Fosilisasi"]
    jawaban: 1
    penjelasan: "Reboisasi adalah penanaman kembali hutan, membantu menyerap CO2 dari atmosfer lewat fotosintesis."
  - soal: "Kesepakatan internasional yang menargetkan kenaikan suhu global di bawah 1,5-2°C disebut..."
    pilihan: ["Perjanjian Paris (Paris Agreement)", "Konferensi Pengukuran Dunia", "Deklarasi Energi Fosil", "Traktat Kutub Utara"]
    jawaban: 0
    penjelasan: "Perjanjian Paris (2015) adalah kesepakatan internasional yang menargetkan menahan kenaikan suhu global di bawah 2°C, idealnya di bawah 1,5°C, dibanding masa pra-industri."
  - soal: "Mengurangi PENYEBAB perubahan iklim (mis. transisi ke energi terbarukan) disebut upaya..."
    pilihan: ["Mitigasi", "Adaptasi", "Deforestasi", "Fosilisasi"]
    jawaban: 0
    penjelasan: "Mitigasi = mengurangi penyebab perubahan iklim. Adaptasi = menyesuaikan diri dengan dampak yang sudah/akan terjadi -- keduanya sama-sama dibutuhkan."
draft: false
---

<style>
.mtr-table-wrap, .mtr-cards, .mtr-steps { margin-block: 2rem; }

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

.mtr-step {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 1rem;
  position: relative;
  padding-bottom: 1.5rem;
}

.mtr-step:last-child { padding-bottom: 0; }

.mtr-step-num {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  background: linear-gradient(135deg, var(--rose), var(--gold));
  color: var(--accent-ink);
  box-shadow: var(--glow-accent);
  position: relative;
  z-index: 1;
}

.mtr-step:not(:last-child) .mtr-step-num::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 1px;
  height: 1.5rem;
  background: var(--border-strong);
}

.mtr-step-body p { margin: 0; color: var(--ink-soft); font-size: 0.9375rem; }
.mtr-step-body strong { color: var(--ink); }

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

Ingat materi [Energi Tak Terbarukan](/materi/energi-tak-terbarukan) dan [Permasalahan dan Upaya Pemenuhan Kebutuhan Energi](/materi/permasalahan-dan-upaya-pemenuhan-kebutuhan-energi)? Salah satu dampak yang sempat disinggung di sana adalah pemanasan global. Sekarang kita bahas tuntas isu yang jauh lebih besar dari itu: **Perubahan Iklim** -- penyebabnya, dampaknya bagi bumi, dan upaya nyata yang sedang dilakukan dunia.

## 🌡️ Efek Rumah Kaca -- Alami, Tapi Diperparah Manusia

Bumi tetap hangat karena **efek rumah kaca**: gas-gas tertentu di atmosfer (karbon dioksida/CO2, metana, dan lainnya) menahan sebagian panas matahari yang dipantulkan bumi, mirip cara kaca rumah kaca menahan panas di dalamnya. Efek ini **alami dan penting** -- tanpanya, suhu bumi akan jauh lebih dingin dan sulit dihuni.

Masalahnya: sejak revolusi industri, manusia memperbanyak gas rumah kaca secara drastis lewat pembakaran bahan bakar fosil dan deforestasi -- efek rumah kaca jadi jauh lebih kuat dari seharusnya, dan suhu bumi naik lebih cepat dari yang alami.

## 🔥 Penyebab Utama Perubahan Iklim

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">⛽</span><h4>Pembakaran Bahan Bakar Fosil</h4><p>Minyak bumi, batu bara, dan gas alam (lihat materi Energi Tak Terbarukan) melepaskan CO2 dalam jumlah besar saat dibakar.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🪓</span><h4>Deforestasi</h4><p>Penebangan hutan mengurangi jumlah pohon yang menyerap CO2 lewat fotosintesis -- makin sedikit hutan, makin banyak CO2 tertinggal di udara.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🐄</span><h4>Peternakan Skala Besar</h4><p>Menghasilkan gas metana dalam jumlah besar, salah satu gas rumah kaca yang efeknya jauh lebih kuat dari CO2 per satuan massa.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🏭</span><h4>Aktivitas Industri</h4><p>Proses produksi (semen, kimia, dst) melepaskan berbagai gas rumah kaca sebagai hasil sampingan.</p></div>
</div>
</div>

## ⚠️ Dampak Perubahan Iklim

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Kenaikan Suhu Global.</strong> Suhu rata-rata bumi terus naik dari waktu ke waktu, memicu berbagai dampak lain di bawah ini.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Mencairnya Es Kutub dan Gletser.</strong> Suhu yang lebih tinggi mempercepat pencairan es di kutub dan gletser gunung, menambah volume air laut.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Kenaikan Permukaan Laut.</strong> Akibat es yang mencair (ditambah air laut yang memuai karena lebih hangat), permukaan laut naik -- mengancam daerah pesisir dan pulau kecil.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Cuaca Ekstrem Lebih Sering.</strong> Banjir, kekeringan, gelombang panas, dan badai besar terjadi lebih sering dan lebih intens dari sebelumnya.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">5</span>
    <div class="mtr-step-body">
      <p><strong>Ancaman Keanekaragaman Hayati.</strong> Banyak spesies tumbuhan dan hewan kesulitan beradaptasi dengan perubahan suhu dan habitat yang cepat, meningkatkan risiko kepunahan.</p>
    </div>
  </div>
</div>

## ✅ Mitigasi vs Adaptasi

Ada dua jenis upaya menghadapi perubahan iklim, dan keduanya sama-sama dibutuhkan:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Jenis Upaya</th><th>Artinya</th><th>Contoh</th></tr>
</thead>
<tbody>
<tr><td>Mitigasi</td><td>Mengurangi PENYEBAB perubahan iklim</td><td>Transisi ke energi terbarukan, efisiensi energi, reboisasi, mengurangi limbah</td></tr>
<tr><td>Adaptasi</td><td>Menyesuaikan diri dengan DAMPAK yang sudah/akan terjadi</td><td>Infrastruktur tahan banjir, teknologi pertanian tahan kekeringan, tanggul pesisir</td></tr>
</tbody>
</table>
</div>
</div>

Salah satu kesepakatan mitigasi terbesar di dunia adalah **Perjanjian Paris (Paris Agreement, 2015)** -- disepakati hampir semua negara di dunia, menargetkan menahan kenaikan suhu global di bawah 2°C dibanding masa pra-industri, idealnya di bawah 1,5°C.

Coba jadi "pembuat kebijakan iklim" sendiri di simulasi bawah ini -- atur upaya pengurangan emisi, energi terbarukan, dan reboisasi, lalu lihat proyeksi kenaikan suhunya. Bisakah kamu mencapai target 1,5°C?

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Efek rumah kaca itu selalu buruk, seharusnya dihilangkan sama sekali."</strong><br>
Tidak tepat. <strong class="mtr-right">Efek rumah kaca alami itu PENTING</strong> -- yang jadi masalah adalah efeknya yang DIPERKUAT BERLEBIHAN oleh aktivitas manusia, bukan efek rumah kacanya sendiri.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Perubahan iklim cuma soal cuaca jadi lebih panas."</strong><br>
Terlalu sempit. <strong class="mtr-right">Perubahan iklim mencakup berbagai dampak</strong> -- kenaikan permukaan laut, cuaca ekstrem yang lebih sering, ancaman keanekaragaman hayati -- bukan cuma soal suhu naik.
</div>

## 🤔 Coba Pikirkan

Sebuah kota pesisir menghadapi ancaman kenaikan permukaan laut akibat perubahan iklim.

1. Sebutkan satu contoh upaya mitigasi dan satu contoh upaya adaptasi yang bisa dilakukan kota itu.
2. Menurutmu, kenapa kota itu tetap perlu melakukan KEDUANYA (bukan cuma salah satu)?

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan sendiri lewat simulasi di atas.
