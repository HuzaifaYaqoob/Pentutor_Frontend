
import { combineReducers } from 'redux'

// all Reducers 
import UserReducers from './reducers/UserReducers/UserReducer'

const root_reducer = combineReducers({
    user : UserReducers,
})

export default root_reducer