// Lokasi file: src/components/shared/UserNavbar.tsx

import Link from 'next/link';

const UserNavbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Nama Website, klik untuk ke Home (yang sekarang adalah daftar berita) */}
        <Link href="/">
          <span className="font-bold text-xl text-blue-600 cursor-pointer">
            Lima Jaya Motor
          </span>
        </Link>
        {/* Menu navigasi untuk user */}
        <div className="flex space-x-8 font-medium">
          <Link href="/berita">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
              Berita
            </span>
          </Link>
          <Link href="/about-us">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
              About Us
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;