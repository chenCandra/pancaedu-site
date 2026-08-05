# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✍️ Admin CMS (Sveltia)

`/admin` adalah panel admin berbasis-git ([Sveltia CMS](https://sveltiacms.app)) untuk
menambah/edit **Artikel** dan **Materi Pelajaran** (termasuk upload gambar cover,
field Kelas/Mapel, dan embed simulasi "Lab Maya") tanpa perlu menulis
markdown/YAML manual. Konfigurasi field-nya ada di
[`public/admin/config.yml`](public/admin/config.yml) — harus disesuaikan kalau skema
konten di [`src/content.config.ts`](src/content.config.ts) berubah.

**Pakai secara lokal (belum perlu deploy/OAuth):**

1. Jalankan `npm run dev` atau `npm run preview`, lalu buka `http://localhost:4321/admin`
   (atau port preview-nya) di **Chrome/Edge** (butuh File System Access API, Safari/Firefox
   belum didukung untuk mode ini).
2. Klik **"Work with Local Repository"**, lalu pilih folder root repo ini
   (`pancaedu-site`) saat diminta browser.
3. Tambah/edit konten lewat form seperti biasa, lalu klik **Publish** — perubahan
   langsung ditulis ke file lokal (`src/content/blog/*.md`, gambar ke `public/images/`).
4. Review perubahannya seperti biasa, lalu commit & push lewat Git seperti biasa.

**Pakai dari situs production (setelah deploy):** perlu setup tambahan yang belum
dikerjakan di tahap ini — bikin GitHub OAuth App, lalu deploy Worker autentikasi kecil
(mis. [`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth)) supaya tombol
"Sign In with GitHub" di `/admin` bisa dipakai dari domain publik.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
