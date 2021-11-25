import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/index'
import List from '../screens/List/index'
import Screen3 from '../screens/Screen3/index'
import Saver from './../screens/Saver/index'
import Detail from './../screens/Detail/index'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='List'
          component={List}
          options={{
            gestureEnabled: true
          }}
        />
        <Stack.Screen
          options={
            {
              // gestureEnabled: false
            }
          }
          name='Screen3'
          component={Screen3}
        />
        <Stack.Screen name='Saver' component={Saver} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
