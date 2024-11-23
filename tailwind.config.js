/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#10b981',
        secondary:'#64748b',
        dark: '#111827',
      },
      screens:{
      '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

