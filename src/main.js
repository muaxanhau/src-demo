import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { views } from './features/index'
import Navigations from './navigations/index'

// constant
const { GlobalLoader, GlobalAlert } = views

// main
const Main = () => {
  return (
    <Provider store={store}>
      <GlobalLoader />
      <GlobalAlert />

      <Navigations />
    </Provider>
  )
}

export default Main
