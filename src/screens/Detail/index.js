import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NameStorageKeys } from './../../constants'
import { SafeAreaLayout } from '../../components'
import { AsyncStorages } from './../../utils'
import { useDispatch } from 'react-redux'
import { actions } from './../../features'
import { useNavigation } from '@react-navigation/native'


// main
const Detail = () => {
  // constants
  const navigation = useNavigation()
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
    <SafeAreaLayout top={true} bottom={true} hiddenStatusBar={false}>
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'cyan'
        }}
      >
        <Text>detail</Text>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: 'purple' }}
          onPress={() => {
            console.log('log out nè')
            AsyncStorages.removeItem(NameStorageKeys.token).then(() => {
              navigation.popToTop()
            })
          }}
        >
          <Text style={{ textAlign: 'center' }}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaLayout>
  )
}

export default Detail
