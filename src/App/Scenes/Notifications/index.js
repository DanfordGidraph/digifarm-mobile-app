import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import * as ActionTypes from '@actions/ActionTypes'
import firestore from '@react-native-firebase/firestore'
import { StatusBar } from 'react-native'
import {
  Container, Tab, Tabs, Content,
} from 'native-base'
import { Utils, Colors, Constants } from '@common'
import { NotificationItem, NotificationBell } from '@components'
import styles from './styles'

class Notifications extends React.Component {
  state = {
    private_notifications_reference: null,
    loadingRead: false,
    loadingSec: false,
  }

  render = () => {
    const { read_notifications, unread_notifications } = this.props
    const { loadingRead, loadingSec } = this.state
    return (
        <Container style={styles().container}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.SafaricomGreen} />
          <Tabs tabBarUnderlineStyle={styles().tabbar_underline} >
            <Tab
              tabStyle={styles().tab_inactive}
              activeTabStyle={styles().tab_active}
              activeTextStyle={styles().txt_active}
              textStyle={styles().txt_inactive}
             heading="Unread">
              <Content contentContainerStyle={styles().content} >
                {unread_notifications && Object.values(unread_notifications).map((notif, index) => (<NotificationItem key={notif?.notif_id} loadingRead={loadingRead} loadingSec={loadingSec} notification={notif} actionHandler={this.handleNotification} />))}
              </Content>
            </Tab>
            <Tab
              tabStyle={styles().tab_inactive}
              activeTabStyle={styles().tab_active}
              activeTextStyle={styles().txt_active}
              textStyle={styles().txt_inactive}
              heading="Read">
              <Content contentContainerStyle={styles().content} >
                {read_notifications && Object.values(read_notifications).map((notif, index) => (<NotificationItem key={notif?.notif_id} notification={notif} read={true} actionHandler={this.handleNotification} />))}
              </Content>
            </Tab>
        </Tabs>
        </Container>
    )
  }


  componentDidMount = () => {
    const { app_secrets, navigation, unread_notifications } = this.props
    const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 0
    navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
    const user_id = Utils.chewString(app_secrets?.unique_id)
    this.setState({ private_notifications_reference: firestore().collection('KIOSK_APP_USERS').doc(`User_${user_id}`).collection('NOTIFICATIONS') })
  }

  componentDidUpdate = () => {
    const { navigation, unread_notifications } = this.props
    const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 0
    navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
  }

  handleNotification = ({ action = 'READ', notification }) => {
    const { navigation } = this.props
    switch (action) {
      case 'READ':
        return this.setState({ loadingRead: true }, () => this.markNotificationAsRead(notification))
      case 'PAY':
        return this.setState({ loadingSec: true }, () => navigation.navigate(Constants.Scenes.Pay))
      default:
        return null
    }
  }

  markNotificationAsRead = (notification) => {
    const { private_notifications_reference } = this.state
    private_notifications_reference.doc(`${notification?.notif_id}`).update({ read: true })
  }
}

const mapStateToProps = ({ AuthReducer, FirebaseReducer }) => ({
  app_secrets: AuthReducer?.app_secrets,
  auth_type: AuthReducer?.type,
  firebase_type: FirebaseReducer?.type,
  read_notifications: FirebaseReducer?.read_notifications,
  unread_notifications: FirebaseReducer?.unread_notifications,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
