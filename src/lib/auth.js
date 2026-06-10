import dns from "node:dns";
dns.setServers(['8.8.8.8' , '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// 1. Initialize your client using your environment variables
const client = new MongoClient(process.env.MONGODB_URI);

// 2. FIXED: Wrapped 'qurbanihat' in quotes so it connects to your database cleanly
const db = client.db("qurbanihat"); 

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: { 
    enabled: true, // This is perfectly configured!
  }, 

socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }, 
    },



});