/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        /*         primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        }, */
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "menu-down": {
          from: { backgroundColor: "rgba(0, 0, 0, 0,)" },
          to: { backgroundColor: "#1D7300" },
        },
        "menu-up": {
          from: { backgroundColor: "#1D7300" },
          to: { backgroundColor: "rgba(0, 0, 0, 0,)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "menu-down": "menu-down 0.2s ease-out both",
        "menu-up": "menu-up 0.2s ease-out both",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        ubuntu: ["'Ubuntu'", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 -10px 30px 10px #76fa4b",
      },
      boxShadow: {
        "4xl": "0 0px 20px 10px rgba(0, 0, 0, 0.2)",
      },
    },
    minHeight: {
      common: "1000px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
