import { GET_ALL_BLOG_POSTS } from "../../ActionsTypes/BlogActionTypes"





const initialState = {
    blog_posts: [],
    updated_: false
}

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOG_POSTS:
            return {
                ...state,
                blog_posts: action.payload,
                updated_: true
            }

        default:
            return state
    }
}

export default BlogReducer