const plugin = require('tailwindcss/plugin');
// customer loaders
const getSpinners = (themeColors) => {
  return Object.keys(themeColors).map((color) => {
    return {
      [`.loader-${color}`]: {
        'border-top-color': themeColors[color][500] || themeColors[color],
        'border-left-color': themeColors[color][200] || 'border-gray-200',
        'border-right-color': themeColors[color][200] || 'border-gray-200',
        'border-bottom-color': themeColors[color][200] || 'border-gray-200',
      },
    };
  });
};

module.exports = {
  darkMode: 'class',
  // you can use https://tailwind.ink/code to help come up with pallette colors
  theme: {
    extend: {
      colors: {
        'primary': {
          400: '#B7B0FF',
          500: '#53A0FD',
        },
        'primary-dark': {
          400: '#7772a8',
          500: '#1b3657',
        },
        'secondary': {
          500: '#C5FF5C',
        },
        'secondary-dark': {
          500: '#94bf45',
        },
        'gradient': {
          color: `linear-gradient(90deg,#53A0FD, #C5FF5C,#B7B0FF,#53A0FD, #C5FF5C, #B7B0FF)`,
        },
      },
      animation: {
        'marquee': 'marquee 136.863s linear infinite',
        'marquee-reverse': 'marquee-reverse 136.863s linear infinite',
        'marquee-2': 'marquee-2 136.863s linear infinite',
        'marquee-reverse-2': 'marquee-reverse-2 136.863s linear infinite',
        'rainbow': 'rainbow 5s linear infinite',
      },
      keyframes: {
        'marquee': {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
        'marquee-reverse': {
          '100%': {transform: 'translateX(0%)'},
          '0%': {transform: 'translateX(-100%)'},
        },
        'marquee-2': {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'},
        },
        'marquee-reverse-2': {
          '100%': {transform: 'translateX(-100%)'},
          '0%': {transform: 'translateX(0%)'},
        },
        'rainbow': {
          '0%': {'background-position': '0 50%'},
          '100%': {'background-position': '400% 50%'},
        },
      },
      flex: {
        '0-0-auto': '0 0 auto',
      },
    },
  },
  plugins: [
    plugin(function({addComponents, theme}) {
      const themeColors = theme('colors', {});
      addComponents(getSpinners(themeColors));
      addComponents({
        '.box-shadow': {
          boxShadow: '0 0 1rem #cccccc',
          borderRadius: '0.5rem',
        },
        '.divider-horizontal:before': {
          content: '\'\'',
          flex: '1 1',
          borderBottom: `1px solid ${themeColors.gray[300]}`,
          margin: 'auto',
        },
        '.divider-horizontal:after': {
          content: '\'\'',
          flex: '1 1',
          borderBottom: `1px solid ${themeColors.gray[300]}`,
          margin: 'auto',
        },
        '.divider-vertical': {
          content: '\'\'',
          background: `linear-gradient(${themeColors.gray[300]},${themeColors.gray[300]}) no-repeat center/2px 100%`,
          height: '100%',
          minHeight: '1rem',
          width: '1px',
        },
        '.bg-rainbow': {
          'backgroundSize': `400% 200%`,
          // 'backgroundImage': `linear-gradient(90deg,#32fe31,#33f7f5,#4779ed,#9263d2,#ff0b00,#9263d2,#4779ed,#33f7f5)`, rainbow gradient
          'backgroundImage': `linear-gradient(90deg,#53A0FD, #C5FF5C,#B7B0FF,#53A0FD, #C5FF5C, #B7B0FF)`, // my custom gradient
        },
        '.bg-rainbow-animate': {
          'backgroundSize': `400% 200%`,
          'backgroundImage': `linear-gradient(90deg,#32fe31,#33f7f5,#4779ed,#9263d2,#ff0b00,#9263d2,#4779ed,#33f7f5)`,
          'animationName': `rainbow`,
          'animationDuration': `5s`,
          'animationIterationCount': `infinite`,
          'animationTimingFunction': `linear`,
        },
      });
    }),
    plugin(({addUtilities}) => {
      const newUtilities = {
        '.animate-fadeIn': {
          '-webkit-animation-name': 'animate-fadeIn',
          'animation-name': 'animate-fadeIn',
          '-webkit-animation-duration': '1s',
          'animation-duration': '1s',
          '-webkit-animation-fill-mode': 'both',
          'animation-fill-mode': 'both',
        },
        '.animate-fadeOut': {
          '-webkit-animation-name': 'animate-fadeOut',
          'animation-name': 'animate-fadeOut',
          '-webkit-animation-duration': '1s',
          'animation-duration': '1s',
          '-webkit-animation-fill-mode': 'both',
          'animation-fill-mode': 'both',
        },
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
  // Filenames to scan for classes
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  // Options passed to PurgeCSS
  options: {
    // Whitelist specific selectors by name
    // safelist: [],
  },
};
