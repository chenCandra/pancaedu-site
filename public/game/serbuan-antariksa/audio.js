/**
 * Serbuan Antariksa -- semua suara dibikin lewat Web Audio API (osilator +
 * noise buffer sintetis), TANPA file audio sama sekali. AudioContext baru
 * dibuat saat interaksi pertama (kebijakan browser), dan status mute
 * disimpan di localStorage biar kepilih lagi walau situsnya ditutup.
 */
(function (root) {
  'use strict';

  var KUNCI_MUTE = 'serbuan-antariksa:mute';

  function bacaMute() {
    try {
      return localStorage.getItem(KUNCI_MUTE) === '1';
    } catch (e) {
      return false;
    }
  }

  function simpanMute(nilai) {
    try {
      localStorage.setItem(KUNCI_MUTE, nilai ? '1' : '0');
    } catch (e) {
      /* localStorage tidak tersedia (mode privat dll) -- abaikan, mute cuma tidak persisten. */
    }
  }

  function AudioGame(konfig) {
    this.ctx = null;
    this.muted = bacaMute();
    this.volumeUtama = (konfig && konfig.audio && konfig.audio.volumeUtama) || 0.2;
    this.musikTimer = null;
    this.noiseBufferCache = null;
  }

  AudioGame.prototype.inisialisasi = function () {
    if (this.ctx) return;
    var AC = root.AudioContext || root.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
  };

  AudioGame.prototype.toggleMute = function () {
    this.muted = !this.muted;
    simpanMute(this.muted);
    if (this.muted) this.hentikanMusik();
    else this.mulaiMusik();
    return this.muted;
  };

  AudioGame.prototype.buatNoiseBuffer = function () {
    if (this.noiseBufferCache) return this.noiseBufferCache;
    var durasi = 0.3;
    var panjang = this.ctx.sampleRate * durasi;
    var buffer = this.ctx.createBuffer(1, panjang, this.ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < panjang; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBufferCache = buffer;
    return buffer;
  };

  AudioGame.prototype.nada = function (frekuensi, durasi, tipe, volume, kemiringanKe) {
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

  AudioGame.prototype.ledakan = function (besar) {
    if (this.muted || !this.ctx) return;
    var src = this.ctx.createBufferSource();
    src.buffer = this.buatNoiseBuffer();
    var filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(besar ? 1400 : 2200, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + (besar ? 0.4 : 0.22));
    var gain = this.ctx.createGain();
    gain.gain.setValueAtTime((besar ? 0.35 : 0.22) * this.volumeUtama * 5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (besar ? 0.4 : 0.22));
    src.connect(filter).connect(gain).connect(this.ctx.destination);
    src.start();
  };

  AudioGame.prototype.tembak = function () { this.nada(520, 0.08, 'square', 0.06, 760); };
  AudioGame.prototype.tembakMusuh = function () { this.nada(180, 0.1, 'sawtooth', 0.05, 90); };
  AudioGame.prototype.kenaMusuh = function () { this.ledakan(false); };
  AudioGame.prototype.kenaPemain = function () { this.nada(140, 0.28, 'sawtooth', 0.18, 60); };
  AudioGame.prototype.ambilPowerUp = function () {
    var self = this;
    [660, 880, 1100].forEach(function (f, i) {
      setTimeout(function () { self.nada(f, 0.12, 'triangle', 0.12); }, i * 70);
    });
  };
  AudioGame.prototype.gameOver = function () { this.nada(300, 0.6, 'sawtooth', 0.2, 60); };
  AudioGame.prototype.pecahMeteorBesar = function () { this.ledakan(true); };

  // Musik latar sederhana: pola bass 4 nada diulang pelan, cuma jalan
  // selama bermain (dipanggil dari game.js saat mulai/berhenti bermain).
  AudioGame.prototype.mulaiMusik = function () {
    if (this.muted || !this.ctx || this.musikTimer) return;
    var pola = [110, 110, 146.83, 130.81]; // A2, A2, D3, C3 -- bass minor sederhana
    var i = 0;
    var self = this;
    function denyut() {
      if (self.muted || !self.ctx) return;
      self.nada(pola[i % pola.length], 0.35, 'triangle', 0.04);
      i++;
    }
    denyut();
    this.musikTimer = setInterval(denyut, 450);
  };
  AudioGame.prototype.hentikanMusik = function () {
    if (this.musikTimer) {
      clearInterval(this.musikTimer);
      this.musikTimer = null;
    }
  };

  root.AudioGame = AudioGame;
})(typeof window !== 'undefined' ? window : globalThis);
