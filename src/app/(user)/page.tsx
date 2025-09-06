// Lokasi: src/app/(user)/page.tsx

import Link from "next/link";

// Data berita dummy, nantinya akan diambil dari backend Django
const newsData = [
  { id: 1, title: "Perkembangan Teknologi AI di Tahun 2025", summary: "Kecerdasan buatan terus berkembang pesat dengan berbagai inovasi baru...", date: "15 Januari 2025" },
  { id: 2, title: "Tips Produktif Bekerja dari Rumah", summary: "Temukan cara-cara efektif untuk tetap produktif saat bekerja dari jarak jauh...", date: "10 Januari 2025" },
  { id: 3, title: "Investasi Saham untuk Pemula", summary: "Panduan langkah demi langkah untuk memulai investasi di pasar saham...", date: "5 Januari 2025" },
  { id: 4, title: "Review Laptop Terbaru untuk Profesional", summary: "Kami mengulas beberapa laptop terbaik yang dirilis tahun ini...", date: "28 Desember 2024" },
  { id: 5, title: "Dampak Perubahan Iklim Global", summary: "Analisis mendalam mengenai efek perubahan iklim di berbagai belahan dunia...", date: "20 Desember 2024" },
  { id: 6, title: "Panduan Memulai Gaya Hidup Sehat", summary: "Langkah-langkah sederhana yang bisa Anda mulai hari ini untuk hidup lebih sehat...", date: "12 Desember 2024" },
];

export default function HomePage() {
  return (
    <main className="container mx-auto p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Berita Terbaru</h1>
        
        <div className="grid grid-cols-1 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <Link href={`/berita/${news.id}`}>
                <span className="text-2xl font-semibold text-blue-700 hover:text-blue-900 cursor-pointer transition-colors">
                  {news.title}
                </span>
              </Link>
              <p className="text-gray-500 text-sm mt-1 mb-3">{news.date}</p>
              <p className="text-gray-700 mb-4">{news.summary}</p>
              <Link href={`/berita/${news.id}`}>
                <span className="text-blue-500 hover:underline font-semibold">
                  Baca Selengkapnya →
                </span>
              </Link>
            </div>
          ))}
        </div>
    </main>
  );
}