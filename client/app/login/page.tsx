import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Connexion | Maillots LaLiga',
  description: 'Connectez-vous à votre compte pour accéder à l\'historique de vos commandes de maillots de LaLiga EA Sports.',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl">
        
        {/* En-tête du formulaire */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Connectez-vous à votre Compte
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Ou <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              créez un compte gratuitement
            </Link>
          </p>
        </div>

        {/* Formulaire de Connexion */}
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            
            {/* Champ Email */}
            <div>
              <label htmlFor="email-address" className="sr-only">Adresse Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Adresse Email"
              />
            </div>
            
            {/* Champ Mot de passe */}
            <div>
              <label htmlFor="password" className="sr-only">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Mot de passe"
              />
            </div>
          </div>
          
          {/* Option "Mot de passe oublié" */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Se Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}