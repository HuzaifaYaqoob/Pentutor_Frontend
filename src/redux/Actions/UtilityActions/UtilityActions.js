

import { apiBaseURL, get_all_category, get_all_countries, get_cities } from "../../apiURLs";

import { ALL_COURSE_CATEGORIES, GET_ALL_COUNTRIES, GET_CITIES } from "../../ActionsTypes/UtilityActionTypes";


export const getAllCountries = () => dispatch => {
    let s_code;

    fetch(
        apiBaseURL + get_all_countries,
    )
        .then(response => {
            s_code = response.status
            if (s_code == 200) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                dispatch({
                    type: GET_ALL_COUNTRIES,
                    payload: result
                })
            }
        })
        .catch(err => {
            console.log('Get Counties ERROR :: ', err)
        })
}

export const getCity = (country_id, success, fail) => dispatch => {
    let s_code;

    fetch(
        apiBaseURL + get_cities + country_id,
    )
        .then(response => {
            s_code = response.status
            if (s_code == 200) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                success && success(result)
            }
        })
        .catch(err => {
            console.log('Get Counties ERROR :: ', err)
            fail && fail()
        })
}

export const getAllCourseCategories = (data, success, fail) => dispatch => {
    let s_code;

    fetch(
        apiBaseURL + get_all_category,
    )
        .then(response => {
            s_code = response.status
            if (s_code == 200) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                dispatch({
                    type: ALL_COURSE_CATEGORIES,
                    payload: result.data
                })
                success && success(result)
            }
        })
        .catch(err => {
            console.log('Get Counties ERROR :: ', err)
            fail && fail()
        })
}