// Menggunakan variabel lingkungan untuk URL backend Django
const DJANGO_API_URL = process.env.NEXT_PUBLIC_DJANGO_API_URL || "http://localhost:8000/api";

// Fungsi untuk mengambil semua berita
export const getNews = async () => {
  try {
    const response = await fetch(`${DJANGO_API_URL}/news/`);
    if (!response.ok) {
      throw new Error("Gagal mengambil data berita");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

// Fungsi untuk mengirim berita baru (POST)
export const createNews = async (newsData: any) => {
  try {
    const response = await fetch(`${DJANGO_API_URL}/news/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Tambahkan header otentikasi di sini (misal: 'Authorization': `Bearer ${token}`)
      },
      body: JSON.stringify(newsData),
    });
    if (!response.ok) {
      throw new Error("Gagal membuat berita baru");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};