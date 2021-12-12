
import { combineReducers } from 'redux'

// all Reducers 
import UserReducers from './reducers/UserReducers/UserReducer'
import ProfileReducer from './reducers/ProfileReducer/ProfileReducer'

const root_reducer = combineReducers({
    user : UserReducers,
    user_profile : ProfileReducer
})

export default root_reducer