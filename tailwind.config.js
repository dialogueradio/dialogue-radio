module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'poetsen': ['Poetsen One', 'sans-serif'],
      },
      colors: {
        'primary': '#FFC700',
        'secondary': '#ffde6a',
        'accent': '#2A2A2A',
        'beige': '#F8D0A8',
        'light-blue': '#A1D3FF',
        'back': '#FFF8E0',
        'gray5': '#424242',
        'gray4': '#aaaaaa',
        'gray3': '#dddddd',
        'gray2': '#eeeeee',
        'gray1': '#f2f2f2'
      },
      spacing: {
        '30': '7.5rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      zIndex: {
        '-10': '-10',
      },
      borderWidth: {
        '2.5': '2.5px'
      },
      animation: {
        'flow': 'flow 20s linear infinite',
      },
      keyframes: {
        flow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
}
