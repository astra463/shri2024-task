module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended'
    ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: [
    'react-refresh'
    ],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': 'off',
    'use-isnan': ['error', { enforceForSwitchCase: true }],
    'react/void-dom-elements-no-children': 'warn',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-redundant-should-component-update': 'warn',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': ['warn', { maximum: 7 }],
    'react/jsx-max-depth': ['warn', { max: 8 }],
    'arrow-body-style': ['warn', 'as-needed'],
    'dot-notation': 'warn',
    'jsx-quotes': ['warn', 'prefer-single'],
    'valid-typeof': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
