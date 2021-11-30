import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { views } from './features/index'
import Navigations from './navigations/index'

const Main = () => {
  // constant
  const { GlobalLoader } = views

  // main
  return (
    <Provider store={store}>
      <GlobalLoader />

      <Navigations />
    </Provider>
  )
}

export default Main
