import { Query } from "node-appwrite";
import { z } from "zod";
import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getProjects: publicProcedure.query(async ({ ctx }) => {
    return await ctx.sdk.database.listDocuments(
      env.DB_ID,
      env.PROJECTS_COLLECTION_ID
    );
  }),

  getExperiences: publicProcedure.query(async ({ ctx }) => {
    return await ctx.sdk.database.listDocuments(
      env.DB_ID,
      env.EXPERIENCES_COLLECTION_ID,
      [Query.orderDesc("createdAt")]
    );
  }),

  getEducations: publicProcedure.query(async ({ ctx }) => {
    return await ctx.sdk.database.listDocuments(
      env.DB_ID,
      env.EDUCATIONS_COLLECTION_ID
    );
  }),
});
