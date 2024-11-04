module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      // Handle CSS imports (if needed)
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    // Add the paths where Jest should look for tests
    roots: ['<rootDir>/src'],
    testMatch: [
      '**/__tests__/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)'
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    }
  };