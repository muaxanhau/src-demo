import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { authActions } from './../../features/Authentication/authSlice'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title='Login'
        onPress={() => {
          dispatch(
            authActions.login({
              data: { username: 'thinh', password: '123456' },
              callback: {
                onSuccess: () => {
                  navigation.navigate('List')
                },
                onError: () => {
                  // Alert.alert('Thông báo', 'Đăng nhập thất bại')
                }
              }
            })
          )
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Saver')}
        style={{ marginTop: 30 }}
      >
        <Text>Saver</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Screen3')}
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
  },
  text: {
    fontSize: 30
  }
})

export default Home
