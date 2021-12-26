import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { NameScreens, NameStorageKeys } from './../../constants'
import { AsyncStorages } from './../../utils'
import { useDispatch } from 'react-redux'
import { actions } from './../../features'
import { useNavigation } from '@react-navigation/native'

// main
const Home = () => {
  // constants
  const navigation = useNavigation()
  const { authenticationActions } = actions
  const dispatch = useDispatch()

  // effects
  React.useLayoutEffect(() => {
    AsyncStorages.getItem(NameStorageKeys.token).then(value => {
      !!value && navigation.push(NameScreens.list)
    })
  })

  // handles
  const handleLogin = () => {
    dispatch(
      authenticationActions.login({
        data: { username: 'thinh', password: '123456' },
        callback: {
          onSuccess: response => {
            navigation.push(NameScreens.list)
          },
          onError: error => { },
          onFinally: () => { }
        }
      })
    )
  }

  // render
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Home</Text>

      <TouchableOpacity onPress={handleLogin} style={{ marginTop: 30 }}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(NameScreens.saver)}
        style={{ marginTop: 30 }}
      >
        <Text>Saver</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(NameScreens.screen3)}
        style={{ marginTop: 30 }}
      >
        <Text>Test Carousel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(NameScreens.mainTab)}
        style={{ marginTop: 30 }}
      >
        <Text>Main Tab</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
