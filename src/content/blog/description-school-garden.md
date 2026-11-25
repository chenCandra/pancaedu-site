---
title: "Description: Our School Garden"
description: "Teks deskripsi tentang taman sekolah -- belajar struktur General Statement & Description, linking verbs, dan kata sifat deskriptif (descriptive adjectives)."
category: materi
mapel: Bahasa Inggris
kelas: XI
pubDate: 2026-11-13
tags: ["Descriptive Text", "Genre-Based Approach", "Fase F"]
draft: false

elemen: ["Membaca-Memirsa", "Menulis-Mempresentasikan"]
profilLulusan: ["Kreativitas", "Komunikasi"]
fokusKebahasaan: ["Simple Present Tense", "Linking Verbs", "Descriptive Adjectives", "Sensory Details"]
konteksTema: "Setiap sekolah biasanya punya satu sudut favorit -- taman kecil di belakang kelas, lapangan di bawah pohon rindang, atau sekadar koridor dengan banyak tanaman pot. Yuk, belajar cara menggambarkan tempat seperti itu dengan detail yang hidup lewat panca indera, sekaligus melatih teks deskripsi (descriptive text) dalam bahasa Inggris."
urutan: 1
estimasiMenit: 90

vocabulary:
  - word: "shade"
    maknaId: "naungan/keteduhan -- area yang terlindung dari sinar matahari langsung, biasanya karena pohon atau atap"
    example: "Students often sit in the shade of the big mango tree during break time."
  - word: "fragrant"
    maknaId: "harum/wangi -- memiliki aroma yang menyenangkan"
    example: "The jasmine flowers near the gate are always fragrant in the morning."
  - word: "pathway"
    maknaId: "jalan setapak -- jalur sempit untuk berjalan kaki, biasanya terbuat dari batu atau paving"
    example: "A narrow pathway connects the garden to the school canteen."
  - word: "well-maintained"
    maknaId: "terawat dengan baik -- dijaga dan dirawat secara rutin sehingga tetap rapi dan sehat"
    example: "The garden looks well-maintained because the gardening club waters it every day."
  - word: "member"
    maknaId: "anggota"
    example: "The gardening club has 12 active members."
  - word: "area"
    maknaId: "luas/area -- ukuran permukaan suatu tempat"
    example: "The garden covers an area of about 150 square meters."

modelTexts:
  - title: "Our School Garden"
    body: "Behind our classroom building, there is a small garden that many students love to visit. It is not very big, but it feels calm and colorful. The garden has a narrow pathway in the middle, with flower beds on both sides. Several trees grow around the edges, and their shade is perfect for reading or chatting during break time. The flowers in the garden are mostly red roses, yellow marigolds, and white jasmine. The jasmine is especially fragrant in the early morning, and its sweet smell often reaches the hallway nearby. The leaves are a deep green color, and they look healthy and well-maintained because the gardening club takes care of them every week. In the corner of the garden, there is a wooden bench under a big mango tree. From there, visitors can hear birds singing and feel a cool breeze, especially in the afternoon. The ground is covered with small white stones that make a soft crunching sound when someone walks on the pathway. Overall, our school garden is a peaceful little corner that makes our school feel more alive and welcoming."
    annotations:
      - text: "shade"
        note: "Naungan dari pohon -- area teduh yang nyaman untuk duduk atau berteduh."
      - text: "fragrant"
        note: "Harum -- aroma yang menyenangkan, di sini merujuk pada bunga melati."
      - text: "pathway"
        note: "Jalan setapak kecil di tengah taman."
      - text: "well-maintained"
        note: "Terawat baik -- hasil perawatan rutin dari klub berkebun."
    grammarTerms: ["is", "has", "grow", "are", "looks", "takes", "can hear", "feel", "is covered", "makes"]
  - title: "The Gardening Club by the Numbers"
    body: "The gardening club that maintains the school garden has 12 active members from different classes. They planted more than 30 different kinds of flowers and plants, including roses, marigolds, and jasmine. The garden covers an area of about 150 square meters -- roughly the size of six classrooms put together. Club members work in the garden three times a week, usually for 30 minutes each session, which adds up to about 90 minutes of gardening every week. Thanks to their regular care, the garden has stayed healthy and colorful for more than two years."
    annotations:
      - text: "member"
        note: "Anggota klub -- di sini totalnya 12 orang."
      - text: "area"
        note: "Luas taman, dibandingkan dengan ukuran enam ruang kelas."
    grammarTerms: ["has", "planted", "covers", "work", "adds up", "has stayed"]

activities:
  - type: "structuresorter"
    config:
      categories:
        - id: "general-statement"
          label: "General Statement"
        - id: "description"
          label: "Description"
      paragraphs:
        - id: "p1"
          text: "Behind our classroom building, there is a small garden that many students love to visit. It is not very big, but it feels calm and colorful."
          correctCategory: "general-statement"
        - id: "p2"
          text: "The garden has a narrow pathway in the middle, with flower beds on both sides. Several trees grow around the edges, and their shade is perfect for reading or chatting during break time."
          correctCategory: "description"
        - id: "p3"
          text: "The flowers in the garden are mostly red roses, yellow marigolds, and white jasmine. The jasmine is especially fragrant in the early morning, and its sweet smell often reaches the hallway nearby."
          correctCategory: "description"
        - id: "p4"
          text: "In the corner of the garden, there is a wooden bench under a big mango tree. From there, visitors can hear birds singing and feel a cool breeze, especially in the afternoon."
          correctCategory: "description"
  - type: "gapfill"
    config:
      text: "Our school garden {{b1}} very peaceful in the morning. The flowers {{b2}} colorful and the air {{b3}} fresh. The leaves {{b4}} green and healthy because the gardening club takes good care of them."
      blanks:
        - id: "b1"
          answer: ["feels", "looks"]
        - id: "b2"
          answer: ["are", "look"]
        - id: "b3"
          answer: ["smells", "feels"]
        - id: "b4"
          answer: ["are", "look"]

task:
  prompt: "Now it's your turn! Choose your favorite place at school or at home (it could be a garden, a reading corner, your bedroom, or a small café near your house). Write a short descriptive text (120-180 words) using the structure you just learned: start with a General Statement (what/where it is), then write the Description (how it looks, sounds, smells, or feels -- use your five senses!). Use Simple Present Tense and at least 5 descriptive adjectives or linking verbs (is, are, looks, feels, smells)."
  rubric:
    - "Struktur teks: ada General Statement dan Description yang jelas."
    - "Tata bahasa: konsisten menggunakan Simple Present Tense dan linking verbs yang tepat."
    - "Kosakata: memakai kata sifat deskriptif dan detail dari panca indera (sensory details)."
    - "Kelancaran: kalimat mudah dipahami dan mengalir secara logis."
  submissionType: "text"

reflection:
  - "identify the General Statement and Description parts of a descriptive text."
  - "find linking verbs (is, are, looks, feels, smells) in a text."
  - "use descriptive adjectives and sensory details in my own writing."
  - "write a short descriptive text about a place using Simple Present Tense."
  - "calculate simple totals (e.g., minutes per week) from numbers mentioned in an English text."

kuis:
  - soal: "What is the main purpose of a descriptive text?"
    pilihan:
      - "To tell a story with a problem and resolution"
      - "To describe a particular object, place, or event in detail"
      - "To report the latest news event"
      - "To persuade the reader to take an action"
    jawaban: 1
    penjelasan: "Teks deskripsi bertujuan menggambarkan objek/tempat/peristiwa tertentu secara detail, bukan bercerita, melaporkan berita, atau membujuk."
  - soal: "Which sentence is an example of a linking verb used for description?"
    pilihan:
      - "The students walked to the garden."
      - "The garden looks calm and colorful."
      - "The gardener watered the flowers."
      - "The bell rang at noon."
    jawaban: 1
    penjelasan: "'Looks' menghubungkan subjek (the garden) dengan kata sifat yang mendeskripsikannya (calm and colorful) -- itulah ciri linking verb."
  - soal: "According to the text, why is the jasmine's smell noticeable in the hallway?"
    pilihan:
      - "Because someone sprays perfume near the garden"
      - "Because the jasmine is especially fragrant in the early morning"
      - "Because the hallway has flower decorations"
      - "Because the gardener burns incense every morning"
    jawaban: 1
    penjelasan: "Teks menyebutkan: 'The jasmine is especially fragrant in the early morning, and its sweet smell often reaches the hallway nearby.'"
  - soal: "A good descriptive text usually appeals to which of the following?"
    pilihan:
      - "The reader's sense of humor only"
      - "The reader's five senses (sight, sound, smell, touch, taste)"
      - "The reader's mathematical logic"
      - "The reader's memory of historical dates"
    jawaban: 1
    penjelasan: "Teks deskripsi yang baik melibatkan panca indera pembaca -- apa yang terlihat, terdengar, tercium, atau terasa -- supaya gambarannya terasa hidup."
  - soal: "According to 'The Gardening Club by the Numbers', how many members does the gardening club have?"
    pilihan:
      - "6"
      - "12"
      - "30"
      - "150"
    jawaban: 1
    penjelasan: "Teks menyebutkan: 'The gardening club that maintains the school garden has 12 active members.'"
  - soal: "Club members work in the garden 3 times a week, for 30 minutes each time. How many minutes do they spend gardening per week in total?"
    pilihan:
      - "60 minutes"
      - "90 minutes"
      - "120 minutes"
      - "150 minutes"
    jawaban: 1
    penjelasan: "3 x 30 menit = 90 menit -- latihan numerasi sederhana: perkalian untuk menghitung total waktu."

aksesRuangBelajar: "Siswa membuka pancaedu.web.id/ruang-belajar, memilih Kelas XI, lalu memilih sesi Bahasa Inggris 'Description: Our School Garden'. Semua aktivitas dikerjakan langsung di browser; hasil ceklis refleksi dan draf tugas tersimpan otomatis di perangkat masing-masing siswa."
reviewStatus: "reviewed"
---

**Think about it:**

- What is your favorite place at school or at home? What makes it special? *(Apa tempat favoritmu di sekolah atau di rumah? Apa yang membuatnya istimewa?)*
- If you close your eyes and imagine that place, what do you see, hear, or smell? *(Kalau kamu menutup mata dan membayangkan tempat itu, apa yang kamu lihat, dengar, atau cium?)*
- Can you describe a place using only three words? Try it! *(Bisakah kamu mendeskripsikan sebuah tempat hanya dengan tiga kata? Coba!)*

Before you read the text below, look at the vocabulary cards first and try to guess their meaning -- then flip each card to check your answer!
