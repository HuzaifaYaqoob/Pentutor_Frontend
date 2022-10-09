

import { Link } from 'react-router-dom'

const BlogPost = ({ data, className, ...props }) => {
    console.log(data)
    return (
        <div className={'max-w-md rounded min-w-[300px] overflow-hidden pb-6 pentutor-shadow mx-auto ' + className}>
            <div
                className='w-full h-44 bg-no-repeat bg-center bg-cover px-0.5 relative'
                style={{ backgroundImage: `url(${data?.image})` }}
            >
                <p className='shadow-lg capitalize text-white w-full bg-yellow-450 py-1 relative px-2 rounded text-lg font-semibold text-center ' style={{ top: '85%' }}>{data?.title}</p>
            </div>
            <div className='px-6 pt-16 pb-3'>
                <p className='text-xs text-gray-800'>{data?.description.slice(0, 200)}</p>
            </div>
            <div className='text-center'>
                <Link to={`/blogs/view/${data?.slug}/`} className='py-1 px-5 text-center text-white bg-yellow-450 rounded mx-auto inline-block'>Read More</Link>
            </div>

        </div>
    )
}

export default BlogPost