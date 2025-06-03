import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Mi Portfolio
        </Link>

        <nav className="space-x-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            Sobre mí
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            Proyectos
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
