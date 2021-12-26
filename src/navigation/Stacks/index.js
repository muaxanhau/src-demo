import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Detail, Home, List, Saver, Screen3, MainTab } from './../../screens'
import { Screens } from './../../constants'

// constants
const Stack = createStackNavigator()
const screenOptions = {
  headerShown: false
}

// main
const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Screens.home} component={Home} />
      <Stack.Screen name={Screens.list} component={List} />
      <Stack.Screen name={Screens.screen3} component={Screen3} />
      <Stack.Screen name={Screens.saver} component={Saver} />
      <Stack.Screen name={Screens.detail} component={Detail} />
      <Stack.Screen name={Screens.mainTab} component={MainTab} />
    </Stack.Navigator>
  )
}

export default Stacks
