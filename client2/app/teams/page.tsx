'use client';

import { useEffect, useState } from 'react';
// Ces composants doivent être stylisés avec Tailwind (voir mes suggestions précédentes)
import SearchBar from '../../components/SearchBar'; 
import TeamCard from '../../components/TeamCard';   
import Link from 'next/link';

// Interface de données (inchangée)
interface Team {
  id: number;
  name: string;
  jersey: string;
  coach: string;
  founded: number;
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true); // État de chargement

  useEffect(() => {
    // Simuler le chargement des données depuis l'API
    fetch('/api/teams') 
      .then(res => res.json())
      .then(data => {
        setTeams(data);
      })
      .catch(err => {
        console.error("Erreur lors du fetch des équipes:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filtered = teams.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Équipes de LaLiga EA Sports
      </h1>
      
      {/* SearchBar centré et stylisé */}
      <div className="mb-8 max-w-lg mx-auto">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      
      {isLoading ? (
        // Affichage de l'état de chargement
        <div className="text-center text-lg text-gray-700 dark:text-gray-300">
          Chargement des équipes...
        </div>
      ) : (
        <>
          {/* Grille responsive utilisant Tailwind */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(team => (
              <Link key={team.id} href={`/teams/${team.id}`} className="block">
                <TeamCard team={team} />
              </Link>
            ))}
          </div>

          {/* Message si aucun résultat n'est trouvé */}
          {filtered.length === 0 && (
            <div className="text-center text-xl text-gray-700 dark:text-gray-300 mt-12">
              Aucune équipe trouvée pour &quot;{search}&quot;.
            </div>
          )}
        </>
      )}
    </div>
  );
}