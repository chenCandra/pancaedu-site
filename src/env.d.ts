/// <reference types="astro/client" />

// Deklarasi tipe SEMPIT (`declare module` untuk satu module specifier),
// BUKAN `declare global` -- sengaja begitu supaya tidak mewarisi masalah
// yang sama seperti worker-configuration.d.ts (lihat komentar di
// tsconfig.json): itu men-declare tipe global yang bentrok sama DOM lib
// di kode client-side. Deklarasi bergaya modul di sini HANYA memberi tipe
// pada `import { env } from 'cloudflare:workers'` di file server (API
// routes), tidak memengaruhi file lain sama sekali.
declare module 'cloudflare:workers' {
  import type { D1Database } from '@cloudflare/workers-types';

  export const env: {
    DB: D1Database;
  };
}
