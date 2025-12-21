module.exports = {
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/tests/env.test.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: ['**/tests/**/*.test.js']
};
