module.exports = {
  './src/**.{tsx,ts}': ['yarn lint', 'prettier --config .prettierrc --write --ignore-unknown']
};
