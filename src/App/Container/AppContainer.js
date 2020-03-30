import React from 'react'
import { StyleProvider } from 'native-base'
import * as Services from '@services'
import AsyncStorage from '@react-native-community/async-storage'
import getTheme from '@theme/components'
import platform from '@theme/variables/platform'
import Router from './Router'

class AppContainer extends React.PureComponent {
  render = () => (
  <StyleProvider style={getTheme(platform)}>
    <Router />
  </StyleProvider>
  )

  componentDidMount = () => {
    Services.configurePushNotifications(this.setAccessToken, this.handleNotification)
  }

  setAccessToken = (token_data) => {
    const fcm_token = token_data?.token
    AsyncStorage.setItem('@fcm_token', JSON.stringify(fcm_token))
    this.setState({ fcm_token })
  }

  handleNotification = (notification) => {
    if (!notification?.foreground) {
      AsyncStorage.setItem('@pending_notif', JSON.stringify(notification))
    }
  }
}


export default AppContainer
