import React from 'react'
import { Image } from 'react-native'
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

class SignupOrgDetails extends React.Component {
    state = {
      org_name: '',
      org_location: '',
      org_chains: '',
      org_site: '',
      showAlert: false,
      alert: {
        title: '', message: '', confirmText: 'Close', showLoading: false,
      },
    }

    render = () => {
      const {
        org_name, org_location, org_chains, org_site, showAlert, alert,
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
                  <Icon style={styles().icon_step_circle} name='numeric-1-circle' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_step_name} numberOfLines={2} >Organization Details</Text>
                </View>
                <View style={styles().view_progress_item}>
                  <Icon style={styles({ pending: true }).icon_step_circle} name='circle' type='MaterialCommunityIcons'/>
                  <Text style={styles({ pending: true }).txt_step_name} numberOfLines={2} >Supporting Documents</Text>
                </View>
                <View style={styles().view_progress_item}>
                  <Icon style={styles({ pending: true }).icon_step_circle} name='circle' type='MaterialCommunityIcons'/>
                  <Text style={styles({ pending: true }).txt_step_name} numberOfLines={2} >Contact Person</Text>
                </View>
              </View>


                <Form style={styles().form} >

                  <Text style={styles().txt_input_label} >Organization Name</Text>
                  <Item regular style={styles().item_input} >
                    <Input keyboardType={'default'} onChangeText={(text) => this.setState({ org_name: text })} />
                    <Icon style={styles().icon_success} name={'pen'} type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Physical Location</Text>
                  <Item regular style={styles().item_input} >
                    <Input keyboardType={'default'} onChangeText={(text) => this.setState({ org_location: text })} />
                    <Icon style={styles().icon_success} name={'pen'} type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Value Chains</Text>
                  <Item regular style={styles().item_input} >
                    <Input keyboardType={'default'} onChangeText={(text) => this.setState({ org_chains: text })} />
                    <Icon style={styles().icon_success} name={'pen'} type='MaterialCommunityIcons'/>
                  </Item>

                  <Text style={styles().txt_input_label} >Website</Text>
                  <Item regular style={styles().item_input} >
                    <Input keyboardType={'url'} onChangeText={(text) => this.setState({ org_site: text })} />
                    <Icon style={styles().icon_success} name={'web'} type='MaterialCommunityIcons'/>
                  </Item>

                  <Button block success onPress={this.NextStep} style={styles().btn_next}>
                    <Text style={styles().txt_btn} >Next</Text>
                  </Button>

                </Form>

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

    NextStep = async () => this.props.navigation.navigate(Constants.Scenes.SignupOrgDocs)

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

export default connect(mapStateToProps, mapDispatchToProps)(SignupOrgDetails)
