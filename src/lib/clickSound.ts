/**
 * Efek suara "klik" mekanis buat simulasi alat ukur (jangka sorong,
 * mikrometer sekrup) -- dibunyikan tiap kali pembacaan skala nonius/putar
 * lompat ke garis berikutnya, mensimulasikan detent/klik fisik alat
 * aslinya waktu digeser/diputar.
 *
 * SENGAJA disintesis pakai Web Audio API (bukan file .mp3/.wav) -- klik
 * pendek gampang dibikin sebagai satu blip osilator, jadi tidak perlu
 * nambah aset audio baru (dan urusan lisensinya) cuma buat bunyi klik.
 * AudioContext dibuat sekali & dipakai ulang (browser modern batasin
 * jumlah AudioContext aktif per halaman).
 */
let ctx: AudioContext | null = null;

export function playClick(): void {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx ??= new AC();
    // Browser nge-suspend AudioContext sampai ada interaksi user -- drag
    // di alat ukur ITU SENDIRI sudah interaksi, jadi aman di-resume di sini.
    if (ctx.state === 'suspended') void ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = 1400;
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch {
    // Web Audio API tidak tersedia / diblokir browser -- diamkan saja,
    // simulasi tetap jalan normal tanpa suara.
  }
}
