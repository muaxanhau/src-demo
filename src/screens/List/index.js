import React, { useRef, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native'
import Styles from './../../constants/styles'
import { Swipeable } from 'react-native-gesture-handler'

// constants
const {
  statusBarHeight,
  padding,
  paddingHorizontal,
  paddingVertical,
  gap,
  borderRadius,
  width,
  height,
  fontSize,
  fontSizeMedium
} = Styles
const ITEM_HEIGHT = 200

// fake data
const DATA = [
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  },
  {
    name: 'Bánh xèo miền quê',
    description: 'Được tạo thành từ bàn tay miền dân dã...',
    image:
      'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
  }
]

// elements

// main
const List = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current
  const swipeRefs = useRef([])

  return (
    <View style={styles.container}>
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
        data={DATA}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingVertical
        }}
        snapToInterval={ITEM_HEIGHT + gap}
        onScrollBeginDrag={event => {
          swipeRefs.current.forEach(item => item.close())
        }}
        renderItem={({ item, index }) => {
          const realHeight = ITEM_HEIGHT + gap
          const inputRange = [
            0,
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
              onPress={() => navigation.navigate('Detail')}
            >
              <View>
                <Swipeable
                  ref={element => {
                    swipeRefs.current[index] = element
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
                          style={{ marginBottom: gap }}
                          onPress={() => swipeRefs.current[index].close()}
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
                          onPress={() => swipeRefs.current[index].close()}
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
                      marginBottom: gap,
                      height: ITEM_HEIGHT,
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
                        width: ITEM_HEIGHT,
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
                (ITEM_HEIGHT + gap + paddingVertical * 2 + statusBarHeight)
            }}
          ></View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default List
