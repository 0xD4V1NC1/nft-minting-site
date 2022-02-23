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
          500: '#222',
        },
        'secondary': {
          500: '#C5FF5C',
        },
        'secondary-dark': {
          500: '#333',
        },
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
