module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        'nav-dark': "#030916",
        'primary-blue': "#0E4FF4"
      },
      maxWidth: {
        'default-max': "1200px"
      }
    },
  },
  plugins: [],
}
