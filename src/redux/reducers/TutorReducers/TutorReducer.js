
import { GET_ALL_TUTORS } from "../../ActionsTypes/TutorsTypes"


const initialState = {
    all_tutors: []
}


const TutorsReducers = (state = initialState, action) => {
    switch (action.type) {

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