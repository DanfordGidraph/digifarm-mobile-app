import React from 'react'
import { Image, StatusBar, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {
  Header, Title, View, Icon,
} from 'native-base'
import { NotificationBell } from '@components'
import { Colors, Constants, Images } from '@common'
import reactotron from 'reactotron-react-native'
import styles from './styles'

const { width, height } = Constants

const NavigationHeader = ({
  route, scene, previous, navigation,
}) => {
  const { options } = scene.descriptor;
  const title = options?.headerTitle || options?.title || route?.name

  const openNotifications = () => navigation.navigate(Constants.Scenes.Notifications)

  return (
    <Header style={styles().header_container}>
        <LinearGradient
          style={styles().header_gradient}
          colors={[Colors.PrimaryGradientStart, Colors.PrimaryGradientStop]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.9 }}
        >
        {Object.keys(previous?.route || {}).length > 0 && <TouchableOpacity style={styles().touchable_back} onPress={() => navigation.goBack()}>
          <Icon style={styles().icon_search} name='chevron-left' type='MaterialCommunityIcons'/>
        </TouchableOpacity>}
        <View style={styles().view_header_title}>
          {title !== 'Home' && <Title style={styles().txt_header_title} >{title}</Title>}
          {title === 'Home' && <Image style={{}} source={Images.AppLogoLight} style={styles().img_logo_light} resizeMode='contain' />}
        </View>
        {title !== 'Home' && <TouchableOpacity style={styles().touchable_notifications} onPress={openNotifications}>
          <NotificationBell count={route?.params?.unread_notifications_count || 0} />
        </TouchableOpacity>}
        {title === 'Home' && <TouchableOpacity style={styles().touchable_notifications} onPress={openNotifications}>
          <Icon style={styles().icon_search} name='magnify' type='MaterialCommunityIcons'/>
        </TouchableOpacity>}
      </LinearGradient>
      <StatusBar barStyle="light-content" backgroundColor={Colors.PrimaryGradientStart} />
    </Header>
  )
}
export default NavigationHeader
