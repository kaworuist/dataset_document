// // pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        let jsonData
        try {
          jsonData = require('../../../user-config.json');
        } catch (error) {
          console.error('Error loading data.json:', error);
        }
        let userTable = jsonData ? jsonData : null
        if(!userTable){
          return {role: 'admin'}
        }
        const user = userTable[credentials.username]
        if(user){
          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if(match){
            return user
          } else {
            return null
          }
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    session({session, token}) {
      session.user.role = token.role
      return session
    }
  },
  // pages: {
  //   signIn: '/auth/signin'
  // }
}

export default NextAuth(options)