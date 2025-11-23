import Image from 'next/image';

interface Team {
  id: number;
  name: string;
  jersey: string; // URL de l'image du maillot
}

export default function TeamCard({ team }: { team: Team }) {
  return (
    // Remplacement des styles en ligne par Tailwind
    // max-w-sm : limite la largeur
    // hover:shadow-xl : ajoute un effet d'ombre au survol pour l'engagement
    // transition : active une transition douce pour l'effet de survol
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 p-4 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer">
      
      {/* Utiliser le composant Image pour l'optimisation */}
      <Image 
        src={team.jersey} 
        alt={`Maillot ${team.name}`} 
        width={200} // Définir la taille intrinsèque pour l'optimisation
        height={200}
        className="w-full h-auto object-contain mb-4 rounded-lg"
      />

      {/* Style du titre */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
        {team.name}
      </h3>
    </div>
  );
}