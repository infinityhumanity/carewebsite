/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#5eead4",
          DEFAULT: "#0d9488",
          dark: "#0f766e",
          darker: "#115e59",
        },
        cream: {
          DEFAULT: "#fffaf3",
          deep: "#fef6ee",
        },
        coral: {
          light: "#fca5a0",
          DEFAULT: "#f97362",
          dark: "#c2432e",
          darker: "#a5371f",
        },
        ink: {
          DEFAULT: "#1f2937",
          muted: "#4b5563",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(13, 148, 136, 0.25)",
        card: "0 8px 30px -12px rgba(31, 41, 55, 0.15)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
