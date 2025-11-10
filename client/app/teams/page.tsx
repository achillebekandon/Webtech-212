'use client';

import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import TeamCard from '../../components/TeamCard';
import Link from 'next/link';

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

  useEffect(() => {
    fetch('/api/teams')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  const filtered = teams.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Équipes de la Liga Santander</h1>
      <SearchBar value={search} onChange={setSearch} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filtered.map(team => (
          <Link key={team.id} href={`/teams/${team.id}`}>
            <TeamCard team={team} />
          </Link>
        ))}
      </div>
    </div>
  );
}
