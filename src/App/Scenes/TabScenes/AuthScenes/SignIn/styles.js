import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  btn_login: {
    borderRadius: 10,
    height: height * 0.08,
    marginVertical: height * 0.03,
  },
  card_signin: {
    alignSelf: 'center',
    borderRadius: 10,
    height: height * 0.55,
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.02,
    width: width * 0.95,
  },
  container: {
    backgroundColor: Colors.BackgroundColor,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.Transparent,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: height * 0.1,
    paddingTop: height * 0.03,
  },
  icon_close: {
    color: Colors.White,
    fontSize: Utils.scaledSize(30),
  },
  img_bg: {
    flex: 1,
    height,
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
    borderRadius: 10,
    height: height * 0.07,
  },
  touchable_close: {
    justifyContent: 'center',
  },
  txt_btn: {
    fontSize: Utils.scaledSize(20),
  },
  txt_forgot_pass: {
    alignSelf: 'center',
    color: Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(15),
    fontWeight: '500',
  },
  txt_input_label: {
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(12),
    fontWeight: '200',
    paddingLeft: width * 0.03,
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
  view_close: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: width * 0.05,
    width: width * 0.6,
  },
})

export default styles
