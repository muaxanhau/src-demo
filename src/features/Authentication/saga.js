import { all, delay, fork, put, takeLeading } from 'redux-saga/effects'
import { actions } from './../index'

// =========================================================================
function * workLogin (action) {
  const { globalLoaderActions } = actions

  yield put(globalLoaderActions.enable())
  console.log(action.payload.data)
  yield delay(2000)
  action.payload.callback?.onSuccess?.()
  yield put(globalLoaderActions.disable())
}
function * watchLogin (action) {
  const { authenticationActions } = actions

  yield takeLeading([authenticationActions.login().type], workLogin)
}

// =========================================================================
function * authenticationSaga () {
  yield all([fork(watchLogin)])
}

export default authenticationSaga
