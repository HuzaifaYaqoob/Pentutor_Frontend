


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'


const HomeHeroSection = () => {
    return (
        <div className='bg-yellow-100 py-24'>
            <div className="container px-5 mx-auto flex items-center lg:flex-row  flex-col ">
                <div className="flex-1 lg:block mx-auto lg:text-left text-center">
                    <div className='mb-7'>
                        <h1 className='text-yellow-400 text-4xl font-bold uppercase '>e-learning <span className='text-indigo-800'>made easy</span></h1>
                    </div>
                    <p className='text-xl text-gray-600 tracking-wide leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur enim, ornare mi id viverra tincidunt non laoreet orci. </p>
                    <div className='flex gap-3 mt-5 justify-center lg:justify-start'>
                        <Link to='/auth/login/' className='bg-yellow-300 rounded py-4 px-10 text-lg'>Sign In</Link>
                        <Link to='/auth/register/student/' className='rounded py-4 px-10 text-lg border-2 border-yellow-300'>Register</Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-center lg:mt-0 mt-20">
                    <div className='relative '>
                        <div className='w-64 h-64 lg:w-80 lg:h-80 bg-yellow-300 rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2 transform '>
                            <span className="rounded-full block w-72 h-72 lg:w-96 lg:h-96 border-2 border-dashed border-yellow-400 absolute bottom-1  left-1/2 -translate-x-1/2 transform" style={{ zIndex: '-10' }}></span>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/homeStudent.png'} alt="Student" className='lg:w-72 w-40 max-h-full block z-20 relative' />
                        <div className='hidden  lg:flex items-center gap-4 absolute bg-white rounded-lg top-1/2 left-full -translate-x-10 transform whitespace-nowrap z-20 p-4'>
                            <FontAwesomeIcon icon={faUserAlt} className='text-5xl text-gray-500 ' />
                            <span >
                                <span className='text-xs text-yellow-500'>500+</span>
                                <p>Best Courses</p>
                            </span>
                        </div>
                        <div>
                        <div className='absolute p-4 bg-white top-full -translate-y-2/3 transform -translate-x-1/2 z-20 left-0 rounded-md px-9 whitespace-nowrap'>
                            <img src={process.env.PUBLIC_URL + '/images/profilepic.png'} alt="Image" className='w-20 -mt-12 mx-auto' />
                            <span className='block mx-auto py-1 px-3 rounded bg-yellow-450 text-xs text-white text-center my-3'>ID : 23</span>
                            <p className='text-gray-600 text-xs mb-2'><span className='font-bold text-gray-800'>Masters : </span>in Math</p>
                            <p className='text-gray-600 text-xs mb-2'><span className='font-bold text-gray-800'>Masters: </span>in Math, Physics</p>
                            <p className='text-gray-600 text-xs'><span className='font-bold text-gray-800'>Experience : </span>21 Years</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeroSection