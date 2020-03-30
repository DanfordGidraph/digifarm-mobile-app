import Enzyme from 'enzyme'
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'
import Adapter from 'enzyme-adapter-react-16'

const data = { name: 'data' };
const snapshot = { val: () => data, exportVal: () => data, exists: jest.fn(() => true) };

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)
jest.mock('@react-native-firebase/app', () => ({
  isAndroid: jest.fn(() => true),
  isBoolean: jest.fn(() => false),
}))
jest.mock('@react-native-firebase/crashlytics', () => () => ({
  recordError: jest.fn(),
}))
jest.mock('@react-native-firebase/database', () => ({
  ref: jest.fn().mockReturnThis(),
  on: jest.fn((eventType, callback) => callback(snapshot)),
  update: jest.fn(() => Promise.resolve(snapshot)),
  remove: jest.fn(() => Promise.resolve()),
  once: jest.fn(() => Promise.resolve(snapshot)),
}))
jest.mock('@react-native-firebase/firestore', () => ({
  hasPermission: jest.fn(() => Promise.resolve(true)),
  subscribeToTopic: jest.fn(),
  unsubscribeFromTopic: jest.fn(),
  requestPermission: jest.fn(() => Promise.resolve(true)),
  getToken: jest.fn(() => Promise.resolve('myMockToken')),
  collection: jest.fn(() => Promise.resolve(true)),
}))
jest.mock('@react-native-firebase/analytics', () => ({
  logEvent: jest.fn(),
  setUserProperties: jest.fn(),
  setUserId: jest.fn(),
  setCurrentScreen: jest.fn(),
}))
jest.mock('react-native-push-notification', () => ({
  configure: () => jest.fn(),
}))
jest.mock('reactotron-react-native', () => ({
  configure: () => jest.fn(),
  useReactNative: () => jest.fn(),
  use: () => jest.fn(),
  connect: () => jest.fn(),
  clear: () => jest.fn(),
  setAsyncStorageHandler: (handler) => jest.fn(handler),
  createEnhancer: () => jest.fn(),
}))
jest.mock('redux', () => ({
  createStore: () => ({
    subscribe: () => jest.fn(),
    dispatch: () => jest.fn(),
    getState: () => jest.fn(),
  }),
  applyMiddleware: () => jest.fn(),
  compose: () => jest.fn(),
}))
jest.mock('redux-persist', () => ({
  persistCombineReducers: () => jest.fn(),
  persistStore: () => ({
    getState: () => jest.fn(),
    dispatch: () => jest.fn(),
    subscribe: () => jest.fn(),
  }),
}))


Enzyme.configure({ adapter: new Adapter() })
