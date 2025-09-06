import Link from 'next/link';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/admin/dashboard">
          <span className="font-bold text-xl cursor-pointer">
            Admin Panel
          </span>
        </Link>
        <div className="flex space-x-6">
          <Link href="/admin/dashboard">
            <span className="hover:text-gray-300 cursor-pointer">
              Dashboard Berita
            </span>
          </Link>
          <Link href="/admin/news/add">
            <span className="hover:text-gray-300 cursor-pointer">
              Tambah Berita
            </span>
          </Link>
          {/* Tambahkan link untuk Logout di sini nantinya */}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;