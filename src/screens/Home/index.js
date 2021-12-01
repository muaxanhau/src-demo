import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NameScreen } from './../../constants/index'
import { useDispatch } from 'react-redux'
import { actions } from './../../features/index'

// constants

// main
const Home = () => {
  // constants
  const navigation = useNavigation()
  const { authenticationActions } = actions
  const dispatch = useDispatch()

  // effects

  // handles
  const handleLogin = () => {
    dispatch(
      authenticationActions.login({
        data: { username: 'thinh', password: '123456' },
        callback: {
          onSuccess: response => {
            navigation.navigate(NameScreen.list)
          },
          onError: error => {},
          onFinally: () => {}
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
        onPress={() => navigation.navigate(NameScreen.saver)}
        style={{ marginTop: 30 }}
      >
        <Text>Saver</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(NameScreen.screen3)}
        style={{ marginTop: 30 }}
      >
        <Text>Test Carousel</Text>
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
