
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faFileAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { Route, Link } from 'react-router-dom'



const Bio = () => {
    return (
        <>
            <div>
                <label htmlFor="name" className='text-xs font-semibold'>Your Name</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='name' placeholder='Enter Your Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="email" className='text-xs font-semibold'>Your Email</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="email" id='email' placeholder='Enter Your Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className='text-xs font-semibold'>Your Phone Number</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="number" id='phone' placeholder='Enter Your Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="db" className='text-xs font-semibold'>Date Of Birth</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="date" id='db' placeholder='Enter Your Name...' />
                </div>
            </div>
        </>
    )
}


const TutorRegisterForm = (props) => {
    return (
        <>
            <div className='bg-white p-8 relative'>
                <Route exact path='/auth/register/tutor/' component={Bio} />
            </div>
        </>
    )
}

export default TutorRegisterForm