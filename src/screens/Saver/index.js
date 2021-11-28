import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Easing, Animated } from 'react-native'
import { Styles } from '../../constants/index'

// contants
const { padding, width, height } = Styles
const LOGO_CONTAINER_SIZE = 100
const LOGO_DURATION = 2000

// main
const Saver = () => {
  // constants
  const logoAnimatedValueX = useRef(new Animated.Value(0)).current
  const logoAnimatedValueY = useRef(new Animated.Value(0)).current

  // functions
  const moveLogo = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoAnimatedValueX, {
          toValue: 1,
          duration: LOGO_DURATION,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(logoAnimatedValueX, {
          toValue: 0,
          duration: LOGO_DURATION,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ])
    ).start()

    Animated.loop(
      Animated.sequence([
        Animated.timing(logoAnimatedValueY, {
          toValue: 1,
          duration: LOGO_DURATION * (height / width),
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(logoAnimatedValueY, {
          toValue: 0,
          duration: LOGO_DURATION * (height / width),
          easing: Easing.linear,
          useNativeDriver: true
        })
      ])
    ).start()
  }

  const translateX = logoAnimatedValueX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width - LOGO_CONTAINER_SIZE]
  })

  const translateY = logoAnimatedValueY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height - LOGO_CONTAINER_SIZE]
  })

  // effects
  useEffect(() => {
    moveLogo()
  }, [])

  // render
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Animated.View
        style={[
          styles.wrapper,
          {
            transform: [{ translateX }, { translateY }]
          }
        ]}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Saver</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding,
    justifyContent: 'center',
    justifyContent: 'center',
    width: LOGO_CONTAINER_SIZE,
    aspectRatio: 1,
    borderRadius: LOGO_CONTAINER_SIZE / 2,
    backgroundColor: 'purple'
  }
})

export default Saver
