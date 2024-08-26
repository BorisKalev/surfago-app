/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: ["last"],
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      backgroundImage: {
        "gradient-custom-orange":
          "linear-gradient(rgb(252, 227, 138) 0%, rgb(243, 129, 129) 100%)",
        "gradient-custom-blue":
          "linear-gradient(rgb(23, 234, 217) 0%, rgb(96, 120, 234) 100%)",
      },
      screens: {
        "sm-max": { max: "640px" },
        "md-max": { max: "768px" },
        "lg-max": { max: "1024px" },
        "xl-max": { max: "1280px" },
        "2xl-max": { max: "1536px" },
        "3xl-max": { max: "1920px" },
        "4xl-max": { max: "2560px" },
        "2xl": { min: "1536px" },
        "3xl": { min: "1920px" },
        "4xl": { min: "2560px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Hide scrollbar for WebKit browsers */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
};
