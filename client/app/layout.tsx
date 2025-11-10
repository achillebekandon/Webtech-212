import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Liga Santander – Maillots',
  description: 'Liste des maillots des équipes de la Liga Santander',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, backgroundColor: '#f8f8f8' }}>
        <Header />
        <main style={{ padding: '20px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
