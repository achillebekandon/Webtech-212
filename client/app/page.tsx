import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// Métadonnées pour le SEO de la page d'accueil
export const metadata: Metadata = {
  title: 'Maillots LaLiga EA Sports Officiels | Boutique Foot Liga',
  description: 'Achetez les maillots de foot officiels de LaLiga EA Sports. Découvrez les dernières tenues de Real Madrid, FC Barcelone, Atlético de Madrid et plus encore.',
};

// Vérifiez que ces chemins d'accès correspondent exactement aux fichiers dans /public/images
const STAR_PLAYERS = [
  { name: "V. Júnior", club: "Real Madrid", description: "Vitesse et flair, l'étincelle brésilienne.", imageUrl: "/images/vini_jr.png" },
  { name: "R. Lewandowski", club: "FC Barcelona", description: "Le buteur implacable, machine à buts.", imageUrl: "/images/lewandowski.png" },
  { name: "A. Griezmann", club: "Atlético de Madrid", description: "Le maestro français, âme de l'équipe.", imageUrl: "/images/griezmann.png" },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-160px)]"> 
      
      {/* 1. Section Héros */}
      <section className="text-center py-20 md:py-32 bg-gray-900 text-white shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Vivez la passion <span className="text-yellow-400">LaLiga EA Sports</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Découvrez les maillots officiels des plus grandes stars du football espagnol. 
          Votre club, votre passion.
        </p>
        
        <Link 
          href="/teams" 
          className="inline-block px-10 py-4 text-lg font-bold bg-red-600 text-white rounded-full 
                     hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wider"
        >
          Découvrir les Équipes
        </Link>
      </section>

      {/* 2. Mise en Lumière des Stars (Correction de l'affichage des photos) */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white border-b-4 border-red-600 inline-block px-4 pb-1">
          Les Phares de la Liga
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {STAR_PLAYERS.map((player, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg 
                         hover:shadow-2xl transition duration-500 transform hover:translate-y-[-5px]
                         border-t-4 border-yellow-500"
            >
              {/* ----------------------------------------------------------- */}
              {/* CORRECTION : Ajout de la classe 'relative' ici ! */}
              <div className="relative h-40 w-full mb-4 overflow-hidden">
                <Image
                  src={player.imageUrl}
                  alt={`Photo de ${player.name} (${player.club})`}
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-lg object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* ----------------------------------------------------------- */}
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{player.name}</h3>
              <p className="text-red-600 font-semibold mb-2">{player.club}</p>
              <p className="text-gray-600 dark:text-gray-400">{player.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA Final */}
      <section className="py-16 text-center bg-gray-100 dark:bg-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Ne Manquez Aucune Tenue Officielle !
        </h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Maillots domicile, extérieur et third disponibles pour chaque équipe.
        </p>
        <Link 
          href="/teams" 
          className="inline-block px-8 py-3 text-lg font-medium bg-yellow-500 text-gray-900 rounded-md 
                     hover:bg-yellow-400 transition duration-300 shadow-md"
        >
          Voir tous les Maillots
        </Link>
      </section>
      
    </div>
  );
}