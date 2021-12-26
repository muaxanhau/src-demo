import AsyncStorage from '@react-native-async-storage/async-storage'

export default Token = {
  get: async () => {
    try {
      return await AsyncStorage.getItem('@token')
    } catch (e) {}
  },
  set: async value => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {}
  },
  remove: async () => {
    try {
      await AsyncStorage.removeItem('@token')
    } catch (e) {}
  }
}
