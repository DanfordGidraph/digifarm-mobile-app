import { persistCombineReducers } from 'redux-persist'
import createSensitiveStorage from 'redux-persist-sensitive-storage'

import AuthReducer from './Auth'
import FirebaseReducer from './Firebase'

const config = {
  key: 'root',
  storage: createSensitiveStorage({
    keychainService: 'digifarm_keychain',
    sharedPreferencesName: 'digifarm_sharedprefs',
  }),
  whitelist: ['AuthReducer', 'FirebaseReducer', 'ApigeeReducer'],
}

const reducers = persistCombineReducers(config, {
  AuthReducer, FirebaseReducer,
})

export default reducers
