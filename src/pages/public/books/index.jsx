import React, { useState, useEffect } from 'react';
// DIKEMBALIKAN: Import untuk getBooks dan Link
import { getBooks } from "../../../_services/books";
import { Link } from "react-router-dom"; 

// DIHAPUS: Seluruh blok data tiruan (mockBooks dan fungsi getBooks tiruan)
// Baris-baris data tiruan yang salah tempat telah dihapus.
// Fungsi 'getBooks' tiruan juga telah dihapus.
export default function App() {
  const [books, setBooks] = useState([]);
  // DIHAPUS: Status loading
  // const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // DIHAPUS: setLoading(true)
        const booksData = await getBooks(); // DIKEMBALIKAN: Menggunakan getBooks yang diimpor
        // Pastikan booksData adalah array
        if (Array.isArray(booksData)) {
          setBooks(booksData);
        } else {
          console.error("Data fetched is not an array:", booksData);
          setBooks([]); // Set ke array kosong jika data tidak valid
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]); // Set ke array kosong jika terjadi error
      } finally {
        // DIHAPUS: setLoading(false)
      }
    };

    fetchData();
  }, []);

  // DIHAPUS: Blok 'if (loading)'
  // Blok 'if (loading)' yang rusak telah dihapus.

  return (
    <>
      <section className="min-h-screen bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            
            {books && books.length > 0 ? (
              books.map((book) => (
                // DIKEMBALIKAN: Menggunakan komponen <Link>
                <Link 
                  key={book.id} 
                  to={`/books/show/${book.id}`} // DIUBAH: 'href' menjadi 'to' untuk Link
                  // DIHAPUS: onClick tidak diperlukan pada Link
                  className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 transition-shadow duration-200 hover:shadow-lg"
                >
                  <div className="h-56 w-full">
                    <img
                      className="mx-auto h-full w-full object-contain" 
                      src={book.cover_photo ? book.cover_photo : "https://placehold.co/400x600/e2e8f0/gray?text=No+Image"} 
                      alt={book.title}
                      // Menambahkan fallback jika gambar gagal dimuat
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x600/e2e8f0/gray?text=No+Image"; }}
                    />
                  </div>
                  <div className="pt-6">
                    <h3
                      className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white truncate"
                      title={book.title}
                    >
                      {book.title}
                    </h3>

                    {/* DIHAPUS: 
                      Seluruh blok <ul> yang berisi Author dan Genre telah dihapus
                      sesuai permintaan.
                    */}

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        Rp{book.price} 
                      </p>

                      {/* DIKEMBALIKAN: Menggunakan <div> untuk tombol */}
                      <div
                        className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:group-hover:bg-indigo-700"
                      >
                        View Detail
                      </div>
                    </div>
                  </div>
                </Link> // Penutup <Link> card
              ))
            ) : (
              // Tampilan jika tidak ada buku
              <div className="sm:col-span-2 md:col-span-3 xl:col-span-4 text-center py-10">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No books found.
                </p>
              </div>
            )}
            
          </div>
          <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


