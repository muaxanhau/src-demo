import React, { useRef } from 'react'
import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NameScreens } from './../../constants'
import { DummyData, Styles } from '../../constants'
import { Swipeable } from 'react-native-gesture-handler'

// constants
const {
  safeAreaTop,
  padding,
  paddingHorizontal,
  paddingVertical,
  itemSpacing,
  borderRadius,
  width,
  height,
  fontSize,
  fontSizeMedium
} = Styles
const listData = DummyData.listListScreen
const HEIGHT_ITEM = 200

// main
const List = () => {
  // constants
  const navigation = useNavigation()
  const scrollY = useRef(new Animated.Value(0)).current
  const swipeItemsRef = useRef([])

  // render
  return (
    <>
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY
                  }
                }
              }
            ],
            { useNativeDriver: true }
          )}
          data={listData}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{
            paddingTop:
              safeAreaTop + (Platform.OS === 'ios' ? 0 : paddingVertical)
          }}
          snapToInterval={HEIGHT_ITEM + itemSpacing}
          onScrollBeginDrag={event => {
            swipeItemsRef.current.forEach(item => item.close())
          }}
          renderItem={({ item, index }) => {
            const realHeight = HEIGHT_ITEM + itemSpacing
            const inputRange = [
              -1,
              realHeight * index,
              realHeight * (index + 1),
              realHeight * (index + 2)
            ]
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 0, 0]
            })

            return (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(NameScreens.detail)}
              >
                <View>
                  <Swipeable
                    ref={element => {
                      swipeItemsRef.current[index] = element
                    }}
                    friction={2}
                    renderRightActions={(progress, dragX) => {
                      const opacity = dragX.interpolate({
                        inputRange: [-width * 0.3, 0],
                        outputRange: [1, 0]
                      })

                      return (
                        <Animated.View
                          style={{
                            width: width * 0.3,
                            justifyContent: 'center',
                            opacity
                          }}
                        >
                          <TouchableOpacity
                            style={{ marginBottom: itemSpacing }}
                            onPress={() => swipeItemsRef.current[index].close()}
                          >
                            <View
                              style={{
                                width: width * 0.3 - paddingHorizontal,
                                borderRadius: padding * 2 + fontSize,
                                padding,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(55, 22, 155, 0.4)'
                              }}
                            >
                              <Text style={{ fontSize }}>Yêu thích</Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => swipeItemsRef.current[index].close()}
                          >
                            <View
                              style={{
                                width: width * 0.3 - paddingHorizontal,
                                borderRadius: padding * 2 + fontSize,
                                padding,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 33, 55, 0.4)'
                              }}
                            >
                              <Text style={{ fontSize }}>Hạn chế</Text>
                            </View>
                          </TouchableOpacity>
                        </Animated.View>
                      )
                    }}
                  >
                    <Animated.View
                      style={{
                        marginHorizontal: paddingHorizontal,
                        marginBottom: itemSpacing,
                        height: HEIGHT_ITEM,
                        backgroundColor: 'rgba(225,225,225,1)',
                        borderRadius,
                        overflow: 'hidden',
                        flexDirection: 'row',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.8,
                        shadowRadius: 50,
                        elevation: 12,
                        transform: [{ scale }]
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        resizeMode='cover'
                        style={{
                          width: HEIGHT_ITEM,
                          aspectRatio: 1,
                          borderRadius
                        }}
                      />
                      <View style={{ flex: 1, padding }}>
                        <Text style={{ fontSize: fontSizeMedium }}>
                          {item.name}
                        </Text>
                        <Text style={{ fontSize }}>{item.description}</Text>
                      </View>
                    </Animated.View>
                  </Swipeable>
                </View>
              </TouchableWithoutFeedback>
            )
          }}
          ListFooterComponent={() => (
            <View
              style={{
                height:
                  height -
                  (HEIGHT_ITEM + itemSpacing + paddingVertical + safeAreaTop)
              }}
            ></View>
          )}
        />
      </View>
    </>
  )
}

export default List
