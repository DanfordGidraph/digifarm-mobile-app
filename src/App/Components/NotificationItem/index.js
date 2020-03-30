import React, { useState } from 'react'
import {
  View, Text, Card, CardItem, Button,
} from 'native-base'
import { Utils } from '@common'
import styles from './styles'

const NotificationItem = ({ notification, actionHandler, read }) => {
  const [markingAsRead, setReadState] = useState('Mark As Read')
  const [runningAction, setRunningState] = useState(false)

  const markAsRead = () => {
    setReadState('Marking...')
    setTimeout(() => { actionHandler({ action: 'READ', notification }); setReadState('Read ✓') }, 2000);
  }

  return (
        <Card style={styles().card}>
            {/* Timestamp */}
            <CardItem style={styles().carditem_notif_timestamp}>
              <View style={styles().view_notif_timestamp}>
                <Text style={styles().txt_notif_timestamp}>{ new Date(Number(notification?.time_stamp)).toUTCString() }</Text>
              </View>
            </CardItem>

             {/* Message */}
            <CardItem style={styles().carditem_notif_message}>
              <View style={styles().view_notif_message}>
                <Text style={styles().txt_notif_message}>{notification?.notif_message}</Text>
              </View>
            </CardItem>

            {/* Action */}
            <CardItem style={styles().carditem_action_buttons}>
              {read ? null
                : (<Button rounded success block style={styles().btn_sec_action} onPress={() => markAsRead()}>
                <Text style={styles().txt_action_btn}>{markingAsRead}</Text>
              </Button>)
              }
              {/* <Button rounded success block style={styles().btn_sec_action} onPress={() => actionHandler({ action: 'PAY', notification })}>
                <Text style={styles().txt_action_btn}>{runningAction ? 'Opening...' : 'Pay Now'}</Text>
              </Button> */}
            </CardItem>

        </Card>
  )
}
export default NotificationItem
