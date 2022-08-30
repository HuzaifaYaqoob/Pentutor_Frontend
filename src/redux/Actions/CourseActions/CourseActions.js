


import { apiBaseURL, create_course } from "../../apiURLs"
import Cookies from "js-cookie";
import { CREATE_COURSE } from "../../ActionsTypes/CourseActionTypes";


export const createCourse = (data, success, fail) => dispatch => {
    let s_code;
    let form_data = new FormData()
    for (let key in data) {
        form_data.append(key, data[key])
    }
    fetch(
        apiBaseURL + create_course,
        {
            method: 'POST',
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            },
            body: form_data
        }
    )
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 201) {
                success && success()
                dispatch({
                    type: CREATE_COURSE,
                    payload: result.data
                })
            }
            else {
                fail && fail()
            }

        })
        .catch(err => {
            fail && fail()
            console.log(err)
        })
}