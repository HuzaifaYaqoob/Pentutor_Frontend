import { GET_ALL_BLOG_POSTS } from "../../ActionsTypes/BlogActionTypes";
import { apiBaseURL, get_blog_posts_url, get_single_blog_url } from "../../apiURLs";


export const GetAllBlogPosts = () => dispatch => {
    let s_code;

    fetch(
        apiBaseURL + get_blog_posts_url
    )
        .then(response => {
            s_code = response.status
            if (response.ok) {
                return response.json()
            }
        })
        .then(result => {
            if (s_code == 200) {
                dispatch({
                    type: GET_ALL_BLOG_POSTS,
                    payload: result.data
                })
            }

        })
        .catch(err => {
            console.log(err)
        })
}

export const GetSingleBlogPost = (data, success, fail) => dispatch => {
    let s_code;

    fetch(
        apiBaseURL + get_single_blog_url + `?slug=${data?.id}`
    )
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
        .catch(err => {
            console.log(err)
            fail && fail()
        })
}