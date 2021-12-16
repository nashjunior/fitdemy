module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!*.stories.(js|jsx|ts|tsx)', '../src/**/*.stories.mdx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  
  
}
