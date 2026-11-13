---
title: "Asking & Giving Opinion"
description: "Belajar meminta dan menyampaikan pendapat, serta menyatakan setuju/tidak setuju dengan santun -- lewat isu-isu dekat sekolah: sampah plastik, cuaca panas, dan HP di kelas."
category: materi
mapel: Bahasa Inggris
kelas: X
pubDate: 2026-11-05
tags: ["Percakapan", "Genre-Based Approach", "Fase E"]
draft: false

elemen: ["Menyimak-Berbicara", "Menulis-Mempresentasikan"]
profilLulusan: ["Penalaran Kritis", "Komunikasi", "Kewargaan"]
fokusKebahasaan: ["Asking for Opinion", "Giving Opinion", "Agreeing", "Disagreeing Politely"]
konteksTema: "Pernah berdebat sama teman soal aturan sekolah, atau kebijakan baru di kelas? Setiap orang boleh punya pendapat berbeda -- yang penting, cara menyampaikannya tetap sopan. Yuk belajar meminta pendapat, menyampaikan pendapatmu sendiri, dan menyatakan setuju/tidak setuju dengan santun, lewat isu-isu yang dekat dengan kehidupan sekolah: sampah plastik, cuaca panas, sampai pemakaian HP di kelas."
urutan: 4
estimasiMenit: 75

vocabulary:
  - word: "opinion"
    maknaId: "pendapat"
    example: "What is your opinion about this issue?"
  - word: "agree"
    maknaId: "setuju"
    example: "I agree with your idea."
  - word: "disagree"
    maknaId: "tidak setuju"
    example: "I disagree, but I understand your reason."
  - word: "perspective"
    maknaId: "sudut pandang/cara memandang sesuatu"
    example: "Everyone has a different perspective on this issue."
  - word: "distracting"
    maknaId: "mengganggu konsentrasi"
    example: "Phones can be distracting during lessons."
  - word: "compromise"
    maknaId: "jalan tengah/kompromi"
    example: "They found a compromise that satisfied both sides."
  - word: "issue"
    maknaId: "isu/persoalan"
    example: "Climate change is an important issue."
  - word: "survey"
    maknaId: "survei -- cara mengumpulkan pendapat banyak orang lewat pertanyaan terstruktur"
    example: "The student council did a survey about phone use in class."
  - word: "majority"
    maknaId: "mayoritas -- bagian terbesar dari suatu kelompok"
    example: "The majority of students want some rules about phone use."

modelTexts:
  - title: "Phones in Class: What Do You Think?"
    body: "Dina: What do you think about using phones during class? Eka: Personally, I believe phones should be allowed, because we can use them to look up information quickly. Dina: I see your point, but I think they can be very distracting. Students might play games instead of studying. Eka: That's true. I agree with you because I've seen some classmates do that. Dina: So maybe phones should only be allowed for specific activities, like research tasks. Eka: I agree with you because that seems like a fair compromise."
    annotations:
      - text: "What do you think about"
        note: "Ungkapan untuk MEMINTA pendapat orang lain."
      - text: "Personally, I believe"
        note: "Ungkapan untuk MENYAMPAIKAN pendapat sendiri."
      - text: "I see your point, but"
        note: "Ungkapan untuk tidak sepenuhnya setuju, tapi tetap sopan (mengakui pendapat lawan bicara dulu)."
      - text: "I agree with you because"
        note: "Ungkapan untuk setuju, DISERTAI alasan -- bukan cuma 'setuju' tanpa penjelasan."
    grammarTerms: []
  - title: "School Survey: What Do Students Think About Phones in Class?"
    body: "Last month, the student council surveyed 120 students about phone use in class. The results showed that 45 percent of students think phones should be allowed for research only, while 30 percent believe phones should be banned completely during lessons. Another 20 percent think phones should always be allowed, and the remaining 5 percent had no opinion. Based on these numbers, the majority of students -- 75 percent, if we combine the first two groups -- want at least some rules about phone use, rather than no rules at all. What do you think: does the survey support a 'research only' policy, or a full ban?"
    annotations:
      - text: "survey"
        note: "Survei -- cara mengumpulkan pendapat 120 siswa lewat pertanyaan yang sama."
      - text: "majority"
        note: "Mayoritas -- 75% dihitung dengan menjumlahkan dua kelompok pendapat."
    grammarTerms: []

activities:
  - type: "dialog"
    config:
      startId: "start"
      turns:
        - id: "start"
          speaker: "Classmate"
          line: "I think our school should ban plastic bottles completely. What do you think?"
          options:
            - text: "I agree with you because plastic waste is a huge problem for our environment."
              tone: "formal"
              appropriate: true
              feedback: "Bagus! Setuju DISERTAI alasan yang jelas."
              next: "turn2"
            - text: "Whatever, I don't really care."
              tone: "informal"
              appropriate: false
              feedback: "Kurang sopan dan tidak memberi pendapat -- coba sampaikan pandanganmu."
              next: "turn2"
            - text: "You're wrong."
              tone: "informal"
              appropriate: false
              feedback: "Terlalu to the point tanpa alasan -- coba jelaskan kenapa kamu tidak setuju."
              next: "turn2"
        - id: "turn2"
          speaker: "Classmate"
          line: "Some students think it's too strict and would be inconvenient. What's your opinion on that?"
          options:
            - text: "I see their point, but I still think we need stronger rules to protect the environment."
              tone: "formal"
              appropriate: true
              feedback: "Pas! Mengakui pandangan lain, tapi tetap mempertahankan pendapatmu dengan sopan."
              next: "turn3"
            - text: "They're just lazy."
              tone: "informal"
              appropriate: false
              feedback: "Kurang sopan -- hindari menghakimi pendapat orang lain."
              next: "turn3"
            - text: "I don't know."
              tone: "informal"
              appropriate: false
              feedback: "Coba sampaikan pendapatmu sendiri, jangan menghindar."
              next: "turn3"
        - id: "turn3"
          speaker: "Classmate"
          line: "What do you think we should do instead of a complete ban?"
          options:
            - text: "In my opinion, we could start with reusable water bottles and recycling bins in every classroom."
              tone: "formal"
              appropriate: true
              feedback: "Pas! Pendapat yang konstruktif dan jelas."
              next: "end"
            - text: "I don't care, do whatever you want."
              tone: "informal"
              appropriate: false
              feedback: "Kurang partisipatif dalam diskusi -- coba ikut memberi saran."
              next: "end"
            - text: "Ban everything immediately!"
              tone: "informal"
              appropriate: false
              feedback: "Terlalu ekstrem tanpa alasan yang jelas -- coba beri saran yang lebih masuk akal."
              next: "end"
        - id: "end"
          speaker: ""
          line: "Thanks for sharing your opinion! That was a great discussion about school plastic waste."
          options: []
  - type: "opinion-cards"
    config:
      cards:
        - persona: "Budi"
          issue: "School Plastic Waste"
          opinion: "I think our school should completely ban single-use plastic bottles and bags."
        - persona: "Sinta"
          issue: "Hot Weather & Climate Change"
          opinion: "I believe our school should plant more trees to help make the campus cooler."
        - persona: "Rian"
          issue: "Phone Use in Class"
          opinion: "I think students should be allowed to use their phones anytime during class, even just for fun."
  - type: "situational-quiz"
    config:
      jumlahTampil: 4
      soal:
        - soal: "You want to ask your friend what they think about a new school rule. What do you say?"
          pilihan:
            - "What do you think about the new rule?"
            - "I don't care what you think."
            - "The new rule is bad."
            - "Stop talking about the rule."
          jawaban: 0
          penjelasan: "Ini ungkapan standar untuk meminta pendapat orang lain."
        - soal: "You want to politely disagree with your classmate's opinion. What's the best way to start?"
          pilihan:
            - "You're wrong."
            - "I see your point, but I have a different opinion."
            - "That's a stupid idea."
            - "No way."
          jawaban: 1
          penjelasan: "Mengakui pendapat lawan bicara dulu sebelum menyampaikan pendapat berbeda itu lebih sopan."
        - soal: "Your friend says something you completely agree with. How do you respond?"
          pilihan:
            - "I agree with you because that makes sense."
            - "Whatever."
            - "I don't think so."
            - "Maybe, maybe not."
          jawaban: 0
          penjelasan: "Setuju disertai alasan singkat ('because that makes sense') lebih jelas daripada jawaban samar."
        - soal: "You want to share your personal opinion about climate change. What's an appropriate way to start?"
          pilihan:
            - "Personally, I believe climate change is a serious issue."
            - "Climate change, blah blah blah."
            - "I don't want to talk about it."
            - "Everyone knows climate change is fake."
          jawaban: 0
          penjelasan: "'Personally, I believe...' adalah ungkapan standar untuk menyampaikan pendapat pribadi secara serius."

task:
  prompt: "Choose ONE issue from the list below and write a short paragraph (80-120 words) giving your opinion. Use at least TWO expressions from this lesson (e.g., 'In my opinion...', 'Personally, I believe...', 'I agree with... because...', 'I see your point, but...'). Choose one: plastic waste at school, hot weather and climate change, or phone use in class."
  rubric:
    - "Menyampaikan pendapat dengan jelas menggunakan ungkapan yang dipelajari."
    - "Memberikan alasan yang masuk akal untuk mendukung pendapat."
    - "Memakai minimal 2 ungkapan dari pelajaran ini."
    - "Tata bahasa dan kosakata mudah dipahami."
  submissionType: "text"

reflection:
  - "ask someone for their opinion politely."
  - "give my own opinion using appropriate expressions."
  - "agree or disagree with someone politely."
  - "support my opinion with a reason."
  - "read and interpret simple survey percentages in an English text to form an opinion."

kuis:
  - soal: "What does \"perspective\" mean?"
    pilihan:
      - "A type of argument"
      - "A way of looking at or thinking about something"
      - "A disagreement"
      - "A school rule"
    jawaban: 1
    penjelasan: "'Perspective' artinya sudut pandang atau cara seseorang memandang suatu hal."
  - soal: "\"I see your point, but I think differently.\" — What is this expression used for?"
    pilihan:
      - "Agreeing completely"
      - "Politely disagreeing while acknowledging the other person's view"
      - "Asking for an opinion"
      - "Ending a conversation"
    jawaban: 1
    penjelasan: "Ungkapan ini mengakui pendapat lawan bicara dulu, baru menyampaikan pendapat yang berbeda -- cara sopan untuk tidak setuju."
  - soal: "Which expression is used to ASK for someone's opinion?"
    pilihan:
      - "In my opinion..."
      - "What do you think about...?"
      - "I agree with you because..."
      - "That's true."
    jawaban: 1
    penjelasan: "'What do you think about...?' dipakai untuk meminta pendapat, bukan menyampaikan pendapat sendiri."
  - soal: "In the model text, why did Dina and Eka have a good discussion even though they disagreed at first?"
    pilihan:
      - "They stopped talking to each other"
      - "They listened to each other and found a compromise"
      - "Dina won the argument"
      - "They both changed their minds completely"
    jawaban: 1
    penjelasan: "Mereka saling mendengarkan pendapat satu sama lain dan akhirnya menemukan solusi tengah (kompromi) -- itulah cara berdiskusi yang baik."
  - soal: "According to the school survey, what percentage of students think phones should be banned completely?"
    pilihan:
      - "20 percent"
      - "30 percent"
      - "45 percent"
      - "75 percent"
    jawaban: 1
    penjelasan: "Teks menyebutkan: '30 percent believe phones should be banned completely during lessons.'"
  - soal: "If 45% of the 120 surveyed students think phones should only be used for research, how many students does that represent?"
    pilihan:
      - "45 students"
      - "54 students"
      - "60 students"
      - "75 students"
    jawaban: 1
    penjelasan: "45% x 120 = 54 -- latihan numerasi sederhana: menghitung persentase dari jumlah total."

aksesRuangBelajar: "Siswa membuka pancaedu.web.id/ruang-belajar, memilih Kelas X, lalu memilih sesi Bahasa Inggris 'Asking & Giving Opinion'. Semua aktivitas dikerjakan langsung di browser; hasil ceklis refleksi dan draf tugas tersimpan otomatis di perangkat masing-masing siswa."
reviewStatus: "draft"
---

**Think about it:**

- What's a school rule or issue that you have a strong opinion about? *(Aturan atau isu di sekolah apa yang kamu punya pendapat kuat soal itu?)*
- Is it okay to disagree with your friend? How should you do it politely? *(Apakah boleh tidak setuju dengan temanmu? Bagaimana cara melakukannya dengan sopan?)*
- Why do you think people sometimes have different opinions about the same issue? *(Menurutmu, kenapa orang bisa punya pendapat berbeda tentang isu yang sama?)*

Before you read the model text below, check out the vocabulary cards first and try to guess their meaning -- then flip each card to check!
