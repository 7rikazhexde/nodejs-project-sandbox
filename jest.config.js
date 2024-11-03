module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.js'],
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
};
