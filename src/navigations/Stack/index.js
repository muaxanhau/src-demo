import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Detail, Home, List, Saver, Screen3 } from './../../screens/index'
import { NameScreen } from '../../constants/index'

const StackNav = createStackNavigator()

const screenOptions = {
  headerShown: false
}

const Stack = () => {
  return (
    <StackNav.Navigator screenOptions={screenOptions}>
      <StackNav.Screen name={NameScreen.home} component={Home} />
      <StackNav.Screen name={NameScreen.list} component={List} />
      <StackNav.Screen name={NameScreen.screen3} component={Screen3} />
      <StackNav.Screen name={NameScreen.saver} component={Saver} />
      <StackNav.Screen name={NameScreen.detail} component={Detail} />
    </StackNav.Navigator>
  )
}

export default Stack
