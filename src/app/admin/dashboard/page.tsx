import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Admin</h1>
      <p className="mb-4">Selamat datang kembali, Admin!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Manajemen Berita</h2>
          <p className="text-gray-600 mb-4">
            Kelola semua artikel berita yang ada di website.
          </p>
          <Link href="/admin/news/add">
            <span className="bg-green-500 text-white py-2 px-4 rounded-full">
              Tambah Berita Baru
            </span>
          </Link>
        </div>
        {/* Tambahkan widget dashboard lainnya di sini */}
      </div>
    </div>
  );
}