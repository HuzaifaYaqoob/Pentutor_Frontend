
import { combineReducers } from 'redux'

// all Reducers 
import UserReducers from './reducers/UserReducers/UserReducer'
import ProfileReducer from './reducers/ProfileReducer/ProfileReducer'
import UtilityReducer from './reducers/UtilityReducer.js/UtilityReducers'
import TutorsReducers from './reducers/TutorReducers/TutorReducer'

const root_reducer = combineReducers({
    user: UserReducers,
    user_profile: ProfileReducer,
    utility: UtilityReducer,
    tutor: TutorsReducers
})

export default root_reducer