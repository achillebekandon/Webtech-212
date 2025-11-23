// 'use client' n'est pas nécessaire ici car le composant ne dépend pas de hooks spécifiques
// mais il est implicitement rendu client car il est appelé dans teams/page.tsx qui est 'use client'

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="w-full">
      {/* Remplacement des styles en ligne par Tailwind */}
      <input
        type="text"
        placeholder="Rechercher une équipe..."
        value={value}
        onChange={e => onChange(e.target.value)}
        // Classes Tailwind pour un look moderne et une bonne UX
        className="w-full px-4 py-2 text-lg border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 placeholder-gray-500"
      />
    </div>
  );
}