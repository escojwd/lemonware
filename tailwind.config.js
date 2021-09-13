const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'serif']
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
            '21px': '21px',
            '24px': '24px',
            '25px': '25px',
            '28px': '28px',
            '32px': '32px',
            '34px': '34px',
            '36px': '36px',
            '42px': '42px',
            '48px': '48px',
            '50px': '50px',
            '54px': '54px',
            '64px': '64px',
            '70px': '70px',
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
            '-16px': '-16px',
            '1px': '1px',
            '3px': '3px',
            '4px': '4px',
            '5px': '5px',
            '10px': '10px',
            '12px': '12px',
            '14px': '14px',
            '15px': '15px',
            '17px': '17px',
            '18px': '18px',
            '20px': '20px',
            '22px': '22px',
            '23px': '23px',
            '24px': '24px',
            '25px': '25px',
            '28px': '28px',
            '30px': '30px',
            '31px': '31px',
            '32px': '32px',
            '33px': '33px',
            '34px': '34px',
            '35px': '35px',
            '37px': '37px',
            '40px': '40px',
            '44px': '44px',
            '46px': '46px',
            '47px': '47px',
            '49px': '49px',
            '50px': '50px',
            '53px': '53px',
            '56px': '56px',
            '58px': '58px',
            '60px': '60px',
            '66px': '66px',
            '70px': '70px',
            '72px': '72px',
            '84px': '84px',
            '10%' : '10%',
            '15%' : '15%',
            '32%' : '32%',
            '40%' : '40%',
        },
        width: {
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '90px': '90px',
            '100px': '100px',
            '237px': '237px',
            '250px': '250px',
            '260px': '260px',
            '300px': '300px',
            '310px': '310px',
            '320px': '320px',
            '330px': '330px',
            '350px': '350px',
            '370px': '370px',
            '500px': '500px',
            '600px': '600px',
            '680px': '680px',
            '800px': '800px',
            '75%' : '75%',
            '80%': '80%',
            '83%': '83%',
            '86%': '86%',
            '86%': '86%',
            '87%': '87%',
            '88%': '88%',
            '93%': '93%',
            'full-plus-16': 'calc(100% + 16px)',
            'full-minus-90': 'calc(100% - 90px)',
            'screen/2': 'calc(100vw / 2)'
        },
        height: {
            '19px': '19px',
            '200px': '200px',
            '218px': '218px',
            '252px': '252px',
            '270px': '270px',
            '250px': '250px',
            '300px': '300px',
            '350px': '350px',
            'max': 'max-content'
        },
        maxWidth: {
            '250px': '250px',
            '300px': '300px',
            '350px': '350px',
            '400px': '400px',
            '460px': '460px',
            '500px': '500px',
            '600px': '600px',
            '700px': '700px',
            '2/3': '66%'
        },
        opacity: {
            '88': '0.88'
        },
        borderWidth: {
            '1px': '1px',
            '2px': '2px'
        },
        borderRadius: {
            '15px': '15px'
        },
        lineHeight: {
            '18px': '18px',
            '25px': '25px',
            '30px': '30px',
            '32px': '32px',
            '40px': '40px',
            '46px': '46px',
            '60px': '60px',
            '77px': '77px',
            '90px': '90px',
        },
        letterSpacing: {
            '005': '0.05rem',
        },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }){
        addUtilities({
            '.rotate-y-180': {
                transform: 'rotateY(180deg)'
            }
        });
    })
  ],
}
