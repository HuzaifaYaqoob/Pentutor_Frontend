
import DashboardChart from '../DashboardChart'

import DashboardBase from '../DashboardBase'
import ContentBox from '../ContentBox'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlusCircle, faUser, faUserTag, faUserTie } from '@fortawesome/free-solid-svg-icons'

const RegisteredCard = (props) => {
    return (
        <div>
            <p className='capitalize mb-1 text-gray-700'>{props.Heading}</p>
            <div className={`flex items-center justify-center gap-8 ${props.colorCLass} p-4`}>
                <FontAwesomeIcon className='text-white text-opacity-50 text-7xl' icon={props.icon} />
                <p className='text-white text-6xl font-bold'>{props.content}</p>
            </div>
        </div>
    )
}

const AdminDashboard = (props) => {
    return (
        <DashboardBase activeUser='super-admin'>
            <ContentBox />
            <div className='flex items-center justify-between'>
                <p className='py-1 px-2 bg-gray-200 rounded text-gray-600 capitalize text-sm'>all listings</p>
                <div className='flex items-center gap-3 bg-yellow-200 py-1 px-2 rounded text-gray-700 cursor-pointer' onClick={() => { props.history.push('/dashboard/super-admin/register/student/') }}>
                    <p>Register</p>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </div>
            </div>
            <div className='mt-10 grid sm:grid-cols-2  md:grid-cols-3 gap-8'>
                <RegisteredCard content='100' colorCLass='bg-yellow-450' icon={faUserTag} Heading='total registered students' />
                <RegisteredCard content='100' colorCLass='bg-blue-500' icon={faUser} Heading='total registered tutors' />
                <RegisteredCard content='100' colorCLass='bg-red-500' icon={faUserTie} Heading='total registered super admin' />
            </div>
            <p className='py-1 px-2 bg-gray-200 rounded text-gray-600 capitalize text-sm my-10 inline-block'>Total Blog Post</p>
            <div className='w-full py-20 px-10 bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/images/typing.jpg'}')` }}>
                <span className='top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 absolute block'>

                </span>
                <div className='flex items-center justify-between relative z-10 text-white font-bold text-xl'>
                    <p className='capitalize'>7 blog posted</p>
                    <div className='flex items-center gap-5'>
                        <p>View Blogs</p>
                        <span className='w-8 h-8 rounded-full bg-white flex items-center justify-center'>
                            <FontAwesomeIcon className='text-gray-900  rounded-full' icon={faChevronRight} />
                        </span>
                    </div>

                </div>
            </div>
            <DashboardChart color='#314866' />
            <DashboardChart color='#E5AB67' />
        </DashboardBase>
    )
}

export default AdminDashboard