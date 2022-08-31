


import { apiBaseURL, create_chapter_video, create_course, create_course_chapter } from "../../apiURLs"
import Cookies from "js-cookie";
import { CREATE_CHAPTER_VIDEO, CREATE_COURSE, CREATE_COURSE_CHAPTER } from "../../ActionsTypes/CourseActionTypes";


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
                success && success(result.data)
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

export const createCourseChapter = (data, success, fail) => dispatch => {
    let s_code;
    let form_data = new FormData()
    for (let key in data) {
        form_data.append(key, data[key])
    }
    fetch(
        apiBaseURL + create_course_chapter,
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
                success && success(result.data)
                dispatch({
                    type: CREATE_COURSE_CHAPTER,
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

export const createChapterVideo = (data, success, fail) => dispatch => {
    let s_code;
    let form_data = new FormData()
    for (let key in data) {
        form_data.append(key, data[key])
    }
    fetch(
        apiBaseURL + create_chapter_video,
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
                success && success(result.data)
                dispatch({
                    type: CREATE_CHAPTER_VIDEO,
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