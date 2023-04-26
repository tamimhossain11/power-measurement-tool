/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          '50':  '#f8fafb',
          '100': '#eaeffc',
          '200': '#d5d5fa',
          '300': '#b3aff2',
          '400': '#9a86e8',
          '500': '#8261e1',
          '600': '#6c45d2',
          '700': '#5134b1',
          '800': '#382482',
          '900': '#1f1750',
        },
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/img0011.jpg')",
      },
    },
  },
  plugins: [],
};
