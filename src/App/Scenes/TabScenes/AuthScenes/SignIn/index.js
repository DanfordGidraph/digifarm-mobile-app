import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import * as ActionTypes from '@actions/ActionTypes'
import firestore from '@react-native-firebase/firestore'
import {
  Container, Text, Content, View, Item, Input, Icon, Button, Card, Form,
} from 'native-base'
import TextInputMask from 'react-native-text-input-mask'
import { NotificationBell } from '@components'
import {
  Utils, Colors, Constants, Images,
} from '@common'
import AwesomeAlert from 'react-native-awesome-alerts'

import reactotron from 'reactotron-react-native'
import styles from './styles'

class SignIn extends React.Component {
    state = {
      user_phone: '',
      email_address: '',
      password: '',
      password_visible: false,
      showAlert: false,
      alert: {
        title: '', message: '', confirmText: 'Close', showLoading: false,
      },
    }

    render = () => {
      const {
        user_phone, email_address, password, password_visible, showAlert, alert,
      } = this.state
      const { navigation } = this.props
      return (
        <Container style={styles().container}>
          <ImageBackground style={styles().img_bg} source={Images.PrimaryBg} resizeMode="cover" resizeMethod='auto' >
            <Content contentContainerStyle={styles().content} >

              <View style={styles().view_close}>
                <TouchableOpacity style={styles().touchable_close} onPress={() => navigation.goBack()}>
                  <Icon style={styles().icon_close} name='window-close' type='MaterialCommunityIcons'/>
                </TouchableOpacity>
                <Text style={styles().txt_login}>Log In</Text>
              </View>


              <Card style={styles().card_signin}>
                <Form style={styles().form} >

                  <Text style={styles().txt_input_label} >Phone Number</Text>
                  <Item regular style={styles().item_input} success={Utils.validateKenyanPhoneNumber(user_phone) === true} error={user_phone.length > 9 && !Utils.validateKenyanPhoneNumber(user_phone)} >
                    <TextInputMask style={styles().input_phone} mask={'+254[000] [000] [000]'} keyboardType="phone-pad" placeholder={'+2547XX XXX XXX'} onChangeText={(formatted, extracted) => this.setState({ user_phone: extracted })} />
                    <Icon style={styles().icon_success} name='phone-outline' type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Email Address (Optional)</Text>
                  <Item regular style={styles().item_input} success={Utils.validateEmailAddress(email_address) === true} error={email_address.length > 3 && !Utils.validateEmailAddress(email_address)} >
                    <Input keyboardType={'email-address'} onChangeText={(text) => this.setState({ email_address: text })} />
                    <Icon style={styles().icon_success} name='email-outline' type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Password</Text>
                  <Item regular style={styles().item_input} success={Utils.validatePasswordStrength(password) === true} error={password.length > 8 && !Utils.validatePasswordStrength(password)} >
                    <Input keyboardType={'default'} secureTextEntry={!password_visible} onChangeText={(text) => this.setState({ password: text })} />
                    <Icon onPress={() => this.setState({ password_visible: !password_visible })} style={styles().icon_success} name={password_visible ? 'eye-outline' : 'eye-off-outline'} type='MaterialCommunityIcons'/>
                  </Item>

                </Form>

                <Button block success onPress={this.Login} style={styles().btn_login}>
                  <Text style={styles().txt_btn} uppercase={false} >Log In</Text>
                </Button>

                <Text onPress={this.ForgotPassword} style={styles().txt_forgot_pass} >Forgot Password ?</Text>

                <Text style={styles().txt_no_account} >Dont Have an Account ?
                  <Text onPress={this.StartSignUp} style={styles().txt_forgot_pass} > Sign Up</Text>
                </Text>
              </Card>


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
      const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 0
      navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
    }

    componentDidUpdate = () => {
      const { navigation, unread_notifications } = this.props
      const unread_notifications_count = unread_notifications ? Object.keys(unread_notifications)?.length : 0
      navigation.setOptions({ headerRight: () => (<NotificationBell count={unread_notifications_count} navigation={navigation} />) })
    }

    Login = async () => reactotron.log('Login Clicked')

    ForgotPassword = async () => reactotron.log('ForgotPassword Clicked')

    StartSignUp = async () => this.props.navigation.navigate(Constants.Scenes.SignupOrgDetails)

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
