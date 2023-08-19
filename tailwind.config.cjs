const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents }) {
			addUtilities({
				".text-rainbow": {
					color: "transparent",
					backgroundClip: "text",
					background:
						"linear-gradient(to right, #498af4, #eb4a3d, #fbbc04, #0f9d58)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				},
			});
		}),
	],
};
