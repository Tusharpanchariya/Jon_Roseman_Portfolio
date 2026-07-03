// Better Auth configuration client helper

/**
 * PRODUCTION SETUP NOTE:
 * When ready to deploy authentication, run:
 * npx prisma migrate dev --name add-auth-tables
 * 
 * Un-comment the adapter block below to wire Better Auth into the SQLite/Postgres DB.
 */

/*
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { db } from './db';

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'sqlite',
  }),
  emailAndPassword: {
    enabled: true,
  },
});
*/

// Sandbox fallback mock authentication helper
export const auth = {
  getSession: async () => {
    return null; // Guest user access by default
  },
  signIn: async () => {
    return { user: { name: "Jon Roseman", email: "jon@jonroseman.com", role: "admin" } };
  },
  signOut: async () => {
    return { success: true };
  }
};
