import { Metadata } from 'next';
import Link from 'next/link';

// Métadonnées pour le SEO
export const metadata: Metadata = {
  title: 'À Propos de Notre Boutique | Maillots LaLiga',
  description: 'Découvrez notre mission : fournir les meilleurs maillots officiels de LaLiga EA Sports. Apprenez-en plus sur notre passion pour le football espagnol.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        À Propos de Notre Passion
      </h1>
      
      <div className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed space-y-6">
        <p>
          Bienvenue sur notre boutique, le lieu de rendez-vous des passionnés de football espagnol. 
          Ce site est né d'un double objectif : un projet d'apprentissage pour maîtriser 
          des technologies modernes comme <strong>Next.js</strong>, <strong>React</strong> et <strong>Tailwind CSS</strong>, 
          mais aussi une véritable volonté de célébrer la passion de <strong>LaLiga EA Sports</strong>.
        </p>
        <p>
          Nous nous efforçons de présenter de manière claire et élégante les maillots qui font 
          l'histoire des plus grands clubs. Bien que ce projet soit à but éducatif, nous 
          le traitons avec le sérieux d'une véritable boutique en ligne.
        </p>
        <p>
          Parcourez nos <Link href="/teams" className="text-blue-600 hover:underline">équipes</Link> ou 
          n'hésitez pas à nous <Link href="/contacts" className="text-blue-600 hover:underline">contacter</Link> pour 
          toute suggestion.
        </p>
      </div>
    </div>
  );
}