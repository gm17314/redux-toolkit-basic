import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counterSlice'
import helloReducer from '../feature/helloSlice'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    hello: helloReducer
  }
})



