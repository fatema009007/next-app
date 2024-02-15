import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
export const dynamic = true;

export const authOptions ={
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ]
};

const handler = NextAuth(authOptions);
console.log("hi fatema");
export { handler as GET, handler as POST }