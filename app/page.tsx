import Image from "next/image";
import iconaccount from "/assets/compte-bancaire.png";
import depense from "/assets/frais.png";
import objectif from "/assets/objectif.png";
import camembert from "/assets/camemberts.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 shadow-sm bg-white/80 backdrop-blur border-b">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">
          easyBudget
        </h1>
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:bg-indigo-50 text-indigo-700 font-medium px-5 py-2 rounded transition"
          >
            Inscription
          </a>
          <a
            href="#"
            className="bg-indigo-700 text-white font-medium px-5 py-2 rounded shadow hover:bg-indigo-800 transition"
          >
            Connexion
          </a>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex flex-1 flex-col items-center justify-center px-0 py-16 w-full">
        <div className="flex flex-col md:flex-row items-center gap-16 w-full px-12">
          {/* Slogan */}
          <div className="flex-1 flex flex-col gap-8 min-w-[320px]">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Mieux gérer <span className="text-indigo-600">vos finances</span>{" "}
              aujourd’hui
              <br className="hidden md:block" />
              pour préparer demain
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Gérez vos <strong>finances</strong> simplement, anticipez vos{" "}
              <strong>objectifs</strong> et prenez le <strong>contrôle</strong>{" "}
              de votre avenir financier.
            </p>
          </div>

          {/* Image principale */}
          <div className="flex-1 flex items-center justify-center min-w-[320px]">
            <Image
              src={iconaccount}
              alt="Finance globe"
              className="w-[22rem] h-[22rem] object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Trois images illustratives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 w-full px-12">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={depense}
              alt="Gestion de fichiers"
              className="w-32 h-32 mb-2 drop-shadow-lg"
            />
            <span className="text-gray-700 font-semibold text-lg">
              Suivi des dépenses
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={camembert}
              alt="Visualisation"
              className="w-32 h-32 mb-2 drop-shadow-lg"
            />
            <span className="text-gray-700 font-semibold text-lg">
              Visualisation claire
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={objectif}
              alt="Objectifs"
              className="w-32 h-32 mb-2 drop-shadow-lg"
            />
            <span className="text-gray-700 font-semibold text-lg">
              Objectifs personnalisés
            </span>
          </div>
        </div>
      </main>

      {/* Section À propos */}
      <section className="w-full px-12 py-16 bg-white/80 mt-20 rounded-xl shadow-lg flex flex-col items-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">
          À propos de nous
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl text-center mb-8">
          easyBudget est une application dédiée à la gestion financière
          personnelle. Notre mission est de simplifier la gestion de vos
          finances et de vous aider à atteindre vos objectifs financiers grâce à
          une interface intuitive et des outils puissants.
        </p>

        {/* Fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl mt-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-indigo-600 text-4xl font-bold">1</span>
            <span className="text-gray-800 font-semibold text-lg">
              Gestion des comptes
            </span>
            <span className="text-gray-500 text-center">
              Ajoutez et suivez vos comptes bancaires en toute sécurité.
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-indigo-600 text-4xl font-bold">2</span>
            <span className="text-gray-800 font-semibold text-lg">
              Suivi des dépenses
            </span>
            <span className="text-gray-500 text-center">
              Catégorisez vos dépenses et visualisez vos habitudes.
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-indigo-600 text-4xl font-bold">3</span>
            <span className="text-gray-800 font-semibold text-lg">
              Objectifs financiers
            </span>
            <span className="text-gray-500 text-center">
              Créez des objectifs et suivez votre progression facilement.
            </span>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12">
          <a
            href="#"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-xl shadow hover:bg-indigo-700 transition"
          >
            Commencer maintenant
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-400 text-sm bg-white/60 backdrop-blur">
        © 2025 easyBudget. Tous droits réservés.
      </footer>
    </div>
  );
}
