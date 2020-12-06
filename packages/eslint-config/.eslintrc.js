module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'global-require': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
