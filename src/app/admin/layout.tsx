import AdminNavbar from "../../../components/admin/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      {/* Konten halaman admin akan dirender di sini */}
      <main className="flex-grow p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}