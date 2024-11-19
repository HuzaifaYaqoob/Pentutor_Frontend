


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
        <div className='py-20 px-5'>
            <div className="container mx-auto ">
                <h3 className='text-indigo-900 font-bold text-3xl text-center mb-9'><span className='text-yellow-400'>Blogs</span></h3>
                <div className='grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
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
                <button className='mx-auto  block my-9 rounded border border-[#F5BB07] bg-[#F5BB07] text-white py-1.5 px-4'>View All</button>

            </div>
        </div>
    )
}

export default BlogSection