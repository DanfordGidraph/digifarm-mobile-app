import * as Services from '@services'
import * as ActionTypes from './ActionTypes'

export const login = () => ({ type: ActionTypes.LOGIN_SUCCESS })

export const signup = () => ({ type: ActionTypes.SIGNUP_SUCCESS })

export const saveDeviceSecrets = (secrets) => ({ type: ActionTypes.SAVE_SECRETS, secrets })
