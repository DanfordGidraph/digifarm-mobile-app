import * as ActionTypes from '@actions/ActionTypes'

export default function base(state = {}, action) {
  switch (action?.type) {
    case ActionTypes.SYNC_READ_NOTIFICATIONS_WITH_FIRESTORE:
      return {
        ...state,
        type: action?.type,
        read_notifications: action?.notifications,
      }
    case ActionTypes.SYNC_UNREAD_NOTIFICATIONS_WITH_FIRESTORE:
      return {
        ...state,
        type: action?.type,
        unread_notifications: action?.notifications,
      }
    default:
      return { ...state }
  }
}
