/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // theme: {
  //   extend: {
  //     animation: {
  //       'fade-in-down': 'fadeInDown 0.5s ease-out',
  //       'fade-in-up': 'fadeInUp 0.5s ease-out',
  //       'fade-in': 'fadeIn 0.5s ease-out',
  //     },
  //     keyframes: {
  //       fadeInDown: {
  //         '0%': { opacity: '0', transform: 'translateY(-10px)' },
  //         '100%': { opacity: '1', transform: 'translateY(0)' },
  //       },
  //       fadeInUp: {
  //         '0%': { opacity: '0', transform: 'translateY(10px)' },
  //         '100%': { opacity: '1', transform: 'translateY(0)' },
  //       },
  //       fadeIn: {
  //         '0%': { opacity: '0' },
  //         '100%': { opacity: '1' },
  //       },
  //     },
  //   },
  // },
  // variants: {
  //   extend: {
  //     opacity: ['group-hover'],
  //   },
  // },
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Brush Script MT', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      transform: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}

