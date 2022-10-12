export default {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootdir>/src'],
  'moduleFileExtensions': ['js', 'jsx', 'tsx', 'ts'],
  setupFiles: ['./src/setupTests.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
