import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Detail, Home, List, Saver, Screen3, MainTab } from './../../screens'
import { NameScreens } from './../../constants'

// constants
const Stack = createStackNavigator()
const screenOptions = {
  headerShown: false
}

// main
const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={NameScreens.home} component={Home} />
      <Stack.Screen name={NameScreens.list} component={List} />
      <Stack.Screen name={NameScreens.screen3} component={Screen3} />
      <Stack.Screen name={NameScreens.saver} component={Saver} />
      <Stack.Screen name={NameScreens.detail} component={Detail} />
      <Stack.Screen name={NameScreens.mainTab} component={MainTab} />
    </Stack.Navigator>
  )
}

export default Stacks
