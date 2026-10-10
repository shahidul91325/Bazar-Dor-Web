import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from '@better-auth/mongo-adapter';

const mongoUrl = process.env.MONGODB_AUTH_URL;

if (!mongoUrl) {
  throw new Error('MONGODB_AUTH_URL is missing from .env');
}

const client = new MongoClient(mongoUrl);
const db = client.db('bazar-dor-users-data');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
