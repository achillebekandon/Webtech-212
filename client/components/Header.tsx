import Link from 'next/link';

export default function Header() {
  return (
    // Fond sombre du Header
    <header className="bg-gray-900 shadow-md py-4">
      {/* Container pour le contenu du Header (centré et limité) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation : Flex, justifié et centré verticalement */}
        <nav className="flex justify-between items-center">
          {/* Logo / Nom du site */}
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            LaLiga Kits
          </Link>

          {/* Liens de Navigation (visibilité améliorée) */}
          <div className="flex space-x-2 sm:space-x-4">
            {/* Les liens utilisent text-gray-200 et un léger padding pour la visibilité */}
            <Link 
              href="/" 
              className="text-gray-200 hover:text-blue-400 transition-colors px-2 py-1 rounded-md"
            >
              Accueil
            </Link>
            <Link 
              href="/teams" 
              className="text-gray-200 hover:text-blue-400 transition-colors px-2 py-1 rounded-md"
            >
              Équipes
            </Link>
            <Link 
              href="/about" 
              className="text-gray-200 hover:text-blue-400 transition-colors px-2 py-1 rounded-md"
            >
              À propos
            </Link>
            <Link 
              href="/contacts" 
              className="text-gray-200 hover:text-blue-400 transition-colors px-2 py-1 rounded-md"
            >
              Contact
            </Link>

            {/* >>> NOUVEAUTÉ : Lien vers la connexion/inscription */}
            <Link href="/login" className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors px-2 py-1 rounded-md border-2 border-yellow-400">
              Mon Compte
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}