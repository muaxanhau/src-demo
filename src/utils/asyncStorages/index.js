import AsyncStorage from '@react-native-async-storage/async-storage'

const getItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) { }
}

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) { }
}

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) { }
}

const getAllItems = async () => {
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch (e) { }
}

const removeAllItems = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) { }
}

const AsyncStorages = {
  getItem,
  setItem,
  removeItem,
  getAllItems,
  removeAllItems
}

export default AsyncStorages