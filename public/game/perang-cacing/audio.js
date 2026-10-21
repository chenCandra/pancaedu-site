/**
 * Semua suara Perang Cacing lewat Web Audio API (osilator + noise buffer
 * sintetis), TANPA file audio -- pola & sebagian besar kode sama persis
 * seperti public/game/serbuan-antariksa/audio.js (AudioContext dibuat saat
 * interaksi pertama, mute disimpan di localStorage).
 */
(function (root) {
  'use strict';

  var KUNCI_MUTE = 'perang-cacing:mute';

  function bacaMute() {
    try { return localStorage.getItem(KUNCI_MUTE) === '1'; } catch (e) { return false; }
  }

  function simpanMute(nilai) {
    try { localStorage.setItem(KUNCI_MUTE, nilai ? '1' : '0'); } catch (e) { /* abaikan */ }
  }

  function AudioCacing(konfig) {
    this.ctx = null;
    this.muted = bacaMute();
    this.volumeUtama = (konfig && konfig.volumeUtama) || 0.22;
    this.noiseBufferCache = null;
  }

  AudioCacing.prototype.inisialisasi = function () {
    if (this.ctx) return;
    var AC = root.AudioContext || root.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
  };

  AudioCacing.prototype.toggleMute = function () {
    this.muted = !this.muted;
    simpanMute(this.muted);
    return this.muted;
  };

  AudioCacing.prototype.buatNoiseBuffer = function () {
    if (this.noiseBufferCache) return this.noiseBufferCache;
    var durasi = 0.35;
    var panjang = this.ctx.sampleRate * durasi;
    var buffer = this.ctx.createBuffer(1, panjang, this.ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < panjang; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBufferCache = buffer;
    return buffer;
  };

  AudioCacing.prototype.nada = function (frekuensi, durasi, tipe, volume, kemiringanKe) {
    if (this.muted || !this.ctx) return;
    var osc = this.ctx.createOscillator();
    var gain = this.ctx.createGain();
    osc.type = tipe || 'sine';
    osc.frequency.setValueAtTime(frekuensi, this.ctx.currentTime);
    if (kemiringanKe) osc.frequency.exponentialRampToValueAtTime(kemiringanKe, this.ctx.currentTime + durasi);
    gain.gain.setValueAtTime((volume || 0.15) * this.volumeUtama * 5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + durasi);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + durasi);
  };

  AudioCacing.prototype.ledakan = function (besar) {
    if (this.muted || !this.ctx) return;
    var src = this.ctx.createBufferSource();
    src.buffer = this.buatNoiseBuffer();
    var filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(besar ? 1500 : 2200, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + (besar ? 0.45 : 0.25));
    var gain = this.ctx.createGain();
    gain.gain.setValueAtTime((besar ? 0.4 : 0.24) * this.volumeUtama * 5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (besar ? 0.45 : 0.25));
    src.connect(filter).connect(gain).connect(this.ctx.destination);
    src.start();
  };

  AudioCacing.prototype.tembakBazoka = function () { this.nada(300, 0.22, 'sawtooth', 0.1, 120); };
  AudioCacing.prototype.lemparGranat = function () { this.nada(440, 0.1, 'square', 0.07, 300); };
  AudioCacing.prototype.pantulGranat = function () { this.nada(520, 0.06, 'triangle', 0.05); };
  AudioCacing.prototype.pasangDinamit = function () { this.nada(260, 0.12, 'square', 0.06, 180); };
  AudioCacing.prototype.tendang = function () { this.nada(180, 0.08, 'square', 0.08, 80); };
  AudioCacing.prototype.ledakanKecil = function () { this.ledakan(false); };
  AudioCacing.prototype.ledakanBesar = function () { this.ledakan(true); };
  AudioCacing.prototype.lompat = function () { this.nada(500, 0.08, 'triangle', 0.05, 700); };
  AudioCacing.prototype.langkah = function () { this.nada(150, 0.03, 'square', 0.02); };
  AudioCacing.prototype.kenaKarakter = function () { this.nada(160, 0.22, 'sawtooth', 0.14, 60); };
  AudioCacing.prototype.gantiGiliran = function () { this.nada(700, 0.1, 'triangle', 0.08, 900); };
  AudioCacing.prototype.menang = function () {
    var self = this;
    [523, 659, 784, 1046].forEach(function (f, i) {
      setTimeout(function () { self.nada(f, 0.22, 'triangle', 0.14); }, i * 110);
    });
  };

  root.AudioCacing = AudioCacing;
})(typeof window !== 'undefined' ? window : globalThis);
