

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"


const Content = () => {
    return (
        <div className='my-4'>
            <div className='flex items-center justify-between text-xs mb-6'>
                <div className='flex items-center gap-4'>
                    <FontAwesomeIcon className='text-gray-700' icon={faPlay} />
                    <p>Getting Started</p>
                </div>
                <p>3 Lectures. 1 attachement. 1 assignment. 25m</p>
            </div>
            <hr />
        </div>
    )
}


const CourseContent = () => {
    return (
        <div className='container mx-auto'>
            <div className='pentutor-shadow mt-16 mb-4 rounded overflow-hidden'>
                <div className='bg-yellow-450 flex items-center justify-between p-5 rounded'>
                    <div>
                        <h3 className='mb-2 font-bold'>Course Content</h3>
                        <p className='text-xs'>15 Sections, 40 Lectures, 2h 36m total length</p>
                    </div>
                    <span className='bg-gray-700 bg-opacity-50 rounded border text-white text-xs py-1 px-5 cursor-pointer border-gray-500'>Expand All</span>
                </div>
                <div className='p-6'>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>

            </div>
            <button className='w-full py-2 text-center border border-gray-400 rounded text-sm font-medium'>11 More Sections</button>
        </div>
    )
}

export default CourseContent