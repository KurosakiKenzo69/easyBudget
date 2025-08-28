"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";


export default function GoogleButton({ text }: { text: string }) {
    const { data: session } = useSession();

    if (session) {
        redirect("/dashboard");
    }


    return (
    <button
      type="button"
      onClick={() => {
        signIn("google");
        console.log("Google Sign-in");
      }}
      className="flex items-center justify-center w-full gap-3 border border-gray-300 py-2 rounded-md shadow-sm bg-white hover:bg-gray-50 transition"
    >
      <FcGoogle size={22} />
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );
}
