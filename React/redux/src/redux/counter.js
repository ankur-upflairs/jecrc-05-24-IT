
import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    value: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase:(state, action) => {
         state.value+=1   
        },
        decrease:(state, action) => {
            state.value-=1
        }

    }
})

export default counterSlice.reducer
export const {increase, decrease} = counterSlice.actions



