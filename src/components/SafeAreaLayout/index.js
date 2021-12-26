import React from 'react'
import { View, StatusBar } from 'react-native'
import { Styles } from './../../constants'

const SafeAreaLayout = ({
  children,
  top = true,
  bottom = true,
  hiddenStatusBar = false
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: top ? Styles.safeAreaTop : 0,
        paddingBottom: bottom ? Styles.safeAreaBottom : 0
      }}
    >
      <StatusBar hidden={hiddenStatusBar} animated={true} />
      {children}
    </View>
  )
}

export default SafeAreaLayout
