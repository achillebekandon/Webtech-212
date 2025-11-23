import { NextResponse } from 'next/server';

const teams = [
  { id: 1, name: 'Real Madrid', jersey: '/images/real.png', coach: 'Carlo Ancelotti', founded: 1902, stadium: 'Santiago Bernabéu' },
  { id: 2, name: 'FC Barcelona', jersey: '/images/barca.png', coach: 'Hansi Flick', founded: 1899, stadium: 'Spotify Camp Nou' },
  { id: 3, name: 'Atlético Madrid', jersey: '/images/atletico.png', coach: 'Diego Simeone', founded: 1903, stadium: 'Cívitas Metropolitano' }
];

export async function GET() {
  return NextResponse.json(teams);
}
