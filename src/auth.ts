import NextAuth from "next-auth";
import Google from "next-auth/providers/google";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // Attach Google ID to session
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.sub = profile.sub; // Google ID from Google OAuth
      }
      return token;
    },
  },
});
