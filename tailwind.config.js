/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1D7300",
        "primary-light-100": "#218200",
        "primary-light-200": "#248f00",
        "primary-light-300": "#299e02",
        "primary-light-400": "#2bab00",
        "primary-light-500": "#2fba00",
        "primary-light-600": "#33c900",
        "primary-light-700": "#39db02",
        "primary-light-800": "#3df000",
        "primary-light/100": "#4bfc0f",
        "primary-light/200": "#59ff21",
        "primary-light/300": "#68ff36",
        "primary-light/400": "#76fa4b",
        "primary-light/500": "#8aff63",
        "primary-light/600": "#94ff70",
        "primary-light/700": "#9fff80",
        "primary-light/800": "#acff91",

        "primary-dark-100": "#186100",
        "primary-dark-200": "#155201",
        "primary-dark-300": "#0f3d00",
        "primary-dark-400": "#0b2b00",
        "primary-dark-500": "#071a00",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        ubuntu: ["'Ubuntu'", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 -10px 30px 10px #76fa4b",
      }
    },
    minHeight: {
        common: "900px"
    }
  },
  plugins: [],
};
