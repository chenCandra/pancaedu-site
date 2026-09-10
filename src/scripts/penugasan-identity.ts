// Helper "ingat nama & kelas siswa di perangkat ini" buat fitur Penugasan.
// BEDA dari pola sessionStorage di /hasil-ujian: di sana sengaja TIDAK
// persist (itu gerbang PIN semi-privasi di device sekolah bersama), di
// sini justru MEMANG mau persist antar kunjungan (di HP/laptop pribadi
// siswa) supaya nggak perlu isi ulang nama tiap mau mengerjakan tugas.
// Ini murni kenyamanan pengisian form, BUKAN autentikasi -- siswa bebas
// mengubahnya kapan saja.

export interface IdentitasSiswa {
  nama: string;
  kelas: string;
}

const KEY = 'pancaedu-penugasan-identitas';

export function ambilIdentitas(): IdentitasSiswa | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.nama === 'string' && typeof parsed?.kelas === 'string') {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function simpanIdentitas(identitas: IdentitasSiswa) {
  try {
    localStorage.setItem(KEY, JSON.stringify(identitas));
  } catch {
    // localStorage nggak tersedia (mode private/disabled) -- abaikan diam-diam,
    // siswa cuma perlu isi ulang form tiap kunjungan, nggak sampai error.
  }
}
