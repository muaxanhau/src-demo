import AsyncStorage from '@react-native-async-storage/async-storage'

export default All = {
  get: async () => {
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e) {}
  },
  remove: async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {}
  }
}
