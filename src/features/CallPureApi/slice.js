import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const callPureApiSlice = createSlice({
  name: 'callPureApi',
  initialState,
  reducers: {
    example: (state, action) => {
      // mô tả api
      // action.payload có cấu trúc
      // {
      //   data: {},
      //   params: {},
      //   headers: {},
      //   callback: {
      //     onSuccess: response => {},
      //     onError: error => {},
      //     onFinally: data => {}
      //   }
      // }
    }
  }
})

export const callPureApiActions = callPureApiSlice.actions

export default callPureApiSlice.reducer
