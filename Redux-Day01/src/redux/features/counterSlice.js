import {createSlice} from '@reduxjs/toolkit'

// this is where we will create our slice for the counter feature
// name is not important but it is good practice to name it after the feature
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10
    },
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if(state.value > 0){
                state.value -= 1
            }
        },
        incrementBy : (state, actions)=>{
             state.value += actions.payload;
        },
    }
})

// this is where we will export our actions and reducer
export const {increment, decrement,incrementBy} = counterSlice.actions
export default counterSlice.reducer