import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://gdsc-uec.vercel.app/",
	integrations: [mdx(

	), sitemap({
		filter: (page) =>
			page !== 'https://gdsc-uec.vercel.app/' &&
			page !== 'https://gdsc-uec.vercel.app/about' &&
			page !== 'https://gdsc-uec.vercel.app/events'
	}), tailwind(

	)],

});
