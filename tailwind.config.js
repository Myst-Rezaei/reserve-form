/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Add your font (optional custom name)
        peyda: ['PeydaWeb', 'sans-serif'],
      },
    },
    fontFamily: {
      // Override the default .font-sans
      sans: ['PeydaWeb', 'sans-serif'],
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Make sure this matches your project
};


