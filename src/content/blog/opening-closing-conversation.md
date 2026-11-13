---
title: "Opening & Closing Conversation"
description: "Belajar membuka, menjaga, dan menutup percakapan dengan sopan -- bedanya ungkapan formal (ke guru) dan informal (ke teman) -- lewat simulasi percakapan interaktif."
category: materi
mapel: Bahasa Inggris
kelas: X
pubDate: 2026-11-04
tags: ["Percakapan", "Genre-Based Approach", "Fase E"]
draft: false

elemen: ["Menyimak-Berbicara"]
profilLulusan: ["Komunikasi", "Kewargaan"]
fokusKebahasaan: ["Small Talk", "Formal vs Informal Expressions", "Ungkapan Pembuka & Penutup Percakapan"]
konteksTema: "Hari pertama masuk sekolah itu penuh perkenalan baru -- ketemu guru di koridor, lalu duduk bareng teman baru di kantin. Cara kita menyapa dan berpamitan ternyata beda tergantung lawan bicara, lho! Yuk belajar membuka dan menutup percakapan dengan sopan, sesuai siapa yang kita ajak bicara."
urutan: 2
estimasiMenit: 70

vocabulary:
  - word: "greeting"
    maknaId: "sapaan -- ucapan pembuka saat bertemu seseorang"
    example: "\"Good morning\" is a common greeting."
  - word: "small talk"
    maknaId: "obrolan ringan/basa-basi -- percakapan santai tentang topik sehari-hari"
    example: "They made small talk about the weather before the meeting started."
  - word: "polite"
    maknaId: "sopan"
    example: "It's polite to greet your teacher before asking a question."
  - word: "formal"
    maknaId: "resmi/baku -- gaya bahasa yang dipakai ke orang yang dihormati/belum akrab"
    example: "We use formal language when we talk to our teachers."
  - word: "informal"
    maknaId: "santai/tidak baku -- gaya bahasa yang dipakai ke teman akrab"
    example: "\"What's up?\" is an informal way to greet a friend."
  - word: "hallway"
    maknaId: "koridor/lorong sekolah"
    example: "I met my teacher in the hallway this morning."
  - word: "schedule"
    maknaId: "jadwal"
    example: "Let's check the exam schedule before we start studying."
  - word: "duration"
    maknaId: "durasi/lama waktu"
    example: "The duration of the test is 90 minutes."

modelTexts:
  - title: "Meeting a New Teacher"
    body: "Rina: Good morning, Mr. Hartono! Mr. Hartono: Good morning, Rina! How are you today? Rina: I'm doing well, thank you. How about you? Mr. Hartono: I'm doing great, thanks for asking. Are you ready for the English test today? Rina: Yes, I've been studying all week! Mr. Hartono: That's wonderful. Good luck! I have to go to the teachers' room now. Rina: Thank you, sir. Have a nice day! Mr. Hartono: You too, Rina. See you in class!"
    annotations:
      - text: "Good morning"
        note: "Sapaan formal untuk pagi hari -- cocok dipakai ke guru atau orang yang baru dikenal."
      - text: "How are you today"
        note: "Small talk -- menanyakan kabar sebagai pembuka obrolan yang ramah."
      - text: "I have to go to the teachers' room now"
        note: "Cara sopan memberi tahu bahwa kita harus pergi, sebelum menutup percakapan."
      - text: "Have a nice day"
        note: "Ungkapan penutup percakapan yang sopan dan ramah."
    grammarTerms: []
  - title: "Talking About the School Schedule"
    body: "Rani: Hey, what time does the English test start today? Dion: It starts at 9:20, right after break. I think it ends at 10:50. Rani: So that's 90 minutes total? That's longer than last week's math test. Dion: Yeah, that one was only 60 minutes. This one's definitely longer -- 30 minutes more. Rani: Good, I'll need that extra time to double-check my answers! Dion: Same here. Anyway, good luck! Catch you after the test. Rani: Thanks, you too! See you later."
    annotations:
      - text: "schedule"
        note: "Jadwal -- konteks small talk yang sangat umum di sekolah."
      - text: "90 minutes total"
        note: "Durasi dihitung dari selisih waktu mulai (9:20) dan waktu selesai (10:50)."
    grammarTerms: []

activities:
  - type: "structuresorter"
    config:
      categories:
        - id: "formal"
          label: "Formal"
        - id: "informal"
          label: "Informal"
      paragraphs:
        - id: "e1"
          text: "\"Good afternoon, how are you?\""
          correctCategory: "formal"
        - id: "e2"
          text: "\"Hey, what's up?\""
          correctCategory: "informal"
        - id: "e3"
          text: "\"It was a pleasure speaking with you.\""
          correctCategory: "formal"
        - id: "e4"
          text: "\"Catch you later!\""
          correctCategory: "informal"
        - id: "e5"
          text: "\"May I join you?\""
          correctCategory: "formal"
        - id: "e6"
          text: "\"Mind if I sit here?\""
          correctCategory: "informal"
  - type: "dialog"
    config:
      startId: "start"
      turns:
        - id: "start"
          speaker: "Mrs. Sari (Guru)"
          line: "Good morning! You must be new here. Welcome to our school!"
          options:
            - text: "Good morning! Yes, I am. Thank you!"
              tone: "formal"
              appropriate: true
              feedback: "Bagus! Sapaan formal yang sopan, cocok untuk menjawab guru."
              next: "turn2"
            - text: "Morning. Yeah."
              tone: "informal"
              appropriate: false
              feedback: "Terlalu singkat dan santai untuk menjawab guru -- coba jawab lebih lengkap dan sopan."
              next: "turn2"
            - text: "Who are you?"
              tone: "informal"
              appropriate: false
              feedback: "Kurang sopan -- sebaiknya menyapa balik dulu sebelum bertanya."
              next: "turn2"
        - id: "turn2"
          speaker: "Mrs. Sari (Guru)"
          line: "Nice to meet you! What's your name?"
          options:
            - text: "My name is Dika. Nice to meet you too, Ma'am."
              tone: "formal"
              appropriate: true
              feedback: "Pas! Formal dan lengkap -- cocok untuk bicara dengan guru."
              next: "turn3"
            - text: "Dika."
              tone: "informal"
              appropriate: false
              feedback: "Terlalu singkat untuk konteks formal -- coba tambahkan 'My name is...' dan ucapan balasan."
              next: "turn3"
            - text: "Why do you ask?"
              tone: "informal"
              appropriate: false
              feedback: "Kurang sopan -- guru bertanya dengan ramah, sebaiknya dijawab dengan ramah juga."
              next: "turn3"
        - id: "turn3"
          speaker: "Mrs. Sari (Guru)"
          line: "Well, I have to get to class now. It was nice meeting you, Dika!"
          options:
            - text: "It was nice meeting you too! Have a great class."
              tone: "formal"
              appropriate: true
              feedback: "Penutup yang sopan dan hangat -- pas untuk guru."
              next: "turn4"
            - text: "Bye."
              tone: "informal"
              appropriate: false
              feedback: "Terlalu singkat untuk menutup percakapan dengan guru -- coba lebih lengkap."
              next: "turn4"
            - text: "OK see ya!"
              tone: "informal"
              appropriate: false
              feedback: "Terlalu santai untuk guru -- simpan ungkapan ini untuk teman sebaya saja."
              next: "turn4"
        - id: "turn4"
          speaker: "Sarah (Teman Baru)"
          line: "Hey! You're new, right? I'm Sarah. Mind if I sit here?"
          options:
            - text: "Hey Sarah! Sure, go ahead. I'm Dika."
              tone: "informal"
              appropriate: true
              feedback: "Pas banget -- santai dan ramah, cocok untuk ngobrol sama teman sebaya."
              next: "turn5"
            - text: "Good afternoon. I would be delighted if you joined me."
              tone: "formal"
              appropriate: false
              feedback: "Terlalu formal untuk ngobrol sama teman -- kesannya malah kaku."
              next: "turn5"
            - text: "Umm, okay I guess."
              tone: "informal"
              appropriate: false
              feedback: "Boleh, tapi kurang ramah -- coba sambut dengan lebih antusias."
              next: "turn5"
        - id: "turn5"
          speaker: "Sarah (Teman Baru)"
          line: "It was great talking to you! I have to go to class now. Catch up later?"
          options:
            - text: "Yeah, for sure! Catch you later, Sarah!"
              tone: "informal"
              appropriate: true
              feedback: "Pas! Santai dan ramah, cocok untuk menutup obrolan dengan teman."
              next: "end"
            - text: "It was a pleasure conversing with you. Farewell."
              tone: "formal"
              appropriate: false
              feedback: "Terlalu formal untuk teman sebaya -- simpan gaya bahasa ini untuk situasi resmi."
              next: "end"
            - text: "OK bye."
              tone: "informal"
              appropriate: false
              feedback: "Boleh, tapi kurang hangat untuk menutup obrolan dengan teman baru."
              next: "end"
        - id: "end"
          speaker: ""
          line: "Great job! You practiced opening and closing conversations with both a teacher and a classmate."
          options: []

task:
  prompt: "Write your own short conversation (6-8 lines) between you and either a new teacher or a new classmate. Make sure you use appropriate opening and closing expressions for the situation -- formal for a teacher, informal for a classmate. You can choose any setting: the school hallway, the canteen, or the classroom."
  rubric:
    - "Ungkapan pembuka sesuai konteks (formal untuk guru, informal untuk teman)."
    - "Ungkapan penutup sopan dan sesuai situasi."
    - "Alur percakapan masuk akal dan nyambung."
    - "Tata bahasa dan kosakata mudah dipahami."
  submissionType: "text"

reflection:
  - "greet someone politely in both formal and informal situations."
  - "use different expressions to open a conversation depending on the context."
  - "close a conversation politely."
  - "tell the difference between formal and informal expressions."
  - "calculate a simple time duration (e.g., from a schedule) mentioned in an English conversation."

kuis:
  - soal: "Which greeting is most appropriate when meeting your teacher for the first time?"
    pilihan:
      - "Hey, what's up?"
      - "Good morning! It's nice to meet you."
      - "Yo!"
      - "Who are you?"
    jawaban: 1
    penjelasan: "Menyapa guru sebaiknya pakai ungkapan formal dan sopan seperti 'Good morning' atau 'It's nice to meet you.'"
  - soal: "Your friend says, \"Catch up later?\" What is the best informal reply?"
    pilihan:
      - "I would be delighted to."
      - "Sure, see you later!"
      - "Negative."
      - "I must decline your invitation."
    jawaban: 1
    penjelasan: "Untuk teman sebaya, balasan santai seperti 'Sure, see you later!' lebih pas daripada ungkapan formal."
  - soal: "Which of these is a POLITE way to end a conversation with a teacher?"
    pilihan:
      - "Bye."
      - "It was nice talking to you. Have a great day!"
      - "OK I'm out."
      - "Whatever, see ya."
    jawaban: 1
    penjelasan: "Ungkapan lengkap dan sopan seperti 'It was nice talking to you. Have a great day!' lebih cocok untuk guru."
  - soal: "What does \"small talk\" mean?"
    pilihan:
      - "A very short person talking"
      - "Casual, friendly conversation about everyday topics"
      - "An argument between two people"
      - "A formal business meeting"
    jawaban: 1
    penjelasan: "'Small talk' adalah obrolan ringan dan santai tentang topik sehari-hari, biasanya untuk membuka percakapan."
  - soal: "In 'Talking About the School Schedule', the test starts at 9:20 and ends at 10:50. How long is the test?"
    pilihan:
      - "60 minutes"
      - "90 minutes"
      - "120 minutes"
      - "150 minutes"
    jawaban: 1
    penjelasan: "Dari pukul 9:20 ke 10:50 selisihnya 1 jam 30 menit = 90 menit -- latihan numerasi membaca selisih waktu dari jadwal."
  - soal: "The English test is 90 minutes, and last week's math test was 60 minutes. How many minutes longer is the English test?"
    pilihan:
      - "20 minutes"
      - "30 minutes"
      - "40 minutes"
      - "50 minutes"
    jawaban: 1
    penjelasan: "90 - 60 = 30 menit -- latihan numerasi sederhana membandingkan dua durasi."

aksesRuangBelajar: "Siswa membuka pancaedu.web.id/ruang-belajar, memilih Kelas X, lalu memilih sesi Bahasa Inggris 'Opening & Closing Conversation'. Semua aktivitas dikerjakan langsung di browser; hasil ceklis refleksi dan draf tugas tersimpan otomatis di perangkat masing-masing siswa."
reviewStatus: "draft"
---

**Think about it:**

- When was the last time you met someone new? What did you say first? *(Kapan terakhir kali kamu ketemu orang baru? Apa yang pertama kali kamu ucapkan?)*
- Do you talk to your teacher the same way you talk to your best friend? Why or why not? *(Apakah kamu bicara ke guru dengan cara yang sama seperti ke sahabatmu? Kenapa iya/tidak?)*
- What are some ways people say goodbye in English? *(Apa saja cara orang berpamitan dalam bahasa Inggris?)*

Before you read the model conversation below, check out the vocabulary cards first and try to guess their meaning -- then flip each card to check!
