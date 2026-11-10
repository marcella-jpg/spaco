/* =====================================================
   data.js – semua konten Spaco ada di sini.
   Untuk memperbarui website, cukup ubah file ini.
   Foto: simpan di folder "img" (sejajar dengan index.html),
   lalu tulis jalurnya, contoh: "img/esai-1.jpg".
   Kosongkan ("") untuk memakai gambar pengganti.
   ===================================================== */

var EMAIL = "emailanda@contoh.com";

var SOCIAL = {
  youtube:   "https://www.youtube.com/@spaco",
  instagram: "https://www.instagram.com/spaco",
  tiktok:    "https://www.tiktok.com/@spaco"
};

var COVER = "";     // gambar sampul di bagian atas semua halaman, contoh: "img/sampul.jpg"
var PORTRAIT = "";  // foto Anda di halaman Tentang, contoh: "img/saya.jpg"

// d = tanggal (TTTT-BB-HH), c = kategori, u = tautan ke esai lengkap
var ESSAYS = [
  { t: "Contoh judul esai pertama",  d: "2026-10-12", c: "Etika",
    x: "Ringkasan satu atau dua kalimat tentang argumen utama esai ini.", u: "#", foto: "" },
  { t: "Contoh judul esai kedua",    d: "2026-09-03", c: "Eksistensialisme",
    x: "Ringkasan singkat yang membantu pembaca memutuskan untuk membaca.", u: "#", foto: "" },
  { t: "Contoh judul esai ketiga",   d: "2026-07-21", c: "Filsafat sehari-hari",
    x: "Ganti teks ini dengan ringkasan esai Anda.", u: "#", foto: "" }
];

// k = jenis (Video panjang, Reels, TikTok), u = tautan ke videonya
var VIDEOS = [
  { t: "Contoh video essay",         k: "Video panjang", x: "Deskripsi singkat video.", u: "#", foto: "" },
  { t: "Contoh klip pendek",         k: "Reels",         x: "Deskripsi singkat klip.",  u: "#", foto: "" },
  { t: "Contoh klip pendek kedua",   k: "TikTok",        x: "Deskripsi singkat klip.",  u: "#", foto: "" }
];

// m = media, y = tahun
var ART = [
  { t: "Judul lukisan",        y: "2026", m: "Cat minyak di kanvas", x: "Catatan singkat tentang gagasan lukisan.", foto: "" },
  { t: "Judul lukisan kedua",  y: "2026", m: "Akrilik di kanvas",    x: "Catatan singkat tentang gagasan lukisan.", foto: "" },
  { t: "Judul lukisan ketiga", y: "2025", m: "Cat air di kertas",    x: "Catatan singkat tentang gagasan lukisan.", foto: "" }
];
