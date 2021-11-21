

const initialState = {
    value: 0,
    userData: {},
    loggedIn : false
}

const LoginReducer = (state = initialState , action ) => {
    switch (action.type){
        case 'ACTION_TYPE_HERE':
            return {...state, userData: action.payload, loggedIn : true}
        default:
            return state
    }
}

export default LoginReducer
