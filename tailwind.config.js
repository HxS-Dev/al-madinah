/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito-sans)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        berkshire_swash: ['var(--font-berkshire_swash)', 'cursive'],
      },
      screens: {
        'xs': '320px',
        'sm': '575px',
        'md': '767px',
        'lg': '991px',
        'xl': '1199px',
        '2xl': '1365px',
        '3xl': '1600px',
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
} 