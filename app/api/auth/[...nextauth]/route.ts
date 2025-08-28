import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Champs manquants");
        }

        // Cherche l'utilisateur en DB
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.log("Tentative login:", credentials.email);
        console.log("User trouvé:", user);
        console.log("Password check:", credentials.password);


        if (!user) {
          throw new Error("Utilisateur non trouvé");
        }

        // Vérifie le mot de passe
        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Mot de passe incorrect");
        }

        // Retourne l'utilisateur si OK
        return {
          id: user.id.toString(),
          name: user.firstName.toString(),
          email: user.email.toString(),
        };
      },
      
    }),
  ],

  
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Toujours rediriger vers le dashboard après login
      return "/dashboard";
    },
  },
});

export { handler as GET, handler as POST };
