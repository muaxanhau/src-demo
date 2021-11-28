import { all, fork, takeLeading } from 'redux-saga/effects'
import { actions } from './../index'

// =========================================================================
function * workExample (action) {
  console.log(action.payload)
}
function * watchExample (action) {
  const { callPureApiActions } = actions

  yield takeLeading([callPureApiActions.example().type], workExample)
}

// =========================================================================
function * callPureApiSaga () {
  yield all([fork(watchExample)])
}

export default callPureApiSaga
