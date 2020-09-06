module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'app/javascript/Components/**/*.jsx',
    '!app/javascript/Components/**/index.js'
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20
    }
  },
  coverageReporters: ['html', 'text', 'text-summary', 'json'],
  verbose: true,
  roots: ['app/javascript/'],
  setupFiles: ['./app/javascript/test/setupTests.js'],
  automock: false,
  bail: true
};
