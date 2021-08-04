
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const TutorRegisterForm = () => {
    return (
        <>
            <div className='bg-white p-8 relative'>
                <div>
                    <label htmlFor="name" className='text-sm font-semibold'>Your Name</label>
                    <div>
                        <input className='bg-gray-200 block text-sm rounded outline-none w-full' type="text" id='name' placeholder='Enter Your Name...' />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className='text-sm font-semibold'>Your Email</label>
                    <div>
                        <input className='bg-gray-200 block text-sm rounded outline-none w-full' type="email" id='name' placeholder='Enter Your Name...' />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className='text-sm font-semibold'>Your Phone Number</label>
                    <div>
                        <input className='bg-gray-200 block text-sm rounded outline-none w-full' type="number" id='name' placeholder='Enter Your Name...' />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className='text-sm font-semibold'>Date Of Birth</label>
                    <div>
                        <input className='bg-gray-200 block text-sm rounded outline-none w-full' type="date" id='name' placeholder='Enter Your Name...' />
                    </div>
                </div>

                <div className='rounded-full bg-yellow-450 w-10 h-10 flex items-center justify-center absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2'>
                    <FontAwesomeIcon className='text-indigo-900' icon={faArrowRight} />
                </div>

            </div>
            <div className='bg-yellow-450 text-white fixed left-0 top-1/2 transform -translate-y-1/2 px-2 py-3 rounded-r-lg h-96 flex flex-col items-center'>
                <p className='cursor-pointer hover:text-gray-800 text-white text-xs'>Document</p>
                <span className='w-0.5 flex-1 block bg-white rounded-full'></span>
                <p className='cursor-pointer hover:text-gray-800 text-white text-xs'>Address</p>
                <span className='w-0.5 flex-1 block bg-white rounded-full'></span>
                <p className='cursor-pointer hover:text-gray-800 text-gray-900 text-xs'>Bio</p>
            </div>
        </>
    )
}

export default TutorRegisterForm