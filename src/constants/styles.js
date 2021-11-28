import { Dimensions, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

const Styles = {
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

export default Styles
