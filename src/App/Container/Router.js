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

// Header
import NavigationHeader from '../Components/NavigationHeader'

// Intro
import Splash from '../Scenes/IntroScenes/Splash'

// Tabs: Home
import Home from '../Scenes/TabScenes/HomeScenes/Home'

// Tabs: Account
import Account from '../Scenes/TabScenes/AuthScenes/Account'
import SignIn from '../Scenes/TabScenes/AuthScenes/SignIn'
import SignupOrgDetails from '../Scenes/TabScenes/AuthScenes/SignupOrgDetails'
import SignupOrgDocs from '../Scenes/TabScenes/AuthScenes/SignupOrgDocs'
import SignupOrgContact from '../Scenes/TabScenes/AuthScenes/SignupOrgContact'

// Tabs: Categories
import Categories from '../Scenes/TabScenes/CategoryScenes/Categories'

// Tabs: Cart
import Cart from '../Scenes/TabScenes/CartScenes/Cart'

// Tabs: More
import More from '../Scenes/TabScenes/MoreScenes/More'


const tabsScreensOptions = {
  headerShown: true,
  headerTintColor: Colors.White,
}

const setScreenOptions = (route, title) => ({ title: title || route?.name, header: ({ scene, previous, navigation }) => <NavigationHeader route={route} scene={scene} previous={previous} navigation={navigation} /> })

const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

const IntroStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen component={Splash} name='Splash' options={{}} />
  </Stack.Navigator>
)

const HomeTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Home} name='Home' options={({ route }) => setScreenOptions(route, '') } />
  </Stack.Navigator>
)

const AccountTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Account} name='Account' options={({ route }) => setScreenOptions(route, 'My Account') } />
    <Stack.Screen component={SignIn} name='SignIn' options={({ route }) => ({ headerShown: false }) } />
    <Stack.Screen component={SignupOrgDetails} name='SignupOrgDetails' options={({ route }) => setScreenOptions(route, 'Sign Up') } />
    <Stack.Screen component={SignupOrgDocs} name='SignupOrgDocs' options={({ route }) => setScreenOptions(route, 'Sign Up') } />
    <Stack.Screen component={SignupOrgContact} name='SignupOrgContact' options={({ route }) => setScreenOptions(route, 'Sign Up') } />
  </Stack.Navigator>
)

const CategoriesTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Categories} name='Categories' options={({ route }) => setScreenOptions(route, 'Categories') } />
  </Stack.Navigator>
)

const CartTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={Cart} name='Cart' options={({ route }) => setScreenOptions(route, 'My Cart') } />
  </Stack.Navigator>
)

const MoreTabStack = () => (
  <Stack.Navigator screenOptions={tabsScreensOptions}>
    <Stack.Screen component={More} name='More' options={({ route }) => setScreenOptions(route, 'Support') } />
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
      component={CategoriesTabStack}
      name='Categories'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='apps' type='MaterialCommunityIcons'/>) }} />
    <BottomTabs.Screen
      component={CartTabStack}
      name='Cart'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='cart-outline' type='MaterialCommunityIcons'/>) }} />
    <BottomTabs.Screen
      component={AccountTabStack}
      name='Account'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='account-tie' type='MaterialCommunityIcons'/>) }} />
    <BottomTabs.Screen
      component={MoreTabStack}
      name='More'
      options={{ tabBarIcon: ({ focused }) => (<Icon style={{ color: focused ? Colors.SafaricomGreen : Colors.LightGray }} name='dots-horizontal' type='MaterialCommunityIcons'/>) }} />
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
