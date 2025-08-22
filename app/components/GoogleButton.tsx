"use client";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        // tu appelleras ici ta logique de connexion avec Google
        console.log("Google Sign-in");
      }}
      className="flex items-center justify-center w-full gap-3 border border-gray-300 py-2 rounded-md shadow-sm bg-white hover:bg-gray-50 transition"
    >
      <FcGoogle size={22} />
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );
}
