
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faThList, faUser, faBook, faCodeBranch, faCreditCard, faHandshake, faExclamationCircle, faPager, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Link, Route } from 'react-router-dom'
import { HamburgerIcon } from '../../components/Header/Header'


const BarLink = (props) => {
    return (
        <Link className={`flex items-center relative gap-4 py-2 rounded-lg px-3 mb-1 cursor-pointer  text-xs ` + (props.active ? 'bg-gray-300' : 'hover:bg-gray-200')} to={props.nextPath} >
            <span className='w-5 h-5 flex items-center justify-center'>
                <FontAwesomeIcon className='text-indigo-900' icon={props.icon} />
            </span>
            <p className='text-indigo-900 font-semibold capitalize text-xs'>{props.text}</p>
            {
                props.active ?

                    <FontAwesomeIcon className='text-indigo-900 absolute top-1/2 right-3 transform -translate-y-1/2' icon={faChevronRight} />
                    :
                    <></>
            }
        </Link>
    )
}


const SideBar = (props) => {

    const [sideBarshow, setSideBarShow] = useState('hidden')

    return (
        <>
            <div className='fixed  w-12 pentutor-shadow flex lg:hidden items-center justify-center rounded-full top-2 left-2 h-12 z-50 cursor-pointer bg-white'  onClick={() => { setSideBarShow('fixed') }}>
                <HamburgerIcon />
            </div >
            <div className={`w-56 pentutor-shadow rounded-3xl overflow-hidden ${sideBarshow} bg-white lg:block top-10 z-50`}>
                <span className='absolute top-3 right-3 text-white cursor-pointer' onClick={() => { setSideBarShow('hidden') }} >
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className='w-56 h-48 bg-indigo-900 flex items-center justify-center rounded-3xl'>
                    <div>
                        <img className='w-28' src={process.env.PUBLIC_URL + '/images/profilepic.png'} alt="ProfilePic" />
                        <Link to={`/dashboard/${props.activeUser}/profile/edit/`} className='capitalize w-full text-center mt-4 text-white font-medium text-sm'>maryam safdar</Link>
                    </div>
                </div>
                <ul className='p-4'>
                    <BarLink icon={faThList} text='Pentutor' nextPath='/' />
                    <BarLink icon={faThList} text='Dashboard' nextPath='/dashboard/student/' />
                    <Route path='/dashboard/tutor/' >
                        <BarLink icon={faBook} text='Courses' nextPath='/dashboard/tutor/courses/' />
                        <BarLink icon={faBook} text='Add New Course' nextPath='/dashboard/tutor/courses/add-new/' />
                    </Route>

                    <Route path='/dashboard/super-admin/'>
                        <BarLink icon={faUser} text='Register Student' nextPath='/dashboard/super-admin/register/student/' />
                        <BarLink icon={faUser} text='Register Tutor' nextPath='/dashboard/super-admin/register/tutor/' />
                        <BarLink icon={faUser} text='Register Super Admin' nextPath='/dashboard/super-admin/register/admin/' />
                        <BarLink icon={faCodeBranch} text='New Job' nextPath='/dashboard/super-admin/jobs/post-new/' />
                        <BarLink icon={faPager} text='Add Blog Post' nextPath='/dashboard/super-admin/blog/post-new/' />

                    </Route>

                    <BarLink icon={faThList} text='attendance' />
                    <BarLink icon={faCreditCard} text='payment record' />
                    <BarLink icon={faHandshake} text='agreement' />
                    <BarLink icon={faThList} text='home tution' />
                    <BarLink icon={faExclamationCircle} text='report' />
                    <BarLink icon={faUser} text='log out' />
                </ul>
            </div></>
    )
}

export default SideBar