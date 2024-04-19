import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment : (state)=>{
        state.count += 1
    },
    incrementByValue : (state,action)=>{
        state.count += action.payload
    },
    decrement : (state)=>{
        state.count -= 1
    },
    decrementByValue : (state,action)=>{
        state.count -= action.payload
    },
    
  },
})

export const { increment,incrementByValue,decrement,decrementByValue } = counterSlice.actions
export default counterSlice.reducer