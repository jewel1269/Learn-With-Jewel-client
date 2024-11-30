import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0d1117",
        secondary: "#161b22",
        'custom-blue': '#0E1726',
        'custom-light-blue': '#1E293B',
        'custom-text': '#FFFFFF',
        'custom-gray': '#94A3B8',
        'custom-bg': '#070d17',
        accent: '#5dc2f1',
  
      },
    },
  },
  plugins: [],
} satisfies Config;
