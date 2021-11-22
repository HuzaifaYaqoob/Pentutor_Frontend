

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faFileAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link, Route } from 'react-router-dom'


const RegisterForm = () => {
    return (
        <>
            <div className='mb-2'>
                <label htmlFor="f_name" className='text-xs font-semibold mb-1'>First Name</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full p-2' type="text" id='f_name' placeholder='Enter Your First Name...' />
                </div>
            </div>
            <div className='mb-2'>
                <label htmlFor="l_name" className='text-xs font-semibold mb-1'>Last Name</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full p-2' type="text" id='l_name' placeholder='Enter Your Last Name...' />
                </div>
            </div>
            <div className='mb-2'>
                <label htmlFor="email" className='text-xs font-semibold'>Your Email</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full p-2' type="email" id='email' placeholder='Enter Your Email...' />
                </div>
            </div>
            <div className='mb-2'>
                <label htmlFor="pw" className='text-xs font-semibold'>Password</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full p-2' type="password" id='pw' placeholder='*******' />
                </div>
            </div>
        </>
    )
}

const StudentForm = (props) => {
    return (
        <>
            <div className='bg-white p-8 pt-3 relative'>
                <Route exact path='/auth/register/student' component={RegisterForm} />
            </div>
        </>
    )
}

export default StudentForm