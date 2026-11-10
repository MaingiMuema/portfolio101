/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0b0d",
        "ink-soft": "#111318",
        "ink-deep": "#07080a",
        paper: "#f2efe8",
        "paper-deep": "#e6e1d5",
        amber: "#e6b04b",
        "amber-soft": "#f3d08a",
        clay: "#8f4720",
        "clay-soft": "#b06a3c",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
