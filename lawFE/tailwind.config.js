/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        medium: { max: "768px" },
        small: { max: "360px" },
      },
    },
  },
  plugins: [],
};
