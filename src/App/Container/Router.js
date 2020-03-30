import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Analytics, Colors, Images, Constants,
} from '@common'
import { Icon } from 'native-base'
import * as Services from '@services'

// Intro
import Splash from '../Scenes/Splash'

// Tabs: Home
import Home from '../Scenes/Home'

// Tabs: Account
import Account from '../Scenes/Account'

// Tabs: Categories
import Categories from '../Scenes/Categories'

// Tabs: Cart
import Cart from '../Scenes/Cart'

// Tabs: Support
import Support from '../Scenes/Support'

const { width, height } = Constants

const tabsScreensOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: Colors.White, elevation: 2 },
  headerLeft: () => (<Image style={{}} source={Images.AppLogo} style={{ width: width * 0.4, height: height * 0.04 }} resizeMode='contain' />),
  headerTintColor: Colors.White,
}

const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

const IntroStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen component={Splash} name='Splash' options={{}} />
  </Stack.Navigator>
)

const HomeTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Home} name='Home' options={{ title: '' }} />
  </Stack.Navigator>
)

const AccountTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Account} name='Account' options={{ title: '' }} />
  </Stack.Navigator>
)

const CategoriesTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Categories} name='Categories' options={{ title: '' }} />
  </Stack.Navigator>
)

const CartTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Cart} name='Cart' options={{ title: '' }} />
  </Stack.Navigator>
)

const SupportTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Support} name='Support' options={{ title: '' }} />
  </Stack.Navigator>
)

const MainTabs = () => (
  <BottomTabs.Navigator
    tabBarOptions= {{
      showLabel: true,
      showIcon: true,
      allowFontScaling: false,
      keyboardHidesTabBar: true,
      activeTintColor: Colors.SafaricomGreen,
      inactiveTintColor: Colors.LightGray,
      activeBackgroundColor: Colors.BackgroundColor,
      inactiveBackgroundColor: Colors.White,
      tabStyle: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
      style: { backgroundColor: Colors.PrimaryTeal, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
    }}
    backBehavior={'initialRoute'}
  >
    <BottomTabs.Screen
      component={HomeTabStack}
      name='Home'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='home-outline' type='MaterialCommunityIcons'/>) }} />
    <BottomTabs.Screen
      component={AccountTabStack}
      name='Account'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='account-tie' type='MaterialCommunityIcons'/>) }} />
    <BottomTabs.Screen
      component={CategoriesTabStack}
      name='Categories'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='apps' type='MaterialCommunityIcons'/>) }} />
    <BottomTabs.Screen
      component={CartTabStack}
      name='Cart'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='cart-outline' type='MaterialCommunityIcons'/>) }} />
    <BottomTabs.Screen
      component={SupportTabStack}
      name='Support'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='face-agent' type='MaterialCommunityIcons'/>) }} />
  </BottomTabs.Navigator>
)

const getActiveRouteName = (navigationState) => {
  if (!navigationState) { return null }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) { return getActiveRouteName(route) }
  return route.routeName;
}
// Analytics.set_screen_name(currentState.routes) }

const reportCurrentScreenToAnalytics = (state, routeNameRef) => {
  const previousRouteName = routeNameRef.current
  const currentRouteName = getActiveRouteName(state)
  if (previousRouteName !== currentRouteName) {
    Analytics.set_screen_name(currentRouteName, currentRouteName)
  }
}

export default () => {
  const routeNameRef = React.useRef()
  return (
  <NavigationContainer ref={Services?.navigationRef} onStateChange={(currentState) => reportCurrentScreenToAnalytics(currentState, routeNameRef)} >
    <Stack.Navigator initialRouteName='Intro' screenOptions={{ headerShown: false }} >
      <Stack.Screen name='Intro' component={IntroStack} options={{}}/>
      <Stack.Screen name='Tabs' component={MainTabs} options={{}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
