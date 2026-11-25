---
title: "Report Text: Lightning"
description: "Report text tentang petir (lightning) -- belajar struktur General Classification & Description, Simple Present Tense, dan cara membedakan fakta dari opini."
category: materi
mapel: Bahasa Inggris
kelas: X
pubDate: 2026-11-03
tags: ["Report Text", "Genre-Based Approach", "Fase E"]
draft: false

elemen: ["Membaca-Memirsa", "Menulis-Mempresentasikan"]
profilLulusan: ["Penalaran Kritis", "Komunikasi"]
fokusKebahasaan: ["Simple Present Tense", "Linking Verbs", "Istilah Ilmiah Sederhana", "Fakta vs Opini"]
konteksTema: "Pernah lihat kilatan cahaya terang saat hujan deras disertai suara menggelegar? Itulah petir (lightning) dan guntur (thunder) -- salah satu fenomena alam paling dramatis yang bisa kita amati langsung. Yuk, pelajari bagaimana petir terbentuk, sambil melatih kemampuan membaca & menulis report text dalam bahasa Inggris."
urutan: 1
estimasiMenit: 90

vocabulary:
  - word: "electrical charge"
    maknaId: "muatan listrik -- energi yang terkumpul karena pergerakan partikel di dalam awan"
    example: "Strong winds create an electrical charge inside the cloud."
  - word: "strikes"
    maknaId: "sambaran -- kejadian saat petir mengenai sesuatu, baik awan lain maupun tanah"
    example: "Scientists record millions of lightning strikes every year."
  - word: "thunder"
    maknaId: "guntur -- bunyi keras yang terjadi setelah kilatan petir, akibat udara yang memuai cepat"
    example: "We hear thunder a few seconds after we see lightning."
  - word: "particles"
    maknaId: "partikel -- bagian yang sangat kecil dari suatu zat, di sini maksudnya butiran es dan air di dalam awan"
    example: "Ice particles move up and down very fast inside the cloud."
  - word: "estimate"
    maknaId: "memperkirakan -- menghitung jumlah kira-kira, bukan angka pasti"
    example: "Scientists estimate that lightning strikes the Earth about 44 times every second."
  - word: "roughly"
    maknaId: "kira-kira/sekitar -- dipakai sebelum angka perkiraan, bukan angka yang pasti"
    example: "That adds up to roughly 3.8 million lightning flashes every day."

modelTexts:
  - title: "Lightning"
    body: "Lightning is a powerful flash of light that happens during a thunderstorm. It is one of the most common natural phenomena on Earth, and scientists record millions of lightning strikes every year around the world. Lightning forms inside storm clouds. Strong winds move ice particles and water droplets up and down very fast. This movement creates an electrical charge inside the cloud. The top of the cloud usually becomes positively charged, while the bottom becomes negatively charged. When the charge grows strong enough, it releases a sudden burst of electricity. This burst travels through the air as a bright flash of light. Lightning can strike between two clouds, inside one cloud, or from a cloud down to the ground. Ground strikes are the most dangerous type because they can hit trees, buildings, and people. The flash of lightning also heats the air around it very quickly. This rapid heating causes the air to expand and produces the loud sound we call thunder."
    annotations:
      - text: "electrical charge"
        note: "Muatan listrik yang terkumpul di dalam awan akibat gesekan partikel es dan air."
      - text: "strikes"
        note: "Sambaran petir -- kejadian petir mengenai awan lain atau tanah."
      - text: "thunder"
        note: "Guntur -- suara keras akibat udara yang memuai cepat setelah kilatan petir."
      - text: "particles"
        note: "Partikel -- butiran sangat kecil, di sini maksudnya es dan air di dalam awan."
    grammarTerms: ["is", "happens", "forms", "creates", "becomes", "releases", "travels", "heats", "causes", "produces"]
  - title: "Lightning by the Numbers"
    body: "Lightning might look random, but scientists have measured it closely using satellites and ground sensors. Scientists estimate that lightning strikes the Earth about 44 times every second. That works out to roughly 3.8 million lightning flashes every single day around the world. Most of this lightning happens over land near the equator, in places with warm, humid air -- including countries like Indonesia. Indonesia is actually one of the places with the highest lightning activity on the planet, especially during the rainy season. Even though lightning is extremely common, the chance of one particular person being struck is still very small -- but the numbers remind us just how active our planet's atmosphere really is."
    annotations:
      - text: "estimate"
        note: "Memperkirakan -- angka ini bukan hitungan pasti, melainkan perkiraan ilmiah."
      - text: "roughly"
        note: "Kira-kira/sekitar -- menunjukkan angka ini adalah perkiraan, bukan angka presisi."
    grammarTerms: ["estimate", "strikes", "works out", "happens", "is", "remind"]

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
          text: "Lightning is a powerful flash of light that happens during a thunderstorm. It is one of the most common natural phenomena on Earth, and scientists record millions of lightning strikes every year around the world."
          correctCategory: "general-classification"
        - id: "p2"
          text: "Lightning forms inside storm clouds. Strong winds move ice particles and water droplets up and down very fast. This movement creates an electrical charge inside the cloud. The top of the cloud usually becomes positively charged, while the bottom becomes negatively charged. When the charge grows strong enough, it releases a sudden burst of electricity. This burst travels through the air as a bright flash of light."
          correctCategory: "description"
        - id: "p3"
          text: "Lightning can strike between two clouds, inside one cloud, or from a cloud down to the ground. Ground strikes are the most dangerous type because they can hit trees, buildings, and people. The flash of lightning also heats the air around it very quickly. This rapid heating causes the air to expand and produces the loud sound we call thunder."
          correctCategory: "description"
  - type: "gapfill"
    config:
      text: "Lightning {{b1}} very hot — hotter than the surface of the sun! It usually {{b2}} for less than one second. Thunder always {{b3}} after lightning because light travels faster than sound. Scientists {{b4}} lightning strikes using special sensors around the world."
      blanks:
        - id: "b1"
          answer: ["is"]
        - id: "b2"
          answer: ["lasts"]
        - id: "b3"
          answer: ["happens", "comes"]
        - id: "b4"
          answer: ["track", "tracks", "monitor", "monitors", "record", "records"]
  - type: "factopinion"
    config:
      statements:
        - text: "Lightning is a flash of electricity in the sky."
          isFact: true
          explanation: "Ini definisi ilmiah dasar tentang petir -- bisa diverifikasi secara ilmiah."
        - text: "Thunderstorms are the most exciting kind of weather."
          isFact: false
          explanation: "Kata 'paling seru' adalah penilaian pribadi, bukan fakta yang bisa diukur."
        - text: "Lightning can strike the same place more than once."
          isFact: true
          explanation: "Fakta ilmiah -- menara dan bangunan tinggi bahkan sering tersambar berkali-kali."
        - text: "Everyone should be afraid of thunderstorms."
          isFact: false
          explanation: "'Seharusnya takut' adalah pendapat/saran, bukan pernyataan fakta."
        - text: "A lightning bolt can heat the surrounding air very quickly."
          isFact: true
          explanation: "Fakta ilmiah tentang proses terjadinya guntur, sesuai teks model di atas."
        - text: "Lightning is the most beautiful natural phenomenon."
          isFact: false
          explanation: "'Paling indah' adalah penilaian subjektif, bisa berbeda untuk tiap orang."

task:
  prompt: "Now it's your turn! Choose ONE natural phenomenon from the list below and write your own short report text (120-180 words). Remember to use the report text structure: start with a General Classification (what it is), then write the Description (how it happens, what it looks like, or why it happens). Use Simple Present Tense throughout, just like in the Lightning text above. Choose one: rainbows, solar eclipses, haze from forest fires, or the Batanghari River ecosystem."
  rubric:
    - "Struktur teks: ada bagian General Classification dan Description yang jelas."
    - "Tata bahasa: konsisten menggunakan Simple Present Tense."
    - "Isi/gagasan: informasi yang ditulis benar dan masuk akal secara ilmiah."
    - "Kelancaran: kalimat mudah dipahami, kosakata sesuai topik."
  submissionType: "text"

reflection:
  - "identify the General Classification and Description parts of a report text."
  - "find Simple Present Tense verbs in a text."
  - "tell the difference between a fact and an opinion."
  - "write a short report text about a natural phenomenon using Simple Present Tense."
  - "read and reason about simple numerical data (estimates, rates) presented in an English text."

kuis:
  - soal: "What is the main purpose of a report text?"
    pilihan:
      - "To tell a fictional story"
      - "To describe or classify something in general"
      - "To persuade someone to do something"
      - "To give step-by-step instructions"
    jawaban: 1
    penjelasan: "Report text bertujuan menggambarkan/mengklasifikasikan sesuatu secara umum berdasarkan fakta, bukan bercerita atau membujuk."
  - soal: "Which sentence uses Simple Present Tense correctly?"
    pilihan:
      - "Lightning formed inside storm clouds."
      - "Lightning is forming inside storm clouds."
      - "Lightning forms inside storm clouds."
      - "Lightning will form inside storm clouds."
    jawaban: 2
    penjelasan: "Simple Present untuk fakta umum memakai bentuk dasar verb (+s untuk subjek tunggal) -- 'forms', bukan bentuk lampau/continuous/future."
  - soal: "According to the text, what causes the loud sound we call thunder?"
    pilihan:
      - "The cloud moving very fast"
      - "The rapid heating of the air"
      - "The rain falling to the ground"
      - "The wind blowing strongly"
    jawaban: 1
    penjelasan: "Teks menyebutkan: 'This rapid heating causes the air to expand and produces the loud sound we call thunder.'"
  - soal: "\"Thunderstorms are the most exciting kind of weather.\" — Is this a fact or an opinion?"
    pilihan:
      - "Fact, because it can be measured"
      - "Opinion, because it is a personal judgment"
      - "Fact, because scientists agree"
      - "Opinion, but only children think so"
    jawaban: 1
    penjelasan: "Kata 'paling seru' adalah penilaian pribadi (opini), bukan sesuatu yang bisa diukur/dibuktikan secara ilmiah (fakta)."
  - soal: "According to the 'Lightning by the Numbers' text, about how many times does lightning strike the Earth every second?"
    pilihan:
      - "About 4 times"
      - "About 44 times"
      - "About 440 times"
      - "About 4,400 times"
    jawaban: 1
    penjelasan: "Teks menyebutkan: 'Scientists estimate that lightning strikes the Earth about 44 times every second.'"
  - soal: "If lightning strikes about 44 times every second, roughly how many times does it strike in one minute? (1 minute = 60 seconds)"
    pilihan:
      - "About 440"
      - "About 2,640"
      - "About 4,400"
      - "About 26,400"
    jawaban: 1
    penjelasan: "44 x 60 detik = 2.640 -- latihan numerasi sederhana: mengalikan laju per detik dengan jumlah detik dalam semenit."

aksesRuangBelajar: "Siswa membuka pancaedu.web.id/ruang-belajar, memilih Kelas X, lalu memilih sesi Bahasa Inggris 'Report Text: Lightning'. Semua aktivitas dikerjakan langsung di browser; hasil ceklis refleksi dan draf tugas tersimpan otomatis di perangkat masing-masing siswa."
reviewStatus: "reviewed"
---

**Think about it:**

- Have you ever seen lightning during a storm? What did it look like? *(Pernahkah kamu melihat petir saat hujan deras? Seperti apa bentuknya?)*
- Why do you think thunder is so loud? *(Menurutmu, kenapa suara guntur bisa sangat keras?)*
- What other natural phenomena can you see in the sky? *(Fenomena alam lain apa yang bisa kamu lihat di langit? Misalnya pelangi, gerhana, awan...)*

Before you read the text below, look at the vocabulary cards first and try to guess their meaning -- then flip each card to check your answer!
