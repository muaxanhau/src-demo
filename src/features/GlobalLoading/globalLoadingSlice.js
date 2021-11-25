import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  enabled: false
}

const globalLoadingSlice = createSlice({
  name: 'globalLoading',
  initialState,
  reducers: {
    enable: state => {
      state.enabled = true
    },
    disable: state => {
      state.enabled = false
    }
  }
})

export const globalLoadingActions = globalLoadingSlice.actions

export const globalLoadingState = state => state.globalLoading

export default globalLoadingSlice.reducer
