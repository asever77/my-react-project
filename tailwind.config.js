/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',  // 7.5px
        'sm': '0.875rem', // 8.75px
        'base': '1rem',    // 10px
        'lg': '1.125rem',  // 11.25px
        'xl': '1.25rem',   // 12.5px
        '2xl': '1.5rem',   // 15px
        '3xl': '1.875rem', // 18.75px
        '4xl': '2.25rem',  // 22.5px
        '5xl': '3rem',     // 30px
        '6xl': '3.75rem',  // 37.5px
        '7xl': '4.5rem',   // 45px
        '8xl': '6rem',     // 60px
        '9xl': '8rem',     // 80px
      },
    },
  },
  plugins: [],
}

