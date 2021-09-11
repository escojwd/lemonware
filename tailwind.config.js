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
            'regular': '#808080',
            'title': '#18191F',
            'background': '#F7FAFE',
            'line-color': '#C4C4C4',
            'footer-text': '#E5E5E5'
        },
        spacing: {
            '1px': '1px',
            '3px': '3px',
            '4px': '4px',
            '5px': '5px',
            '10px': '10px',
            '12px': '12px',
            '14px': '14px',
            '18px': '18px',
            '20px': '20px',
            '23px': '23px',
            '25px': '25px',
            '46px': '46px',
            '58px': '58px',
            '60px': '60px',

        },
        width: {
            '50px': '50px',
            '90px': '90px',
            '310px': '310px',
            '500px': '500px',
            '600px': '600px',
            '86%': '86%',
            'full-plus-16': 'calc(100% + 16px)'
        },
        opacity: {
            '88': '0.88'
        },
        borderWidth: {
            '1px': '1px'
        },
        lineHeight: {
            '46px': '46px'
        }
    },
  },
  variants: {},
  plugins: [],
}
