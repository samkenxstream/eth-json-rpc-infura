module.exports = {
  root: true,

  extends: ['@metamask/eslint-config'],

  overrides: [
    {
      files: ['*.js'],
      extends: ['@metamask/eslint-config-nodejs'],
      env: {
        es2020: true,
      },
      parserOptions: {
        ecmaVersion: 2020,
      },
    },

    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
      // TODO: Migrate to our shared config
      settings: {
        settings: {
          'import/resolver': {
            // Try resolving imports using TypeScript's module resolution
            // algorithm, then Node's
            typescript: {
              alwaysTryTypes: true,
            },
            node: {},
          },
        },
        jsdoc: {
          mode: 'typescript',
        },
      },
    },

    {
      files: ['*.test.ts', '*.test.js'],
      extends: ['@metamask/eslint-config-jest'],
    },

    {
      files: ['jest.config.ts'],
      rules: {
        // TODO: Migrate to our shared config
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js', 'dist/'],

  settings: {
    'import/resolver': {
      // Try resolving imports using Node's module resolution algorithm,
      // then TypeScript's — this allows us to import TypeScript files in
      // JavaScript files (e.g. in tests that exercise a TypeScript module where
      // we need to pretend we're in a JavaScript-only environment)
      node: {},
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
