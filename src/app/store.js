import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import globalLoadingReducer from '../features/GlobalLoading/globalLoadingSlice'
import authReducer from '../features/Authentication/authSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    globalLoading: globalLoadingReducer,
    auth: authReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
