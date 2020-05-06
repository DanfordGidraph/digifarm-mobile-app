import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  btn_finish: {
    borderRadius: 10,
    height: height * 0.08,
    marginVertical: height * 0.03,
    opacity: props?.disabled ? 0.6 : 1,
  },
  btn_overlay: {
    alignSelf: 'center',
    borderRadius: 10,
    height: height * 0.06,
    justifyContent: 'center',
    width: width * 0.75,
  },
  container: {
    backgroundColor: Colors.BackgroundColor,
  },
  content: {
    backgroundColor: Colors.TransWhite,
    minHeight: height * 0.85,
  },
  form: {
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.02,
    width: width * 0.95,
  },
  icon_step_circle: {
    color: Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(55),
  },
  icon_upload: {
    alignSelf: 'center',
    color: props?.submitted ? Colors.SafaricomGreen : Colors.Red,
    fontSize: Utils.scaledSize(85),
  },
  img_bg: {
    height,
    position: 'absolute',
    width,
  },
  img_uploading: {
    alignSelf: 'center',
    height: width * 0.3,
    width: width * 0.3,
  },
  input_phone: {
    alignSelf: 'center',
    fontSize: Utils.scaledSize(17),
    fontWeight: '200',
    height: height * 0.065,
    paddingLeft: width * 0.025,
    width: width * 0.79,
  },
  item_input: {
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 10,
    height: height * 0.08,
  },
  overlay_backdrop: {
    backgroundColor: Colors.TransBlack,
  },
  overlay_content: {
    borderRadius: 10,
  },
  touchable_close: {
    justifyContent: 'center',
  },
  txt_accept_tnc: {
    alignSelf: 'center',
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(12),
    fontWeight: '500',
    marginVertical: height * 0.01,
  },
  txt_btn: {
    fontSize: Utils.scaledSize(20),
  },
  txt_input_label: {
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(12),
    fontWeight: '200',
    paddingLeft: width * 0.02,
    paddingTop: height * 0.01,
  },
  txt_overlay_message_body: {
    alignSelf: 'center',
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(16),
    fontWeight: '500',
    marginVertical: height * 0.01,
    textAlign: 'center',
    width: width * 0.75,
  },
  txt_overlay_title: {
    alignSelf: 'center',
    color: Colors.DarkGray,
    fontSize: Utils.scaledSize(17),
    fontWeight: 'bold',
  },
  txt_step_name: {
    alignSelf: 'center',
    color: Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(13),
    fontWeight: '500',
    textAlign: 'center',
    width: width * 0.24,
  },
  txt_tnc: {
    alignSelf: 'center',
    color: Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(13),
    fontWeight: '500',
  },
  view_accept_terms: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 0.95,
  },

  view_overlay_body: {
    alignSelf: 'center',
    paddingVertical: height * 0.01,
    width: width * 0.8,
  },
  view_overlay_footer: {
    alignSelf: 'center',
    height: height * 0.06,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    width: width * 0.8,
  },
  view_overlay_title: {
    alignSelf: 'center',
    height: height * 0.05,
    paddingHorizontal: width * 0.05,
    width: width * 0.8,
  },
  view_overlay_title_underline: {
    alignSelf: 'center',
    borderBottomColor: Colors.LightGray,
    borderBottomWidth: 0.5,
    width: width * 0.4,
  },
  view_progress: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 0.95,
  },
  view_progress_dash_left: {
    borderBottomColor: Colors.SafaricomGreen,
    borderBottomWidth: 2,
    left: width * 0.2,
    position: 'absolute',
    top: height * 0.04,
    width: width * 0.25,
  },
  view_progress_dash_right: {
    borderBottomColor: Colors.SafaricomGreen,
    borderBottomWidth: 2,
    position: 'absolute',
    right: width * 0.2,
    top: height * 0.04,
    width: width * 0.25,
  },
  view_progress_item: {
    alignItems: 'center',
    height: width * 0.25,
    justifyContent: 'space-evenly',
    width: width * 0.35,
  },
})

export default styles
