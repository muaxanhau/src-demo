import { all, delay, fork, put, takeLeading } from 'redux-saga/effects'
import { authenticationActions } from './slice'
import { globalLoaderActions } from './../GlobalLoader/slice'
import { AsyncStorages } from './../../utils'

// =========================================================================
function * workLogin (action) {
  yield put(globalLoaderActions.enable())

  console.log(action.payload.data)
  yield delay(2000)
  AsyncStorages.Token.set('1234567')
  action.payload.callback?.onSuccess?.()

  yield put(globalLoaderActions.disable())
}
function * watchLogin (action) {
  yield takeLeading([authenticationActions.login().type], workLogin)
}

// =========================================================================
function * authenticationSaga () {
  yield all([fork(watchLogin)])
}

export default authenticationSaga
