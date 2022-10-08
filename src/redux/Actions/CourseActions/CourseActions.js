


import { add_to_cart_url, apiBaseURL, create_chapter_video, create_course, create_course_chapter, delete_chapter_video, delete_course, delete_course_chapter, get_all_courses, get_cart_items, get_course, get_my_courses } from "../../apiURLs"
import Cookies from "js-cookie";
import { CREATE_CHAPTER_VIDEO, CREATE_COURSE, CREATE_COURSE_CHAPTER, DELETE_COURSE, DELETE_COURSE_CHAPTER_VIDEO, GET_ALL_COURSES, GET_MY_COURSES } from "../../ActionsTypes/CourseActionTypes";




export const getAllCourses = () => dispatch => {
    fetch(
        apiBaseURL + get_all_courses
    )
        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
        })
        .then(result => {
            dispatch({
                type: GET_ALL_COURSES,
                payload: result.data
            })
        })
        .catch((err) => {

        })
}

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

export const getSingleCourse = (data, success, fail) => {
    let s_code

    fetch(apiBaseURL + get_course + `?course=${data.id}`)
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                success && success(result.data)
            }
        })
        .catch((err) => {
            fail && fail()
            console.log(err)
        })

}

export const getMyCourses = () => dispatch => {
    let s_code

    fetch(apiBaseURL + get_my_courses,
        {
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            }
        })
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                dispatch({
                    type: GET_MY_COURSES,
                    payload: result.data
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteCourse = (data, success, fail) => dispatch => {
    let s_code
    let form_data = new FormData()
    form_data.append('slug', data.id)

    fetch(apiBaseURL + delete_course,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            },
            body: form_data
        })
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                dispatch({
                    type: DELETE_COURSE,
                    payload: data.id
                })
                success && success(result.data)
            }
            else {
                fail && fail()
            }
        })
        .catch((err) => {
            fail && fail()
            console.log(err)
        })
}

export const deleteCourseChapterVideo = (data, success, fail) => dispatch => {
    let s_code
    let form_data = new FormData()
    form_data.append('video', data.id)

    fetch(apiBaseURL + delete_chapter_video,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            },
            body: form_data
        })
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                success && success(result.data)
            }
            else {
                fail && fail()
            }
        })
        .catch((err) => {
            fail && fail()
            console.log(err)
        })
}

export const deleteCourseChapter = (data, success, fail) => dispatch => {
    let s_code
    let form_data = new FormData()
    form_data.append('chapter', data.id)

    fetch(apiBaseURL + delete_course_chapter,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            },
            body: form_data
        })
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                success && success(result.data)
            }
            else {
                fail && fail()
            }
        })
        .catch((err) => {
            fail && fail()
            console.log(err)
        })
}

export const AddToCartCourse = (data, success, fail) => dispatch => {
    let s_code;

    let form_data = new FormData()
    form_data.append('course', data.id)

    fetch(apiBaseURL + add_to_cart_url,
        {
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            },
            method: 'POST',
            body: form_data
        })
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

export const getCartItems = (data, success, fail) => dispatch => {
    fetch(
        apiBaseURL + get_cart_items,
        {
            headers: {
                Authorization: `Token ${Cookies.get('auth_token')}`
            },
        })
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
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