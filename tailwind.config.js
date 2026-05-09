export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050505",
        graphite: "#111111",
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
