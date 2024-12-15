import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gradient-to-br from-green-50 to-blue-100 dark:bg-left-bottom dark:from-zinc-900 dark:to-zinc-800 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
         
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-green-950 dark:text-green-200">Med<span className="text-green-500 dark:text-green-400">Finder</span></h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Encuentra los medicamentos que necesitas de forma rápida, eficiente y segura,<br /> con acceso a información detallada,  precios competitivos y disponibilidad en farmacias cercanas, <br /> todo desde la comodidad de tu hogar.
            </p>
          </div>
  
      
          <div className="flex flex-wrap justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Medicamentos
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Contacto
            </a>
            <Link
              href="/IA"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              IA
            </Link>
          </div>
  
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.505 0-1.796.715-1.796 1.764v2.311h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195A4.92 4.92 0 0016.847 3c-2.726 0-4.932 2.216-4.932 4.946 0 .39.045.765.126 1.124C7.728 8.85 4.1 6.958 1.671 3.933a4.934 4.934 0 00-.666 2.482c0 1.71.87 3.216 2.19 4.098a4.903 4.903 0 01-2.23-.616v.061c0 2.386 1.693 4.375 3.946 4.829a4.932 4.932 0 01-2.224.084c.627 1.96 2.444 3.383 4.6 3.422A9.87 9.87 0 010 19.54 13.945 13.945 0 007.548 21c9.142 0 14.307-7.72 14.307-14.426 0-.22-.005-.44-.015-.658A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.288c0-3.018 1.793-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.492 0-1.955.927-1.955 1.874v2.205h3.328l-.531 3.47h-2.797v8.385C19.612 22.954 24 17.991 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
  
        <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 MedFinder. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
  