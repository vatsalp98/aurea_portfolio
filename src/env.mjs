import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    APPWRITE_ENDPOINT: z.string(),
    PROJECT_ID: z.string(),
    APPWRITE_KEY: z.string(),
    DB_ID: z.string(),
    PROJECTS_COLLECTION_ID: z.string(),
    EXPERIENCES_COLLECTION_ID: z.string(),
    EDUCATIONS_COLLECTION_ID: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
    PROJECT_ID: process.env.PROJECT_ID,
    APPWRITE_KEY: process.env.APPWRITE_KEY,
    DB_ID: process.env.DB_ID,
    PROJECTS_COLLECTION_ID: process.env.PROJECTS_COLLECTION_ID,
    EXPERIENCES_COLLECTION_ID: process.env.EXPERIENCES_COLLECTION_ID,
    EDUCATIONS_COLLECTION_ID: process.env.EDUCATIONS_COLLECTION_ID,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
