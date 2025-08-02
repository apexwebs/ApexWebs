import NextAuth from "next-auth"
import { authOptions } from "../../../admin/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
