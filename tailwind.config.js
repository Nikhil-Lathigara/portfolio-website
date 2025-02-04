/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          typewriter: {
            '0%': { width: '0%' },
            '15%': { width: '15%' },
            '30%': { width: '30%' },
            '45%': { width: '45%' },
            '60%': { width: '60%' },
            '75%': { width: '75%' },
            '100%': { width: '100%' },
          },
          blink: {
            '100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'blue' },
          },
        },
        animation: {
          typewriter: 'typewriter 4s steps(40) 1s normal both, blink 1s steps(1) infinite',
        },
      },
    },
    variants: {},
    plugins: [],
  }