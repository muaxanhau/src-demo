import { all } from 'redux-saga/effects'
import authSaga from './../features/Authentication/authSaga'

export default function * rootSaga () {
  yield all([authSaga()])
}
