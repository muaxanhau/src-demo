import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { actions } from './../../features/index'

// constants

// main
const Detail = () => {
  // constants
  const { callPureApiActions } = actions
  const navigation = useNavigation()
  const dispatch = useDispatch()

  // effects
  useEffect(() => {
    dispatch(
      callPureApiActions.example({
        data: {
          value1: 'value 1',
          value2: 'value 2'
        },
        params: {
          param1: 'param 1',
          param2: 'param 2'
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        callback: {
          onSuccess: response => {
            console.log('từ view')
          },
          onError: error => {
            console.log('từ view')
          },
          onFinally: data => {
            console.log('từ view')
          }
        }
      })
    )
  }, [])

  // render
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Detail
