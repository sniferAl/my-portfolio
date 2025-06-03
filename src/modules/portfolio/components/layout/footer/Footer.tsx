export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-20">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Royer Alonzo. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
