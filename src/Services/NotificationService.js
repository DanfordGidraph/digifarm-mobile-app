import PushNotification from 'react-native-push-notification'

export const configurePushNotifications = (registerToken, handleNotification) => PushNotification?.configure({
  onRegister: (token) => registerToken(token),
  onNotification: (notification) => handleNotification(notification),
  senderID: '177586927209',
})


export const dummyFunction = () => null
