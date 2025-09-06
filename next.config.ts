/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan bagian redirects di sini
  async redirects() {
    return [
      {
        source: '/admin', // Jika pengguna mengakses /admin
        destination: '/admin/dashboard', // Arahkan ke /admin/dashboard
        permanent: true, // Beri tahu browser dan search engine ini permanen
      },
    ];
  },
};

export default nextConfig;