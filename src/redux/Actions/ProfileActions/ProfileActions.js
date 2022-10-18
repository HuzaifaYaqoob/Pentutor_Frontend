
import Cookies from "js-cookie"
import { add_experience_url, add_qualification_url, apiBaseURL, profile } from "../../apiURLs"

import { GET_USER_PROFILE } from "../../ActionsTypes/ProfileActionTypes";

export const getUserProfile = (data, success, fail) => dispatch => {
    let s_code;

    fetch(
        apiBaseURL + profile,
        {
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            }
        }
    )
        .then(response => {
            s_code = response.status
            if (s_code == 200) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                dispatch(
                    {
                        type: GET_USER_PROFILE,
                        payload: result
                    }
                )
            }
        })
        .catch(err => {
            fail && fail()
        })
}


export const UpdateUserProfile = (data, success, fail) => dispatch => {
    let s_code;
    let update_form = new FormData()

    for (let dt_k in data) {
        if (data[dt_k]) {
            if (dt_k == 'user') {
                update_form.append(dt_k, JSON.stringify(data[dt_k]))
            }
            else {
                update_form.append(dt_k, data[dt_k])

            }
        }
    }

    fetch(
        apiBaseURL + profile,
        {
            method: 'PUT',
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            },
            body: update_form
        }
    )
        .then(response => {
            s_code = response.status
            if (s_code == 200) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                success && success()
                dispatch(
                    {
                        type: GET_USER_PROFILE,
                        payload: result
                    }
                )
            }
            else {
                fail && fail()
            }
        })
        .catch(err => {
            fail && fail()
        })

}


export const CreateQualification = (data, success, fail) => dispatch => {
    let s_code;

    let form_data = new FormData()

    for (let dt in data) {
        form_data.append(dt, data[dt])
    }

    fetch(
        apiBaseURL + add_qualification_url,
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
                success && success(result?.data)
            }
            else {
                fail && fail()
            }

        })
        .catch(err => {
            fail && fail()
        })
}

export const CreateExperience = (data, success, fail) => dispatch => {
    let s_code;

    let form_data = new FormData()

    for (let dt in data) {
        form_data.append(dt, data[dt])
    }

    fetch(
        apiBaseURL + add_experience_url,
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
                success && success(result?.data)
            }
            else {
                fail && fail()
            }

        })
        .catch(err => {
            fail && fail()
        })
}