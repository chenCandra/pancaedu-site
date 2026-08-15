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

**Pakai dari situs production (`pancaedu.web.id/admin`):** sudah bisa, login pakai tombol
**"Sign In with GitHub"**. Ini jalan lewat Worker autentikasi terpisah
([`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth), di-clone & deploy sendiri
di `C:\xampp\htdocs\sveltia-cms-auth`, nama Worker `pancaedu-cms-auth`) — Client ID/Secret
OAuth App-nya tersimpan sebagai secret di Worker itu, `base_url`-nya dirujuk dari
`backend.base_url` di [`public/admin/config.yml`](public/admin/config.yml). Kalau login
tiba-tiba error, cek dulu apakah Client ID/Secret di Worker itu masih cocok dengan OAuth App
GitHub-nya (Settings → Developer settings → OAuth Apps).

⚠️ **Penting**: menyimpan lewat CMS cuma bikin *commit* ke GitHub — situs live **tidak**
auto-update kecuali auto-deploy (lihat bagian Deploy di bawah) sudah aktif. Tanpa itu, harus
ada yang jalankan deploy manual dulu.

## 🚀 Deploy

Situs ini di-deploy ke **Cloudflare Workers** (bukan Pages), domain `pancaedu.web.id`.

**Manual, kapan saja, tanpa perlu bantuan siapa pun:**

```sh
npm run deploy
```

Ini menjalankan `astro build` lalu `wrangler deploy` sekali jalan. Butuh `wrangler` sudah
login (`npx wrangler login`) ke akun Cloudflare yang sama dengan Worker `pancaedu-site`.

**Otomatis (GitHub Actions)** — tiap push ke `main` (termasuk commit dari Sveltia CMS)
otomatis build+deploy, lihat [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
Setup sekali saja:

1. Cloudflare Dashboard → **My Profile → API Tokens → Create Token** → pakai template
   **"Edit Cloudflare Workers"** (atau custom: permission `Workers Scripts: Edit` +
   `Account Settings: Read`, scope ke akun ini saja). Salin token-nya.
2. GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: token dari langkah 1
3. Selesai — push berikutnya ke `main` otomatis ke-deploy. Cek progressnya di tab
   **Actions** repo GitHub.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
