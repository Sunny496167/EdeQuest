/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
