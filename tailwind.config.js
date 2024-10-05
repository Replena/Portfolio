/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      black: "#7e5bef",
      gray: "#333",
      lilac: "#8a3ffc",
      white: "#fff",
      lightGray: "#f3f4f6",
      green: "#0dd664",
      purple: "#7e5bef",
      red: "#ff4d4d",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
