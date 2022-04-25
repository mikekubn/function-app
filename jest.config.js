module.exports = {
  roots: ['src'],
  clearMocks: true,
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)spec)\\.[jt]sx?$',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
