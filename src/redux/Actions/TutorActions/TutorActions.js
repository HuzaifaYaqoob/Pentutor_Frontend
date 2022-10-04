

import { GET_ALL_TUTORS, GET_FEATURED_TUTORS } from "../../ActionsTypes/TutorsTypes";
import { apiBaseURL, get_all_tutors, get_featured_tutors_url } from "../../apiURLs";


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