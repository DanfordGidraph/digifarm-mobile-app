import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  btn_next: {
    borderRadius: 10,
    height: height * 0.08,
    marginVertical: height * 0.03,
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
    color: props?.pending ? Colors.Gray : Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(55),
  },
  img_bg: {
    height,
    position: 'absolute',
    width,
  },
  input_phone: {
    alignSelf: 'center',
    fontSize: Utils.scaledSize(17),
    fontWeight: '200',
    height: height * 0.065,
    paddingLeft: width * 0.025,
    width: width * 0.69,
  },
  item_input: {
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 10,
    height: height * 0.08,
  },
  touchable_close: {
    justifyContent: 'center',
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
  txt_login: {
    alignSelf: 'center',
    color: Colors.White,
    fontSize: Utils.scaledSize(23),
  },
  txt_no_account: {
    alignSelf: 'center',
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(15),
    fontWeight: '500',
    marginVertical: height * 0.01,
  },
  txt_step_name: {
    alignSelf: 'center',
    color: props?.pending ? Colors.Gray : Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(13),
    fontWeight: '500',
    textAlign: 'center',
    width: width * 0.24,
  },
  view_progress: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 0.95,
  },
  view_progress_dash_left: {
    borderBottomColor: Colors.Gray,
    borderBottomWidth: 2,
    left: width * 0.2,
    position: 'absolute',
    top: height * 0.04,
    width: width * 0.25,
  },
  view_progress_dash_right: {
    borderBottomColor: Colors.Gray,
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
