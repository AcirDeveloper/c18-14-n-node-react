import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
