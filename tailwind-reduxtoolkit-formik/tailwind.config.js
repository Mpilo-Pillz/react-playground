/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        elementary: "#16a085",
        primary: "#f39c12",
        secondary: "#16a085",
        tertiary: "#2c3e50",
        badge: "#2ecc71",
      },
      screens: {
        sm: "640px", //  mobile phones
        md: "768px", //  tablets
        lg: "1024px", //  laptops/desktops
        xl: "1280px", //  large desktops
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
