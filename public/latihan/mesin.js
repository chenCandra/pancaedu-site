// Latihan Kenzie -- mesin kuis & beranda bersama, dipakai semua laman di
// folder ini. Vanilla JS polos, tanpa build/library eksternal (pola sama
// seperti public/tools/assets/katalog.js). Satu file ini dipakai dua cara:
//   - Laman kuis (paskibra-00.html dkk) memanggil LatihanKenzie.mulaiKuis(DATA)
//     setelah mesin.js dimuat, dengan DATA = window.DATA_LATIHAN dari file itu.
//   - Beranda (index.html) memanggil LatihanKenzie.mulaiBeranda().
//
// Struktur satu objek `soal` yang diharapkan (lihat _TEMPLATE.html):
//   {
//     teks: "...",
//     opsi: { A: "...", B: "...", C: "...", D: "...", E: "..." },
//     jawaban: "C",              // huruf kunci jawaban benar, SEBELUM diacak
//     topik: "Nama Topik",       // dipakai untuk rekap penguasaan per topik
//     tingkat: "mudah|sedang|sulit",
//     pembahasan: "...",
//     trik: "...",
//     jebakan: "..."
//   }

(function () {
  'use strict';

  var KUNCI_NAMA = 'latihanKenzie_nama';
  var KUNCI_RIWAYAT = 'latihanKenzie_riwayat';
  var WAKTU_DEFAULT_DETIK = 30 * 60;
  var AMBANG_PERLU_ULANG = 70; // persen -- topik di bawah ini masuk daftar "perlu diulang"

  // ---------- Util kecil ----------

  function ambilLS(kunci, fallback) {
    try {
      var v = window.localStorage.getItem(kunci);
      return v === null ? fallback : JSON.parse(v);
    } catch (e) {
      return fallback;
    }
  }

  function simpanLS(kunci, nilai) {
    try {
      window.localStorage.setItem(kunci, JSON.stringify(nilai));
    } catch (e) {
      /* localStorage tidak tersedia (mis. mode privat penuh) -- diamkan */
    }
  }

  function kocokArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function escapeHtml(teks) {
    var d = document.createElement('div');
    d.textContent = teks == null ? '' : String(teks);
    return d.innerHTML;
  }

  function formatWaktu(totalDetik) {
    var m = Math.floor(totalDetik / 60);
    var s = totalDetik % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function formatTanggal(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) +
        ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return iso;
    }
  }

  function namaTersimpan() {
    return (ambilLS(KUNCI_NAMA, '') || '').toString();
  }

  function simpanNama(nama) {
    simpanLS(KUNCI_NAMA, (nama || '').trim());
  }

  function riwayatTersimpan() {
    var r = ambilLS(KUNCI_RIWAYAT, []);
    return Array.isArray(r) ? r : [];
  }

  function tambahRiwayat(entri) {
    var r = riwayatTersimpan();
    r.unshift(entri);
    if (r.length > 100) r = r.slice(0, 100);
    simpanLS(KUNCI_RIWAYAT, r);
  }

  // ====================================================================
  // BAGIAN KUIS
  // ====================================================================

  function mulaiKuis(dataLatihan) {
    var elApp = document.getElementById('app');
    if (!elApp) {
      console.error('Latihan Kenzie: elemen #app tidak ditemukan di laman ini.');
      return;
    }

    var state = {
      dataLatihan: dataLatihan,
      soalAcak: null, // diisi saat tombol "Mulai Latihan" ditekan
      jawabanUser: {}, // { idx: "A" }
      raguUser: {}, // { idx: true }
      idxSekarang: 0,
      waktuSisaDetik: (dataLatihan.waktuMenit || 30) * 60,
      waktuAkhirMs: null,
      timerId: null,
      selesai: false,
      hasil: null,
    };

    renderMulai();

    // ---------- Layar Mulai ----------
    function renderMulai() {
      var namaAwal = escapeHtml(namaTersimpan());
      elApp.innerHTML =
        '<div class="kontainer">' +
        '<div class="mulai-kartu kartu">' +
        '<span class="kategori-badge">' + escapeHtml(dataLatihan.kategori) + '</span>' +
        '<h1>' + escapeHtml(dataLatihan.judul) + '</h1>' +
        (dataLatihan.deskripsi ? '<p style="color:var(--tinta-lembut)">' + escapeHtml(dataLatihan.deskripsi) + '</p>' : '') +
        '<div class="info-baris">' +
        '<span>📝 ' + dataLatihan.soal.length + ' soal</span>' +
        '<span>⏱️ ' + (dataLatihan.waktuMenit || 30) + ' menit</span>' +
        '<span>🔤 Pilihan ganda A–E</span>' +
        '</div>' +
        '<div class="bidang-nama">' +
        '<label for="input-nama-mulai">Nama kamu</label>' +
        '<input type="text" id="input-nama-mulai" placeholder="Tulis namamu di sini" value="' + namaAwal + '" maxlength="60">' +
        '</div>' +
        '<button class="tombol tombol-besar" id="btn-mulai-kuis">🚀 Mulai Latihan</button>' +
        '<p style="margin-top:0.85rem;font-size:0.8125rem;color:var(--tinta-faint)">Urutan soal &amp; pilihan jawaban akan diacak setiap kamu mulai.</p>' +
        '</div>' +
        '</div>';

      document.getElementById('btn-mulai-kuis').addEventListener('click', function () {
        var nama = document.getElementById('input-nama-mulai').value.trim();
        if (!nama) {
          window.alert('Tulis namamu dulu ya, biar hasilnya bisa dicatat.');
          return;
        }
        simpanNama(nama);
        state.namaPeserta = nama;
        mulaiPengerjaan();
      });
    }

    function mulaiPengerjaan() {
      state.soalAcak = kocokArray(dataLatihan.soal).map(function (s) {
        var hurufAsli = ['A', 'B', 'C', 'D', 'E'].filter(function (h) {
          return s.opsi[h] !== undefined && s.opsi[h] !== null && s.opsi[h] !== '';
        });
        var pasangan = hurufAsli.map(function (h) {
          return { teks: s.opsi[h], benar: h === s.jawaban };
        });
        var pasanganAcak = kocokArray(pasangan);
        var opsiBaru = {};
        var hurufJawabanBaru = null;
        pasanganAcak.forEach(function (item, i) {
          var hurufBaru = ['A', 'B', 'C', 'D', 'E'][i];
          opsiBaru[hurufBaru] = item.teks;
          if (item.benar) hurufJawabanBaru = hurufBaru;
        });
        var klon = {};
        for (var k in s) if (Object.prototype.hasOwnProperty.call(s, k)) klon[k] = s[k];
        klon.opsi = opsiBaru;
        klon.jawaban = hurufJawabanBaru;
        return klon;
      });

      state.idxSekarang = 0;
      state.jawabanUser = {};
      state.raguUser = {};
      state.waktuSisaDetik = (dataLatihan.waktuMenit || 30) * 60;
      state.waktuAkhirMs = Date.now() + state.waktuSisaDetik * 1000;

      renderSoal();
      state.timerId = setInterval(tikTimer, 500);
      window.addEventListener('beforeunload', konfirmasiKeluar);
    }

    function konfirmasiKeluar(e) {
      if (state.selesai) return;
      e.preventDefault();
      e.returnValue = '';
    }

    function tikTimer() {
      var sisaMs = state.waktuAkhirMs - Date.now();
      state.waktuSisaDetik = Math.max(0, Math.round(sisaMs / 1000));
      perbaruiTimerTampilan();
      if (state.waktuSisaDetik <= 0) {
        clearInterval(state.timerId);
        selesaikanKuis(true);
      }
    }

    function perbaruiTimerTampilan() {
      var el = document.getElementById('timer-kuis');
      if (!el) return;
      el.textContent = '⏱️ ' + formatWaktu(state.waktuSisaDetik);
      el.classList.toggle('waspada', state.waktuSisaDetik <= 300 && state.waktuSisaDetik > 60);
      el.classList.toggle('kritis', state.waktuSisaDetik <= 60);
    }

    // ---------- Layar Soal ----------
    function renderSoal() {
      var total = state.soalAcak.length;
      var i = state.idxSekarang;
      var soal = state.soalAcak[i];
      var hurufDijawab = state.jawabanUser[i];

      var navHtml = '';
      for (var n = 0; n < total; n++) {
        var kelas = 'nav-' + n;
        var cls = [];
        if (state.jawabanUser[n] !== undefined) cls.push('terjawab');
        if (state.raguUser[n]) cls.push('ragu');
        if (n === i) cls.push('aktif');
        navHtml += '<button type="button" data-goto="' + n + '" class="' + cls.join(' ') + '">' + (n + 1) + '</button>';
      }

      var opsiHtml = '';
      ['A', 'B', 'C', 'D', 'E'].forEach(function (h) {
        if (soal.opsi[h] === undefined) return;
        var terpilih = hurufDijawab === h;
        opsiHtml +=
          '<div class="opsi-item' + (terpilih ? ' terpilih' : '') + '" data-pilih="' + h + '" role="button" tabindex="0">' +
          '<span class="opsi-huruf">' + h + '</span>' +
          '<span class="opsi-teks">' + escapeHtml(soal.opsi[h]) + '</span>' +
          '</div>';
      });

      elApp.innerHTML =
        '<div class="header-kuis"><div class="kontainer">' +
        '<div class="header-kuis-baris">' +
        '<strong>' + escapeHtml(dataLatihan.judul) + '</strong>' +
        '<span class="timer-kuis" id="timer-kuis">⏱️ ' + formatWaktu(state.waktuSisaDetik) + '</span>' +
        '</div>' +
        '<div class="progres-track"><div class="progres-isi" style="width:' + Math.round(((i + 1) / total) * 100) + '%"></div></div>' +
        '</div></div>' +
        '<div class="kontainer">' +
        '<div class="nav-nomor">' + navHtml + '</div>' +
        '<div class="kartu">' +
        '<span class="soal-nomor-label">Soal ' + (i + 1) + ' dari ' + total + '</span>' +
        '<div class="soal-teks">' + escapeHtml(soal.teks) + '</div>' +
        '<div class="opsi-list">' + opsiHtml + '</div>' +
        '<div class="baris-aksi-soal">' +
        '<button type="button" class="tombol-luar tombol" id="btn-ragu">' + (state.raguUser[i] ? '🚩 Batal Tandai' : '🚩 Tandai Ragu-ragu') + '</button>' +
        '<button type="button" class="tombol-merah tombol" id="btn-selesai">✅ Selesai</button>' +
        '</div>' +
        '<div class="baris-navigasi-soal">' +
        '<button type="button" class="tombol-luar tombol" id="btn-prev"' + (i === 0 ? ' disabled' : '') + '>← Sebelumnya</button>' +
        '<button type="button" class="tombol tombol-hijau" id="btn-next"' + (i === total - 1 ? ' disabled' : '') + '>Selanjutnya →</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        modalKonfirmasiHtml();

      perbaruiTimerTampilan();

      elApp.querySelectorAll('.opsi-item').forEach(function (el) {
        var pilihOpsi = function () {
          state.jawabanUser[i] = el.getAttribute('data-pilih');
          renderSoal();
        };
        el.addEventListener('click', pilihOpsi);
        el.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            pilihOpsi();
          }
        });
      });
      elApp.querySelectorAll('[data-goto]').forEach(function (el) {
        el.addEventListener('click', function () {
          state.idxSekarang = parseInt(el.getAttribute('data-goto'), 10);
          renderSoal();
        });
      });
      document.getElementById('btn-ragu').addEventListener('click', function () {
        state.raguUser[i] = !state.raguUser[i];
        renderSoal();
      });
      document.getElementById('btn-prev').addEventListener('click', function () {
        if (state.idxSekarang > 0) { state.idxSekarang--; renderSoal(); }
      });
      document.getElementById('btn-next').addEventListener('click', function () {
        if (state.idxSekarang < total - 1) { state.idxSekarang++; renderSoal(); }
      });
      document.getElementById('btn-selesai').addEventListener('click', bukaModalKonfirmasi);
      var elBatal = document.getElementById('btn-modal-batal');
      if (elBatal) elBatal.addEventListener('click', tutupModalKonfirmasi);
      var elYa = document.getElementById('btn-modal-ya');
      if (elYa) elYa.addEventListener('click', function () { selesaikanKuis(false); });
    }

    function modalKonfirmasiHtml() {
      var total = state.soalAcak.length;
      var terjawab = Object.keys(state.jawabanUser).length;
      var belum = total - terjawab;
      var raguJumlah = Object.keys(state.raguUser).filter(function (k) { return state.raguUser[k]; }).length;
      return (
        '<div class="overlay-modal" id="modal-konfirmasi">' +
        '<div class="modal-kartu">' +
        '<h2>Yakin sudah selesai?</h2>' +
        '<p>Terjawab: <strong>' + terjawab + '</strong> dari ' + total + '.<br>' +
        (belum > 0 ? 'Masih ada <strong>' + belum + ' soal belum dijawab</strong>.<br>' : '') +
        (raguJumlah > 0 ? 'Ada <strong>' + raguJumlah + ' soal ditandai ragu-ragu</strong>.' : '') +
        '</p>' +
        '<div class="baris-tombol-modal">' +
        '<button type="button" class="tombol-luar tombol" id="btn-modal-batal">Kembali Mengerjakan</button>' +
        '<button type="button" class="tombol-merah tombol" id="btn-modal-ya">Ya, Selesai</button>' +
        '</div>' +
        '</div>' +
        '</div>'
      );
    }

    function bukaModalKonfirmasi() {
      var el = document.getElementById('modal-konfirmasi');
      if (el) el.classList.add('tampil');
    }
    function tutupModalKonfirmasi() {
      var el = document.getElementById('modal-konfirmasi');
      if (el) el.classList.remove('tampil');
    }

    // ---------- Hitung & Layar Hasil ----------
    function selesaikanKuis(habisWaktu) {
      clearInterval(state.timerId);
      state.selesai = true;
      window.removeEventListener('beforeunload', konfirmasiKeluar);

      var total = state.soalAcak.length;
      var benar = 0;
      var perTopik = {}; // { topik: { benar, total } }

      state.soalAcak.forEach(function (soal, i) {
        var topik = soal.topik || 'Umum';
        if (!perTopik[topik]) perTopik[topik] = { benar: 0, total: 0 };
        perTopik[topik].total++;
        if (state.jawabanUser[i] === soal.jawaban) {
          benar++;
          perTopik[topik].benar++;
        }
      });

      var nilai = Math.round((benar / total) * 100);
      var topikRingkas = Object.keys(perTopik).map(function (t) {
        var d = perTopik[t];
        return { topik: t, benar: d.benar, total: d.total, persen: Math.round((d.benar / d.total) * 100) };
      });
      topikRingkas.sort(function (a, b) { return a.persen - b.persen; });
      var topikUlang = topikRingkas.filter(function (t) { return t.persen < AMBANG_PERLU_ULANG; });

      state.hasil = {
        nilai: nilai, benar: benar, total: total, topikRingkas: topikRingkas, topikUlang: topikUlang, habisWaktu: !!habisWaktu,
      };

      tambahRiwayat({
        id: dataLatihan.id,
        judul: dataLatihan.judul,
        kategori: dataLatihan.kategori,
        nama: state.namaPeserta || namaTersimpan(),
        tanggal: new Date().toISOString(),
        nilai: nilai,
        benar: benar,
        total: total,
        topikUlang: topikUlang.map(function (t) { return t.topik; }),
      });

      renderHasil();
    }

    function kelasNilai(persen) {
      if (persen >= 80) return 'baik';
      if (persen >= AMBANG_PERLU_ULANG) return 'sedang';
      return 'kurang';
    }

    function renderHasil() {
      var h = state.hasil;
      var topikHtml = h.topikRingkas.map(function (t) {
        var kls = kelasNilai(t.persen);
        return (
          '<div class="topik-item">' +
          '<span class="nama-topik">' + escapeHtml(t.topik) + '</span>' +
          '<div class="topik-bar-track"><div class="topik-bar-isi ' + kls + '" style="width:' + t.persen + '%"></div></div>' +
          '<span class="topik-persen">' + t.persen + '%</span>' +
          '</div>'
        );
      }).join('');

      var ulangHtml = '';
      if (h.topikUlang.length > 0) {
        ulangHtml =
          '<div class="kotak-ulang"><strong>📌 Topik yang perlu diulang:</strong><br>' +
          h.topikUlang.map(function (t) { return escapeHtml(t.topik) + ' (' + t.persen + '%)'; }).join(', ') +
          '</div>';
      } else {
        ulangHtml = '<div class="kotak-ulang" style="background:var(--benar-lembut)"><strong style="color:var(--benar)">🎉 Mantap, semua topik sudah dikuasai dengan baik!</strong></div>';
      }

      elApp.innerHTML =
        '<div class="kontainer">' +
        '<div class="kartu">' +
        (h.habisWaktu ? '<p style="text-align:center;color:var(--salah);font-weight:700">⏰ Waktu habis -- jawaban otomatis dikumpulkan.</p>' : '') +
        '<div class="hasil-nilai-wrap">' +
        '<div class="hasil-nilai-angka">' + h.nilai + '</div>' +
        '<div class="hasil-nilai-label">Nilai kamu di &ldquo;' + escapeHtml(dataLatihan.judul) + '&rdquo;</div>' +
        '<div class="hasil-ringkas">' +
        '<div class="hasil-ringkas-item"><div class="angka" style="color:var(--benar)">' + h.benar + '</div><div class="label">Benar</div></div>' +
        '<div class="hasil-ringkas-item"><div class="angka" style="color:var(--salah)">' + (h.total - h.benar) + '</div><div class="label">Salah</div></div>' +
        '<div class="hasil-ringkas-item"><div class="angka">' + h.total + '</div><div class="label">Total Soal</div></div>' +
        '</div>' +
        '</div>' +
        '<h3 style="margin-top:1.5rem;margin-bottom:0.25rem;font-size:1rem">Penguasaan per Topik</h3>' +
        '<div class="topik-list">' + topikHtml + '</div>' +
        ulangHtml +
        '<div class="baris-aksi-hasil">' +
        '<button type="button" class="tombol" id="btn-lihat-pembahasan">📖 Lihat Pembahasan</button>' +
        '<button type="button" class="tombol tombol-hijau" id="btn-kirim-wa">💬 Kirim ke WhatsApp</button>' +
        '</div>' +
        '<div class="baris-aksi-hasil">' +
        '<button type="button" class="tombol-luar tombol" id="btn-ulangi">🔁 Ulangi Latihan</button>' +
        '<a class="tombol-luar tombol" href="/latihan/" style="text-decoration:none">🏠 Kembali ke Beranda</a>' +
        '</div>' +
        '</div>' +
        '</div>';

      document.getElementById('btn-lihat-pembahasan').addEventListener('click', renderPembahasan);
      document.getElementById('btn-kirim-wa').addEventListener('click', kirimWhatsApp);
      document.getElementById('btn-ulangi').addEventListener('click', mulaiPengerjaan);
    }

    function kirimWhatsApp() {
      var h = state.hasil;
      var nama = state.namaPeserta || namaTersimpan() || '(tanpa nama)';
      var teks = 'Hasil Latihan Kenzie\n';
      teks += 'Nama: ' + nama + '\n';
      teks += 'Latihan: ' + dataLatihan.judul + ' (' + dataLatihan.kategori + ')\n';
      teks += 'Nilai: ' + h.nilai + '/100 (benar ' + h.benar + ' dari ' + h.total + ')\n\n';
      teks += 'Penguasaan per topik:\n';
      h.topikRingkas.forEach(function (t) {
        teks += '- ' + t.topik + ': ' + t.persen + '%\n';
      });
      if (h.topikUlang.length > 0) {
        teks += '\nPerlu diulang: ' + h.topikUlang.map(function (t) { return t.topik; }).join(', ');
      }
      var url = 'https://wa.me/?text=' + encodeURIComponent(teks);
      window.open(url, '_blank', 'noopener');
    }

    // ---------- Layar Pembahasan ----------
    function renderPembahasan() {
      var itemHtml = state.soalAcak.map(function (soal, i) {
        var hurufUser = state.jawabanUser[i];
        var benar = hurufUser === soal.jawaban;
        var opsiHtml = ['A', 'B', 'C', 'D', 'E'].filter(function (h) { return soal.opsi[h] !== undefined; }).map(function (h) {
          var cls = '';
          if (h === soal.jawaban) cls = 'jawaban-benar';
          else if (h === hurufUser) cls = 'jawaban-salah-dipilih';
          return '<div class="pembahasan-opsi ' + cls + '">' + h + '. ' + escapeHtml(soal.opsi[h]) + (h === soal.jawaban ? ' ✓' : (h === hurufUser ? ' ✗' : '')) + '</div>';
        }).join('');

        var blokTambahan = '';
        if (soal.pembahasan) blokTambahan += '<div class="pembahasan-blok"><strong>💡 Pembahasan</strong><p>' + escapeHtml(soal.pembahasan) + '</p></div>';
        if (soal.trik) blokTambahan += '<div class="pembahasan-blok"><strong>⚡ Trik Cepat</strong><p>' + escapeHtml(soal.trik) + '</p></div>';
        if (soal.jebakan) blokTambahan += '<div class="pembahasan-blok"><strong>⚠️ Jebakan Umum</strong><p>' + escapeHtml(soal.jebakan) + '</p></div>';

        return (
          '<div class="pembahasan-item ' + (benar ? 'benar' : 'salah') + '">' +
          '<span class="pembahasan-status">' + (benar ? 'Benar' : (hurufUser ? 'Salah' : 'Tidak Dijawab')) + '</span>' +
          '<div class="pembahasan-soal">' + (i + 1) + '. ' + escapeHtml(soal.teks) + '</div>' +
          opsiHtml +
          blokTambahan +
          '</div>'
        );
      }).join('');

      elApp.innerHTML =
        '<div class="kontainer">' +
        '<h2 style="margin-block:1.25rem 1rem">Pembahasan -- ' + escapeHtml(dataLatihan.judul) + '</h2>' +
        itemHtml +
        '<div class="baris-aksi-hasil">' +
        '<button type="button" class="tombol-luar tombol" id="btn-kembali-hasil">← Kembali ke Hasil</button>' +
        '<a class="tombol tombol-hijau" href="/latihan/" style="text-decoration:none">🏠 Kembali ke Beranda</a>' +
        '</div>' +
        '</div>';

      document.getElementById('btn-kembali-hasil').addEventListener('click', renderHasil);
      window.scrollTo(0, 0);
    }
  }

  // ====================================================================
  // BAGIAN BERANDA
  // ====================================================================

  function mulaiBeranda() {
    var elInputNama = document.getElementById('input-nama-beranda');
    var elGrid = document.getElementById('grid-latihan');
    var elRiwayat = document.getElementById('daftar-riwayat');
    var elRiwayatKosong = document.getElementById('riwayat-kosong');
    var elHapusRiwayat = document.getElementById('btn-hapus-riwayat');

    if (elInputNama) {
      elInputNama.value = namaTersimpan();
      elInputNama.addEventListener('input', function () {
        simpanNama(elInputNama.value);
      });
    }

    if (elGrid) {
      fetch('/latihan/daftar.json')
        .then(function (res) { return res.json(); })
        .then(function (daftar) { renderDaftar(daftar); })
        .catch(function (err) {
          elGrid.innerHTML = '<p class="pesan-error">Gagal memuat daftar latihan. Coba muat ulang halaman ini.</p>';
          console.error('Gagal memuat daftar.json:', err);
        });
    }

    function renderDaftar(daftar) {
      if (!Array.isArray(daftar) || daftar.length === 0) {
        elGrid.innerHTML = '<p class="pesan-kosong">Belum ada latihan yang tersedia.</p>';
        return;
      }
      var riwayat = riwayatTersimpan();
      var nilaiTerakhirPerId = {};
      riwayat.forEach(function (r) {
        if (nilaiTerakhirPerId[r.id] === undefined) nilaiTerakhirPerId[r.id] = r.nilai;
      });

      var perKategori = {};
      var urutanKategori = [];
      daftar.forEach(function (item) {
        if (!perKategori[item.kategori]) {
          perKategori[item.kategori] = [];
          urutanKategori.push(item.kategori);
        }
        perKategori[item.kategori].push(item);
      });

      var html = '';
      urutanKategori.forEach(function (kategori) {
        html += '<h2 class="judul-kategori">' + escapeHtml(kategori) + '</h2><div class="grid-latihan">';
        perKategori[kategori].forEach(function (item) {
          var skorHtml = nilaiTerakhirPerId[item.id] !== undefined
            ? '<span class="kartu-latihan-skor">Nilai terakhir: ' + nilaiTerakhirPerId[item.id] + '</span>'
            : '';
          html +=
            '<a class="kartu-latihan warna-' + escapeHtml(item.warna || 'biru') + '" href="' + item.path + '">' +
            '<span class="kartu-latihan-ikon">' + item.ikon + '</span>' +
            '<h3>' + escapeHtml(item.judul) + '</h3>' +
            '<p>' + escapeHtml(item.deskripsi || '') + '</p>' +
            '<div class="kartu-latihan-meta"><span>📝 ' + item.jumlahSoal + ' soal</span><span>⏱️ ' + item.waktuMenit + ' menit</span></div>' +
            skorHtml +
            '</a>';
        });
        html += '</div>';
      });
      elGrid.innerHTML = html;
    }

    function renderRiwayat() {
      if (!elRiwayat) return;
      var riwayat = riwayatTersimpan();
      if (riwayat.length === 0) {
        elRiwayat.innerHTML = '';
        if (elRiwayatKosong) elRiwayatKosong.hidden = false;
        if (elHapusRiwayat) elHapusRiwayat.hidden = true;
        return;
      }
      if (elRiwayatKosong) elRiwayatKosong.hidden = true;
      if (elHapusRiwayat) elHapusRiwayat.hidden = false;

      elRiwayat.innerHTML = riwayat.slice(0, 20).map(function (r) {
        var kelas = r.nilai >= 80 ? 'tinggi' : (r.nilai >= 60 ? 'sedang' : 'rendah');
        return (
          '<div class="riwayat-item">' +
          '<div class="riwayat-item-info">' +
          '<div class="riwayat-item-judul">' + escapeHtml(r.judul) + '</div>' +
          '<div class="riwayat-item-tanggal">' + escapeHtml(r.nama || '') + ' &middot; ' + formatTanggal(r.tanggal) + '</div>' +
          '</div>' +
          '<span class="riwayat-item-nilai ' + kelas + '">' + r.nilai + '</span>' +
          '</div>'
        );
      }).join('');
    }

    renderRiwayat();

    if (elHapusRiwayat) {
      elHapusRiwayat.addEventListener('click', function () {
        if (window.confirm('Hapus semua riwayat nilai di perangkat ini?')) {
          simpanLS(KUNCI_RIWAYAT, []);
          renderRiwayat();
        }
      });
    }
  }

  window.LatihanKenzie = {
    mulaiKuis: mulaiKuis,
    mulaiBeranda: mulaiBeranda,
  };
})();
