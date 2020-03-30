/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-expressions */
import { Utils } from '@common'
import reactotron from 'reactotron-react-native'
import * as Api from './Networking/NetworkService'

const default_headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const dummyService = () => null
