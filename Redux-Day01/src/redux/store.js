import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'

// this is where we will create our store and add our reducers to it
export const store = configureStore({
    reducer: {
        // Add your reducers here
        counter:counterReducer
    }
})