module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        wave: "wave 1.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
      boxShadow: {
        soft: "0 12px 32px -16px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
