
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
// Import du type enrichi
import { TeamWithOnlineData } from '@/lib/api/teams';

// Utiliser le type enrichi
export default function TeamCard({ team }: { team: TeamWithOnlineData }) {
  return (
    <Link href={`/teams/${team.id}`} className="block">
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg 
                   overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
      >
        
        {/* AFFICHAGE DES DEUX MAILLOTS (HOME & AWAY) */}
        <div className="relative flex h-64 w-full bg-gray-100 dark:bg-gray-700">
            
            {/* Maillot Domicile (Home) */}
            <div className="relative w-1/2 p-2 border-r border-gray-200 dark:border-gray-700">
                <Image
                    src={team.jersey_url_home} 
                    alt={`${team.name} Domicile`}
                    fill
                    sizes="25vw"
                    className="object-contain transition-transform duration-500"
                    unoptimized={true} 
                />
                 <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
                    Domicile
                </span>
            </div>

            {/* Maillot Extérieur (Away) */}
            <div className="relative w-1/2 p-2">
                <Image
                    src={team.jersey_url_away} 
                    alt={`${team.name} Extérieur`}
                    fill
                    sizes="25vw"
                    className="object-contain transition-transform duration-500"
                    unoptimized={true}
                />
                 <span className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-semibold px-2 py-0.5 rounded-md">
                    Extérieur
                </span>
            </div>
        </div>
        
        {/* Infos de l'équipe */}
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {team.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            **Coach** : {team.coach}
          </p>
          
          {/* AFFICHAGE DYNAMIQUE (INFORMATION EN LIGNE) */}
          <p className="text-xs font-semibold mt-2 p-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Dernier Résultat : {team.latest_result}
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Fondé en {team.founded}
          </p>
        </div>
      </div>
    </Link>
  );
}