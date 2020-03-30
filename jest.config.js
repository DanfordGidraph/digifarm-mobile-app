const { defaults } = require('jest-config');

module.exports = {
  timers: 'fake',
  preset: 'react-native',
  setupFiles: ['<rootDir>/__tests__/setup/tests_setup.js', '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup/tests_setup.js'],
  transform: { '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js' },
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation|native-base)/'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/setup/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
