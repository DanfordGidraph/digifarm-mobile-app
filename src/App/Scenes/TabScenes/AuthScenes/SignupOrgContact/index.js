import React from 'react'
import { Image, TouchableOpacity, CheckBox } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import * as ActionTypes from '@actions/ActionTypes'
import { CommonActions, StackActions } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import {
  Container, Text, Content, View, Item, Input, Icon, Button, Card, Form,
} from 'native-base'
import Overlay from 'react-native-modal-overlay'
import TextInputMask from 'react-native-text-input-mask'
import { NotificationBell } from '@components'
import {
  Utils, Colors, Constants, Images,
} from '@common'
import AwesomeAlert from 'react-native-awesome-alerts'

import reactotron from 'reactotron-react-native'
import styles from './styles'

class SignupOrgContact extends React.Component {
    state = {
      first_name: '',
      last_name: '',
      email_address: '',
      user_phone: '',
      accepted_terms: false,
      submitting: false,
      submitted: false,
      modal_shown: false,
      showAlert: false,
      alert: {
        title: '', message: '', confirmText: 'Close', showLoading: false,
      },
    }

    render = () => {
      const {
        first_name, last_name, email_address, user_phone, accepted_terms, submitting, submitted, modal_shown, showAlert, alert,
      } = this.state
      const { navigation } = this.props
      return (
        <Container style={styles().container}>
          <Image style={styles().img_bg} source={Images.PrimaryBg} resizeMode="cover" resizeMethod='auto' />
            <Content contentContainerStyle={styles().content} >
              <View style={styles().view_progress_dash_left}/>
              <View style={styles().view_progress_dash_right}/>

              <View style={styles().view_progress}>
                <View style={styles().view_progress_item}>
                  <Icon style={styles().icon_step_circle} name='checkbox-marked-circle' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_step_name} numberOfLines={2} >Organization Details</Text>
                </View>
                <View style={styles().view_progress_item}>
                  <Icon style={styles().icon_step_circle} name='checkbox-marked-circle' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_step_name} numberOfLines={2} >Supporting Documents</Text>
                </View>
                <View style={styles().view_progress_item}>
                  <Icon style={styles().icon_step_circle} name='numeric-3-circle' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_step_name} numberOfLines={2} >Contact Person</Text>
                </View>
              </View>


                <Form style={styles().form} >

                  <Text style={styles().txt_input_label} >First Name</Text>
                  <Item regular style={styles().item_input} >
                    <Input keyboardType={'default'} onChangeText={(text) => this.setState({ first_name: text })} />
                    <Icon style={styles().icon_input} name={'pen'} type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Last Name</Text>
                  <Item regular style={styles().item_input} >
                    <Input keyboardType={'default'} onChangeText={(text) => this.setState({ last_name: text })} />
                    <Icon style={styles().icon_input} name={'pen'} type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Email Address</Text>
                  <Item regular style={styles().item_input} success={Utils.validateEmailAddress(email_address) === true} error={email_address.length > 3 && !Utils.validateEmailAddress(email_address)} >
                    <Input keyboardType={'email-address'} onChangeText={(text) => this.setState({ email_address: text })} />
                    <Icon style={styles().icon_input} name='email-outline' type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Mobile Number</Text>
                  <Item regular style={styles().item_input} success={Utils.validateKenyanPhoneNumber(user_phone) === true} error={user_phone.length > 9 && !Utils.validateKenyanPhoneNumber(user_phone)} >
                    <TextInputMask style={styles().input_phone} mask={'+254[000] [000] [000]'} keyboardType="phone-pad" placeholder={'+2547XX XXX XXX'} onChangeText={(formatted, extracted) => this.setState({ user_phone: extracted })} />
                    <Icon style={styles().icon_input} name='phone-outline' type='MaterialCommunityIcons'/>
                  </Item>

                  <View style={styles().view_accept_terms}>
                    <CheckBox onChange={() => this.setState({ accepted_terms: !this.state.accepted_terms })} value={accepted_terms} />
                    <Text style={styles().txt_accept_tnc} >I have read and accepted Digifarm
                      <Text onPress={this.ShowTnC} style={styles().txt_tnc} > Terms & Conditions</Text>
                    </Text>
                  </View>

                  <Button disabled={!accepted_terms} block success onPress={this.FinishSignup} style={styles({ disabled: !accepted_terms }).btn_finish}>
                    <Text style={styles().txt_btn} uppercase={false} >Finish</Text>
                  </Button>

                  <Text onPress={this.ShowPrivacyPolicy} style={styles().txt_tnc} >Privacy Policy</Text>

                </Form>

            </Content>
            <Overlay
              animationType="flipInX"
              transparent
              hardwareAccelerated={true}
              onRequestClose={this.hideModal}
              closeOnTouchOutside={false}
              childrenWrapperStyle={styles().overlay_content}
              containerStyle={styles().overlay_backdrop}
              visible={modal_shown} >
                {submitting && <View style={styles().view_overlay_title}>
                    <Text style={styles().txt_overlay_title}>{'Submitting...'}</Text>
                    <View style={styles().view_overlay_title_underline}/>
                </View>}

                {submitting && <View style={styles().view_overlay_body}>
                  <Image source={Images.Uploading} style={styles().img_uploading} resizeMethod='auto' resizeMode='stretch' />
                </View>}

                {!submitting && !submitted && <View style={styles().view_overlay_body}>
                  <Icon style={styles({ submitted }).icon_upload} name='close-circle-outline' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_overlay_title}>Registration Failed</Text>
                  <Text style={styles().txt_overlay_message_body}>Sorry We encountered a technical challenge submitting your registration details. Please ensure you have an active internet connection and retry. If issue persists, contact Support below</Text>
                </View>}
                {!submitting && !submitted && <View style={styles().view_overlay_footer}>
                    <Button danger style={styles().btn_overlay} onPress={this.Retry} >
                        <Text style={styles().txt_btn} uppercase={false}>Close & Retry</Text>
                    </Button>
                </View>}

                {!submitting && submitted && <View style={styles().view_overlay_body}>
                  <Icon style={styles({ submitted }).icon_upload} name='checkbox-marked-circle-outline' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_overlay_title}>Registration Successful</Text>
                  <Text style={styles().txt_overlay_message_body}>We Will Send You an Email with login Instructions Once your Application has Been Approved</Text>
                </View>}
                {!submitting && submitted && <View style={styles().view_overlay_footer}>
                    <Button success block style={styles().btn_overlay} onPress={this.BackToHome} >
                        <Text style={styles().txt_btn} uppercase={false} >Back to Home</Text>
                    </Button>
                </View>}
            </Overlay>
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

    ShowTnC = async () => reactotron.log('Show TnC Clicked')

    FinishSignup = async () => this.setState({ modal_shown: true, submitting: true }, () => setTimeout(() => this.setState({ submitting: false, submitted: Math.random() > 0.5 }), 500))

    Retry = async () => this.setState({ modal_shown: false, submitting: false })

    BackToHome = async () => this.props.navigation.dispatch({ ...StackActions.popToTop() })

    ShowPrivacyPolicy = async () => reactotron.log('ShowPrivacyPolicy Clicked')

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

export default connect(mapStateToProps, mapDispatchToProps)(SignupOrgContact)
