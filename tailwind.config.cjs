const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			keyframes: {
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden",
					},
					"100%": {
						width: "100%",
					},
				},
				blink: {
					"50%": {
						borderColor: "transparent",
					},
					"100%": {
						borderColor: "white",
					},
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				
			},
			animation: {
				typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents }) {
			addUtilities({
				".text-gradient-purple": {
					color: "transparent",
					backgroundClip: "text",
					background: "linear-gradient(to right, #d8b4fe, #f9a8d4)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				},
			});
		}),
	],
};
