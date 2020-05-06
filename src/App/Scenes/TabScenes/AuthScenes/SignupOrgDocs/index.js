import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import * as ActionTypes from '@actions/ActionTypes'
import firestore from '@react-native-firebase/firestore'
import {
  Container, Text, Content, View, Item, Input, Icon, Button, Card, Form,
} from 'native-base'
import DocumentPicker from 'react-native-document-picker'
import { NotificationBell } from '@components'
import {
  Utils, Colors, Constants, Images,
} from '@common'
import AwesomeAlert from 'react-native-awesome-alerts'
import reactotron from 'reactotron-react-native'
import styles from './styles'


class SignupOrgDocs extends React.Component {
    state = {
      validation_complete: false,
      picked_docs: {},
      showAlert: false,
      alert: {
        title: '', message: '', confirmText: 'Close', showLoading: false,
      },
    }

    render = () => {
      const {
        validation_complete, picked_docs, showAlert, alert,
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
                  <Icon style={styles().icon_step_circle} name='numeric-2-circle' type='MaterialCommunityIcons'/>
                  <Text style={styles().txt_step_name} numberOfLines={2} >Supporting Documents</Text>
                </View>
                <View style={styles().view_progress_item}>
                  <Icon style={styles({ pending: true }).icon_step_circle} name='circle' type='MaterialCommunityIcons'/>
                  <Text style={styles({ pending: true }).txt_step_name} numberOfLines={2} >Contact Person</Text>
                </View>
              </View>

              <Text style={styles().txt_header} >Supporting documents</Text>
              <Text style={styles().txt_desc} >Please upload the following supporting documents as a zip file. These documents will be used during the vetting process.</Text>
              <Text style={styles().txt_doc_item_bullet} >i) <Text style={styles().txt_doc_item_text} >Stamped certificate of incorporation</Text></Text>
              <Text style={styles().txt_doc_item_bullet} >ii)<Text style={styles().txt_doc_item_text} >Tax compliance certificate</Text></Text>
              <Text style={styles().txt_doc_item_bullet} >iii)<Text style={styles().txt_doc_item_text} >KRA PIN certificate (For company & directors)</Text></Text>
              <Text style={styles().txt_doc_item_bullet} >iv)<Text style={styles().txt_doc_item_text} >Copy of CR12</Text></Text>
              <Text style={styles().txt_doc_item_bullet} >v) <Text style={styles().txt_doc_item_text} >Copy of ID for the directors</Text></Text>
              <Text style={styles().txt_doc_item_bullet} >vi)<Text style={styles().txt_doc_item_text} >Cheque/letter from bank confirming bank details</Text></Text>

              {!validation_complete && <Button block transparent onPress={this.UploadFiles} style={styles().btn_upload}>
                <Text style={styles().txt_upload_btn} uppercase={false} >Tap to Upload</Text>
              </Button>}

              <Text style={styles().txt_attachments} >Attachments: </Text>
              {Object.keys(picked_docs).length > 0 && Object.values(picked_docs).map((doc, index) => (
                <View style={styles().view_doc_entry} key={doc?.uri} >
                  <Text style={styles().txt_doc_name} >{doc?.name || this.getFilenameFromUri(doc?.uri)}</Text>
                  <Icon onPress={() => this.removeFileFromSelection(index)} style={styles().icon_close} name='close' type='MaterialCommunityIcons'/>
                </View>
              ))}

              {Object.keys(picked_docs).length > 0 && <Button block success onPress={this.NextStep} style={styles().btn_next}>
                <Text style={styles().txt_btn} >Next</Text>
              </Button>}

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

    getFilenameFromUri = (uri) => uri && uri.length > 0 && uri.split('/').pop()

    removeFileFromSelection = (index) => {
      const { picked_docs } = this.state
      const picked_docs_without_file = picked_docs
      const obj_key = Object.keys(picked_docs)[index]
      delete picked_docs_without_file[obj_key]
      reactotron.log('File Removed: ', picked_docs_without_file)
      this.setState({ picked_docs: picked_docs_without_file })
    }

    UploadFiles = async () => {
      // this.setState({ validation_complete: !this.state.validation_complete })
      await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.zip],
      }).then((selected_files) => {
        reactotron.log('Files Selected', selected_files)
        if (selected_files.length > 0) {
          selected_files.forEach((file) => {
            let obj_key = file?.name || this.getFilenameFromUri(file?.uri)
            obj_key = obj_key.replace(/[^A-Z0-9]/gi, '_').trim()
            this.setState({ picked_docs: { ...this.state.picked_docs, [obj_key]: file } })
          })
        }
      }).catch((err) => reactotron.log('Doc Picker Error: ', err.message, err.code))
    }

    NextStep = async () => this.props.navigation.navigate(Constants.Scenes.SignupOrgContact)

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

export default connect(mapStateToProps, mapDispatchToProps)(SignupOrgDocs)
