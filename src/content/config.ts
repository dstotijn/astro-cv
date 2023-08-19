import { defineCollection, z } from "astro:content";

const date = z
  .string()
  .or(z.date())
  .transform((val) => new Date(val));

const jobPositions = defineCollection({
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    orgURL: z.string().url(),
    from: date,
    to: date.optional(),
  }),
});

const sideProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    githubRepo: z.string().optional(),
    from: date,
    to: date.optional(),
  }),
});

const volunteerActivities = defineCollection({
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    orgURL: z.string().url(),
    from: date,
    to: date.optional(),
  }),
});

export const collections = {
  ["job-positions"]: jobPositions,
  ["side-projects"]: sideProjects,
  ["volunteer-activities"]: volunteerActivities,
};
