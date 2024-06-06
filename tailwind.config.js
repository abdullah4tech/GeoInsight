/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      zIndex: {
        '1000' : '1000',
      }
    },
  },
  plugins: [],
}

