import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { GetSingleBlogPost } from "../../redux/Actions/BlogActions"

import parse from 'html-react-parser';

const BlogView = (props) => {
    const dispatch = useDispatch()
    const { blog_id } = props?.match?.params
    const [blogData, setBlogData] = useState({})

    console.log(blogData)

    useEffect(() => {
        if (blog_id) {
            dispatch(GetSingleBlogPost(
                { id: blog_id },
                (result) => {
                    setBlogData(result)
                },
                () => {
                    props.history.push('/')
                }
            ))
        }

    }, [blog_id])

    return (
        <div>
            <div
                className=' relative w-full h-96 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url('${blogData?.image}')` }}
            >
                <div className='absolute bottom-5 text-center w-full'>
                    <p className='bg-yellow-450 py-3 px-10 text-white font-bold inline-block rounded-md'>{blogData?.title}</p>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 py-12">
                <div className='max-w-[1300px] w-full mx-auto p-4 border border-[#CACBE6] rounded-lg'>
                    <p className='text-sm'>{blogData?.description ? parse(blogData?.description) : ''}</p>
                    {/* <div className='mb-3'>
                        <h3 className='mb-4 text-indigo-900 font-bold text-lg'>Description Heading</h3>
                    </div>
                    <div>
                        <h3 className='mb-4 text-indigo-900 font-bold text-lg'>Points To Be Noted</h3>
                        <div className='ml-3 text-sm'>

                            <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>5. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BlogView