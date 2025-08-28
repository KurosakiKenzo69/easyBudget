"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/loading";
import GoogleButton from "@/app/components/GoogleButton";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirige automatiquement si déjà connecté
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  if (status === "loading") return (
    <Loader />
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
    });

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Connexion</h2>
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
        <button
          type="submit"
          className="bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800 transition cursor-pointer"
        >
          Se connecter
        </button>

        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-2 text-gray-500 text-sm">ou</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <GoogleButton text="Continuer avec Google" />

        <p className="text-center text-sm text-gray-500 mt-2">
          Pas encore de compte ?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            S’inscrire
          </a>
        </p>
      </form>
    </div>
  );
}
