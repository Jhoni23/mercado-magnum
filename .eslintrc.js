module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'no-use-before-define': ['error', { variables: false }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/style-prop-object': 'off',
    'global-require': 0,
    camelcase: 'off',
    'no-extra-boolean-cast': 'off',
  },
};
