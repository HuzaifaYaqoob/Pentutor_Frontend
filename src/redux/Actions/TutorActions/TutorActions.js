

import Cookies from "js-cookie";
import { GET_ALL_TUTORS, GET_FEATURED_TUTORS } from "../../ActionsTypes/TutorsTypes";
import { apiBaseURL, get_all_tutors, get_featured_tutors_url, request_demo_class_url } from "../../apiURLs";


export const getAllTutors = () => dispatch => {
    let s_code;

    fetch(
        apiBaseURL + get_all_tutors,
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
                        type: GET_ALL_TUTORS,
                        payload: result.data
                    }
                )
            }
        })
        .catch(err => {
            console.log('TUTOR getting ERROR ::: ', err)
        })
}

export const get_featured_tutors = () => dispatch => {
    let s_code;
    fetch(
        apiBaseURL + get_featured_tutors_url,
    )
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                dispatch(
                    {
                        type: GET_FEATURED_TUTORS,
                        payload: result.tutors
                    }
                )
            }
        })
        .catch(err => {
        })

}
export const request_demo_class = (data, success, fail) => {
    let s_code;
    let form_data = new FormData()
    form_data.append('tutor_id' , data.id)
    form_data.append('selected_date' , data.selected_date)
    form_data.append('selected_time' , data.selected_time)
    fetch(
        apiBaseURL + request_demo_class_url,
        {
            headers : {
                Authorization : `Token ${Cookies.get('auth_token')}`
            },
            body : form_data,
            method : 'POST'
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
            }
            else {
                fail && fail()
            }
        })
        .catch(err => {
            fail && fail()
        })

}