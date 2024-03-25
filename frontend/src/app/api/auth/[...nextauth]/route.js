import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

const handler = NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      scope: "email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
      profile: (profile) => {
        return {
          id: profile?.sub,
          email: profile?.email,
          firstName: profile?.given_name,
          lastName: profile?.family_name || "",
          image: profile?.picture,
          provider: "google"
        }
      }
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user?.provider === 'google') {
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.provider = user.provider;
        token.image = user.image;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.provider === 'google') {
        return {...session, accessToken: token.accessToken, user: { email: token.email, firstName: token.firstName, lastName: token.lastName, image: token.image, provider: token.provider } };
      }
      return { ...session, user: { email: token.email, firstName: token.firstName, lastName: token.lastName, image: token.image, provider: token.provider } };
    },
  },
  pages: {
    signIn: '/',
  }
})

export { handler as GET, handler as POST }