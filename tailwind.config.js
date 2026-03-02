/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050B14",
        surface: "#0A1220",
        surfaceLight: "#101D33",
        primary: "#1A5FFF",
        primaryDark: "#0B3DB2",
        primaryLight: "#4D84FF",
        neon: "#00E5FF",
        neonPink: "#FF007F",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #101D33 1px, transparent 1px), linear-gradient(to bottom, #101D33 1px, transparent 1px)",
        'radial-gradient': "radial-gradient(circle at top center, #1A5FFF33, transparent 50%)",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #1A5FFF, 0 0 20px #1A5FFF' },
          '100%': { boxShadow: '0 0 20px #00E5FF, 0 0 40px #00E5FF' },
        }
      }
    },
  },
  plugins: [],
}
