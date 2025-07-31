// src/app/admin/lib/auth.ts
// Authentication configuration for NextAuth.js (MVP setup)
// This file will be expanded as implementation progresses.

import { NextAuthOptions, User as NextAuthUser, DefaultSession } from "next-auth"
// Extend types for user, token, and session to include 'role'

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
    } & DefaultSession["user"]
  }
  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}
import CredentialsProvider from "next-auth/providers/credentials"
import { sql } from '@vercel/postgres'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        // Placeholder: Replace with real DB query
        const { rows } = await sql`
          SELECT * FROM admin_users 
          WHERE email = ${credentials.email}
        `
        if (rows.length === 0) return null
        const user = rows[0]
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && typeof user === 'object' && 'role' in user) {
        token.role = (user as NextAuthUser).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string | undefined;
      }
      return session;
    }
  }
}
