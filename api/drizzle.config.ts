import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: "./drizzle",
  schema: [
    "./src/db/ProductSchema.ts",
    "./src/db/usersSchema.ts",
    "./src/db/ordersSchema.ts",
  ],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});