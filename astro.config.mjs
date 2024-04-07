import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';

export default defineConfig({
	site: "https://gdsc-uec.vercel.app/",

	integrations: [mdx(), sitemap(), partytown(), tailwind()],

});
