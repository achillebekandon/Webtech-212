"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Metadata } from 'next';
import Link from 'next/link';



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);



export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // ⛔ Empêche le rechargement de la page

    // 👉 Création du compte dans Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Erreur : " + error.message);
      return;
    }

    // 👉 Redirection vers l'accueil
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl">
        
        {/* En-tête du formulaire */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Créer votre Compte
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Ou <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              connectez-vous si vous avez déjà un compte
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSignUp}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
              
            {/* Champ Email */}
            <div>
              <label htmlFor="email-address" className="sr-only">Adresse Email</label>
              <input
              type="email"
              autoComplete="email"
              placeholder="Adresse Email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>

            {/* Champ Mot de passe */}
            <div>
              <label htmlFor="password" className="sr-only">Mot de passe</label>
              <input
              type="password"
              autoComplete="new-password"
              placeholder="Mot de passe"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          </div>

          <div>
            <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
          
            Créer le Compte
          </button>
          </div>
        </form>

      </div>
    </div>
  );
}
