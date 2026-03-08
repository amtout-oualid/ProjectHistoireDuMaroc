/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'andalusia-cream': '#FBF9F6',
        'andalusia-navy': '#1C252C',
        'andalusia-charcoal': '#2C3539',
        'andalusia-gold': '#C59B65',
      },
      fontFamily: {
        sans: ['Montserrat', 'Lato', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
