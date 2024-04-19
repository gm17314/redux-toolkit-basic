# Basic of React redux toolkit


## Step 1. install react-redux and redux toolkit
 npm install @reduxjs/toolkit react-redux 


## Step 2. Create a Redux Store
Create store in  in src/app/store.js. This is our main store, we will access all the state from this store

 javascript 
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})



## Step 3. Provide the Redux Store to React
 javascript

import { store } from './app/store'
import { Provider } from 'react-redux'

<Provider store={store}>
    <App />
</Provider>



## Step 4. Create a Redux State Slice
 javascript 
// import create slice
import { createSlice } from '@reduxjs/toolkit'


// create initial state
const initialState = {
    countValue: 0
}


export const counterSlice = createSlice({

    name: 'counter',
    initialState,

    // define reducers: these are functions (actions) which help to update our states
    reducers: {
        increment: (state) => {
            state.countValue += 1;
        },

        decrement: (state) => {
            state.countValue -= 1
        },

        incrementByValue: (state, action) => {
            state.countValue += action.payload;
        }
    },
})



// console.log(counterSlice.reducer)


export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;



## Step 5. Add Slice Reducers to the Store
 javascript 
// import configureStore
import { configureStore } from "@reduxjs/toolkit";

// import reducers
import counterReducer from "../features/counterSlice";
import abcReducer from "../features/abcSlice";

export const store = configureStore({
    reducer: {
        // we will access our states with these names
        counter: counterReducer,
        abc: abcReducer
    }
});



## Step 6. Access our states
we can access states using useSelector() hook
 javascript 
const count = useSelector(store => store.counter.countValue); 
 


## Step 7. Update states
we can update states using useDispatch() hook
 javascript 
const dispatch = useDispatch()