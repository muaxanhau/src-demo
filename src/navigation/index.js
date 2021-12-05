import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stacks from './Stacks/index'

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  )
}

export default AppNavigator
