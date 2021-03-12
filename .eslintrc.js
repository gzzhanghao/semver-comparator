module.exports = {
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        'airbnb-typescript/base',
      ],
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    {
      files: ['**/*.js'],
      extends: [
        'airbnb-base',
      ],
    },
  ],
};
