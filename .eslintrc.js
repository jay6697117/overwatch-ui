module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'vue/require-v-for-key': 'off',
    'vue/valid-v-for': 'off',
    'no-undef': 'off'
  }
};
