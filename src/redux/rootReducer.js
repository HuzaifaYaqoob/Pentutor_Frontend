
import { combineReducers } from 'redux'

// all Reducers 
import LoginReducer from "./reducers/LoginSlice/LoginSlice"

const root_reducer = combineReducers({
    LoginReducer,
})

export default root_reducer