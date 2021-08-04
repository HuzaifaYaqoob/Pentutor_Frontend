
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLowVision } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import AuthBase from './AuthBase'

const LoginPage = () => {
    return (
        <AuthBase Heading='Login' CurrentImage='/images/auth/LoginPageImage.png' >
            <div className='rounded-md bg-white pentutor-shadow p-10 max-w-sm mx-auto'>
                <div className='text-gray-600'>
                    <label htmlFor="Username" className='block'>Username</label>
                    <div >
                        <input type="text" id='Username' placeholder='Enter Your Username/ User ID' className='outline-none w-full bg-gray-200 block rounded-lg' />
                    </div>
                </div>
                <div className='text-gray-600'>
                    <label htmlFor="Password" className='block'>Password</label>
                    <div className='relative'>
                        <input type="text" id='Password' placeholder='Enter Your Password' className='outline-none bg-gray-200 rounded-lg w-full block' />
                        <span className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                            <FontAwesomeIcon icon={faLowVision} />
                        </span>
                    </div>
                </div>
                <Link className='text-yellow-600 text-sm  '>Forgot Password?</Link>
                <button className='w-full text-white capitalize py-3 mt-4 bg-indigo-900 rounded'>Login</button>
                <p className='text-sm mt-5'>Don't Have an account? <Link className='text-yellow-600 capitalize' to='/auth/register/student/'>Register!</Link></p>
            </div>

        </AuthBase>
    )
}

export default LoginPage