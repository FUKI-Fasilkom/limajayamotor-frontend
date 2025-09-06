# Proyek Frontend Limasjayomotor (Next.js)

Repository ini berisi kode sumber untuk bagian frontend dari aplikasi Limasjayomotor. Proyek ini dibangun menggunakan **Next.js** dengan **App Router**, distyling dengan **Tailwind CSS**, dan ditulis dalam **TypeScript** untuk memastikan kode yang kuat dan mudah dikelola.

## Prasyarat

Sebelum memulai, pastikan Anda sudah menginstal perangkat lunak berikut di komputer Anda:
- [Node.js](https://nodejs.org/) (versi 18.17 atau lebih tinggi)
- Yarn atau npm (npm sudah termasuk dalam instalasi Node.js)
- [Git](https://git-scm.com/)

## 🚀 Panduan Memulai Cepat

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

**1. Clone Repository**
```bash
git clone [URL_REPOSITORY_ANDA]
cd limasjayomotor-frontend
```

**2. Instal Dependensi**
Gunakan npm (atau yarn) untuk menginstal semua paket yang dibutuhkan oleh proyek.
```bash
npm install
```
*Atau jika Anda menggunakan yarn:*
```bash
yarn install
```

**3. Siapkan Variabel Lingkungan (Environment Variables)**
Langkah ini sangat penting untuk menghubungkan ke backend.
Salin file contoh `.env.example` menjadi `.env.local`. File `.env.local` adalah tempat Anda menyimpan semua kunci rahasia dan tidak akan diunggah ke Git.

```bash
cp .env.example .env.local
```
Setelah itu, buka file `.env.local` dan isi variabel yang diperlukan.

**4. Jalankan Server Development**
```bash
npm run dev
```

**5. Buka Aplikasi**
Buka browser Anda dan akses [http://localhost:3000](http://localhost:3000). Anda akan melihat aplikasi berjalan.

## 📁 Penjelasan Struktur Folder Proyek

Struktur folder proyek ini dirancang agar mudah diskalakan dan dikelola oleh tim.

```
.
├── src/
│   ├── app/
│   │   ├── (user)/         # Grup untuk semua halaman PUBLIK (Home, Berita, About Us)
│   │   │   ├── page.tsx    # Halaman Utama (URL: /)
│   │   │   ├── layout.tsx  # Layout khusus untuk user (berisi Navbar User)
│   │   │   └── ...
│   │   │
│   │   ├── admin/        # Grup untuk semua halaman ADMIN (Dashboard, Login, CMS)
│   │   │   ├── page.tsx    # Halaman utama admin (jika ada)
│   │   │   ├── layout.tsx  # Layout khusus untuk admin (berisi Navbar/Sidebar Admin)
│   │   │   └── ...
│   │   │
│   │   └── layout.tsx      # Root Layout (WAJIB ADA, berisi <html> dan <body>)
│   │
│   ├── components/         # Direktori untuk komponen React yang bisa dipakai ulang
│   │   ├── admin/
│   │   ├── shared/
│   │   └── user/
│   │
│   └── lib/                # Untuk fungsi bantuan, hooks, atau koneksi API ke Django
│
├── public/                 # Untuk aset statis seperti gambar, ikon, dan font
│
├── .env.local              # File untuk variabel lingkungan LOKAL (JANGAN DI-COMMIT)
├── .env.example            # Contoh file variabel lingkungan
└── ...                     # File konfigurasi lainnya (next.config.mjs, tailwind.config.ts, dll.)
```

**Penjelasan Penting:**
- **`src/components`**: Tempatkan semua komponen UI Anda di sini dan kelompokkan berdasarkan fungsinya (admin, user, atau shared/bersama).
- **`src/lib/api.ts`**: Di sinilah tempat yang tepat untuk menulis semua fungsi `fetch` yang berhubungan dengan backend Django Anda.

## 📜 Skrip Utama

- `npm run dev`: Menjalankan aplikasi dalam mode development.
- `npm run build`: Membuat build aplikasi yang siap untuk produksi.
- `npm run start`: Menjalankan aplikasi dari build produksi.

---