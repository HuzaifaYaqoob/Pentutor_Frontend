

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLowVision } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const AuthBase = (props) =>{
    return(
        <div className='w-full h-screen'>
        <div className='max-w-7xl h-full mx-auto flex items-center justify-between'>
            <div className='flex-1'>
                <Link to='/'>
                    <img className='mx-auto w-28 mb-5' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
                </Link>
                <h3 className='w-full text-center text-black font-bold text-md mb-8'>{props.Heading}</h3>
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