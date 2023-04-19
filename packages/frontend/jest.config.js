module.exports = {
    roots: ['<rootDir>'],
    preset: 'babel-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '\\.graphql$': [
        'graphql-let/jestTransformer',
        { subsequentTransformer: 'babel-jest' },
      ],
    },
  }