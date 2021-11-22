
import { combineReducers } from 'redux'

// all Reducers 
import UserReducers from './reducers/UserReducers/UserReducer'

const root_reducer = combineReducers({
    Login : UserReducers,
})

export default root_reducer