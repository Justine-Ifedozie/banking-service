module.exports = {
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/tests/jest.env.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: ['**/tests/**/*.test.js']
};
