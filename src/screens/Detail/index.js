import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { actions } from './../../features/index'

// main
const Detail = () => {
  // constants
  const { callPureApiActions } = actions
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
            console.log('success từ view')
          },
          onError: error => {
            console.log('error từ view')
          },
          onFinally: () => {
            console.log('finally từ view')
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
