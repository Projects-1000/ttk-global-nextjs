/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {}, //allows you to use @import in your css files
    tailwindcss: {},
    autoprefixer: {}
  }
};

export default config;
