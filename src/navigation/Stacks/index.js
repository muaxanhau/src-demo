import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Detail,
  Home,
  List,
  Saver,
  Screen3,
  MainTab
} from './../../screens/index'
import { NameScreen } from '../../constants/index'

// constants
const Stack = createStackNavigator()
const screenOptions = {
  headerShown: false
}

// main
const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={NameScreen.home} component={Home} />
      <Stack.Screen name={NameScreen.list} component={List} />
      <Stack.Screen name={NameScreen.screen3} component={Screen3} />
      <Stack.Screen name={NameScreen.saver} component={Saver} />
      <Stack.Screen name={NameScreen.detail} component={Detail} />
      <Stack.Screen name={NameScreen.mainTab} component={MainTab} />
    </Stack.Navigator>
  )
}

export default Stacks
