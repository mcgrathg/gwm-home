module.exports = () => ({
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-assets': {
      loadPaths: ['**'],
      basePath: 'client/',
    },
  },
});
