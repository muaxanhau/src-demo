import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogined: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {},
    loginSuccess: state => {
      state.isLogined = true
    }
  }
})

export const authActions = authSlice.actions

export const authState = state => state.auth

export default authSlice.reducer
