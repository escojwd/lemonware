module.exports = {
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
    extend: {
        fontSize: {
            '10px': '10px',
            '12px': '12px',
            '14px': '14px',
            '15px': '15px',
            '16px': '16px',
            '17px': '17px',
            '18px': '18px',
            '20px': '20px',
            '24px': '24px',
            '25px': '25px',
            '28px': '28px',
            '32px': '32px',
            '42px': '42px',
            '48px': '48px',
            '50px': '50px',
            '64px': '64px'
        },
        colors: {
            'focused': '#B00000',
            'unfocused': '#D6D4D4',
            'header': '#2E2E2E',
            'text-regular': '#808080',
            'title': '#18191F',
            'background': '#F7FAFE',
            'line-color': '#C4C4C4',
            'footer-text': '#E5E5E5'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
