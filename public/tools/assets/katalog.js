// Logika halaman katalog Perkakas -- baca tools.json, render kartu, filter
// lewat pencarian teks. Vanilla JS polos, tanpa build. Pola sama persis
// dengan public/game/assets/katalog.js.
(function () {
  'use strict';

  var elGrid = document.getElementById('grid-alat');
  var elPencarian = document.getElementById('input-cari');
  var elKosong = document.getElementById('pesan-kosong');

  var semuaAlat = [];

  function cocokFilter(alat) {
    var kueri = (elPencarian.value || '').trim().toLowerCase();
    if (!kueri) return true;
    var gabungan = (alat.judul + ' ' + alat.deskripsi).toLowerCase();
    return gabungan.indexOf(kueri) !== -1;
  }

  function buatKartu(alat) {
    var a = document.createElement('a');
    a.href = alat.path;
    a.className = 'kartu-alat warna-' + (alat.warna || 'biru');

    var html = '';
    html += '<span class="kartu-ikon" aria-hidden="true">' + alat.ikon + '</span>';
    html += '<h2>' + alat.judul + '</h2>';
    html += '<p class="kartu-deskripsi">' + alat.deskripsi + '</p>';
    html += '<span class="kartu-cta">Buka Alat →</span>';
    a.innerHTML = html;
    return a;
  }

  function render() {
    var hasil = semuaAlat.filter(cocokFilter);
    elGrid.innerHTML = '';
    if (hasil.length === 0) {
      elKosong.hidden = false;
      return;
    }
    elKosong.hidden = true;
    hasil.forEach(function (a) { elGrid.appendChild(buatKartu(a)); });
  }

  fetch('/tools/tools.json')
    .then(function (res) { return res.json(); })
    .then(function (daftar) {
      semuaAlat = daftar;
      render();
    })
    .catch(function (err) {
      elGrid.innerHTML = '<p class="pesan-error">Gagal memuat daftar alat. Coba muat ulang halaman ini.</p>';
      console.error('Gagal memuat tools.json:', err);
    });

  elPencarian.addEventListener('input', render);
})();
