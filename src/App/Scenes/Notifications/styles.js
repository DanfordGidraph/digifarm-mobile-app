import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  container: {
    backgroundColor: Colors.BackgroundColor,
    flex: 1,
    justifyContent: 'center',
  },
  tab_active: {
    backgroundColor: Colors.White,
    borderRightColor: Colors.BackgroundColor,
    borderRightWidth: 0.5,
  },
  tab_inactive: {
    backgroundColor: Colors.SafaricomGreen,
    borderRightColor: Colors.BackgroundColor,
    borderRightWidth: 0.5,
  },
  tabbar_underline: {
    backgroundColor: Colors.TransBlack,
  },
  txt_active: {
    color: Colors.DarkGray,
    fontSize: Utils.scaledSize(15),
    fontWeight: '700',
  },
  txt_inactive: {
    color: Colors.White,
    fontSize: Utils.scaledSize(15),
    fontWeight: '200',
  },
})

export default styles
