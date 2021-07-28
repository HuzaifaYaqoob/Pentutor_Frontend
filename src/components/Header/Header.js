import React from 'react'
import { Link, Route } from 'react-router-dom'
import './styles.css'

const ActiveEffect = () =>{
    return(
        <span className='absolute top-0 left-0 right-1/2 bottom-0 bg-yellow-450 transform activeNavLinkAnimation'></span>
    )
}


const Header = () => {
    return (
        <header className='container py-4 px-14 mx-auto flex items-center justify-between '>
            <div className='LOGO '>
                <img className='w-40' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
            </div>
            <nav className="" aria-label="Twelfth navbar example">
                <ul className="flex items-center text-xs gap-1">
                    <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
                        <Route path='/' exact >
                            <ActiveEffect/>
                        </Route>
                        <Link className="relative" to="/">Home</Link>
                    </li>
                    
                    <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
                        <Route path='/courses/' exact >
                            <ActiveEffect/>
                        </Route>
                        <Link className="relative" to="/courses/">Courses</Link>
                    </li>
                    
                    <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
                        <Route path='/our-tutor/' exact >
                            <ActiveEffect/>
                        </Route>
                        <Link className="relative" to="/our-tutor/">Out Tutors</Link>
                    </li>
                    
                    <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
                        <Route path='/about-us' exact >
                            <ActiveEffect/>
                        </Route>
                        <Link className="relative" to="/about-us">About Us</Link>
                    </li>
                    
                    <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
                        <Route path='/contact-us/' exact >
                            <ActiveEffect/>
                        </Route>
                        <Link className="relative" to="/contact-us">Contact Us</Link>
                    </li>
                    
                    
                    <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
                        <Route path='/blogs/' exact >
                            <ActiveEffect/>
                        </Route>
                        <Link className="relative" to="/blogs">Blog</Link>
                    </li>
                    
                </ul>
            </nav>
            <ul className='flex items-center text-xs gap-2'>
                <li className='py-2 px-4 rounded overflow-hidden bg-gray-700 text-white cursor-pointer'>
                    <Link to='/'>Sign In</Link>
                </li>
                <li className='py-2 px-4 rounded overflow-hidden border border-gray-700  cursor-pointer'>
                    <Link to='/'>Sign Up</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
