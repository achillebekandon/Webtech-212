import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez-Nous | Maillots LaLiga',
  description: 'Posez-nous vos questions sur nos maillots de LaLiga EA Sports via notre formulaire de contact.',
};

export default function Contacts() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contactez-Nous</h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Une question ? Remplissez le formulaire ci-dessous et nous reviendrons vers vous.
      </p>

      {/* Formulaire stylisé avec Tailwind */}
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Votre Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Votre Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Votre Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Envoyer le Message
          </button>
        </div>
      </form>
    </div>
  );
}