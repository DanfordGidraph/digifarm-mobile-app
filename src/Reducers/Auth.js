import * as ActionTypes from '@actions/ActionTypes'

export default function base(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        type: action?.type,
      }
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        type: action?.type,
      }
    case ActionTypes.SAVE_SECRET:
      return {
        ...state,
        type: action?.type,
        app_secrets: { ...action?.secrets },
      }
    default:
      return { ...state }
  }
}
