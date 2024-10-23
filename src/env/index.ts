import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string(),
	AUTH_SECRET: z.string(),
});

if (!envSchema.safeParse(process.env).success)
	throw new Error("Invalid environment variables.");

export const env = envSchema.parse(process.env);
