

import { GET_USER_PROFILE, CREATE_USER_PROFILE , UPDATE_USER_PROFILE } from "../../ActionsTypes/ProfileActionTypes"


const initialState = {
    profile : {},
    updated_ : false
}

const ProfileReducer = (state = initialState , action) => {
    switch(action.type){

        case GET_USER_PROFILE:
            return {
                ...state,
                updated_ : true,
                profile : action.payload.data
            }
        
        case CREATE_USER_PROFILE:
            return {
                ...state,
                profile:action.payload.data
            }
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                profile : action.payload.data
            }
        default:
            return state
    }
}

export default ProfileReducer