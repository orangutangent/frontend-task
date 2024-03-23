/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: { max: "320px" },
      // => @media (max-width: 319px) { ... }
      xs: { max: "768px" },

      sm: { max: "1024px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1366px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { max: "1920px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1920px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
});
