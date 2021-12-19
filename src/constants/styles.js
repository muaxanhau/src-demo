import { Dimensions, StatusBar, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const rootStyles = {
  statusBar: {
    height: Platform.OS === 'ios' ? StatusBar.currentHeight || 42 : 0
  },
  screen: {
    width,
    height
  },
  padding: {
    all: 10,
    vertical: 15,
    horizontal: 20
  },
  margin: {
    all: 15,
    vertical: 17,
    horizontal: 22
  },
  item: {
    spacing: 10
  },
  font: {
    size: {
      normal: 15,
      medium: 20,
      large: 35
    },
    weight: {
      normal: 'normal',
      bold: 'bold'
    }
  },
  border: {
    width: {
      normal: 1,
      medium: 3,
      large: 6
    },
    radius: {
      normal: 15,
      medium: 25,
      large: 40
    }
  }
}

const Styles = {
  statusBarHeight: rootStyles.statusBar.height,
  width: rootStyles.screen.width,
  height: rootStyles.screen.height,
  padding: rootStyles.padding.all,
  paddingVertical: rootStyles.padding.vertical,
  paddingHorizontal: rootStyles.padding.horizontal,
  margin: rootStyles.margin.all,
  marginVertical: rootStyles.margin.vertical,
  marginHorizontal: rootStyles.margin.horizontal,
  itemSpacing: rootStyles.item.spacing,
  fontSize: rootStyles.font.size.normal,
  fontSizeMedium: rootStyles.font.size.medium,
  fontSizeLarge: rootStyles.font.size.large,
  fontWeight: rootStyles.font.weight.normal,
  fontWeightBold: rootStyles.font.weight.bold,
  borderWidth: rootStyles.border.width.normal,
  borderWidthMedium: rootStyles.border.width.medium,
  borderWidthLarge: rootStyles.border.width.large,
  borderRadius: rootStyles.border.radius.normal,
  borderRadiusMedium: rootStyles.border.radius.medium,
  borderRadiusLarge: rootStyles.border.radius.Large,
  //=============================================
  textStyles: {
    fontSize: rootStyles.font.size.normal,
    fontWeight: rootStyles.font.weight.normal
  },
  boldTextStyles: {
    fontSize: rootStyles.font.size.normal,
    fontWeight: rootStyles.font.weight.bold
  },
  titleStyles: {
    fontSize: rootStyles.font.size.medium,
    fontWeight: rootStyles.font.weight.bold
  }
}

export default Styles
