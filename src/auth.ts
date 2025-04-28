import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Only store Google ID
      if (account && profile) {
        token.sub = profile.sub;
      }
      return token;
    },
  
    async session({ session, token }) {
      // Sync to DB here instead
      if (token && session.user) {
        try {
          await fetch(`${process.env.NEXTAUTH_URL}/api/auth/sync`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              googleId: token.sub,
              name: session.user.name,
              email: session.user.email,
              image: session.user.image,
              provider: "google",
            }),
          });
        } catch (err) {
          console.error("DB sync failed", err);
        }
  
        session.user.id = token.sub;
      }
  
      return session;
    }
  }
});
