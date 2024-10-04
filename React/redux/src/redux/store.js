import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'

let store=configureStore({
    reducer:{
        counter:counterReducer,        
    }
})
export default store





