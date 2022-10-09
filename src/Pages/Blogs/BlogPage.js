import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllBlogPosts } from '../../redux/Actions/BlogActions'

import BlogPost from './BlogPost'

const BlogPage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(
            GetAllBlogPosts()
        )
    }, [])


    return (
        <>
            {
                state.blog.updated_ ?
                    state.blog.blog_posts.length > 0 ?
                        <div className="container px-5 mx-auto grid-cols-1 md:grid-cols-2 place-content-center grid lg:grid-cols-3 gap-10">
                            {
                                state.blog.blog_posts.map((post, index) => {
                                    return (
                                        <BlogPost data={post} kay={index} />
                                    )
                                })
                            }
                        </div>
                        :
                        <>
                            <p className='text-center my-5'>Not found</p>

                        </>
                    :
                    <>
                        <p className='text-center my-5'>Loading...</p>
                    </>
            }
        </>
    )
}


export default BlogPage
