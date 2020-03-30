import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import RootRedux from './src/App/Container/RootRedux'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => RootRedux);
