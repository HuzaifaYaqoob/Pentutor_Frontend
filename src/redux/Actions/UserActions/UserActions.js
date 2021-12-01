
import Cookies from "js-cookie";
import { apiBaseURL, login_user, register_user, user_api } from "../../apiURLs";
import { LOGIN_USER, REGISTER_USER, GET_USER_DATA , LOGGOUT_USER } from "../../ActionsTypes/UserActionsType";


export const LoginUser = (login_cred, success, fail) => dispatch => {
    let login_form = new FormData()
    login_form.append('username', login_cred.username)
    login_form.append('password', login_cred.password)
    let login_req = {
        method: 'POST',
        body: login_form
    }
    let rs_code;
    fetch(
        apiBaseURL + login_user,
        login_req
    )
        .then(response => {
            rs_code = response.status
            if (rs_code == 201) {
                return response.json()
            }
        })
        .then(result => {
            if (rs_code == 201) {
                Cookies.set('auth_token', result.user.auth_token)
                dispatch({
                    type: LOGIN_USER,
                    payload: result
                })
            }
        })
        .then(() => {
            if (rs_code == 201) {
                success && success()
            }
            else if (rs_code == 404) {
                fail && fail()
            }
        })
        .catch(err => {
            console.log('ERROR :::: ', err)
        })
}


export const RegisterUser = (type, data, success, fail) => dispatch => {

    let reg_form = new FormData()

    reg_form.append('type', type)
    reg_form.append('first_name', data.first_name)
    reg_form.append('last_name', data.last_name)
    reg_form.append('email', data.email)
    reg_form.append('password', data.password)

    let reg_req = {
        method: 'POST',
        body: reg_form
    }
    let rs_code;
    fetch(
        apiBaseURL + register_user,
        reg_req
    )
        .then(respose => {
            rs_code = respose.status
            if (rs_code == 201 || rs_code == 400) {
                return respose.json()
            }
        })
        .then(result => {
            if (rs_code == 201) {
                console.log(result)
                dispatch({
                    type: REGISTER_USER,
                    payload: result
                })
                success && success()
            }
            else {
                fail && fail(result.message)
            }
        })
        .catch(error => {
            console.log('ERROR :', error)
            fail && fail(error.message)
        })
}


export const getUserData = (auth_token, success, fail) => dispatch => {
    let s_code;

    let u_req = {
        headers: {
            Authorization: `Token ${auth_token}`
        }
    }
    fetch(
        apiBaseURL + user_api,
        u_req
    )
        .then(response => {

            s_code = response.status
            if (s_code == 200) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                console.log(result)
                dispatch({
                    type: GET_USER_DATA,
                    payload: result
                })
            }
        })
        .then(err => {
            console.log('User Error : ', err)
        })
}

export const LoggoutUser = (success, fail) => dispatch => {
    try{
        dispatch({
            type : LOGGOUT_USER ,
        })
        success && success()
    }
    catch{
        fail && fail()
    }
}