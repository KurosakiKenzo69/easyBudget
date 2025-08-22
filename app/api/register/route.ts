import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password, firstName, lastName } = await req.json();

    // Vérifier si l’utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    // récupération des informations de l’utilisateur à partir du form

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }


    if (existingUser) {
      return NextResponse.json({ error: "Utilisateur déjà existant" }, { status: 400 });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l’utilisateur
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    return NextResponse.json({ message: "Inscription réussie", user: newUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 });
  }
}
