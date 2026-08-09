import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Nav: naik elevasi (shadow) saat discroll ---------- */
function initNavScrollState() {
  const nav = document.querySelector('[data-site-nav]');
  if (!nav) return;

  const setState = () => {
    nav.dataset.scrolled = window.scrollY > 8 ? 'true' : 'false';
  };
  setState();
  window.addEventListener('scroll', setState, { passive: true });
}

/* ---------- Hero Beranda: cinematic entrance (kalau ada di halaman) ---------- */
function initHeroEntrance() {
  const eyebrow = document.querySelector('.hero-eyebrow');
  const lines = document.querySelectorAll('.hero-title .hero-line');
  const rest = document.querySelectorAll('.hero-lede, .hero-actions, .hero-scroll-indicator');

  if (lines.length === 0) return; // bukan halaman yang punya hero

  if (prefersReducedMotion) {
    [eyebrow, ...lines, ...rest].forEach((el) => el && gsap.set(el, { opacity: 1, y: 0 }));
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.set([eyebrow, ...lines, ...rest], { opacity: 0, y: 24 })
    .to(eyebrow, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
    .to(lines, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.25)
    .to(rest, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.7);
}

/* ---------- Scroll reveal untuk [data-reveal] (dipakai section Beranda) ----------
   State "tersembunyi" di-set gsap.fromTo() sendiri (immediate-render), BUKAN oleh
   CSS statis — kalau skrip ini gagal jalan, section-nya tetap tampil normal dari
   awal (lihat catatan di global.css dekat komentar [data-reveal]). ---------- */
function initDataReveal() {
  const targets = document.querySelectorAll('[data-reveal]:not(.hero [data-reveal])');
  if (targets.length === 0) return;

  if (prefersReducedMotion) {
    targets.forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));
    return;
  }

  targets.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    );
  });
}

/* ---------- Scroll reveal luas untuk kartu & header halaman lain (Artikel,
   Materi, Kenangan, Hasil Ujian, dst) — dipasang otomatis lewat kelas,
   tidak perlu atribut data-reveal manual di tiap halaman. State awalnya
   di-set oleh GSAP sendiri saat animasi jalan (bukan CSS statis), jadi
   kalau skrip ini gagal load, kontennya tetap terlihat normal. ---------- */
function initBroadReveal() {
  const selector = '.card, .post-card, .page-header, .yearbook-card, .angkatan-card, .ujian-card';
  const targets = document.querySelectorAll(selector);
  if (targets.length === 0 || prefersReducedMotion) return;

  targets.forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: Math.min(i * 0.04, 0.3),
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      }
    );
  });
}

/* ---------- Counter animasi (angka nyata dari build, Beranda) ----------
   HTML statisnya sudah berisi angka ASLI (bukan "0"), jadi kalau fungsi ini
   gagal jalan, angka yang benar tetap kelihatan. Cuma kalau berhasil jalan,
   kita reset ke "0" dulu di sini baru dihitung naik animasinya. ---------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter-target]');
  if (counters.length === 0) return;

  counters.forEach((el) => {
    const target = Number(el.dataset.counterTarget);
    if (Number.isNaN(target)) return;

    if (prefersReducedMotion) {
      el.textContent = String(target); // sudah benar, tapi eksplisit biar jelas
      return;
    }

    el.textContent = '0';
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val));
          },
        });
      },
    });
  });
}

/* ---------- Magnetic button (opt-in lewat [data-magnetic]) ---------- */
function initMagneticButtons() {
  if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

  const buttons = document.querySelectorAll('[data-magnetic]');
  buttons.forEach((btn) => {
    const strength = 0.35;
    const moveX = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
    const moveY = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      moveX(relX * strength);
      moveY(relY * strength);
    });

    btn.addEventListener('mouseleave', () => {
      moveX(0);
      moveY(0);
    });
  });
}

/* ---------- Ripple saat klik — berlaku di semua .btn situs ---------- */
function initRipple() {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

/* ---------- Tilt halus (opt-in lewat [data-tilt]) ---------- */
function initTilt() {
  if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    const rotateX = gsap.quickTo(card, 'rotateX', { duration: 0.4, ease: 'power3.out' });
    const rotateY = gsap.quickTo(card, 'rotateY', { duration: 0.4, ease: 'power3.out' });
    card.style.transformPerspective = '900px';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY(px * 6);
      rotateX(py * -6);
    });

    card.addEventListener('mouseleave', () => {
      rotateX(0);
      rotateY(0);
    });
  });
}

/* ---------- Cursor halus (desktop saja, situs-penuh) ---------- */
function initSmoothCursor() {
  if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
  // Halaman dengan interaksi drag presisi (mis. Lab Maya) mematikan cursor
  // ini lewat <body data-disable-cursor="true"> — cursor kustom yang telat
  // mengikuti mouse (by design, buat kesan halus) terasa lag saat drag.
  if (document.body.dataset.disableCursor === 'true') return;

  const cursor = document.createElement('div');
  cursor.className = 'site-cursor';
  document.body.appendChild(cursor);

  // duration 0.5 kerasa lag beneran diikutin cursor asli — turun jadi 0.12,
  // masih ada kesan "halus dikit" tapi udah nempel erat ke posisi mouse.
  const moveX = gsap.quickTo(cursor, 'x', { duration: 0.12, ease: 'power3.out' });
  const moveY = gsap.quickTo(cursor, 'y', { duration: 0.12, ease: 'power3.out' });

  // Baru ditampilkan begitu ada mousemove ASLI yang pertama — perangkat
  // sentuh murni tidak pernah mengirim event ini, jadi dot ini otomatis
  // tidak akan pernah kelihatan di HP walau deteksi pointer:coarse meleset.
  window.addEventListener(
    'mousemove',
    () => {
      cursor.classList.add('site-cursor--visible');
    },
    { once: true }
  );

  window.addEventListener('mousemove', (e) => {
    moveX(e.clientX);
    moveY(e.clientY);
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('site-cursor--active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('site-cursor--active'));
  });
}

// Tiap fitur dijalankan lewat pembungkus try/catch sendiri-sendiri — kalau
// satu gagal (error jaringan, API browser yang tidak didukung, dst), fitur
// lain tetap jalan. Sebelumnya semua dipanggil langsung berurutan: satu
// exception di tengah bisa menghentikan SEMUA fungsi setelahnya tanpa
// ketahuan (termasuk kemungkinan penyebab bug reveal & counter kemarin).
function safeRun(fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[site-animations] ${fn.name} gagal jalan:`, err);
  }
}

function init() {
  safeRun(initNavScrollState);
  safeRun(initHeroEntrance);
  safeRun(initDataReveal);
  safeRun(initBroadReveal);
  safeRun(initCounters);
  safeRun(initMagneticButtons);
  safeRun(initRipple);
  safeRun(initTilt);
  safeRun(initSmoothCursor);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
