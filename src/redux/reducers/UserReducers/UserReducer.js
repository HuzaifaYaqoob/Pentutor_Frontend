
import { LOGIN_USER, REGISTER_USER } from "../../ActionsTypes/UserActionsType"

const initialState = {
    value: 0,
    userData: {},
    loggedIn: false
}

const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, userData: action.payload, loggedIn: true }
        case REGISTER_USER :
            return state
        default:
            return state
    }
}

export default UserReducers
