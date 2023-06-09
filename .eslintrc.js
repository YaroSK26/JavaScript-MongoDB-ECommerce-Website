/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['airbnb-base',"prettier" ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    "no-console": 0,
    "linebreak-style": ["error", "windows"],
    "quotes": "off",
    "no-nested-ternary": 0,
    "import/prefer-default-export" :0,
    "arrow-body-style" : 0,
    "no-underscore-dangle" :0,
    "no-undef" : 0,
    "spaced-comment ": 0,

  },
};
