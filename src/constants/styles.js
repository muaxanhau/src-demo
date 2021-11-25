import { Dimensions, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Colors = {
  no1: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  no2: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  no3: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  no4: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  no5: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  no6: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  no7: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
}

export default Styles = {
  statusBarHeight: StatusBar.currentHeight,
  width,
  height,
  padding: 10,
  paddingHorizontal: 20,
  paddingVertical: 15,
  gap: 20,
  fontSize: 15,
  fontSizeMedium: 20,
  fontSizeLarge: 35,
  borderRadius: 15,
  borderRadiusMedium: 30
}
