/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: '1500px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1500px'
    },
    fontFamily: {
      'sans': ['system-ui', 'sans-serif'],
      'display': ['system-ui', 'sans-serif'],
      'body': ['system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#111216',
        'secondary': '#282c34',
        'g_red': '#ff5858'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}