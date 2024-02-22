import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://gdsc-uec.vercel.app/",

	integrations: [
		{ type: 'mdx' },
		{ type: 'sitemap' },
		{ type: 'tailwind' },
		{ type: 'astroImageTools' }
	],

});
