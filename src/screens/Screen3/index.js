import React, { useRef } from 'react'
import { View, StyleSheet, FlatList, Text, Image, Animated } from 'react-native'
import { DummyData, Styles } from './../../constants/index'

// constants
const { width, height } = Styles
const wImg = width * 0.75
const hImg = height * 0.75
const imagesSource = DummyData.imagesScreen3

// main
const Screen3 = () => {
  // constants
  const scrollX = useRef(new Animated.Value(0)).current

  // render
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          width,
          height
        }}
      >
        {imagesSource.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })
          return (
            <Animated.Image
              key={index.toString()}
              style={{ position: 'absolute', width, height, opacity }}
              source={{ uri: item.uri }}
              blurRadius={3}
            />
          )
        })}
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true
          }
        )}
        data={imagesSource}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  borderRadius: 20,
                  borderColor: 'blue',
                  borderWidth: 5,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 1,
                  shadowRadius: 20,
                  elevation: 20,
                  overflow: 'hidden'
                }}
              >
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    width: wImg,
                    height: hImg,
                    resizeMode: 'cover'
                  }}
                />
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Screen3
