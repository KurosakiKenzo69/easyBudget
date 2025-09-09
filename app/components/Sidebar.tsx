import React from "react";
import { useSession, signOut } from "next-auth/react";
import {
  FiLogOut,
  FiUser,
  FiSettings,
  FiHome,
  FiCalendar,
} from "react-icons/fi";   


export default function Sidebar() {
    return (

        <aside className="w-64 bg-white shadow-lg p-5 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold text-gray-700 mb-6">EasyBudgets</h2>
                <nav className="flex flex-col gap-4 text-gray-600">
                    <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                        <FiHome /> Accueil
                    </button>
                    {/* lien vers le calendrier */}

                    <a href="/calendrier" className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FiCalendar /> Calendrier
                    </a>
                    <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                        <FiUser /> Profil
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                        <a href="/settings">
                            <FiSettings /> Paramètres
                        </a>
                    </button>
                </nav>
            </div>
            <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
            >
                Déconnexion
            </button>
        </aside>
    )
}