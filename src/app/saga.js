import { all } from 'redux-saga/effects'
import { sagas } from './../features/index'

export default function * rootSaga () {
  yield all([...sagas.map(saga => saga())])
}
