import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MotiView, MotiImage, MotiText } from 'moti'
import { Styles } from '../../constants/index'

const Screen1 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan'
      }}
    >
      <Text>Sreen 1</Text>
    </View>
  )
}
const Screen2 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'violet'
      }}
    >
      <Text>Sreen 2</Text>
    </View>
  )
}
const Screen3 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
      }}
    >
      <Text>Sreen 3</Text>
    </View>
  )
}
const Screen4 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
      }}
    >
      <Text>Sreen 4</Text>
    </View>
  )
}

//=======================================

const BACKGROUND_COLOR = '#C8BFE7'
const HEIGHT_BAR = 65
const HEIGHT_HALF_CIRCLE_BAR = 46 // < HEIGHT_BAR
const SIZE_ICON = 40
const OFFSET_ICON = 5
const BORDER_RADIUS_BAR = 15
const FONT_SIZE_BAR = 15

const TabChild = ({ descriptors, state, navigation, route, index }) => {
  // constants
  const { options } = descriptors[route.key]

  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name

  const iconNone = options.tabBarIcon.none
  const iconFocused = options.tabBarIcon.focused

  const isFocused = state.index === index

  // handles
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true
    })

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true })
    }
  }

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key
    })
  }

  // render
  return (
    <TouchableOpacity
      accessibilityRole='button'
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <MotiImage
          animate={{
            scale: isFocused ? 0.6 : 1,
            translateY: isFocused
              ? HEIGHT_BAR / 2 - HEIGHT_BAR + BORDER_RADIUS_BAR
              : 0
          }}
          transition={{
            type: isFocused ? 'spring' : 'timing',
            duration: 100
          }}
          source={isFocused ? iconFocused : iconNone}
          resizeMode='cover'
          style={{
            position: 'absolute',
            width: SIZE_ICON,
            height: SIZE_ICON
          }}
        />

        <MotiText
          animate={{
            translateY: isFocused
              ? -(HEIGHT_BAR - HEIGHT_HALF_CIRCLE_BAR - (FONT_SIZE_BAR + 4)) / 2
              : FONT_SIZE_BAR + 4,
            opacity: isFocused ? 1 : 0
          }}
          transition={{
            type: 'timing',
            duration: 500,
            opacity: {
              duration: 250
            }
          }}
          style={{
            position: 'absolute',
            color: '#673ab7',
            fontSize: FONT_SIZE_BAR,
            bottom: 0
          }}
        >
          {label}
        </MotiText>
      </View>
    </TouchableOpacity>
  )
}

const TabBar = ({ state, descriptors, navigation }) => {
  // constants
  const widthBar = Styles.width
  const totalTab = Object.keys(descriptors).length
  const [indexFocused, setIndexFocused] = useState(0)

  // effects
  useEffect(() => {
    const descriptorsArr = Object.values(descriptors)
    for (let i = 0; i < descriptorsArr.length; i++) {
      const { isFocused } = descriptorsArr[i].navigation
      if (isFocused()) {
        setIndexFocused(prev => (prev = i))
        break
      }
    }
  }, [descriptors])

  // render
  return (
    <View
      style={{
        flexDirection: 'row',
        height: HEIGHT_BAR,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden'
        }}
      >
        <MotiView
          animate={{
            translateX: (totalTab - (indexFocused + 1)) * -(widthBar / totalTab)
          }}
          transition={{
            type: 'timing',
            duration: 150
          }}
          style={{
            position: 'absolute',
            flexDirection: 'row',
            height: HEIGHT_HALF_CIRCLE_BAR,
            width: widthBar * 2 - widthBar / totalTab,
            top: 0,
            left: 0
          }}
        >
          <View style={{ flexGrow: 1, backgroundColor: BACKGROUND_COLOR }} />
          <View
            style={{
              height: HEIGHT_HALF_CIRCLE_BAR,
              aspectRatio: 2 / 1,
              overflow: 'hidden',
              zIndex: 10
            }}
          >
            <View
              style={{
                position: 'absolute',
                width: BORDER_RADIUS_BAR * 2,
                height: HEIGHT_HALF_CIRCLE_BAR,
                backgroundColor: BACKGROUND_COLOR,
                borderTopRightRadius: BORDER_RADIUS_BAR,
                left: -BORDER_RADIUS_BAR,
                zIndex: 10
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: BORDER_RADIUS_BAR * 2,
                height: HEIGHT_HALF_CIRCLE_BAR,
                backgroundColor: BACKGROUND_COLOR,
                borderTopLeftRadius: BORDER_RADIUS_BAR,
                right: -BORDER_RADIUS_BAR,
                zIndex: 10
              }}
            />
            <View
              style={{
                position: 'relative',
                width: HEIGHT_HALF_CIRCLE_BAR * 2 - BORDER_RADIUS_BAR * 2,
                aspectRatio: 2 / 1,
                top: BORDER_RADIUS_BAR,
                left: BORDER_RADIUS_BAR,
                overflow: 'hidden'
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  width: (HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR) * 4,
                  aspectRatio: 1,
                  borderRadius:
                    (HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR) * 2,
                  borderWidth: HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR,
                  top: -(HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR) * 2,
                  left: -(HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR),
                  borderColor: BACKGROUND_COLOR
                }}
              />
            </View>
          </View>
          <View style={{ flexGrow: 1, backgroundColor: BACKGROUND_COLOR }} />
        </MotiView>

        <View
          style={{
            position: 'absolute',
            backgroundColor: BACKGROUND_COLOR,
            height: HEIGHT_BAR - HEIGHT_HALF_CIRCLE_BAR,
            bottom: 0,
            left: 0,
            right: 0
          }}
        />
      </View>

      <MotiView
        animate={{
          translateX: (totalTab - (indexFocused + 1)) * -(widthBar / totalTab)
        }}
        transition={{
          type: 'timing',
          duration: 150
        }}
        style={{
          width: (HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR - OFFSET_ICON) * 2,
          aspectRatio: 1,
          borderRadius:
            HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR - OFFSET_ICON,
          backgroundColor: 'pink',
          position: 'absolute',
          bottom: HEIGHT_BAR - HEIGHT_HALF_CIRCLE_BAR + OFFSET_ICON,
          left:
            widthBar -
            widthBar / totalTab +
            (widthBar / totalTab -
              (HEIGHT_HALF_CIRCLE_BAR - BORDER_RADIUS_BAR - OFFSET_ICON) * 2) /
              2
        }}
      />

      {state.routes.map((route, index) => (
        <TabChild
          key={index.toString()}
          descriptors={descriptors}
          state={state}
          navigation={navigation}
          route={route}
          index={index}
        />
      ))}
    </View>
  )
}

export { TabBar, Screen1, Screen2, Screen3, Screen4 }
