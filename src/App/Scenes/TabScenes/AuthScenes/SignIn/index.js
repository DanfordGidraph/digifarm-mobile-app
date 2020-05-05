import React from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import firestore from '@react-native-firebase/firestore'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import * as ActionTypes from '@actions/ActionTypes'
import {
  Container, Text, Content, View, Item, Input, Icon, Button,
} from 'native-base'
import { NotificationBell } from '@components'
import { Utils, Colors, Constants } from '@common'
import AwesomeAlert from 'react-native-awesome-alerts'

import styles from './styles'

class SignIn extends React.Component {
    state = {
      showAlert: false,
      alert: {
        title: '', message: '', confirmText: 'Close', showLoading: false,
      },
    }

    render = () => {
      const { showAlert, alert } = this.state
      return (
        <Container style={styles().container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.SafaricomGreen} />
            <Content>
                <Text style={styles().txt_tab_name}>SignIn</Text>
            </Content>
            <AwesomeAlert
              show={showAlert}
              showProgress={alert.showLoading}
              title={alert.title}
              message={alert.message}
              closeOnTouchOutside
              closeOnHardwareBackPress
              showConfirmButton={!alert.showLoading}
              confirmText={alert.confirmText}
              confirmButtonColor={Colors.SafaricomGreen}
              onConfirmPressed={this.hideAlert}
              closeOnTouchOutside={false}
              closeOnHardwareBackPress={false}
            />
        </Container>
      )
    }

    hideAlert = () => this.setState({ showAlert: false })

    showAlert = (title, message, confirmText, showLoading, callback) => {
      this.setState({
        showAlert: true,
        alert: {
          title,
          message,
          confirmText,
          showLoading,
        },
      }, () => callback())
    }

    componentDidMount = () => {
      const { navigation, unread_notifications } = this.props
      const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 0
      navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
    }

    componentDidUpdate = () => {
      const { navigation, unread_notifications } = this.props
      const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 0
      navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {

    }
}

const mapStateToProps = ({ AuthReducer, FirebaseReducer }) => ({
  // Auth
  auth_type: AuthReducer?.type,
  auth_error: AuthReducer?.error,
  // Firebase
  firebase_type: FirebaseReducer?.type,
  firebase_error: FirebaseReducer?.error,
  unread_notifications: FirebaseReducer?.unread_notifications,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
