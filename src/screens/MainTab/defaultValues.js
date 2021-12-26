import { Icons } from './../../constants'
import { Screen1, Screen2, Screen3, Screen4 } from './elements'

const screenOptions = {
  headerShown: false
}

const detailScreensData = [
  {
    route: 'screen1',
    label: 'Screen 1',
    iconNone: Icons.example1,
    iconFocused: Icons.example2,
    component: Screen1
  },
  {
    route: 'screen2',
    label: 'Screen 2',
    iconNone: Icons.example1,
    iconFocused: Icons.example2,
    component: Screen2
  },
  {
    route: 'screen3',
    label: 'Screen 3',
    iconNone: Icons.example1,
    iconFocused: Icons.example2,
    component: Screen3
  },
  {
    route: 'screen4',
    label: 'Screen 4',
    iconNone: Icons.example1,
    iconFocused: Icons.example2,
    component: Screen4
  }
]

export { screenOptions, detailScreensData }
