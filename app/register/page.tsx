"use client";
import React from "react";
import GoogleButton from "../components/GoogleButton";
import { useState } from "react";

export default function Register() {


    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/auth/register", {
            method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password, firstName, lastName }),
            });

            const data = await res.json();
            alert(data.message || data.error);
        };
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-4">Inscription</h2>
                    <input
                        type="text"
                        placeholder="Nom"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        value={firstName}
                        placeholder="Prénom"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                    />
                    <button type="submit" className="bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800 transition cursor-pointer">
                        S'inscrire
                    </button>

                    <div className="flex items-center my-2">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="px-2 text-gray-500 text-sm">ou</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* Bouton Google */}
                    <GoogleButton text="S’inscrire avec Google" />
                </form>
            </div>
        );
    }

