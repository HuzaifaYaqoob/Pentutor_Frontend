import { CREATE_COURSE } from "../../ActionsTypes/CourseActionTypes"







const initialState = {
    profile: {},
    updated_: false,
    my_courses: []
}

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COURSE:
            return {
                ...state,
                my_courses: [
                    ...state.my_courses,
                    action.payload
                ]
            }

        default:
            return state
    }
}

export default CourseReducer