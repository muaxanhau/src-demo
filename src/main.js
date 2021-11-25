import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './app/store'
import GlobalLoading from './features/GlobalLoading/index'
import GlobalAlert from './features/GlobalAlert/index'
import AppNavigator from './navigations/appNavigator'

const Main = () => {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <GlobalLoading />
        <GlobalAlert />

        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    </>
  )
}

export default Main
