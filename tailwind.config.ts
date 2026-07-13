import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Make sure this line is here!
  ],
  theme: {
    extend: {},
  },
  // This is the critical part:
  plugins: [require("daisyui")],
}
export default config;