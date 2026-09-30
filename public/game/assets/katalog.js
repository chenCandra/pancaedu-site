// Logika halaman katalog Arena Game Edukasi -- baca games.json, render kartu,
// filter (pencarian + chip mapel/kelas/mode). Vanilla JS polos, tanpa build.
(function () {
  'use strict';

  var elGrid = document.getElementById('grid-game');
  var elPencarian = document.getElementById('input-cari');
  var elChipMapel = document.getElementById('chip-mapel');
  var elChipKelas = document.getElementById('chip-kelas');
  var elChipMode = document.getElementById('chip-mode');
  var elKosong = document.getElementById('pesan-kosong');

  var semuaGame = [];
  var filterAktif = { mapel: null, kelas: null, mode: null };

  function buatChip(label, kelompok) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip';
    btn.textContent = label;
    btn.dataset.kelompok = kelompok;
    btn.dataset.nilai = label;
    btn.addEventListener('click', function () {
      var sedangAktif = filterAktif[kelompok] === label;
      filterAktif[kelompok] = sedangAktif ? null : label;
      perbaruiTampilanChip();
      render();
    });
    return btn;
  }

  function perbaruiTampilanChip() {
    [elChipMapel, elChipKelas, elChipMode].forEach(function (kontainer) {
      Array.prototype.forEach.call(kontainer.children, function (chip) {
        var kelompok = chip.dataset.kelompok;
        chip.classList.toggle('aktif', filterAktif[kelompok] === chip.dataset.nilai);
      });
    });
  }

  function nilaiUnik(daftar, ambil) {
    var set = {};
    daftar.forEach(function (g) {
      var v = ambil(g);
      if (Array.isArray(v)) v.forEach(function (x) { set[x] = true; });
      else if (v) set[v] = true;
    });
    return Object.keys(set).sort();
  }

  function cocokFilter(game) {
    if (filterAktif.mapel && game.mapel !== filterAktif.mapel) return false;
    if (filterAktif.kelas && game.kelas !== filterAktif.kelas) return false;
    if (filterAktif.mode && game.mode.indexOf(filterAktif.mode) === -1) return false;

    var kueri = (elPencarian.value || '').trim().toLowerCase();
    if (kueri) {
      var gabungan = (game.judul + ' ' + game.materi + ' ' + game.mapel).toLowerCase();
      if (gabungan.indexOf(kueri) === -1) return false;
    }
    return true;
  }

  function buatKartu(game) {
    var a = document.createElement('a');
    a.href = game.path;
    a.className = 'kartu-game warna-' + (game.warna || 'biru');

    var html = '';
    if (game.status) html += '<span class="kartu-label">' + game.status + '</span>';
    html += '<span class="kartu-ikon" aria-hidden="true">' + game.ikon + '</span>';
    html += '<h2>' + game.judul + '</h2>';
    html += '<p class="kartu-deskripsi">' + game.deskripsi + '</p>';
    html += '<div class="kartu-meta">';
    html += '<span>📘 ' + game.mapel + ' · ' + game.materi + '</span>';
    html += '<span>🎓 ' + game.kelas + '</span>';
    html += '<span>👥 ' + game.mode.join(' / ') + '</span>';
    html += '<span>⏱ ' + game.durasi + '</span>';
    html += '</div>';
    html += '<span class="kartu-cta">Main Sekarang →</span>';
    a.innerHTML = html;
    return a;
  }

  function render() {
    var hasil = semuaGame.filter(cocokFilter);
    elGrid.innerHTML = '';
    if (hasil.length === 0) {
      elKosong.hidden = false;
      return;
    }
    elKosong.hidden = true;
    hasil.forEach(function (g) { elGrid.appendChild(buatKartu(g)); });
  }

  fetch('/game/games.json')
    .then(function (res) { return res.json(); })
    .then(function (daftar) {
      semuaGame = daftar;

      nilaiUnik(daftar, function (g) { return g.mapel; }).forEach(function (v) {
        elChipMapel.appendChild(buatChip(v, 'mapel'));
      });
      nilaiUnik(daftar, function (g) { return g.kelas; }).forEach(function (v) {
        elChipKelas.appendChild(buatChip(v, 'kelas'));
      });
      nilaiUnik(daftar, function (g) { return g.mode; }).forEach(function (v) {
        elChipMode.appendChild(buatChip(v, 'mode'));
      });

      render();
    })
    .catch(function (err) {
      elGrid.innerHTML = '<p class="pesan-error">Gagal memuat daftar game. Coba muat ulang halaman ini.</p>';
      console.error('Gagal memuat games.json:', err);
    });

  elPencarian.addEventListener('input', render);
})();
