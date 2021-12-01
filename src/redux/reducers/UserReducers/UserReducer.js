
import { LOGIN_USER, REGISTER_USER, GET_USER_DATA, LOGGOUT_USER } from "../../ActionsTypes/UserActionsType"

const initialState = {
    value: 0,
    userData: {},
    loggedIn: false
}

const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userData: action.payload,
                loggedIn: true
            }

        case REGISTER_USER:
            return state

        case GET_USER_DATA:
            return {
                ...state,
                userData: action.payload.response.user,
                loggedIn: true
            }
        case LOGGOUT_USER:
            return {
                ...state,
                userData: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default UserReducers
