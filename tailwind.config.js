/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "atcs-dark": "#1e3a8a", // Diepblauw
        "atcs-light": "#60a5fa", // Lichtblauw
      },
    },
  },
  plugins: [],
};
