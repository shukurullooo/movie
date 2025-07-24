// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // kerak bo‘lsa
  theme: {
    extend: {
      animation: {
        'spin-bounce': 'spin 6s linear infinite, bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
