/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        "nav-bg": "#373737",
        "select-bg": "#262626",
        "select-active": "#0d8b7f",
        "body-bg": "#F8F8F8",
        "header-bg": "#f2f2f2",
        "active-text": "#2e2e2e",
        "inactive-text": "#666666",
        label: "#666666",
      },
      spacing: {
        50: "12.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
