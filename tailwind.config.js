/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "360px", // very small phones
        xs: "480px", // small phones
        sm: "640px", // tablets / small screens
        md: "768px", // medium screens / small laptops
        lg: "1024px", // large screens / desktops
        xl: "1280px", // extra large screens
        "2xl": "1536px", // very large screens
        "3xl": "1920px", // ultra-wide screens
        "4xl": "2560px", // 4K screens
      },
    },
  },
  plugins: [],
};
