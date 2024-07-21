/** @type {import('tailwindcss').Config} */
module.exports = {
    /** shared theme configuration */
    theme: {
      extend: {
        screens: {
          'sx': '400px',
        },
        colors: {
          darken1: '#2F2F2F',
          darken2: 'rgba(0, 0, 0, .03)',
          darken3: 'rgba(0, 0, 0, .06)',
          darken4: '#242733',
          darken5: '#818181',
          darken6: 'rgba(0, 0, 0, .24)',
          color1: '#ffffff',
          color2: '#f7f7f7',
          color3: '#D9D9D9',
          color4: '#FDFDFD',
          color5: '#F6F6F6',
          primary: {
            1: '#02D667',
            2: '#02D767',
            3: '#E6FBF0',
            4: '#B6B7B9',
            5: '#939497',
            6: '#B2F3D0',
            7: '#CFF7E3',
            8: '#F9F9F9',
            DEFAULT: '#02D667',
          },
          black: {
            text1: '#404040',
            text2: '#44454A',
            text3: '#15161D',
            text4: '#666666',
            text5: '#F1F1F1',
            text6: '#939497',
            text7: '#1A1C24',
            text8: '#0d0d0d',
          }
        },
      },
    },
    /** shared plugins configuration */
    plugins: [],
  };
  