/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        accent: '#FACC15',
        'bg-soft': '#F5F3FF',
      },
    },
  },
  plugins: [],
};
