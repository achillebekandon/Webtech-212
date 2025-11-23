import './globals.css';
// >>> NOUVEAUTÉ : Importation des composants Header et Footer
import Header from '../components/Header'; 
import Footer from '../components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maillots LaLiga EA Sports Officiels | Boutique Foot Liga',
  description: 'Achetez les maillots de foot officiels de LaLiga EA Sports 2024/2025. Tous les clubs (Real Madrid, FC Barcelone...), flocage personnalisé, flocage officiel, livraison rapide.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        
        {/* >>> NOUVEAUTÉ : Affichage du Header */}
        <Header />
        
        {/* La balise <main> enveloppe le contenu de la page et permet au Footer de rester en bas */}
        {/* flex-grow garantit que le contenu prend toute la place disponible entre Header et Footer */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        {/* >>> NOUVEAUTÉ : Affichage du Footer */}
        <Footer />
      </body>
    </html>
  );
}