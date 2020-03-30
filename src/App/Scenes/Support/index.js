import React from 'react'
import {
  Text, Image, StatusBar, TouchableOpacity, Linking,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import * as ActionTypes from '@actions/ActionTypes'
import AwesomeAlert from 'react-native-awesome-alerts'
import Overlay from 'react-native-modal-overlay'
import {
  Container, View, Content, Icon, Button,
} from 'native-base'
import { Colors } from '@common'
import { NotificationBell } from '@components'
import styles from './styles'

class Support extends React.Component {
  state = {
    modal_shown: false,
    showAlert: false,
    alert: {
      title: '', message: '', confirmText: 'Close', showLoading: false,
    },
  }

  render = () => {
    const { lockStatus } = this.props
    const { modal_shown, showAlert, alert } = this.state
    const locked = (lockStatus && /\block\b/gi.test(lockStatus?.lock_status)) || false

    return (
        <Container style={styles().container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.SafaricomGreen} />
            <Content>
              {/* Quick Support Actions */}
              <View style={styles().view_quick_actions}>
                <TouchableOpacity style={styles().touchable_quick_action} onPress={this.handleZuri}>
                  <Icon style={styles().icon_whatsapp} name='whatsapp' type='MaterialCommunityIcons'/>
                  <View style={styles().view_quick_action_text}>
                    <Text style={styles().txt_quick_action}>Ask Zuri</Text>
                    <Text style={styles().txt_quick_action_tag}>Get Help</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles().touchable_quick_action} onPress={this.showFAQs}>
                  <Icon style={styles().icon_quick_action} name='help-circle-outline' type='MaterialCommunityIcons'/>
                  <View style={styles().view_quick_action_text}>
                    <Text style={styles().txt_quick_action}>FAQs</Text>
                    <Text style={styles().txt_quick_action_tag}>Get Help</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Social Media Actions Card */}
              {!locked && <View style={styles().view_sm_actions} >
                <View style={styles().view_sm_action}>
                  <Button onPress={this.openFacebookSupport} block transparent icon style={styles().btn_sm_actions}>
                    <Icon style={styles().icon_facebook} name='facebook' type='MaterialCommunityIcons'/>
                  </Button>
                  <Text style={styles().txt_sm_action}>Facebook</Text>
                </View>
                <View style={styles().view_sm_action}>
                  <Button onPress={this.openTwitterSupport} block transparent icon style={styles().btn_sm_actions}>
                    <Icon style={styles().icon_twitter} name='twitter' type='MaterialCommunityIcons'/>
                  </Button>
                  <Text style={styles().txt_sm_action}>Twitter</Text>
                </View>
                <View style={styles().view_sm_action}>
                  <Button onPress={this.openInstagramSupport} block transparent icon style={styles().btn_sm_actions}>
                    <Icon style={styles().icon_instagram} name='instagram' type='MaterialCommunityIcons'/>
                  </Button>
                  <Text style={styles().txt_sm_action}>Instagram</Text>
                </View>
                <View style={styles().view_sm_action}>
                  <Button onPress={this.openChatSupport} block transparent icon style={styles().btn_sm_actions}>
                    <Icon style={styles().icon_chat} name='wechat' type='MaterialCommunityIcons'/>
                  </Button>
                  <Text style={styles().txt_sm_action}>Chat</Text>
                </View>
              </View>}

              {/* Call Support */}
              {locked && <View style={styles().view_call_support}>
                <Button rounded transparent iconLeft style={styles().btn_call_support} onPress={this.showModal} >
                  <Icon style={styles().icon_call_support} name='phone-in-talk' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_call_support}>   Talk to Customer Care</Text>
                </Button>
              </View>}
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
              <View style={styles().view_overlay_title}>
                  <Text style={styles().txt_overlay_title}>Talk to Customer Care</Text>
              </View>

              <View style={styles().view_overlay_body}>
                  <Text style={styles().txt_overlay_body}>You are about to call customer care via your Safaricom line</Text>
              </View>

              <View style={styles().view_overlay_footer}>
                  <Button rounded danger icon style={styles().btn_cancel} onPress={this.cancelCall} >
                      <Text style={styles().txt_button_action}>CANCEL</Text>
                  </Button>
                  <Button rounded success icon style={styles().btn_call} onPress={this.callCustomerCare} >
                      <Text style={styles().txt_button_action}>Call</Text>
                  </Button>
              </View>
            </Overlay>

            <AwesomeAlert
              show={showAlert}
              showProgress={alert.showLoading}
              title={alert.title}
              message={alert.message}
              closeOnTouchOutside
              closeOnTouchOutside={false}
              closeOnHardwareBackPress={false}
              showConfirmButton={!alert.showLoading}
              confirmText={alert.confirmText}
              confirmButtonColor={Colors.SafaricomGreen}
              onConfirmPressed={this.hideAlert}
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

  handleZuri = () => {
    const { lockStatus } = this.props
    const locked = (lockStatus && /\block\b/gi.test(lockStatus?.lock_status)) || false
    if (locked) this.showAlert('Access Denied!', 'Dear Customer, Access to Zuri on WhatsApp is only available on an UNLOCKED Device. Please make our payments to get your device unlocked first.', 'OK I Will', false, () => null)
    else Linking.openURL('https://wa.me/254722000100?text=Hello%20Zuri')
  }

  showFAQs = () => Linking.openURL('https://safaricom.co.ke/faqs')

  openFacebookSupport = () => Linking.openURL('https://www.facebook.com/SafaricomPLC')

  openTwitterSupport = () => Linking.openURL('https://twitter.com/Safaricom_Care')

  openInstagramSupport = () => Linking.openURL('https://instagram.com/safaricomltd')

  openChatSupport = () => Linking.openURL('https://www.safaricom.co.ke/customer-service-centres')

  showModal = () => this.setState({ modal_shown: true })

  hideModal = () => this.setState({ modal_shown: false })

  cancelCall = () => this.hideModal()

  callCustomerCare = () => this.hideModal()
}

const mapStateToProps = ({ FirebaseReducer }) => ({
  // Firebase
  firebase_type: FirebaseReducer?.type,
  payment_plans: FirebaseReducer?.payment_plans,
  unread_notifications: FirebaseReducer?.unread_notifications,
  payments: FirebaseReducer?.payments,
  lockStatus: FirebaseReducer?.lockStatus,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Support)
