
import Cookies from "js-cookie";
import { apiBaseURL, login_user, user } from "../../apiURLs";
import { LOGIN_USER, REGISTER_USER } from "../../ActionsTypes/UserActionsType";


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
        apiBaseURL + user,
        reg_req
    )
        .then(respose => {
            rs_code = respose.status
            if (rs_code == 201) {
                return respose.json()
            }
        })
        .then(result => {
            if (rs_code == 201) {
                console.log(result)
                dispatch({
                    type : REGISTER_USER,
                    payload : result
                })
            }
        })
        .then(() => {
            if (rs_code == 201) {
                success && success()
            }
            else {
                fail && fail()
            }
        })
        .catch(error => {
            console.log('ERROR :', error)
            fail && fail()
        })

}