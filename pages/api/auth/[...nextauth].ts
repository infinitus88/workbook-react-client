import { Session } from "inspector";
import axios from "../../../lib/axios";
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';



const authOptions: NextAuth = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "me@email.com"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await axios.post("/auth/login", {
          email: credentials?.email,
          password: credentials?.password,
        })

        const user = res.data;

        if (user) {
          return user;
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error"
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) : Session {
      session.user = token;
      return session;
    }
  }
};

export default NextAuth(authOptions)