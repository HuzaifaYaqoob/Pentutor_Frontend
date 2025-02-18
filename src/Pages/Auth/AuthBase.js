

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLowVision } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const AuthBase = (props) => {
    return (
        <div className='w-full h-screen px-4 sm:px-6 md:px-8'>
            <div className='max-w-[1300px] h-full mx-auto flex items-center justify-between'>
                <div className='flex-1'>
                    <span className='block mx-auto text-center'>
                        <Link to='/' className='inline-block'>
                            <img className='mx-auto w-44 mb-5' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
                        </Link>
                    </span>
                    <h3 className='w-full text-center text-black font-bold text-2xl mb-8'>{props.Heading}</h3>
                    {props.children}
                </div>

                <div className='lg:block hidden'>
                    <img className='w-96 rounded-l-xl' src={process.env.PUBLIC_URL + props.CurrentImage} alt="LoginPage Image" />
                </div>
            </div>
        </div>
    )
}

export default AuthBase