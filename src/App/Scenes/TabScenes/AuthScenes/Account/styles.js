import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  btn_signin: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    height: height * 0.08,
    marginVertical: height * 0.03,
  },
  btn_signup: {
    borderRadius: 10,
    height: height * 0.08,
    marginVertical: height * 0.03,
  },
  container: {
    backgroundColor: Colors.BackgroundColor,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.Transparent,
    flex: 1,
  },
  img_bg: {
    height: height * 0.9,
    width,
  },
  img_digi_logo: {
    alignSelf: 'center',
    height: height * 0.2,
    width: width * 0.45,
  },
  txt_btn: {
    fontSize: Utils.scaledSize(20),
  },
  txt_tagline: {
    alignSelf: 'center',
    color: Colors.White,
    fontSize: Utils.scaledSize(17),
    textAlign: 'center',
    width: width * 0.8,
  },
  view_auth_actions: {
    alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.TransWhite,
    flex: 4,
    padding: width * 0.1,
    width,
  },
  view_logo_tagline: {
    flex: 2,
  },
})

export default styles
