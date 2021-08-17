import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

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

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        <header className='container py-4 px-14 mx-auto flex items-center justify-between '>
            <div className='LOGO '>
                <img className='w-40' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
            </div>
            <nav className="" aria-label="Twelfth navbar example">
                <ul className="flex items-center text-xs gap-1">
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
                            <li className='py-2 px-4 rounded overflow-hidden bg-gray-700 text-white cursor-pointer' onClick={()=>{setLoggedIn(false)}}>
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
