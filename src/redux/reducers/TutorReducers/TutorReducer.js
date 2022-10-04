
import { GET_ALL_TUTORS, GET_FEATURED_TUTORS } from "../../ActionsTypes/TutorsTypes"


const initialState = {
    all_tutors: [],
    featured_tutors: [],
    featured_tutors_updated_: false
}


const TutorsReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEATURED_TUTORS:
            return {
                ...state,
                featured_tutors: action.payload,
                featured_tutors_updated_: true
            }

        case GET_ALL_TUTORS:
            return {
                ...state,
                all_tutors: action.payload
            }


        default:
            return state
    }
}

export default TutorsReducers