// call pure api
import callPureApiReducer, { callPureApiActions } from './CallPureApi/slice'
import callPureApiSaga from './CallPureApi/saga'

// global loader
import GlobalLoader from './GlobalLoader/index'
import globalLoaderReducer, {
  globalLoaderState,
  globalLoaderActions
} from './GlobalLoader/slice'

// global alert
import GlobalAlert from './GlobalAlert/index'

// authentication
import authenticationReducer, {
  authenticationState,
  authenticationActions
} from './Authentication/slice'
import authenticationSaga from './Authentication/saga'

// reducers ===================================================================
const reducers = {
  callPureApi: callPureApiReducer,
  globalLoader: globalLoaderReducer,
  authentication: authenticationReducer
}
// sagas ======================================================================
const sagas = [callPureApiSaga, authenticationSaga]
// states =====================================================================
const states = {
  globalLoaderState,
  authenticationState
}
// actions ====================================================================
const actions = {
  callPureApiActions,
  globalLoaderActions,
  authenticationActions
}
// views ======================================================================
const views = {
  GlobalLoader,
  GlobalAlert
}

export { reducers, sagas, states, actions, views }
