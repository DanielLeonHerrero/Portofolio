/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    extend: {
      maxWidth: {
        'fullHD': '1920px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        blink: 'blink 1s linear infinite',
      },
    }
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html': { 
          'scrollbarWidth': 'none', /* Firefox */
          'scrollbarColor': 'transparent transparent', /* Firefox */
        },
        'body': { 
          '-webkit-overflow-scrolling': 'touch',
        },
        '::-webkit-scrollbar': {
          width: '0px',
          background: 'transparent', /* Chrome/Safari/Webkit */
        },
      })
    }
  ],
}