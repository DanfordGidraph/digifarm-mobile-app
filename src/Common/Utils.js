/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
import firestore from '@react-native-firebase/firestore'
import { PermissionsAndroid } from 'react-native'
import Constants from './Constants'
import Colors from './Colors'

const md5 = require('md5')

const { width, height } = Constants

const strongStringStepper = (str) => str?.split('')?.reduce((r_str, c_char) => `${r_str}${String.fromCharCode(c_char.charCodeAt(0) + 1)}`, '')?.replace(/[^0-9A-Z]/gi, '0')

const weakStepperReverser = (str) => str?.replace(/\\\\/gi, '\\')?.split('')?.reduce((r_str, c_char) => `${r_str}${String.fromCharCode(c_char.charCodeAt(0) - 2)}`, '')

export const smartStringStepper = (str) => str?.split('')?.reduce((r_str, c_char, c_ind) => `${r_str}${String.fromCharCode(c_char.charCodeAt(0) + c_ind)}`, '')?.replace(/\\/gi, '\\\\')

export const chewString = (str) => (str ? strongStringStepper(md5(str).toUpperCase()) : 'Pending Population...')

export const reverseStepper = (str) => weakStepperReverser(str)

export const titleCase = (str) => str.toLowerCase()?.split(' ')?.reduce((accumulator, current) => `${accumulator}${current.charAt(0)?.toUpperCase()}${current.slice(1)} `, '')

export const formatMoney = (amount) => {
  const decimalCount = 0
  const decimal = '.'
  const thousands = ','
  const negativeSign = parseInt(Math.abs(Number(amount) || 0), 10) < 0 ? '-' : ''

  const i = parseInt(Math.abs(Number(amount) || 0).toFixed(decimalCount), 10).toString()
  const j = (i.length > 3) ? i.length % 3 : 0

  const formartedCurrency = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')

  return formartedCurrency
}

export const scaledSize = (size) => {
  // Use iPhone6 as base size which is 375 x 667
  const baseWidth = 375
  const baseHeight = 667
  const scaleWidth = width / baseWidth
  const scaleHeight = height / baseHeight
  const scale = Math.min(scaleWidth, scaleHeight)
  return Math.ceil((size * scale))
}


export const getRandomColor = () => {
  const determiner = Math.random()
  if (determiner <= 0.2) {
    return Colors.FacebookBlue
  } if (determiner <= 0.4) {
    return Colors.InstagramMagenta
  } if (determiner <= 0.6) {
    return Colors.TwitterBlue
  } if (determiner <= 0.8) {
    return Colors.WhatsAppGreen
  } if (determiner <= 1) {
    return Colors.Magenta
  }
  return Colors.PrimaryTeal
}

export const reportError = (error_type, error_ID, error_data) => {
  firestore().collection('KIOSK_APP_ERRORS')
    .doc(`${error_type}`)
    .collection(`${error_ID}`)
    .add(error_data)
}

export const requestPermission = async (permission, title, message) => new Promise((resolve, reject) => {
  PermissionsAndroid.request(permission, {
    title,
    message,
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  })
    .then((granted) => {
      const grant_tester = new RegExp(PermissionsAndroid.RESULTS.GRANTED, 'gi')
      grant_tester.test(granted) ? resolve(true) : reject(false)
    })
    .catch((error) => {
      reject(error)
    })
})
