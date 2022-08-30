

import { ALL_COURSE_CATEGORIES, GET_ALL_COUNTRIES } from "../../ActionsTypes/UtilityActionTypes";

const initialState = {
    countries: [],
    categories: []
}


const UtilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_COURSE_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload.response
            }
        default:
            return state
    }
}

export default UtilityReducer