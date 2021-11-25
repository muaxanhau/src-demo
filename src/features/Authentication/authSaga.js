import { all, delay, fork, put, takeLeading } from 'redux-saga/effects'
import { authActions } from './authSlice'
import { globalLoadingActions } from './../GlobalLoading/globalLoadingSlice'

function * workLogin (action) {
  yield put(globalLoadingActions.enable())
  console.log(action.payload.data)
  yield delay(2000)
  action.payload.callback?.onSuccess?.()
  yield put(globalLoadingActions.disable())
}

function * watchLogin (action) {
  yield takeLeading([authActions.login().type], workLogin)
}
function * dataCollectionSaga () {
  yield all([fork(watchLogin)])
}

export default dataCollectionSaga
