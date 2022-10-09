

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const RatingStar = (props) => {
    return (
        <div className='flex items-center text-xs gap-3 mb-3' >
            <span className='text-xs flex items-center justify-center gap-1 text-yellow-400'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </span>
            <p>80%</p>
        </div>
    )
}


const RatingBar = (props) => {
    return (
        <div className='w-full h-4 bg-gray-200 relative mb-3'>
            <span className={`block absolute top-0 left-0 bottom-0 w-${props.value} bg-gray-300`}></span>

        </div>
    )
}

const StudentFeedback = () => {
    return (
        <div className='container mx-auto px-10 my-10'>
            <div className='mb-2'>
                <h3 className='font-medium'>Student Feedback</h3>
            </div>
            {/* <div className='flex lg:items-center gap-5 lg:flex-row flex-col'>
                <div className='flex items-center'>
                    <div className='mx-auto'>
                        <h3 className='text-7xl font-medium ' style={{ color: '#02C8C8' }}>4.9</h3>
                        <span className='text-xs flex items-center justify-center gap-1 text-yellow-400'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <p className='text-xs font-medium my-2 w-full text-center' style={{ color: '#02C8C8' }}>Course Rating</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <RatingBar value='1/2' />
                    <RatingBar value='16' />
                    <RatingBar value='6' />
                    <RatingBar value='1' />
                    <RatingBar value='0' />
                </div>
                <div>
                    <RatingStar value='80%' />
                    <RatingStar value='20%' />
                    <RatingStar value='10%' />
                    <RatingStar value='2%' />
                    <RatingStar value='0%' />
                </div>
            </div> */}
            <p className="text-center my-10">No Feedback yet</p>
        </div>
    )
}

export default StudentFeedback