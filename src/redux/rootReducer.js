
import { combineReducers } from 'redux'

// all Reducers 
import UserReducers from './reducers/UserReducers/UserReducer'
import ProfileReducer from './reducers/ProfileReducer/ProfileReducer'
import UtilityReducer from './reducers/UtilityReducer.js/UtilityReducers'

const root_reducer = combineReducers({
    user: UserReducers,
    user_profile: ProfileReducer,
    utility: UtilityReducer
})

export default root_reducer