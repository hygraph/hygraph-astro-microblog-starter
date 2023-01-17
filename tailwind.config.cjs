module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"brand": "rgb(102,99,253)"
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
