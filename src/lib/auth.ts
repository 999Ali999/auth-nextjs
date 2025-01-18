import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
export const { auth, handlers, signIn } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = "admin@admin.com";
        const password = "admin";

        if (credentials.email === email && credentials.password === password) {
          return { email, password };
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
});
