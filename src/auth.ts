import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"
// import type { NextApiRequest, NextApiResponse } from "next"

// supposedly these are automatically picked up from process.env by next-auth
// const { KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET, KEYCLOAK_ISSUER } = process.env;
// const config = {
//   clientId: KEYCLOAK_CLIENT_ID ?? '',
//   clientSecret: KEYCLOAK_CLIENT_SECRET ?? '',
//   issuer: KEYCLOAK_ISSUER ?? ''
// }

// potential console.error here to warn yourself you forgot to set the env values

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: process.env.NODE_ENV === 'development',   
  providers: [Keycloak],
})

