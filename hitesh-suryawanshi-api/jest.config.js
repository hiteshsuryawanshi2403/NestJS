module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './src',
  coveragePathIgnorePatterns: ['/dto', '/seed'],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t)s$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  collectCoverageFrom: [
    '**/*.{ts,}',
    '!**/*.module.ts',
    '!main.ts',
    '!**/*.entity.ts',
    '!**/*.configuration.ts',
    '!**/*.pipe.ts',
  ],
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/', '/dist/', '/docs/'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 5,
      lines: 50,
      functions: 50,
    },
  },
};
