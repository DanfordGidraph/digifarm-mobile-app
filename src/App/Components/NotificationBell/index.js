import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, Icon, View } from 'native-base'
import { Constants } from '@common'
import styles from './styles'

const NotificationBell = ({ navigation, count }) => (
  <TouchableOpacity style={styles().touchable_notif} onPress={() => navigation.navigate(Constants.Scenes.Notifications)} >
    <Icon style={styles().icon_bell} name='bell-outline' type='MaterialCommunityIcons'/>
    <View style={styles().view_notif_count} ><Text style={styles().txt_notif_count} >{count}</Text></View>
  </TouchableOpacity>
)
export default NotificationBell
