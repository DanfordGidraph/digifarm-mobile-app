import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
  },
  header_container: {
    backgroundColor: Colors.PrimaryGradientStop,
    maxHeight: height * 0.075,
    minHeight: height * 0.075,
    zIndex: 100,
  },
  header_gradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: height * 0.075,
    minWidth: width,
    alignContent: 'center',
    alignItems: 'center',
  },
  icon_search: {
    color: Colors.White,
    fontSize: Utils.scaledSize(35),
  },
  img_logo_light: {
    height: height * 0.055,
    width: width * 0.2,
  },
  touchable_notifications: {
    alignItems: 'center',
    alignSelf: 'center',
    height: height * 0.075,
    justifyContent: 'center',
    width: width * 0.2,
  },
  txt_header_title: {
    color: Colors.White,
    fontSize: Utils.scaledSize(18),
    fontWeight: '700',
  },
  view_header_title: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: width * 0.1,
    justifyContent: 'center',
    paddingLeft: width * 0.1,
  },
})

export default styles
