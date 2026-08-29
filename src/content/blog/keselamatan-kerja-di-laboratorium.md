---
title: "Keselamatan Kerja di Laboratorium"
description: "Kenalan sama alat pelindung diri, simbol bahaya bahan kimia, tata tertib lab, dan cara menangani kecelakaan ringan -- bekal wajib sebelum praktikum, bukan cuma formalitas."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-29
tags: ["Keselamatan Kerja", "K3 Laboratorium", "Fisika Kelas X", "Praktikum"]
kuis:
  - soal: "Kenapa Alat Pelindung Diri (APD) wajib dipakai selama praktikum, meski percobaannya kelihatan sederhana?"
    pilihan: ["Supaya terlihat seperti ilmuwan sungguhan", "Karena diwajibkan tanpa alasan khusus", "Untuk melindungi tubuh dari risiko yang mungkin tidak terlihat jelas sebelumnya, seperti percikan bahan atau pecahan kaca", "Karena APD wajib dipakai di semua ruangan sekolah"]
    jawaban: 2
    penjelasan: "Kecelakaan kecil (percikan bahan kimia, pecahan kaca, dsb) seringkali datang tanpa peringatan -- APD dipakai SEBELUM ada tanda bahaya, bukan sesudahnya."
  - soal: "Simbol bahaya berbentuk nyala api (🔥) pada kemasan bahan kimia menunjukkan bahan tersebut bersifat..."
    pilihan: ["Mudah terbakar (flammable)", "Beracun", "Korosif", "Radioaktif"]
    jawaban: 0
    penjelasan: "Simbol nyala api menandakan bahan mudah terbakar -- harus dijauhkan dari sumber panas dan api terbuka."
  - soal: "Simbol tengkorak dan tulang bersilang pada kemasan bahan kimia berarti bahan tersebut..."
    pilihan: ["Mudah meledak", "Beracun (toxic) -- berbahaya jika tertelan, terhirup, atau terkena kulit", "Ramah lingkungan", "Tidak berbahaya sama sekali"]
    jawaban: 1
    penjelasan: "Simbol tengkorak menandakan bahan beracun -- bisa membahayakan kesehatan lewat kontak kulit, terhirup, atau tertelan, meski dalam jumlah kecil."
  - soal: "Cara yang benar untuk mencium bau suatu larutan kimia di laboratorium adalah..."
    pilihan: ["Mendekatkan hidung langsung ke mulut wadah", "Mengibas-ngibaskan tangan di atas wadah ke arah hidung dari jarak aman", "Menghirup dalam-dalam supaya baunya jelas", "Tidak perlu mencium sama sekali, langsung dituang"]
    jawaban: 1
    penjelasan: "Larutan kimia bisa mengeluarkan uap berbahaya -- mengibaskan tangan dari jarak aman menghindarkan kita menghirup langsung dalam konsentrasi tinggi."
  - soal: "Kalau terjadi kebakaran kecil di laboratorium akibat bahan kimia, alat yang tepat digunakan adalah..."
    pilihan: ["Air biasa disiramkan langsung", "Alat Pemadam Api Ringan (APAR) yang sesuai jenis kebakarannya", "Kipas angin untuk mengusir asap", "Dibiarkan saja sampai padam sendiri"]
    jawaban: 1
    penjelasan: "APAR dirancang khusus buat berbagai jenis kebakaran. Air justru berbahaya untuk kebakaran akibat bahan kimia atau listrik tertentu -- bisa memperparah, bukan memadamkan."
draft: false
---

<style>
.mtr-table-wrap, .mtr-steps, .mtr-cards { margin-block: 2rem; }

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
  grid-template-columns: repeat(auto-fill, minmax(11.5rem, 1fr));
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
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.mtr-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.mtr-card-icon { font-size: 1.75rem; display: block; margin-bottom: 0.5rem; }
.mtr-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1rem; }
.mtr-card p { font-size: 0.8125rem; color: var(--ink-soft); margin: 0; }

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
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
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

.mtr-note-danger {
  border-left: 3px solid var(--rose);
  background: color-mix(in srgb, var(--rose) 12%, var(--surface));
}
</style>

Di materi [Hakikat Fisika & Metode Ilmiah](/materi/hakikat-fisika-dan-metode-ilmiah), kalian sudah kenalan sama proses penelitian ilmiah. Tapi sebelum tangan kalian menyentuh tabung reaksi, bunsen, atau bahan kimia apa pun di laboratorium, ada satu materi yang wajib dikuasai lebih dulu -- bukan rumus, tapi cara menjaga diri sendiri dan teman-teman tetap aman. Materi ini sering dianggap formalitas basa-basi sebelum praktikum, padahal justru inilah yang menentukan apakah eksperimen kalian berjalan lancar atau berakhir di UKS.

## ⚠️ Kenapa Keselamatan Kerja Itu Penting?

Laboratorium bukan ruang kelas biasa. Ada bahan kimia yang bisa mengiritasi kulit, alat kaca yang mudah pecah, api dari pembakar spiritus, sampai listrik yang dipakai buat alat ukur. Risiko-risiko ini nyata, tapi **sebagian besar bisa dicegah** kalau kita tahu aturannya dan disiplin mengikutinya.

~~Kecelakaan di lab cuma terjadi kalau ceroboh banget~~ → tidak selalu. Bahkan kesalahan kecil yang kelihatan sepele -- lupa pakai kacamata pelindung, memegang tabung reaksi dengan tangan kosong, atau bercanda sambil pegang bahan kimia -- bisa berujung cedera. Keselamatan kerja itu soal kebiasaan, bukan cuma reaksi setelah ada kejadian.

## 🥽 Alat Pelindung Diri (APD)

APD adalah perlengkapan yang dipakai **sebelum** praktikum dimulai, bukan disiapkan setelah ada yang terluka.

<div class="mtr-cards">
<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">🥼</span>
    <h4>Jas Laboratorium</h4>
    <p>Melindungi kulit dan pakaian dari percikan bahan kimia atau panas.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🥽</span>
    <h4>Kacamata Pelindung</h4>
    <p>Melindungi mata dari percikan cairan, serpihan kaca, atau uap yang mengiritasi.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🧤</span>
    <h4>Sarung Tangan</h4>
    <p>Mencegah kontak langsung kulit dengan bahan kimia yang korosif atau beracun.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">😷</span>
    <h4>Masker</h4>
    <p>Mencegah terhirupnya uap, gas, atau partikel bahan yang berbahaya.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">👞</span>
    <h4>Sepatu Tertutup</h4>
    <p>Melindungi kaki dari tumpahan bahan kimia atau pecahan alat kaca di lantai.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🎗️</span>
    <h4>Ikat Rambut</h4>
    <p>Rambut panjang harus diikat -- mencegah tersangkut alat atau kena api bunsen.</p>
  </div>
</div>
</div>

<div class="mtr-note">
💡 APD cuma efektif kalau dipakai dengan BENAR -- kacamata pelindung yang digantung di leher, bukan dipakai di mata, sama saja tidak melindungi apa-apa.
</div>

## ☣️ Simbol Bahaya Bahan Kimia

Setiap kemasan bahan kimia di lab punya simbol bahaya standar. Mengenali simbol ini penting supaya kalian tahu cara menangani bahan itu **sebelum** membukanya, bukan sesudah terjadi sesuatu.

<div class="mtr-cards">
<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">🔥</span>
    <h4>Mudah Terbakar</h4>
    <p>Jauhkan dari api, percikan listrik, dan sumber panas.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">💥</span>
    <h4>Mudah Meledak</h4>
    <p>Hindari benturan, gesekan, panas, dan api terbuka.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">☠️</span>
    <h4>Beracun (Toxic)</h4>
    <p>Berbahaya jika tertelan, terhirup, atau terkena kulit -- sekalipun sedikit.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🧪</span>
    <h4>Korosif</h4>
    <p>Dapat merusak jaringan hidup (kulit) dan bahan lain seperti logam.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">⚡</span>
    <h4>Oksidator</h4>
    <p>Dapat memicu atau memperhebat kebakaran bahan lain di sekitarnya.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🤧</span>
    <h4>Iritan</h4>
    <p>Menyebabkan iritasi pada kulit, mata, atau saluran pernapasan.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🌍</span>
    <h4>Berbahaya bagi Lingkungan</h4>
    <p>Tidak boleh dibuang sembarangan -- berbahaya bagi ekosistem air/tanah.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">☢️</span>
    <h4>Radioaktif</h4>
    <p>Memancarkan radiasi -- jarang dijumpai di lab sekolah, tapi wajib dikenali.</p>
  </div>
</div>
</div>

## 📋 Tata Tertib di Laboratorium

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Pakai APD lengkap sebelum masuk ruang praktikum</strong>, bukan setelah kegiatan dimulai.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Dilarang makan, minum, atau membawa makanan</strong> ke dalam laboratorium -- risiko bahan kimia tercampur makanan sangat berbahaya.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Baca label dan prosedur percobaan dulu</strong> sebelum menyentuh alat atau bahan apa pun -- jangan asal coba-coba.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Gunakan alat sesuai fungsinya.</strong> Jangan mencicipi bahan kimia, jangan bereksperimen di luar instruksi guru.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">5</span>
    <div class="mtr-step-body">
      <p><strong>Laporkan segera</strong> kalau ada tumpahan, pecahan, atau kejadian tak terduga -- jangan coba membereskan sendiri kalau tidak yakin caranya.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">6</span>
    <div class="mtr-step-body">
      <p><strong>Cuci tangan setelah praktikum selesai</strong>, meskipun memakai sarung tangan selama kegiatan berlangsung.</p>
    </div>
  </div>
</div>

## 🧴 Menangani Bahan Kimia dengan Benar

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Jangan pernah mencium bahan langsung dari mulut wadah.</strong> Kibaskan tangan di atas wadah ke arah hidung dari jarak aman, supaya cuma sedikit uap yang terhirup.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Tuang bahan menjauhi tubuh</strong>, jangan condongkan wajah ke arah wadah saat menuang atau mencampur.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Gunakan pipet atau alat bantu</strong>, jangan pernah menghisap cairan kimia langsung pakai mulut.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Buang limbah sesuai jenisnya</strong> di wadah limbah yang benar -- jangan dituang ke wastafel sembarangan, apalagi bahan yang korosif atau beracun.</p>
    </div>
  </div>
</div>

## 🚨 Kalau Terjadi Kecelakaan

Sekecil apa pun kejadiannya, tahu langkah pertama yang benar bisa mencegah dampak yang lebih besar.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Kejadian</th><th>Tindakan Pertama</th></tr>
</thead>
<tbody>
<tr><td>Bahan kimia kena kulit</td><td>Bilas segera dengan <em>air mengalir</em> selama beberapa menit, lepas pakaian yang terkena jika perlu.</td></tr>
<tr><td>Bahan kimia kena mata</td><td>Bilas dengan air bersih mengalir (pakai <em>eyewash station</em> kalau ada) sambil mata tetap terbuka, minimal 15 menit.</td></tr>
<tr><td>Kebakaran kecil</td><td>Gunakan <em>Alat Pemadam Api Ringan (APAR)</em> yang sesuai jenis kebakarannya -- jangan disiram air kalau sumbernya bahan kimia atau listrik.</td></tr>
<tr><td>Luka akibat pecahan kaca</td><td>Bersihkan luka, tekan dengan kain bersih untuk hentikan pendarahan, segera laporkan ke guru/petugas.</td></tr>
<tr><td>Tumpahan bahan kimia di meja/lantai</td><td>Jangan disentuh langsung -- laporkan ke guru, biasanya perlu bahan penyerap/penetral khusus.</td></tr>
</tbody>
</table>
</div>
</div>

<div class="mtr-note mtr-note-danger">
🚨 Dalam kondisi apa pun, <strong class="mtr-wrong">langkah pertama bukan panik atau mencoba menyembunyikan kejadian</strong> -- <strong class="mtr-right">segera beri tahu guru atau petugas lab</strong>. Semakin cepat dilaporkan, semakin kecil risikonya.
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "APD cuma perlu dipakai kalau percobaannya kelihatan berbahaya."</strong><br>
Keliru. <strong class="mtr-right">APD dipakai SETIAP kali praktikum</strong>, bukan cuma yang "kelihatan" berbahaya -- banyak kecelakaan justru terjadi pada percobaan yang dianggap sepele.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau tumpah sedikit bahan kimia, lap saja sendiri, tidak usah lapor."</strong><br>
Berbahaya. <strong class="mtr-right">Tumpahan sekecil apa pun harus dilaporkan</strong> -- beberapa bahan butuh penanganan khusus yang tidak bisa sekadar dilap tisu.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau sudah pakai sarung tangan, tidak perlu cuci tangan lagi setelah praktikum."</strong><br>
Tidak tepat. <strong class="mtr-right">Cuci tangan tetap wajib</strong> -- sarung tangan bisa saja bocor tanpa disadari, atau residu bahan menempel saat melepasnya.
</div>

## 🎯 Intinya

Kalau diperhatikan baik-baik, semua aturan di atas -- APD, simbol bahaya, tata tertib, sampai cara menangani kecelakaan -- sebenarnya mengajarkan satu pola pikir yang sama: **selalu bertanya "apa yang bisa salah?" SEBELUM melakukan sesuatu, bukan sesudahnya.**

Ilmuwan yang baik bukan yang paling jarang mengalami kecelakaan karena kebetulan beruntung, tapi yang paling terbiasa berpikir preventif -- dan itu kebiasaan yang bakal terus terpakai jauh di luar ruang lab sekolah, sampai ke laboratorium sungguhan tempat sebagian dari kalian mungkin akan bekerja nanti.

## 🤔 Coba Pikirkan

Saat praktikum, salah satu temanmu terburu-buru menuang bahan kimia tanpa memakai kacamata pelindung, sambil bercanda dengan teman di sebelahnya. Kamu melihat kejadian itu dari meja sebelah.

Menurutmu, risiko apa saja yang mungkin terjadi dari situasi itu? Dan sebagai teman yang melihatnya, apa yang seharusnya kamu lakukan -- diam saja karena bukan urusanmu, atau ada hal lain yang lebih tepat?

Coba diskusikan jawabanmu dengan teman sekelas sebelum praktikum berikutnya dimulai. Materi selanjutnya kita bahas cara [Merancang dan Melakukan Penyelidikan Ilmiah](/materi/merancang-dan-melakukan-penyelidikan-ilmiah) -- bekal keselamatan kerja yang baru saja kalian pelajari ini bakal langsung terpakai di situ.
