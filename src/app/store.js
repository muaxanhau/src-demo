import { configureStore } from '@reduxjs/toolkit'
// import { reducers } from './../features/index'
import authenticationReducer from './../features/Authentication/slice'
import callPureApiReducer from './../features/CallPureApi/slice'
import globalLoaderReducer from './../features/GlobalLoader/slice'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  // reducer: reducers,
  reducer: {
    authentication: authenticationReducer,
    callPureApi: callPureApiReducer,
    globalLoader: globalLoaderReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
