import React from 'react'
import { ImageBackground, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import * as ActionTypes from '@actions/ActionTypes'
import firestore from '@react-native-firebase/firestore'
import {
  Container, Text, Content, View, Item, Input, Icon, Button,
} from 'native-base'
import { NotificationBell } from '@components'
import {
  Utils, Colors, Constants, Images,
} from '@common'
import AwesomeAlert from 'react-native-awesome-alerts'

import styles from './styles'

class Account extends React.Component {
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
          <ImageBackground style={styles().img_bg} source={Images.PrimaryBg} resizeMode="cover" resizeMethod='auto' >
            <Content contentContainerStyle={styles().content} >
              <View style={styles().view_logo_tagline}>
                <Image style={styles().img_digi_logo} source={Images.AppLogo} resizeMode="contain" resizeMethod='auto' />
                <Text style={styles().txt_tagline}>Connecting Farmers With Buyers</Text>
              </View>

              <View style={styles().view_auth_actions}>
                <Button block success onPress={this.openSignUp} style={styles().btn_signup}>
                  <Text style={styles().txt_btn} uppercase={false} >Sign Up</Text>
                </Button>

                <Button block success bordered onPress={this.openSignIn} style={styles().btn_signin}>
                  <Text style={styles().txt_btn} uppercase={false} >Sign In</Text>
                </Button>
              </View>
            </Content>
          </ImageBackground>
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
      const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 1
      navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
    }

    componentDidUpdate = () => {
      const { navigation, unread_notifications } = this.props
      const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 0
      navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
    }

    openSignIn = async () => this.props.navigation.navigate(Constants.Scenes.SignIn)

    openSignUp = async () => this.props.navigation.navigate(Constants.Scenes.SignupOrgDetails)

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

export default connect(mapStateToProps, mapDispatchToProps)(Account)
