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
        "background": "#FCFCFC",
        'nav-dark': "#030916",
        'primary-blue': "#0E4FF4",
        // 'area-orange': "#FF4E16",
        // 'area-orange-light': "#FFF1ED"
      },
      width: {
        'detail-img-width': "330px"
      },
      maxWidth: {
        'default-max': "1200px"
      },
      height: {
        'card-height': "500px",
        'detail-img-height': "450px"
      },
      boxShadow: {
        'detail-shadow': "box-shadow: -2px 2px 69px 5px rgba(0,0,0,0.17)"
      },
    },
  },
  plugins: [],
}
