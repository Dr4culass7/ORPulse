/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          foreground: '#0f172a',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f8fafc',
          foreground: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [require("@tailwindcss/typography")],
}