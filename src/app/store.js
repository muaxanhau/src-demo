import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './../features/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
