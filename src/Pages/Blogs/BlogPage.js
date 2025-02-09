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
                        <div className='px-4 sm:px-6 md:px-8 py-9'>
                            <div className="max-w-[1300px] w-full mx-auto place-content-center grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {
                                    state.blog.blog_posts.map((post, index) => {
                                        return (
                                            <BlogPost data={post} kay={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        <>
                            <p className='text-center text-sm my-5'>Not found</p>
                        </>
                    :
                    <>
                        <p className='text-center text-sm my-5'>Loading...</p>
                    </>
            }
        </>
    )
}


export default BlogPage
