import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/DB"; // your drizzle instance
import { account, session, user, verification } from "@/DB/schema";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", // or "mysql", "sqlite"
        schema: {user,account,session,verification},
        usePlural:false
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: false,
        minPasswordLength: 8,

    }
});