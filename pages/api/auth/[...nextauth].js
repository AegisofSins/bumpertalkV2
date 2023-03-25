import NextAuth from "next-auth"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

export default NextAuth({
  adapter: FirestoreAdapter(),
  // ...
})