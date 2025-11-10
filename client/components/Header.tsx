import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#222', color: 'white', padding: '10px 0' }}>
      <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/teams">Équipes</Link>
      </nav>
    </header>
  );
}
