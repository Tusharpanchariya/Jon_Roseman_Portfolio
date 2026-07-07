// Better Auth configuration client helper

/**
 * PRODUCTION SETUP NOTE:
 * When ready to deploy authentication, select a database provider
 * and install your preferred adapter (e.g. SQLite, PostgreSQL).
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
