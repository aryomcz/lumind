// src/app/void/layout.js
export const metadata = {
  title: 'The Void - Lumind',
  description: 'Lepaskan beban pikiranmu di sini.',
}

export default function VoidLayout({ children }) {
  return (
    // Tidak ada Navbar atau Footer di sini, hanya konten halaman.
    <section className="min-h-screen bg-black text-white overflow-hidden relative">
      {children}
    </section>
  )
}