/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
