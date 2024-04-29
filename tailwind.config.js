/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0px 1px 10px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "4xl": "32px",
      },
      container: {
        center: true,
        padding: {
          DEAFAULT: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "0.625rem",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
