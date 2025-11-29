
'use client';

import { useState } from 'react';
import TeamCard from '@/components/TeamCard';   
import SearchBar from '@/components/SearchBar'; 
// Import du type enrichi
import { TeamWithOnlineData } from '@/lib/api/teams';

export default function TeamsList({ initialTeams }: { initialTeams: TeamWithOnlineData[] }) {
  const [search, setSearch] = useState('');

  const filtered = initialTeams.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-8 max-w-lg mx-auto">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-xl text-gray-700 dark:text-gray-300 mt-12">
          Aucune équipe trouvée pour &quot;{search}&quot;.
        </div>
      )}
    </>
  );
}