/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5722",
        secondary: "#2196F3",
        tertiary: "#4CAF50",
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
