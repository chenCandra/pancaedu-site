---
title: "News Item: Plastic-Free Canteen Policy"
description: "Teks news item tentang kebijakan kantin bebas plastik di sekolah -- belajar struktur Lead-Events-End, Simple Past Tense, dan cara membaca berita secara kritis."
category: materi
mapel: Bahasa Inggris
kelas: XII
pubDate: 2026-11-13
tags: ["News Item", "Genre-Based Approach", "Fase F"]
draft: false

elemen: ["Membaca-Memirsa", "Menulis-Mempresentasikan"]
profilLulusan: ["Penalaran Kritis", "Komunikasi", "Kewargaan"]
fokusKebahasaan: ["Simple Past Tense", "Action Verbs", "Direct & Reported Speech", "Adverbs of Place and Time"]
konteksTema: "Pernah baca berita tentang kebijakan baru di sekolah -- aturan seragam, larangan plastik, atau lomba yang baru dimenangkan? Teks news item (berita) menyampaikan informasi aktual secara objektif dan terstruktur. Yuk pelajari strukturnya lewat berita fiktif tentang kebijakan kantin bebas plastik di sebuah sekolah."
urutan: 1
estimasiMenit: 90

vocabulary:
  - word: "launch"
    maknaId: "meluncurkan/memulai -- memperkenalkan sesuatu yang baru secara resmi"
    example: "The school launched the new policy on Monday morning."
  - word: "single-use plastic"
    maknaId: "plastik sekali pakai -- plastik yang hanya digunakan satu kali lalu dibuang"
    example: "The canteen no longer sells drinks in single-use plastic cups."
  - word: "implement"
    maknaId: "menerapkan/melaksanakan -- menjalankan suatu kebijakan atau rencana"
    example: "Teachers helped implement the new rule by reminding students every day."
  - word: "reusable"
    maknaId: "bisa dipakai ulang -- dapat digunakan berkali-kali, berbeda dari sekali pakai"
    example: "Students are now encouraged to bring their own reusable bottles and containers."

modelTexts:
  - title: "School Launches Plastic-Free Canteen Policy"
    body: "SMA Panca Jaya officially launched a plastic-free canteen policy last Monday, banning all single-use plastic cups, straws, and bags from the school canteen. The policy was introduced after months of discussion among teachers, students, and the school committee. Under the new rule, every student and staff member must bring a reusable bottle or container when buying food or drinks at the canteen. Canteen vendors were also asked to use paper or banana-leaf packaging instead of plastic. The head of the student council, Farid, said, 'We have seen too much plastic waste piling up near the canteen every day. This policy is a small step, but it can make a big difference if everyone takes part.' Not all students were excited at first. Several complained that bringing containers every day was inconvenient, especially when they forgot. However, the school provided a limited number of borrowed containers for students who forgot theirs, with a small deposit system. After two weeks, the school reported that plastic waste in the canteen area had dropped by almost 60 percent. The principal, Mrs. Yuni, stated, 'We are proud of how quickly our students adapted. We hope this policy will also be implemented in other schools nearby.' The student council plans to monitor the program for one semester before deciding whether to expand it further."
    annotations:
      - text: "launch"
        note: "Meluncurkan kebijakan baru secara resmi."
      - text: "single-use plastic"
        note: "Plastik sekali pakai -- target utama kebijakan ini."
      - text: "implement"
        note: "Menerapkan/menjalankan suatu kebijakan."
      - text: "reusable"
        note: "Bisa dipakai berulang kali, kebalikan dari sekali pakai."
    grammarTerms: ["launched", "was introduced", "said", "were asked", "complained", "forgot", "reported", "had dropped", "stated", "plans"]

activities:
  - type: "structuresorter"
    config:
      categories:
        - id: "lead"
          label: "Lead"
        - id: "events"
          label: "Events"
        - id: "end"
          label: "End"
      paragraphs:
        - id: "p1"
          text: "SMA Panca Jaya officially launched a plastic-free canteen policy last Monday, banning all single-use plastic cups, straws, and bags from the school canteen."
          correctCategory: "lead"
        - id: "p2"
          text: "Under the new rule, every student and staff member must bring a reusable bottle or container when buying food or drinks at the canteen. Canteen vendors were also asked to use paper or banana-leaf packaging instead of plastic."
          correctCategory: "events"
        - id: "p3"
          text: "Not all students were excited at first. Several complained that bringing containers every day was inconvenient, especially when they forgot."
          correctCategory: "events"
        - id: "p4"
          text: "After two weeks, the school reported that plastic waste in the canteen area had dropped by almost 60 percent."
          correctCategory: "events"
        - id: "p5"
          text: "The principal, Mrs. Yuni, stated, 'We are proud of how quickly our students adapted. We hope this policy will also be implemented in other schools nearby.' The student council plans to monitor the program for one semester before deciding whether to expand it further."
          correctCategory: "end"
  - type: "factopinion"
    config:
      statements:
        - text: "SMA Panca Jaya launched a plastic-free canteen policy last Monday."
          isFact: true
          explanation: "Ini pernyataan faktual tentang kejadian/kebijakan yang bisa diverifikasi dari teks berita."
        - text: "This policy is the best environmental decision any school has ever made."
          isFact: false
          explanation: "'Yang terbaik' adalah penilaian subjektif, bukan fakta yang bisa diukur secara objektif."
        - text: "Plastic waste in the canteen area dropped by almost 60 percent after two weeks."
          isFact: true
          explanation: "Ini data/hasil yang dilaporkan secara spesifik dalam teks berita."
        - text: "Every student in the school loved the new policy from day one."
          isFact: false
          explanation: "Teks justru menyebutkan beberapa siswa mengeluh -- pernyataan ini bertentangan dengan fakta di teks dan bersifat generalisasi berlebihan."
        - text: "The principal, Mrs. Yuni, said she was proud of how quickly students adapted."
          isFact: true
          explanation: "Ini kutipan langsung yang tercatat dalam berita, bisa diverifikasi sebagai sesuatu yang benar-benar diucapkan."
        - text: "Schools that don't adopt this policy clearly don't care about the environment."
          isFact: false
          explanation: "Ini kesimpulan bernada menghakimi (opini), bukan fakta yang didukung bukti dalam teks."
  - type: "gapfill"
    config:
      text: "The school {{b1}} a new policy last Monday. Canteen vendors {{b2}} to use paper packaging instead of plastic. The student council head {{b3}}, 'This is a small step, but it can make a big difference.' After two weeks, plastic waste {{b4}} by almost 60 percent."
      blanks:
        - id: "b1"
          answer: ["launched", "introduced"]
        - id: "b2"
          answer: ["were asked"]
        - id: "b3"
          answer: ["said"]
        - id: "b4"
          answer: ["had dropped", "dropped"]

task:
  prompt: "Now it's your turn! Write a short news item (150-200 words) about an event or new policy at your own school -- it could be real (a competition your school won, a new rule, an event) or realistic fiction. Make sure your text has three parts: Lead (the most important information: what, who, when, where, summarized in one or two sentences), Events (supporting details, in order of importance), and End (a closing statement, outcome, or quote looking ahead), and include at least one quote (direct or reported speech) from someone involved."
  rubric:
    - "Struktur teks: ada Lead yang merangkum inti berita, Events dengan detail pendukung, dan End sebagai penutup."
    - "Tata bahasa: konsisten menggunakan Simple Past Tense dan minimal satu kutipan (direct/reported speech)."
    - "Objektivitas: informasi disampaikan secara faktual, bukan opini pribadi penulis."
    - "Kelengkapan: mencakup unsur 5W (what, who, when, where, why) yang relevan."
  submissionType: "text"

reflection:
  - "identify the Lead, Events, and End parts of a news item."
  - "tell the difference between a fact and an opinion when reading news."
  - "recognize direct and reported speech (quotes) in a news report."
  - "write a short news item about an event using Simple Past Tense."

kuis:
  - soal: "What information should usually appear in the Lead of a news item?"
    pilihan:
      - "A detailed personal opinion about the event"
      - "The most important information (what, who, when, where) summarized briefly"
      - "A long list of everyone who attended the event"
      - "Background history from many years ago"
    jawaban: 1
    penjelasan: "Lead merangkum inti berita secara singkat di awal -- apa, siapa, kapan, di mana -- sebelum masuk ke detail kejadian (Events) dan penutup (End)."
  - soal: "Which sentence is an example of reported speech?"
    pilihan:
      - "Farid said, \"This is a small step.\""
      - "Farid said that it was a small step."
      - "Farid: \"This is a small step!\""
      - "Is this a small step, Farid?"
    jawaban: 1
    penjelasan: "Reported speech menyampaikan ulang ucapan seseorang tanpa tanda kutip, biasanya dengan 'that' dan perubahan bentuk kata kerja (is -> was)."
  - soal: "According to the text, what happened to plastic waste after two weeks of the policy?"
    pilihan:
      - "It increased by 60 percent"
      - "It dropped by almost 60 percent"
      - "It stayed exactly the same"
      - "The school stopped measuring it"
    jawaban: 1
    penjelasan: "Teks menyebutkan: 'the school reported that plastic waste in the canteen area had dropped by almost 60 percent.'"
  - soal: "\"This policy is the best environmental decision any school has ever made.\" -- Is this a fact or an opinion?"
    pilihan:
      - "Fact, because it is mentioned in the news article"
      - "Opinion, because 'the best' is a subjective judgment that cannot be measured objectively"
      - "Fact, because the principal said it"
      - "Opinion, but only if a teacher disagrees"
    jawaban: 1
    penjelasan: "Kata 'the best' adalah penilaian subjektif yang tidak bisa diukur secara objektif -- ini opini, bukan fakta."

aksesRuangBelajar: "Siswa membuka pancaedu.web.id/ruang-belajar, memilih Kelas XII, lalu memilih sesi Bahasa Inggris 'News Item: Plastic-Free Canteen Policy'. Semua aktivitas dikerjakan langsung di browser; hasil ceklis refleksi dan draf tugas tersimpan otomatis di perangkat masing-masing siswa."
reviewStatus: "reviewed"
---

**Think about it:**

- When was the last time you read or watched a news report about your school or neighborhood? *(Kapan terakhir kali kamu membaca/menonton berita tentang sekolah atau lingkunganmu?)*
- Why do you think it's important to tell the difference between facts and opinions when reading news? *(Menurutmu, kenapa penting membedakan fakta dan opini saat membaca berita?)*
- If your school announced one new policy tomorrow, what would you want it to be? *(Kalau sekolahmu mengumumkan satu kebijakan baru besok, kamu ingin kebijakan apa?)*

Before you read the text below, look at the vocabulary cards first and try to guess their meaning -- then flip each card to check your answer!
