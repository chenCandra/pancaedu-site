// Logika halaman katalog Kotak Alat -- baca tools.json, render kartu,
// filter (pencarian + chip peran). Vanilla JS polos, tanpa build. Pola
// sama persis dengan public/game/assets/katalog.js.
(function () {
  'use strict';

  var elGrid = document.getElementById('grid-alat');
  var elPencarian = document.getElementById('input-cari');
  var elChipPeran = document.getElementById('chip-peran');
  var elKosong = document.getElementById('pesan-kosong');

  var LABEL_PERAN = { guru: '👩‍🏫 Guru', murid: '🎓 Murid', kepsek: '🏫 Kepala Sekolah', bendahara: '💰 Bendahara' };

  var semuaAlat = [];
  var peranAktif = null;

  function buatChip(nilai) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip';
    btn.textContent = LABEL_PERAN[nilai] || nilai;
    btn.dataset.nilai = nilai;
    btn.addEventListener('click', function () {
      peranAktif = peranAktif === nilai ? null : nilai;
      perbaruiTampilanChip();
      render();
    });
    return btn;
  }

  function perbaruiTampilanChip() {
    Array.prototype.forEach.call(elChipPeran.children, function (chip) {
      chip.classList.toggle('aktif', chip.dataset.nilai === peranAktif);
    });
  }

  function peranUnik(daftar) {
    var set = {};
    daftar.forEach(function (a) { (a.peran || []).forEach(function (p) { set[p] = true; }); });
    var urutan = ['guru', 'murid', 'kepsek', 'bendahara'];
    return urutan.filter(function (p) { return set[p]; });
  }

  function cocokFilter(alat) {
    if (peranAktif && (alat.peran || []).indexOf(peranAktif) === -1) return false;
    var kueri = (elPencarian.value || '').trim().toLowerCase();
    if (kueri) {
      var gabungan = (alat.judul + ' ' + alat.deskripsi).toLowerCase();
      if (gabungan.indexOf(kueri) === -1) return false;
    }
    return true;
  }

  function buatKartu(alat) {
    var a = document.createElement('a');
    a.href = alat.path;
    a.className = 'kartu-alat warna-' + (alat.warna || 'biru');

    var html = '';
    html += '<span class="kartu-ikon" aria-hidden="true">' + alat.ikon + '</span>';
    html += '<h2>' + alat.judul + '</h2>';
    html += '<p class="kartu-deskripsi">' + alat.deskripsi + '</p>';
    html += '<div class="kartu-meta">';
    (alat.peran || []).forEach(function (p) { html += '<span>' + (LABEL_PERAN[p] || p) + '</span>'; });
    html += '</div>';
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
      peranUnik(daftar).forEach(function (p) { elChipPeran.appendChild(buatChip(p)); });
      render();
    })
    .catch(function (err) {
      elGrid.innerHTML = '<p class="pesan-error">Gagal memuat daftar alat. Coba muat ulang halaman ini.</p>';
      console.error('Gagal memuat tools.json:', err);
    });

  elPencarian.addEventListener('input', render);
})();
