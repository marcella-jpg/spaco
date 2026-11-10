/* =====================================================
   data.js – semua konten Spaco ada di sini.
   Foto: simpan di folder "img", tulis jalurnya di bawah.
   Kosongkan ("") untuk memakai gambar pengganti.
   ===================================================== */

var EMAIL = "emailanda@contoh.com";

var SOCIAL = {
  youtube:   "https://www.youtube.com/@spaco",
  instagram: "https://www.instagram.com/spaco",
  tiktok:    "https://www.tiktok.com/@spaco"
};

var NOTICE = "Arsip esai, video, dan lukisan Spaco kini terbuka untuk dibaca.";

var COVER = "img/tate1.jpg";     // foto besar di bagian atas Beranda
var PORTRAIT = "img/tate2.jpg";  // foto di halaman Tentang dan kutipan

// Kartu sorotan di atas foto Beranda
var HEADLINE = {
  eyebrow: "Sorotan",
  title: "Ruang untuk berpikir bersama.",
  text: "Spaco mengarsipkan esai, video, dan lukisan dari perjalanan belajar filsafat, supaya siapa pun bisa membaca, menonton, dan ikut menimbang.",
  link: "#esai", label: "Baca esai"
};

// Garis waktu di Beranda (y = tahun atau label, x = keterangan)
var TIMELINE = [
  { y: "2024", x: "Mulai menulis esai filsafat secara rutin." },
  { y: "2025", x: "Merilis video essay pertama dan mulai melukis." },
  { y: "2026", x: "Spaco hadir sebagai arsip daring terbuka." }
];

var QUOTE = {
  x: "“Berfilsafat dimulai dari keberanian untuk bertanya ulang.”",
  by: "Nama Anda", role: "Pendiri Spaco"
};

// d = tanggal (TTTT-BB-HH), c = kategori, u = tautan ke esai lengkap
var ESSAYS = [
  { t: "Contoh judul esai pertama",  d: "2026-10-12", c: "Etika",
    x: "Ringkasan satu atau dua kalimat tentang argumen utama esai ini.", u: "#", foto: "img/tate3.jpg" },
  { t: "Contoh judul esai kedua",    d: "2026-09-03", c: "Eksistensialisme",
    x: "Ringkasan singkat yang membantu pembaca memutuskan untuk membaca.", u: "#", foto: "img/tate4.jpg" },
  { t: "Contoh judul esai ketiga",   d: "2026-07-21", c: "Filsafat sehari-hari",
    x: "Ganti teks ini dengan ringkasan esai Anda.", u: "#", foto: "img/tate5.jpg" }
];

// k = jenis (Video panjang, Reels, TikTok), u = tautan ke videonya
var VIDEOS = [
  { t: "Contoh video essay",       k: "Video panjang", x: "Deskripsi singkat video.", u: "#", foto: "" },
  { t: "Contoh klip pendek",       k: "Reels",         x: "Deskripsi singkat klip.",  u: "#", foto: "" },
  { t: "Contoh klip pendek kedua", k: "TikTok",        x: "Deskripsi singkat klip.",  u: "#", foto: "" }
];

// m = media, y = tahun
var ART = [
  { t: "Judul lukisan",        y: "2026", m: "Cat minyak di kanvas", x: "Catatan singkat tentang gagasan lukisan.", foto: "img/tate6.jpg" },
  { t: "Judul lukisan kedua",  y: "2026", m: "Akrilik di kanvas",    x: "Catatan singkat tentang gagasan lukisan.", foto: "" },
  { t: "Judul lukisan ketiga", y: "2025", m: "Cat air di kertas",    x: "Catatan singkat tentang gagasan lukisan.", foto: "" }
];
