

import { GET_ALL_COUNTRIES } from "../../ActionsTypes/UtilityActionTypes";

const initialState = {
    countries: []
}


const UtilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries : action.payload.response
            }
        default:
            return state
    }
}

export default UtilityReducer