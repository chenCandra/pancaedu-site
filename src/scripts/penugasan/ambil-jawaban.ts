// Logika client-side bersama buat semua tipe soal Penugasan: memasang
// interaksi (klik pilih, naik/turun urutan, drag&drop), membaca jawaban
// terkini dari DOM, dan menampilkan hasil setelah server menilai.
//
// CATATAN PENTING soal keamanan: modul ini TIDAK PERNAH tahu jawaban yang
// benar (itu cuma ada di server, lihat src/lib/penugasan/grading.ts) --
// makanya untuk tipe pilihan-ganda/benar-salah, feedback cuma bisa
// menandai PILIHAN SISWA sebagai benar/salah (tidak bisa ikut menunjukkan
// "yang benar sebenarnya opsi mana"), dan untuk tipe majemuk (menjodohkan/
// menyusun-urutan/drag-drop) feedback cuma di level SOAL, tidak per
// bagian. Ini bukan keterbatasan tak sengaja -- ini konsekuensi langsung
// dari desain "kunci jawaban tidak boleh sampai ke browser".

import type { HasilSoal, JawabanSoal } from '../../lib/penugasan/types';

const DRAG_THRESHOLD_PX = 6;

export function inisialisasiSoal(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-soal]').forEach((soalEl) => {
    const tipe = soalEl.dataset.tipe;
    if (tipe === 'pilihan-ganda' || tipe === 'benar-salah') inisialisasiPilihan(soalEl);
    else if (tipe === 'menyusun-urutan') inisialisasiUrutan(soalEl);
    else if (tipe === 'drag-drop') inisialisasiDragDrop(soalEl);
    // isian-singkat & menjodohkan cuma pakai elemen native (input/select),
    // tidak perlu wiring tambahan.
  });
}

function inisialisasiPilihan(soalEl: HTMLElement) {
  const opsiList = Array.from(soalEl.querySelectorAll<HTMLButtonElement>('[data-pn-opsi]'));
  opsiList.forEach((btn) => {
    btn.addEventListener('click', () => {
      opsiList.forEach((b) => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
    });
  });
}

function inisialisasiUrutan(soalEl: HTMLElement) {
  const list = soalEl.querySelector<HTMLElement>('[data-pn-urutan]');
  if (!list) return;

  const perbaruiTombol = () => {
    const items = Array.from(list.querySelectorAll<HTMLElement>('[data-pn-urutan-item]'));
    items.forEach((item, i) => {
      const naik = item.querySelector<HTMLButtonElement>('[data-pn-urutan-naik]');
      const turun = item.querySelector<HTMLButtonElement>('[data-pn-urutan-turun]');
      if (naik) naik.disabled = i === 0;
      if (turun) turun.disabled = i === items.length - 1;
    });
  };

  list.querySelectorAll<HTMLElement>('[data-pn-urutan-item]').forEach((item) => {
    item.querySelector('[data-pn-urutan-naik]')?.addEventListener('click', () => {
      const prev = item.previousElementSibling;
      if (prev) list.insertBefore(item, prev);
      perbaruiTombol();
    });
    item.querySelector('[data-pn-urutan-turun]')?.addEventListener('click', () => {
      const next = item.nextElementSibling;
      if (next) list.insertBefore(next, item);
      perbaruiTombol();
    });
  });

  perbaruiTombol();
}

function inisialisasiDragDrop(soalEl: HTMLElement) {
  const tray = soalEl.querySelector<HTMLElement>('[data-pn-tray]');
  let dipegang: HTMLElement | null = null; // chip yang "dipilih" lewat klik (fallback non-drag)

  const zones = () => Array.from(soalEl.querySelectorAll<HTMLElement>('[data-pn-zone]'));

  const pasangKlikZona = (zone: HTMLElement) => {
    zone.addEventListener('click', () => {
      if (!dipegang) return;
      zone.querySelector('[data-pn-zone-items]')?.appendChild(dipegang);
      dipegang.classList.remove('is-picked');
      dipegang = null;
    });
  };
  zones().forEach(pasangKlikZona);

  soalEl.querySelectorAll<HTMLElement>('[data-pn-chip]').forEach((chip) => {
    let startX = 0;
    let startY = 0;
    let dragging = false;
    // Pointer BENAR-BENAR sedang ditekan di chip ini (di antara pointerdown
    // dan pointerup/pointercancel-nya) -- WAJIB dicek di awal `pointermove`.
    // Tanpa ini, `pointermove` tetap terpicu untuk hover BIASA (tanpa
    // tombol ditekan sama sekali), dan karena `startX/startY` masih nol
    // dari render awal, jarak ke posisi hover manapun selalu dianggap
    // "sudah menggeser jauh" -- chip langsung lompat ke posisi pointer
    // padahal belum pernah diklik. Ini penyebab persis bug "chip ikut
    // bergerak sendiri pas mouse cuma lewat".
    let pointerAktif = false;
    let originParent: Element | null = null;
    let offsetX = 0;
    let offsetY = 0;
    // Elemen "bayangan" (salinan tampilan) yang benar-benar ikut kursor
    // saat drag -- lihat kenapa di bawah.
    let ghost: HTMLElement | null = null;

    const posisikanGhost = (clientX: number, clientY: number) => {
      if (!ghost) return;
      ghost.style.left = `${clientX - offsetX}px`;
      ghost.style.top = `${clientY - offsetY}px`;
    };

    // Bersihkan SEMUA style/state drag, dipanggil dari pointerup MAUPUN
    // pointercancel.
    const lepasDrag = (taruhDi: Element | null) => {
      dragging = false;
      ghost?.remove();
      ghost = null;
      chip.style.opacity = '';
      chip.style.pointerEvents = '';
      zones().forEach((z) => z.classList.remove('is-over'));
      // Rantai fallback panjang SENGAJA -- chip TIDAK BOLEH berakhir tanpa
      // parent (itu yang bikin dia "hilang" dari tampilan). `soalEl` di
      // ujung cuma jaring pengaman terakhir yang realistanya tidak pernah
      // kepakai (originParent/tray harusnya selalu valid). Reparenting di
      // SINI aman -- ini terjadi SETELAH pointerup/pointercancel, gesture-nya
      // sudah selesai, jadi tidak memicu masalah yang dijelaskan di bawah.
      const parentBaru = taruhDi ?? originParent ?? tray ?? soalEl;
      parentBaru.appendChild(chip);
    };

    chip.addEventListener('pointerdown', (e) => {
      pointerAktif = true;
      startX = e.clientX;
      startY = e.clientY;
      dragging = false;
      originParent = chip.parentElement;
      const rect = chip.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      chip.setPointerCapture(e.pointerId);
    });

    chip.addEventListener('pointermove', (e) => {
      if (!pointerAktif) return; // hover biasa, bukan sedang menggeser -- abaikan
      const jarak = Math.hypot(e.clientX - startX, e.clientY - startY);
      if (!dragging && jarak > DRAG_THRESHOLD_PX) {
        dragging = true;
        // Chip ASLI TIDAK PERNAH dipindah posisi/parent-nya selama drag --
        // dua masalah kalau dipaksa: (1) `appendChild` ke parent lain di
        // tengah gesture pointer-capture ternyata memicu browser membatalkan
        // drag-nya sendiri (pointercancel implisit, bug "bergerak sedikit
        // lalu mati" yang sebelumnya kejadian); (2) SEKALIPUN dibiarkan di
        // tempat asal dan cuma diberi `position: fixed`, kalau leluhurnya
        // ada `.card` ber-backdrop-filter (kaca buram), sebagian browser
        // salah me-render elemen fixed itu jadi TRANSPARAN (koordinatnya
        // tetap benar -- makanya drop-nya tetap akurat -- tapi kelihatannya
        // hilang, persis bug "transparan pas dipegang" yang dilaporkan).
        //
        // Solusinya: chip asli disembunyikan DI TEMPATNYA (opacity 0, tidak
        // pernah dipindah -- pointer capture jadi tidak pernah terganggu),
        // lalu dibuat SALINAN ("ghost") yang ditaruh langsung di <body>
        // (di luar kartu ber-backdrop-filter) buat jadi tampilan yang
        // benar-benar mengikuti kursor. Ghost ini murni visual, tidak
        // pernah pegang pointer capture, jadi aman dipindah-pindah/dibuat.
        chip.style.opacity = '0';
        chip.style.pointerEvents = 'none';

        ghost = chip.cloneNode(true) as HTMLElement;
        ghost.classList.add('pn-chip-ghost');
        ghost.style.position = 'fixed';
        ghost.style.opacity = '1';
        ghost.style.zIndex = '9999';
        ghost.style.pointerEvents = 'none';
        ghost.style.margin = '0';
        document.body.appendChild(ghost);
        posisikanGhost(e.clientX, e.clientY);
      }
      if (!dragging) return;
      posisikanGhost(e.clientX, e.clientY);

      zones().forEach((z) => z.classList.remove('is-over'));
      const bawahPointer = document.elementFromPoint(e.clientX, e.clientY);
      bawahPointer?.closest<HTMLElement>('[data-pn-zone]')?.classList.add('is-over');
    });

    chip.addEventListener('pointerup', (e) => {
      if (!pointerAktif) return; // bukan pointer yang kita tekan sendiri -- abaikan
      pointerAktif = false;

      // try/catch di sini SENGAJA lebar (bukan cuma di releasePointerCapture)
      // -- kalau ADA saja yang gagal di tengah proses "menaruh" (misalnya
      // releasePointerCapture menolak karena capture sudah lepas duluan di
      // kondisi tertentu), exception yang tidak ketangkep bikin sisa kode
      // di bawahnya (reset style & appendChild ke tujuan) tidak sempat
      // jalan -- akibatnya chip nyangkut dgn pointer-events:none & posisi
      // fixed terakhir, kelihatan seperti "hilang". `finally` menjamin
      // chip SELALU berakhir ditaruh di suatu tempat yang valid (kategori
      // yang dituju, atau balik ke tempat asal kalau gagal), tidak pernah
      // dibiarkan menggantung.
      let tujuan: Element | null = null;
      try {
        chip.releasePointerCapture(e.pointerId);
      } catch {
        // capture sudah lepas duluan -- abaikan, lanjut proses normal.
      }

      if (!dragging) {
        // Dianggap klik biasa -- fallback "pegang lalu klik kategori".
        soalEl.querySelectorAll('[data-pn-chip]').forEach((c) => c.classList.remove('is-picked'));
        if (dipegang === chip) {
          dipegang = null;
        } else {
          chip.classList.add('is-picked');
          dipegang = chip;
        }
        return;
      }

      try {
        const target = document.elementFromPoint(e.clientX, e.clientY)?.closest<HTMLElement>('[data-pn-zone]');
        tujuan = target?.querySelector('[data-pn-zone-items]') ?? null;
      } finally {
        lepasDrag(tujuan);
      }
    });

    // Drag dibatalkan paksa (mis. pointer capture hilang karena reparenting
    // ke <body>, gesture sistem, atau window kehilangan fokus) -- kembalikan
    // chip ke posisi asalnya, JANGAN biarkan nyangkut position:fixed.
    chip.addEventListener('pointercancel', () => {
      if (!pointerAktif) return;
      pointerAktif = false;
      if (!dragging) return;
      lepasDrag(originParent);
    });
  });
}

export function bacaSemuaJawaban(root: ParentNode): JawabanSoal[] {
  return Array.from(root.querySelectorAll<HTMLElement>('[data-soal]')).map((soalEl) => bacaSatuJawaban(soalEl));
}

function bacaSatuJawaban(soalEl: HTMLElement): JawabanSoal {
  const soalId = soalEl.dataset.soalId ?? '';
  const tipe = soalEl.dataset.tipe;

  switch (tipe) {
    case 'pilihan-ganda': {
      const dipilih = soalEl.querySelector<HTMLElement>('[data-pn-opsi].is-selected');
      return { soalId, tipe, pilihanId: dipilih?.dataset.opsiId ?? null };
    }
    case 'benar-salah': {
      const dipilih = soalEl.querySelector<HTMLElement>('[data-pn-opsi].is-selected');
      const opsiId = dipilih?.dataset.opsiId;
      return { soalId, tipe, nilai: opsiId === undefined ? null : opsiId === 'benar' };
    }
    case 'isian-singkat': {
      const input = soalEl.querySelector<HTMLInputElement>('[data-pn-isian]');
      return { soalId, tipe, teks: input?.value ?? '' };
    }
    case 'menjodohkan': {
      const pasangan = Array.from(soalEl.querySelectorAll<HTMLSelectElement>('[data-pn-pasangan]'))
        .filter((sel) => sel.value !== '')
        .map((sel) => ({ kiriId: sel.dataset.kiriId ?? '', kananId: sel.value }));
      return { soalId, tipe, pasangan };
    }
    case 'menyusun-urutan': {
      const urutanId = Array.from(soalEl.querySelectorAll<HTMLElement>('[data-pn-urutan-item]')).map(
        (el) => el.dataset.itemId ?? ''
      );
      return { soalId, tipe, urutanId };
    }
    case 'drag-drop': {
      const penempatan = Array.from(soalEl.querySelectorAll<HTMLElement>('[data-pn-zone]')).flatMap((zone) => {
        const kategoriId = zone.dataset.kategoriId ?? '';
        return Array.from(zone.querySelectorAll<HTMLElement>('[data-pn-chip]')).map((chip) => ({
          itemId: chip.dataset.itemId ?? '',
          kategoriId,
        }));
      });
      return { soalId, tipe, penempatan };
    }
    default:
      // Tidak akan terjadi selama data-tipe konsisten dgn 6 tipe fase 1 --
      // fallback ke isian-singkat kosong supaya tidak melempar error.
      return { soalId, tipe: 'isian-singkat', teks: '' };
  }
}

export function tampilkanHasil(root: ParentNode, perSoal: HasilSoal[]) {
  const hasilById = new Map(perSoal.map((h) => [h.soalId, h]));

  root.querySelectorAll<HTMLElement>('[data-soal]').forEach((soalEl) => {
    const hasil = hasilById.get(soalEl.dataset.soalId ?? '');
    if (!hasil) return;

    soalEl.classList.add(hasil.benar ? 'pn-benar' : 'pn-salah');

    // Untuk pilihan-ganda/benar-salah, tandai opsi yang DIPILIH SISWA saja
    // (bukan yang benar sebenarnya -- itu tidak pernah dikirim ke browser).
    const dipilih = soalEl.querySelector<HTMLElement>('[data-pn-opsi].is-selected');
    dipilih?.classList.add(hasil.benar ? 'pn-correct' : 'pn-incorrect');

    soalEl.querySelectorAll<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>('button, input, select').forEach((el) => {
      el.disabled = true;
    });

    const feedbackEl = soalEl.querySelector<HTMLElement>('[data-pn-feedback]');
    if (feedbackEl) {
      feedbackEl.hidden = false;
      const label = hasil.benar ? '✅ Benar' : '❌ Kurang tepat';
      feedbackEl.textContent = hasil.penjelasan ? `${label} — ${hasil.penjelasan}` : label;
    }
  });
}
