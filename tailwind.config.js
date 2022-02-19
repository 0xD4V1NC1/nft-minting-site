const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  // you can use https://tailwind.ink/code to help come up with pallette colors
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#e2037a',
        },
        'primary-dark': {
          500: '#222',
        },
        'secondary': {
          500: '#555',
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
