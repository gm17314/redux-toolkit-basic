import { createSlice } from "@reduxjs/toolkit";

const initialState = {greet:"hello"}

export const helloSlice = createSlice({
    name:"helloSlice",
    initialState,
    reducers:{

    }
}) 

export default helloSlice.reducer