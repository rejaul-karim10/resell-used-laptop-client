/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctorPortalTheme: {
          primary: "#004346",
          secondary: "#DA4167",
          accent: "#2E282A",
          "base-100": "#F7F4F3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
