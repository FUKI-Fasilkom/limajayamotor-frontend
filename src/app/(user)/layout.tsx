import UserNavbar from "../../../components/shared/UserNavbar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <UserNavbar />
      {/* 'children' ini adalah isi dari page.tsx yang sedang aktif */}
      <main className="flex-grow">
        {children}
      </main>
      {/* Anda bisa menambahkan footer di sini jika perlu */}
    </div>
  );
}