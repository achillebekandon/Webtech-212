export default function Footer() {
  return (
    // Remplacement des styles en ligne par Tailwind
    // bg-gray-200 : Fond gris clair
    // text-center : Texte centré
    // py-4 : padding vertical (haut/bas)
    // mt-10 : marge supérieure pour séparer du contenu
    <footer className="bg-gray-200 dark:bg-gray-900 text-center py-4 mt-10">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {/* Mise à jour du nom */}
        © 2025 Maillots LaLiga EA Sports. Tous droits réservés.
      </p>
    </footer>
  );
}