

import { Link } from 'react-router-dom'

const BlogPost = ({ data, className, ...props }) => {
    return (
        <div className={'rounded-xl w-full overflow-hidden border border-[#CACBE] mx-auto' + className}>
            <div
                className='w-full h-48 bg-no-repeat bg-center bg-cover relative'
                style={{ backgroundImage: `url(${data?.image})` }}
            >
            </div>
            {/* <p className='capitalize text-white w-full bg-yellow-450 py-1 relative px-2 text-lg font-semibold text-center'></p> */}
            <div className='p-3 space-y-2'>
                <Link to={`/blogs/view/${data?.slug}/`} className='text-lg font-semibold text-[#151E2C] !leading-[26px]'>{data?.title}</Link>
                <p className='text-xs text-[#111111]'>{data?.description.slice(0, 200)}</p>
                <div className='flex items-center justify-end'>
                    <Link to={`/blogs/view/${data?.slug}/`} className='text-center py-2.5 px-4 text-sm bg-indigo-900 text-white rounded inline-block'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPost