import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  btn_call: {
    height: height * 0.06,
    justifyContent: 'center',
    marginVertical: width * 0.05,
    width: width * 0.35,
  },
  btn_call_support: {
    backgroundColor: Colors.White,
    elevation: 2,
    height: height * 0.06,
    justifyContent: 'space-evenly',
    marginVertical: width * 0.035,
    width: width * 0.9,
  },
  btn_cancel: {
    backgroundColor: Colors.LightGray,
    height: height * 0.06,
    justifyContent: 'center',
    marginVertical: width * 0.05,
    width: width * 0.35,
  },
  btn_sm_actions: {
    alignContent: 'center',
    backgroundColor: Colors.White,
    elevation: 2,
    height: width * 0.2,
    justifyContent: 'center',
    width: width * 0.2,
  },
  carditem_payment_info: {
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: Colors.BackgroundColor,
    flex: 1,
    paddingVertical: height * 0.025,
  },
  icon_call_support: {
    alignSelf: 'center',
    color: Colors.DarkGray,
    fontSize: Utils.scaledSize(30),
  },
  icon_chat: {
    color: Colors.PrimaryBlue,
    fontSize: Utils.scaledSize(35),
  },
  icon_facebook: {
    color: Colors.FacebookBlue,
    fontSize: Utils.scaledSize(35),
  },
  icon_instagram: {
    color: Colors.InstagramMagenta,
    fontSize: Utils.scaledSize(35),
  },
  icon_quick_action: {
    alignSelf: 'center',
    fontSize: Utils.scaledSize(35),
  },
  icon_twitter: {
    color: Colors.TwitterBlue,
    fontSize: Utils.scaledSize(35),
  },
  icon_whatsapp: {
    color: Colors.WhatsAppGreen,
    fontSize: Utils.scaledSize(35),
  },
  overlay_backdrop: {
    backgroundColor: Colors.TransBlack,
  },
  overlay_content: {
    borderRadius: 10,
  },
  touchable_quick_action: {
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    height: height * 0.1,
    justifyContent: 'space-evenly',
    padding: 5,
    width: width * 0.4,
  },
  txt_button_action: {
    alignSelf: 'center',
    color: Colors.White,
    fontSize: Utils.scaledSize(17),
  },
  txt_call_support: {
    alignSelf: 'center',
    fontSize: Utils.scaledSize(17),
    fontWeight: '700',
  },
  txt_overlay_body: {
    alignSelf: 'center',
    color: Colors.DarkGray,
    fontSize: Utils.scaledSize(16),
    fontWeight: '700',
    textAlign: 'center',
  },
  txt_overlay_title: {
    color: Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(17),
  },
  txt_quick_action: {
    alignSelf: 'center',
    fontSize: Utils.scaledSize(15),
    fontWeight: '700',
  },
  txt_quick_action_tag: {
    alignSelf: 'center',
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(12),
    fontWeight: '200',
  },
  txt_sm_action: {
    alignSelf: 'center',
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(12),
    fontWeight: '500',
  },
  view_call_support: {
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    width: width * 0.9,
  },
  view_overlay_body: {
    alignSelf: 'center',
    height: height * 0.1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    width: width * 0.85,
  },
  view_overlay_footer: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: height * 0.1,
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    width: width * 0.85,
  },
  view_overlay_title: {
    alignSelf: 'center',
    borderBottomColor: Colors.LightGray,
    borderBottomWidth: 0.5,
    height: height * 0.05,
    paddingHorizontal: width * 0.05,
    width: width * 0.85,
  },
  view_quick_action_text: {
  },
  view_quick_actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    width,
  },
  view_sm_actions: {
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: width * 0.035,
    width,
  },
})

export default styles
