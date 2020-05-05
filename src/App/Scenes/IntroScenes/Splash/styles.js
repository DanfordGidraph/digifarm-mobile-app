import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  container: {
    backgroundColor: Colors.Black,
    flex: 1,
    justifyContent: 'center',
  },
  img_splash_logo: {
    alignSelf: 'center',
    width: width * 0.6,
  },
})

export default styles
