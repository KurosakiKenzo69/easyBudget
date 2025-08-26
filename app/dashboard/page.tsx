"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  FiLogOut,
  FiUser,
  FiSettings,
  FiHome,
  FiCalendar,
} from "react-icons/fi";
import Loading from "../components/loading";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 🚀 Redirige si pas connecté
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-6">EasyBudgets</h2>
          <nav className="flex flex-col gap-4 text-gray-600">
            <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
              <FiHome /> Accueil
            </button>
            {/* lien vers le calendrier */}

            <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
              <FiCalendar /> Calendrier
            </button>
            <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
              <FiUser /> Profil
            </button>
            <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
              <FiSettings /> Paramètres
            </button>
          </nav>
        </div>
        <a href="/">
          <button
            onClick={() => signOut()}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
          >
            <FiLogOut /> Déconnexion
          </button>
        </a>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Tableau de bord</h1>
          {session?.user && (
            <div className="flex items-center gap-3">
              {/* <img
                src={session.user.image || ""}
                alt="avatar"
                className="w-10 h-10 rounded-full border"
              /> */}
              <p className="text-gray-700 font-medium">{session.user.name}</p>
            </div>
          )}
        </header>

        {/* Exemple de contenu */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Revenus
            </h2>
            <p className="text-2xl font-bold text-green-500">+ 2 500 €</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Dépenses
            </h2>
            <p className="text-2xl font-bold text-red-500">- 1 200 €</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Solde</h2>
            <p className="text-2xl font-bold text-blue-500">+ 1 300 €</p>
          </div>
        </section>
      </main>
    </div>
  );
}
