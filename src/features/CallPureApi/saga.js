import { all, fork, takeLeading } from 'redux-saga/effects'
import { callPureApiActions } from './slice'

// =========================================================================
function * workExample (action) {
  console.log(action.payload)
}
function * watchExample (action) {
  yield takeLeading([callPureApiActions.example().type], workExample)
}

// =========================================================================
function * callPureApiSaga () {
  yield all([fork(watchExample)])
}

export default callPureApiSaga
