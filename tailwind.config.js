/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080c0a',
        panel: '#111815',
        paper: '#eff4ef',
        muted: '#8b9890',
        mint: '#b8f45c',
        amber: '#f0b35a',
        green: '#72ddab',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
