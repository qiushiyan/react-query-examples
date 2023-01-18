module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./src/template.tsx",
	],
	theme: {
		colors: {
			dark: "#18181b",
			light: "#FEFCE8",
			yellow: "#fde68a",
		},
		extend: {
			fontFamily: {
				sans: "Space Grotesk, sans-serif;",
				serif: "Lora, serif;",
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": "#374151",
						"--tw-prose-headings": "#111827",
						"--tw-prose-lead": "#4b5563",
						"--tw-prose-links": "#111827",
						"--tw-prose-bold": "#111827",
						"--tw-prose-counters": "#6b7280",
						"--tw-prose-bullets": "#d1d5db",
						"--tw-prose-hr": "#e5e7eb",
						"--tw-prose-quotes": "#111827",
						"--tw-prose-quote-borders": "#e5e7eb",
						"--tw-prose-captions": "#6b7280",
						"--tw-prose-code": "#111827",
						"--tw-prose-pre-code": "#e5e7eb",
						"--tw-prose-pre-bg": "#1f2937",
						"--tw-prose-th-borders": "#d1d5db",
						"--tw-prose-td-borders": "#e5e7eb",
						"--tw-prose-invert-body": "#d1d5db",
						"--tw-prose-invert-headings": "#fff",
						"--tw-prose-invert-lead": "#9ca3af",
						"--tw-prose-invert-links": "#fff",
						"--tw-prose-invert-bold": "#fff",
						"--tw-prose-invert-counters": "#9ca3af",
						"--tw-prose-invert-bullets": "#4b5563",
						"--tw-prose-invert-hr": "#374151",
						"--tw-prose-invert-quotes": "#f3f4f6",
						"--tw-prose-invert-quote-borders": "#374151",
						"--tw-prose-invert-captions": "#9ca3af",
						"--tw-prose-invert-code": "#fff",
						"--tw-prose-invert-pre-code": "#d1d5db",
						"--tw-prose-invert-pre-bg": "rgba(0,0,0,.5)",
						"--tw-prose-invert-th-borders": "#4b5563",
						"--tw-prose-invert-td-borders": "#374151",
						fontSize: "1rem",
						lineHeight: "1.75",
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};