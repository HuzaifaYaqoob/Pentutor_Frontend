


import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAllBlogPosts } from "../../redux/Actions/BlogActions"
import BlogPost from "../Blogs/BlogPost"

const BlogSection = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(
            GetAllBlogPosts()
        )
    }, [])

    return (
        <div className='py-20 px-4 sm:px-6 md:px-8'>
            <div className="max-w-[1300px] w-full space-y-10 mx-auto">
                <h3 className='text-indigo-900 font-bold text-3xl text-center'>Latest <span className='text-yellow-400'>Blogs</span> & Stories</h3>
                <div className='grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {
                        state.blog.blog_posts.slice(0, 3).map(post => {
                            return (
                                <BlogPost data={post} />
                            )
                        })
                    }
                    {/* <BlogPost className='transform lg:-translate-y-10' />
                    <BlogPost /> */}
                </div>
                <button className='mx-auto block rounded border border-[#F5BB07] bg-[#F5BB07] text-white py-1.5 px-4'>View All</button>
            </div>
        </div>
    )
}

export default BlogSection