/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif",
    },
    extend: {
      colors: {
        'my-grey': '#dee2e6',
      },
    },
  },
  plugins: [],
};
