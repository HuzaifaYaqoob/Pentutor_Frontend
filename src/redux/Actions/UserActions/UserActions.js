
import Cookies from "js-cookie";
import { apiBaseURL, login_user } from "../../apiURLs";


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
                Cookies.set('auth_token' , result.user.auth_token)
                dispatch({
                    type: 'ACTION_TYPE_HERE',
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