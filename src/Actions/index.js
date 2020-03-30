import * as ResetActions from './ResetActions'
import * as AuthActions from './AuthActions'
import * as FirebaseActions from './FirebaseActions'

module.exports = {
  ...ResetActions, ...AuthActions, ...FirebaseActions,
}
