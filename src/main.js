import React from 'react'
import AppProvider from './app/index'
import AppNavigator from './navigation/index'
import { views } from './features/index'

const Main = () => {
  // constants
  const { GlobalLoader } = views

  // render
  return (
    <AppProvider>
      <AppNavigator />

      <GlobalLoader />
    </AppProvider>
  )
}

export default Main
