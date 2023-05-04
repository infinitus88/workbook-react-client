import axios from "../../../lib/axios";
import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "me@email.com"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await axios.post("/auth/login", {
          email: credentials?.email,
          password: credentials?.password,
        });

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
  },
};

export default NextAuth(authOptions)