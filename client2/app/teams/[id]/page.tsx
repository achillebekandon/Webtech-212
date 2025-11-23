'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Team {
  id: number;
  name: string;
  jersey: string;
  coach: string;
  founded: number;
  stadium?: string;
}

export default function TeamDetails() {
  const { id } = useParams();
  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    fetch(`/api/teams/${id}`)
      .then(res => res.json())
      .then(setTeam);
  }, [id]);

  if (!team) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{team.name}</h1>
      <img src={team.jersey} alt={`Maillot ${team.name}`} width={200} />
      <p><strong>Entraîneur :</strong> {team.coach}</p>
      <p><strong>Fondé en :</strong> {team.founded}</p>
      {team.stadium && <p><strong>Stade :</strong> {team.stadium}</p>}
      <a href="/teams" style={{ color: '#007bff' }}>← Retour à la liste</a>
    </div>
  );
}
