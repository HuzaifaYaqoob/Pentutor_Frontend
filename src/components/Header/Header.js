import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const ActiveEffect = () => {
    return (
        <span className='absolute top-0 left-0 right-1/2 bottom-0 bg-yellow-450 transform activeNavLinkAnimation'></span>
    )
}

const NavLink = (props) => {
    return (
        <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
            <Route path={props.nextPath} exact >
                <ActiveEffect />
            </Route>
            <Link className="relative capitalize" to={props.nextPath}>{props.text}</Link>
        </li>
    )
}

export const HamburgerIcon = (props) => {
    return (
        <span className='lg:hidden block cursor-pointer' {...props}>
            <span className='block w-8 h-1 rounded-full mb-1 bg-gray-700'></span>
            <span className='block w-8 h-1 rounded-full mb-1 bg-gray-700'></span>
            <span className='block w-8 h-1 rounded-full  bg-gray-700'></span>
        </span>
    )
}

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true)

    const [mobileNavshow , setMobileNavShow] = useState('hidden')

    return (
        <header className='container py-4 lg:px-14 px-3 mx-auto flex items-center justify-between '>
            <HamburgerIcon onClick={()=>{setMobileNavShow('block')}} />
            <div className='LOGO '>
                <img className='w-40' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
            </div>
            <nav className={`absolute top-0 left-0 right-0 p-6 z-50 lg:relative ${mobileNavshow} lg:block` } >
                <ul className="flex items-center text-xs gap-1 pentutor-shadow lg:shadow-none lg:flex-row py-5 flex-col bg-white relative">
                    <span className='absolute top-3 left-5 text-xl cursor-pointer lg:hidden' onClick={()=>{setMobileNavShow('hidden')}}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <NavLink nextPath='/' text='Home' />
                    <NavLink nextPath='/courses/' text='Courses' />
                    <NavLink nextPath='/our-tutor/' text='Our Tutors' />
                    <NavLink nextPath='/about-us/' text='About Us' />
                    <NavLink nextPath='/contact-us/' text='Contact Us' />
                    <NavLink nextPath='/blogs/' text='Blogs' />
                </ul>
            </nav>
            <ul className='flex items-center text-xs gap-2'>
                {
                    loggedIn ?
                        <>
                            <Link className='y-2 px-4 rounded overflow-hidden cursor-pointer' to='/dashboard/student/'>
                                <FontAwesomeIcon icon={faUserAlt} />
                            </Link>
                            <li className='py-2 px-4 rounded overflow-hidden bg-gray-700 text-white cursor-pointer' onClick={() => { setLoggedIn(false) }}>
                                Log Out
                            </li>
                        </>
                        :
                        <>
                            <li className='py-2 px-4 rounded overflow-hidden bg-gray-700 text-white cursor-pointer'>
                                <Link to='/auth/login/'>Sign In</Link>
                            </li>
                            <li className='py-2 px-4 rounded overflow-hidden border border-gray-700  cursor-pointer'>
                                <Link to='/auth/register/student/'>Sign Up</Link>
                            </li>
                        </>
                }
            </ul>
        </header>
    )
}

export default Header
