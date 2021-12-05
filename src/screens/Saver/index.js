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
  const randomPositionX = useRef(Math.random()).current
  const randomPositionY = useRef(Math.random()).current

  const translateX = useRef(
    new Animated.Value(randomPositionX * (width - LOGO_CONTAINER_SIZE))
  ).current
  const translateY = useRef(
    new Animated.Value(randomPositionY * (height - LOGO_CONTAINER_SIZE))
  ).current

  // functions
  const moveLogo = () => {
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: width - LOGO_CONTAINER_SIZE,
        duration: LOGO_DURATION * (1 - randomPositionX),
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: 0,
            duration: LOGO_DURATION,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(translateX, {
            toValue: width - LOGO_CONTAINER_SIZE,
            duration: LOGO_DURATION,
            easing: Easing.linear,
            useNativeDriver: true
          })
        ])
      )
    ]).start()

    Animated.sequence([
      Animated.timing(translateY, {
        toValue: height - LOGO_CONTAINER_SIZE,
        duration: LOGO_DURATION * (height / width) * (1 - randomPositionY),
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: 0,
            duration: LOGO_DURATION * (height / width),
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(translateY, {
            toValue: height - LOGO_CONTAINER_SIZE,
            duration: LOGO_DURATION * (height / width),
            easing: Easing.linear,
            useNativeDriver: true
          })
        ])
      )
    ]).start()
  }

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
