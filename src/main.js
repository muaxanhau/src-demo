import React from 'react'
import AppProvider from './app/index'
import Navigations from './navigations/index'
import { views } from './features/index'

const Main = () => {
  // constant
  const { GlobalLoader } = views

  // render
  return (
    <AppProvider>
      <Navigations />

      <GlobalLoader />
    </AppProvider>
  )
}

export default Main
