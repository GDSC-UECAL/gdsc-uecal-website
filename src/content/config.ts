import { defineCollection, z } from "astro:content";

const events = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
			heroImage: image().refine((img) => img.width >= 500, {
				message: "Cover image must be at least 1080 pixels wide!",
			}),
		borderColor: z.string().optional(),
	}),
});

export const collections = { events };
