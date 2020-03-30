import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
  btn_mark_read: {
    alignItems: 'center',
    backgroundColor: Colors.LightGray,
    height: height * 0.05,
    justifyContent: 'center',
    paddingHorizontal: width * 0.01,
    width: width * 0.4,
  },
  btn_sec_action: {
    alignItems: 'center',
    height: height * 0.05,
    justifyContent: 'center',
    paddingHorizontal: width * 0.01,
    width: width * 0.4,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 10,
    flex: 1,
    marginVertical: height * 0.025,
    paddingVertical: height * 0.01,
    width: width * 0.95,
  },
  carditem_action_buttons: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: width * 0.9,
  },
  carditem_notif_message: {
    alignSelf: 'center',
    width: width * 0.9,
  },
  carditem_notif_timestamp: {
    alignSelf: 'center',
    borderBottomColor: Colors.LightGray,
    borderBottomWidth: 0.5,
    flexDirection: 'column',
    width: width * 0.9,
  },
  txt_action_btn: {
    alignSelf: 'center',
    color: Colors.White,
    fontSize: Utils.scaledSize(14),
    fontWeight: '500',
  },
  txt_notif_message: {
    color: Colors.DarkGray,
    fontSize: Utils.scaledSize(13),
    fontWeight: '700',
    textAlign: 'justify',
  },
  txt_notif_timestamp: {
    color: Colors.LightGray,
    fontSize: Utils.scaledSize(12),
    fontWeight: '500',
  },
  view_payment_amount: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  view_payment_type: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
})

export default styles
