---
title: "Report Text: Solar Energy"
description: "Report text (versi Fase F) tentang energi surya -- belajar struktur General Classification & Description, passive voice, dan kosakata ilmiah seputar energi terbarukan."
category: materi
mapel: Bahasa Inggris
kelas: XII
pubDate: 2026-11-25
tags: ["Report Text", "Genre-Based Approach", "Fase F"]
draft: false

elemen: ["Membaca-Memirsa", "Menulis-Mempresentasikan"]
profilLulusan: ["Penalaran Kritis", "Komunikasi", "Kewargaan"]
fokusKebahasaan: ["Simple Present Tense", "Passive Voice", "Scientific Vocabulary", "Fakta vs Opini"]
konteksTema: "Indonesia punya matahari sepanjang tahun -- cocok banget buat energi surya (solar energy). Tapi gimana sih sebenarnya panel surya mengubah cahaya matahari jadi listrik? Report text (laporan) dipakai untuk menjelaskan sesuatu secara umum berdasarkan fakta ilmiah. Yuk pelajari strukturnya lewat topik energi terbarukan yang makin relevan di era sekarang -- sekalian mengasah passive voice, grammar yang sering muncul di teks ilmiah."
urutan: 4
estimasiMenit: 90

vocabulary:
  - word: "renewable"
    maknaId: "terbarukan -- sumber energi yang tidak akan habis, seperti matahari dan angin"
    example: "Solar energy is a renewable source of energy."
  - word: "photovoltaic cell"
    maknaId: "sel fotovoltaik -- komponen di panel surya yang mengubah cahaya jadi listrik"
    example: "Each solar panel is made up of many photovoltaic cells."
  - word: "convert"
    maknaId: "mengubah/mengonversi -- di sini maksudnya mengubah satu bentuk energi jadi bentuk lain"
    example: "Solar panels convert sunlight into electricity."
  - word: "efficiency"
    maknaId: "efisiensi -- seberapa banyak energi yang berhasil diubah dibanding yang masuk"
    example: "Higher efficiency panels produce more electricity from the same amount of sunlight."
  - word: "emission"
    maknaId: "emisi -- gas atau zat yang dilepaskan ke udara, biasanya dari pembakaran bahan bakar"
    example: "Solar energy produces electricity without releasing carbon emissions."
  - word: "install"
    maknaId: "memasang"
    example: "Solar panels are usually installed on rooftops or in open fields."

modelTexts:
  - title: "Solar Energy"
    body: "Solar energy is a type of renewable energy that comes directly from sunlight. It is one of the cleanest and most widely available sources of energy on Earth, especially in countries near the equator like Indonesia, where sunlight is available almost all year round. Solar energy is captured using devices called solar panels, which are installed on rooftops, in open fields, or even on small devices like calculators. Each solar panel is made up of many smaller units called photovoltaic cells, which are usually made of silicon. When sunlight hits these cells, electricity is generated through a process called the photovoltaic effect. The electricity that is produced can then be used directly, stored in batteries, or sent into the electrical grid. Unlike fossil fuels, solar energy does not produce carbon emissions while generating electricity, which makes it an important part of efforts to reduce climate change. However, the amount of electricity produced depends on factors such as sunlight intensity, panel efficiency, and weather conditions."
    annotations:
      - text: "Solar energy is a type of renewable energy that comes directly from sunlight"
        note: "General Classification -- pernyataan umum tentang APA ITU solar energy, di kalimat pertama."
      - text: "photovoltaic cells"
        note: "Komponen utama panel surya yang mengubah cahaya matahari jadi listrik."
      - text: "electricity is generated"
        note: "Contoh passive voice -- fokusnya pada APA YANG TERJADI (listrik dihasilkan), bukan SIAPA yang melakukannya."
    grammarTerms: ["is captured", "are installed", "is made up", "is generated", "is produced", "does not produce"]
  - title: "Solar Power by the Numbers"
    body: "Solar energy might seem like a small part of the world's power supply, but the numbers show its enormous potential. Scientists estimate that the sunlight reaching Earth in roughly just one hour carries about as much energy as the entire world uses in a whole year. Of course, we cannot capture all of that energy -- most solar panels available today only convert about 15 to 22 percent of the sunlight that hits them into usable electricity. Even so, as panel technology keeps improving and more panels are installed around the world, solar energy continues to grow as one of the fastest-expanding sources of electricity. If a panel converts 20 percent of the sunlight it receives, and 500 watts of sunlight falls on it, that panel would produce about 100 watts of electricity -- enough to power a few LED light bulbs."
    annotations:
      - text: "estimate"
        note: "Memperkirakan -- angka ini perkiraan ilmiah, bukan hitungan yang 100% pasti."
      - text: "15 to 22 percent"
        note: "Rentang efisiensi -- menunjukkan bahwa tidak semua energi matahari berhasil diubah jadi listrik."
    grammarTerms: ["estimate", "carries", "cannot capture", "convert", "keeps improving", "would produce"]

activities:
  - type: "structuresorter"
    config:
      categories:
        - id: "general-classification"
          label: "General Classification"
        - id: "description"
          label: "Description"
      paragraphs:
        - id: "p1"
          text: "Solar energy is a type of renewable energy that comes directly from sunlight. It is one of the cleanest and most widely available sources of energy on Earth, especially in countries near the equator like Indonesia."
          correctCategory: "general-classification"
        - id: "p2"
          text: "Solar energy is captured using devices called solar panels, which are installed on rooftops, in open fields, or even on small devices like calculators. Each solar panel is made up of many smaller units called photovoltaic cells, which are usually made of silicon."
          correctCategory: "description"
        - id: "p3"
          text: "When sunlight hits these cells, electricity is generated through a process called the photovoltaic effect. The electricity that is produced can then be used directly, stored in batteries, or sent into the electrical grid."
          correctCategory: "description"
  - type: "gapfill"
    config:
      text: "Solar panels {{b1}} of many photovoltaic cells. When sunlight hits the cells, electricity {{b2}}. This electricity can be {{b3}} in batteries or sent into the grid. Solar energy does not {{b4}} carbon emissions while generating electricity."
      blanks:
        - id: "b1"
          answer: ["are made up", "are composed"]
        - id: "b2"
          answer: ["is generated", "is produced"]
        - id: "b3"
          answer: ["stored"]
        - id: "b4"
          answer: ["produce"]
  - type: "factopinion"
    config:
      statements:
        - text: "Solar energy comes directly from sunlight."
          isFact: true
          explanation: "Ini definisi ilmiah dasar tentang energi surya -- bisa diverifikasi secara ilmiah."
        - text: "Solar energy is the best type of energy in the world."
          isFact: false
          explanation: "Kata 'terbaik' adalah penilaian subjektif, tergantung konteks dan kebutuhan -- bukan fakta yang bisa diukur."
        - text: "Solar panels do not produce carbon emissions while generating electricity."
          isFact: true
          explanation: "Fakta ilmiah, sesuai teks model di atas."
        - text: "Everyone should install solar panels on their roof."
          isFact: false
          explanation: "'Seharusnya' adalah saran/opini, bukan pernyataan fakta."
        - text: "Most solar panels convert about 15 to 22 percent of sunlight into electricity."
          isFact: true
          explanation: "Fakta ilmiah tentang efisiensi panel surya, sesuai teks model 'Solar Power by the Numbers'."
        - text: "Solar energy is too complicated for ordinary people to understand."
          isFact: false
          explanation: "Ini penilaian subjektif, bukan fakta -- banyak orang bisa memahami cara kerja dasarnya, seperti yang baru saja kamu pelajari."

task:
  prompt: "Now it's your turn! Choose ONE other type of renewable energy (wind power, hydropower, or geothermal energy) and write your own short report text (150-200 words). Remember to use the report text structure: start with a General Classification (what it is), then write the Description (how it works, how it is used, or what makes it important). Use Simple Present Tense and at least TWO passive voice sentences (e.g., 'Wind energy is generated by...')."
  rubric:
    - "Struktur teks: ada bagian General Classification dan Description yang jelas."
    - "Tata bahasa: memakai Simple Present Tense dan minimal 2 kalimat passive voice."
    - "Isi/gagasan: informasi yang ditulis benar dan masuk akal secara ilmiah."
    - "Kelancaran: kalimat mudah dipahami, kosakata ilmiah dipakai dengan tepat."
  submissionType: "text"

reflection:
  - "identify the General Classification and Description parts of a report text."
  - "recognize and use passive voice sentences (is/are + past participle)."
  - "tell the difference between a fact and an opinion in a scientific text."
  - "write a short report text about a renewable energy source using Simple Present Tense and passive voice."
  - "calculate a simple percentage of a quantity (e.g., electricity produced from sunlight) presented in an English text."

kuis:
  - soal: "What is the main purpose of this report text about solar energy?"
    pilihan:
      - "To tell a personal story about using solar panels"
      - "To describe and classify solar energy based on facts"
      - "To persuade readers to buy solar panels"
      - "To give step-by-step instructions for installing solar panels"
    jawaban: 1
    penjelasan: "Report text bertujuan menggambarkan/mengklasifikasikan sesuatu secara umum berdasarkan fakta, bukan bercerita, membujuk, atau memberi instruksi."
  - soal: "Which sentence is an example of PASSIVE VOICE?"
    pilihan:
      - "Scientists install solar panels on rooftops."
      - "Electricity is generated when sunlight hits the cells."
      - "Solar panels convert sunlight into electricity."
      - "The sun provides energy to the Earth."
    jawaban: 1
    penjelasan: "Passive voice berbentuk 'is/are + past participle' dan fokus pada apa yang TERJADI pada subjek, bukan siapa pelakunya -- 'Electricity is generated...' adalah contohnya."
  - soal: "According to the text, what happens when sunlight hits the photovoltaic cells?"
    pilihan:
      - "The cells melt"
      - "Electricity is generated"
      - "The panel changes color"
      - "Nothing happens"
    jawaban: 1
    penjelasan: "Teks menyebutkan: 'When sunlight hits these cells, electricity is generated through a process called the photovoltaic effect.'"
  - soal: "\"Solar energy is the best type of energy in the world.\" -- Is this a fact or an opinion?"
    pilihan:
      - "Fact, because it can be measured"
      - "Opinion, because it is a personal judgment"
      - "Fact, because scientists agree"
      - "Opinion, but only engineers think so"
    jawaban: 1
    penjelasan: "Kata 'terbaik' adalah penilaian pribadi (opini), bukan sesuatu yang bisa diukur/dibuktikan secara ilmiah (fakta)."
  - soal: "According to 'Solar Power by the Numbers', about how much of the sunlight hitting a typical solar panel is converted into usable electricity?"
    pilihan:
      - "About 1 to 5 percent"
      - "About 15 to 22 percent"
      - "About 50 to 60 percent"
      - "About 90 to 100 percent"
    jawaban: 1
    penjelasan: "Teks menyebutkan: 'most solar panels available today only convert about 15 to 22 percent of the sunlight that hits them into usable electricity.'"
  - soal: "If a solar panel converts 20 percent of the sunlight it receives, and 500 watts of sunlight falls on it, how much electricity does it produce?"
    pilihan:
      - "20 watts"
      - "100 watts"
      - "250 watts"
      - "400 watts"
    jawaban: 1
    penjelasan: "20% x 500 watt = 100 watt -- latihan numerasi sederhana: menghitung persentase dari suatu jumlah."

aksesRuangBelajar: "Siswa membuka pancaedu.web.id/bahasa-inggris, memilih Kelas XII, lalu memilih modul 'Report Text: Solar Energy'. Semua aktivitas dikerjakan langsung di browser; hasil ceklis refleksi dan draf tugas tersimpan otomatis di perangkat masing-masing siswa."
reviewStatus: "reviewed"
---

**Think about it:**

- Have you ever seen solar panels before -- on a rooftop, a calculator, or somewhere else? *(Pernah lihat panel surya sebelumnya -- di atap rumah, kalkulator, atau tempat lain?)*
- Why do you think Indonesia has a lot of potential for solar energy? *(Menurutmu, kenapa Indonesia punya potensi besar untuk energi surya?)*
- What other types of renewable energy do you know about? *(Jenis energi terbarukan lain apa yang kamu tahu?)*

Before you read the text below, check out the vocabulary cards first and try to guess their meaning -- then flip each card to check!
