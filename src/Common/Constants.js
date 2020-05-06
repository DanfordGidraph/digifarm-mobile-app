import { Dimensions } from 'react-native'

const Constants = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  Routes: {
    Intro: 'Intro',
    Tabs: 'Tabs',
  },
  Scenes: {
    // Intro Scenes
    Splash: 'Splash',
    // Home Scenes
    Home: 'Home',
    // Category Scenes
    Categories: 'Categories',
    // Cart Scenes
    Cart: 'Cart',
    // Auth Scenes
    Account: 'Account',
    SignIn: 'SignIn',
    SignupOrgDetails: 'SignupOrgDetails',
    SignupOrgDocs: 'SignupOrgDocs',
    SignupOrgContact: 'SignupOrgContact',
    ForgotPassword: 'ForgotPassword',
    // More Scenes
    More: 'More',
  },
}
export default Constants
