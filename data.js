/* =====================================================
   data.js – semua konten Spaco ada di sini.
   Foto: simpan di folder "img", tulis jalurnya di bawah.
   Kosongkan ("") untuk memakai gambar pengganti.
   ===================================================== */

var EMAIL = "marcellarxiv@gmail.com";

var SOCIAL = {
  youtube:   "https://www.youtube.com/@MarcellarXiv",
  instagram: "https://www.instagram.com/spatiumcogitationis",
  tiktok:    "https://www.tiktok.com/@spatiumcogitationis"
};

var NOTICE = "Temukan esai, video, dan karya lainnya dalam arsip personal seseorang yang mudah menyerah.";

var COVER = "tate1.jpeg";     // foto besar di bagian atas Beranda
var PORTRAIT = "tate2.jpeg";  // foto di halaman Tentang dan kutipan

// Kartu sorotan di atas foto Beranda
var HEADLINE = {
  eyebrow: "Sorotan",
  title: "Ruang untuk berpikir bersama.",
  text: "Spaco mengarsipkan esai, video, dan lukisan dari perjalanan seorang pelajar filsafat amatir.",
  link: "#esai", label: "Baca esai"
};

// Garis waktu di Beranda (y = tahun atau label, x = keterangan)
var TIMELINE = [
  { y: "2020-2025", x: "Mulai gila." },
  { y: "2026", x: "Masuk Filsafat." },
  { y: "2027", x: "Masuk Akal." }
];

var QUOTE = {
  x: "“Dulu aku berpikir filsafat itu keren dan terdengar pintar.”",
  by: "Marcella", role: "Pendiri Spaco"
};

// d = tanggal (TTTT-BB-HH), c = kategori, u = tautan ke esai lengkap
var ESSAYS = [
  { t: "Kasus Bunuh Diri pada Pria dan Narasi "Pria Tidak Bercerita"",  d: "2026-10-12", c: "Eksistensialisme",
    x: "Apakah narasi pria bercerita mempengaruhi kerentanan pria atau mencerminkan keadaan yang ada?", u: "#", foto: "tate3.jpeg" },
  { t: "Kesetiaan pada Pasangan Poliamori",    d: "2026-09-03", c: "Etika",
    x: "Apa itu kesetiaan?", u: "#", foto: "4.jpg" },
  { t: "Kerasukan, Tubuh, dan Makna Sosial: Tinjauan Antropoligs atas Film Para Perasuk",   d: "2026-07-21", c: "Antropologi Budaya",
    x: "Bagaimana fenomena kerasukan dapat dijelaskan?", u: "#", foto: "5.jpg" }
];

// k = jenis (Video panjang, Reels, TikTok), u = tautan ke videonya
var VIDEOS = [
  { t: "Isu Eko-Sosial dan Sistem Demokrasi di Indonesia",       k: "Video panjang", x: "Menjelaskan permasalahan terkini Indonesia dan kaitannya dengan sistem Demokrasi-Pancasila.", u: "#", foto: "" },
  { t: "Mengapa Kita Mengkonsumsi Urusan Pribadi Selebriti?",       k: "Reels",         x: "Pentingnya menyaring informasi.",  u: "#", foto: "" },
  { t: "Apa itu Kesadaran pada Penderita Skizofrenia?", k: "TikTok",        x: "Mengapa terdapat pengalaman subjektif?",  u: "#", foto: "" }
];

// m = media, y = tahun
var ART = [
  { t: "Puan Satu",  y: "2026", m: "Cat akrilik di kanvas", x: "Potret figur wanita yang menunjukkan kerentanan.", foto: "6.jpg" },
  { t: "Puan Dua",  y: "2026", m: "Cat akrilik di kanvas",    x: "Siluet feminim yang mengimplikasikan dualitas seorang wanita.", foto: "" },
  { t: "Puan Saja", y: "2025", m: "Cat air di kertas",    x: "Puan.", foto: "" }
];
