import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  container: {
    backgroundColor: Colors.BackgroundColor,
    flex: 1,
    paddingVertical: height * 0.02,
  },
  txt_tab_name: {
    alignSelf: 'center',
    color: Colors.SafaricomGreen,
    fontSize: Utils.scaledSize(17),
  },
})

export default styles
