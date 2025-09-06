export default function BeritaPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Berita Terbaru</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder untuk daftar berita. Data akan diambil dari backend Django. */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Judul Berita 1</h2>
          <p className="text-gray-600 text-sm">
            Ini adalah ringkasan berita pertama.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Judul Berita 2</h2>
          <p className="text-gray-600 text-sm">
            Ini adalah ringkasan berita kedua.
          </p>
        </div>
      </div>
    </div>
  );
}