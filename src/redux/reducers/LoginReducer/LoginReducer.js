

const initialState = {
    value: 0,
    userData: {}
}

const LoginReducer = (state = initialState , action ) => {
    switch (action.type){
        case 'ACTION_TYPE_HERE':
            return {...state, userData: action.payload}
        default:
            return state
    }
}

export default LoginReducer
