import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { detailScreensData, screenOptions } from './defaultValues'
import { TabBar } from './elements'

// constants
const Tab = createBottomTabNavigator()

// main
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <TabBar {...props} />}
    >
      {detailScreensData.map((item, index) => (
        <Tab.Screen
          key={index.toString()}
          name={item.route}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: {
              none: item.iconNone,
              focused: item.iconFocused
            }
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default MainTab
