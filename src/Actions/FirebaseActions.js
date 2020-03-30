import * as Services from '@services'
import * as ActionTypes from './ActionTypes'

export const syncReadNotificationsWithFirestore = (notifications) => (dispatch) => dispatch({ type: ActionTypes.SYNC_READ_NOTIFICATIONS_WITH_FIRESTORE, notifications })

export const syncUneadNotificationsWithFirestore = (notifications) => (dispatch) => dispatch({ type: ActionTypes.SYNC_UNREAD_NOTIFICATIONS_WITH_FIRESTORE, notifications })
