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
import Sidebar from "../components/Sidebar";

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
      <Sidebar />

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
