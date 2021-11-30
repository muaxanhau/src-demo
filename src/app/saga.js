import { all } from 'redux-saga/effects'

import authenticationSaga from './../features/Authentication/saga'
import callPureApiSaga from './../features/CallPureApi/saga'
// import { sagas } from './../features/index'

export default function * rootSaga () {
  // yield all([...sagas.map(saga => saga())])
  yield all([authenticationSaga(), callPureApiSaga()])
}
