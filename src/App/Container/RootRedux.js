import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import reducers from '@reducers'
import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'
import AppContainer from './AppContainer'

const middleware = [thunk]
let composer
if (__DEV__) {
  Reactotron.configure({ port: 9090 })
  Reactotron.setAsyncStorageHandler(AsyncStorage)
  Reactotron.useReactNative()
  Reactotron.use(reactotronRedux())
  Reactotron.connect()
  Reactotron.clear()

  composer = composeWithDevTools(applyMiddleware(...middleware), Reactotron.createEnhancer())
} else {
  composer = compose(applyMiddleware(...middleware))
}
const store = createStore(reducers, composer)
const persistor = persistStore(store)

export default class RootRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <AppContainer {...this.props} />
          </PersistGate>
      </Provider>
    )
  }
}
