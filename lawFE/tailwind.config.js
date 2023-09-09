/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        big: { max: "1440px" },
        medium: { max: "780px" },
        small: { max: "360px" },
      },
    },
  },
  plugins: [],
};
