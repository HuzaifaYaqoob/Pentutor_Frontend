
import { combineReducers } from 'redux'

// all Reducers 
import UserReducers from './reducers/UserReducers/UserReducer'
import ProfileReducer from './reducers/ProfileReducer/ProfileReducer'
import UtilityReducer from './reducers/UtilityReducer.js/UtilityReducers'
import TutorsReducers from './reducers/TutorReducers/TutorReducer'
import CourseReducer from './reducers/CourseReducer/Course'
import BlogReducer from './reducers/BlogReducer'

const root_reducer = combineReducers({
    user: UserReducers,
    user_profile: ProfileReducer,
    utility: UtilityReducer,
    tutor: TutorsReducers,
    course: CourseReducer,
    blog: BlogReducer,
})

export default root_reducer