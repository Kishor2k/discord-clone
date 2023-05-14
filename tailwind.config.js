/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "rgb(35, 39, 42)",
        "dark-gray-hover": "hsl(205, 9%, 20%)",
        "discord-blue": "#404eed",
        "discord-blue-hover": "hsl(235, 83%, 70%)",
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
      fontWeight: {
        thin: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "1.5rem",
          md: "2.5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      boxShadow: {
        "d-shadow": "0 8px 15px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
