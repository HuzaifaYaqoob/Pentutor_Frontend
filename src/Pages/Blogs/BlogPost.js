

import { Link } from 'react-router-dom'

const BlogPost = ({ data, className, ...props }) => {
    return (
        <div className={'rounded-lg w-full overflow-hidden border border-[#CACBE] mx-auto' + className}>
            <div
                className='w-full h-40 bg-no-repeat bg-center bg-cover relative'
                style={{ backgroundImage: `url(${data?.image})` }}
            >
            </div>
            {/* <p className='capitalize text-white w-full bg-yellow-450 py-1 relative px-2 text-lg font-semibold text-center'></p> */}
            <div className='p-3 space-y-1'>
                <div className='h-[50px] overflow-hidden'>
                    <Link to={`/blogs/view/${data?.slug}/`} className='font-semibold text-[#151E2C] !leading-[22px]'>{data?.title}</Link>
                </div>
                <p className='text-xs text-[#111111] h-[48px] overflow-hidden '>{data?.description.slice(0, 200)}</p>
                <div className='flex items-center justify-end'>
                    <Link to={`/blogs/view/${data?.slug}/`} className='text-center py-1.5 px-4 text-sm bg-indigo-900 text-white rounded inline-block !mt-2.5'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPost