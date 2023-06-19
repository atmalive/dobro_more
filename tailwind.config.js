module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'rgba(0,0,0,0.3)',
        'secondary': '#F5F5F5',
      },
      textColor: {
        'primary': '#1D1D1B',
        'secondary': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      spacing: {
        '-25': '-25px',
        '-30': '-30px',
        '-50': '-50px',
        '-125': '-125px',
        'w-110%': '110%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.visible': {
          visibility: 'visible',
        },
        '.invisible': {
          visibility: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
