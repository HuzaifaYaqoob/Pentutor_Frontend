import React, { useEffect, useState } from 'react'
import { Link, Route, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoggoutUser } from '../../redux/Actions/UserActions/UserActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import AlertPopup from '../AlertPopup'

import { apiBaseURL } from '../../redux/apiURLs'
import { getUserProfile } from '../../redux/Actions/ProfileActions/ProfileActions'
import { getCartItems } from '../../redux/Actions/CourseActions/CourseActions'



const ActiveEffect = () => {
    return (
        <span className='absolute top-0 left-0 right-1/2 bottom-0 bg-yellow-450 transform activeNavLinkAnimation'></span>
    )
}


const UserDropDown = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [dropDownActive, setDropDownActive] = useState(false)
    const [show_alert, setShowAlert] = useState(false)


    return (
        <>

            {
                show_alert &&
                <AlertPopup type='error' message='Something went wrong' callBack={() => { setShowAlert(false) }} />
            }
            <div className='relative'>

                <span
                    className='flex items-center border border-gray-300 justify-center w-12 rounded-full cursor-pointer bg-center bg-cover bg-no-repeat overflow-hidden h-12 '
                    onClick={() => { setDropDownActive(!dropDownActive) }}
                    style={{
                        backgroundImage: `url('${state.user.userData && state.user.userData.profile_image ? state.user.userData.profile_image : process.env.PUBLIC_URL + '/images/profilepic.png'}')`
                    }}
                >
                </span>

                {
                    dropDownActive ?
                        <div className='absolute top-full mt-5 right-0 bg-white rounded-lg text-gray-800 z-50 w-72 shadow-2xl'>
                            <div className='py-4 px-4 flex items-center gap-4'>
                                <span
                                    className='flex border-gray-300  items-center justify-center w-12 rounded-full cursor-pointer bg-center bg-cover bg-no-repeat overflow-hidden h-12 '
                                    style={{
                                        backgroundImage: `url('${state.user.userData && state.user.userData.profile_image ? state.user.userData.profile_image : process.env.PUBLIC_URL + '/images/profilepic.png'}')`
                                    }}
                                >
                                </span>
                                <div>
                                    <p className='font-medium text-lg'>{state.user.loggedIn && state.user.userData && state.user.userData.name}</p>
                                    <p className='text-sm'>{state.user.loggedIn && state.user.userData && state.user.userData.user.email}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='px-3 py-3 '>
                                <Link
                                    to={`/dashboard/${state.user.userData && state.user.userData.user_type && state.user.userData.user_type?.toLowerCase()}/`}
                                    className='text-lg relative w-full block mb-1'
                                >
                                    Dashboard
                                </Link>
                                <Link to='/cart/' className='text-lg relative w-full block mb-1'>
                                    Cart
                                    <span className='absolute right-0 bg-yellow-450 w-6 top-0 flex items-center justify-center h-6 rounded-full'>
                                        {state.course.cart_items.length}
                                    </span>
                                </Link>
                                <Link to='/wishlist/' className='text-lg relative w-full block'>
                                    Wishlist
                                    <span className='absolute right-0 bg-yellow-450 w-6 top-0 flex items-center justify-center h-6 rounded-full'>
                                        1
                                    </span>
                                </Link>
                            </div>
                            <hr />
                            <div className='p-3'>
                                <Link
                                    to={`/dashboard/${state.user.userData && state.user.userData.user_type && state.user.userData.user_type?.toLowerCase()}/profile/edit/`}
                                    className='text-lg relative w-full block'
                                >
                                    Edit Profile
                                </Link>
                            </div>
                            <hr />
                            <div className='p-3'>
                                <span
                                    className='text-lg cursor-pointer'
                                    onClick={() => {
                                        dispatch(
                                            LoggoutUser(
                                                () => {
                                                    Cookies.remove('auth_token')
                                                },
                                                () => {
                                                    setShowAlert(true)
                                                }
                                            )
                                        )
                                    }}>
                                    Logout
                                </span>
                            </div>

                        </div>
                        :
                        <></>
                }
            </div>
        </>
    )
}


const NotificationItem = () => {
    return (
        <div className='py-2 overflow-hidden cursor-pointer '>
            <p className='text-lg whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p className='text-gray-300'>26 Sep, 2021</p>
            <span className='block w-full bg-gray-500 mt-2' style={{ height: '1px' }}></span>
        </div>
    )
}

const NotificationDropDown = () => {

    const [NotifyActive, setNotifyActive] = useState(false)
    return (
        <div className='relative'>
            <span onClick={() => { setNotifyActive(!NotifyActive) }} >
                <FontAwesomeIcon icon={faBell} className='text-indigo-900 text-xl cursor-pointer' />
            </span>
            {
                NotifyActive ?
                    <div className='absolute top-full mt-5 right-0 bg-gray-600 text-white w-96 rounded-lg z-50'>
                        <h3 className='text-xl px-3 py-1'>Notifications</h3>
                        <hr />
                        <div className='px-2'>
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                        </div>
                    </div>
                    : <></>
            }
        </div>
    )
}

const LoggedUser = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const route = useHistory()


    useEffect(() => {
        dispatch(
            getCartItems()
        )
    }, [])

    return (
        <div className='flex items-center gap-5'>
            <NotificationDropDown />
            <span
                className='cursor-pointer relative'
                onClick={() => {
                    route.push('/cart')
                }}
            >
                <span className='bg-yellow-600 rounded-full w-[15px] h-[15px] flex items-center justify-center absolute text-white -top-1/3 right-0'>
                    {state.course.cart_items.length}
                </span>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5H17.79C18.0694 5.00001 18.3457 5.05857 18.6011 5.17191C18.8565 5.28524 19.0854 5.45083 19.2729 5.65801C19.4603 5.86519 19.6023 6.10936 19.6897 6.37478C19.777 6.64019 19.8078 6.92097 19.78 7.199L19.18 13.199C19.1307 13.6925 18.8997 14.1501 18.532 14.4829C18.1642 14.8157 17.686 15 17.19 15H7.64C7.17747 15.0002 6.72918 14.84 6.37144 14.5469C6.01371 14.2537 5.76866 13.8456 5.678 13.392L4 5Z" stroke="black" stroke-width="2" stroke-linejoin="round" />
                    <path d="M4 5L3.19 1.757C3.13583 1.54075 3.01095 1.34881 2.83521 1.21166C2.65946 1.0745 2.44293 1.00001 2.22 1H1M7 19H9M15 19H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <UserDropDown />
        </div>
    )
}



const NavLink = (props) => {
    return (
        <Link to={props.nextPath} className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
            <Route path={props.nextPath} exact >
                <ActiveEffect />
            </Route>
            <li className="relative capitalize">{props.text}</li>
        </Link>
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

const Header = (props) => {
    const [mobileNavshow, setMobileNavShow] = useState('hidden')


    // useEffect(() => {
    //     const user_auth_token = Cookies.get('auth_token')
    //     if (user_auth_token && props.user.loggedIn) {
    //         props.getUserProfile()
    //     }
    // }, [props.user.loggedIn])s


    return (
        <>
            <div className='bg-yellow-450 py-2 w-full px-4 sm:px-6 md:px-8'>
                <div className='max-w-[1300px] mx-auto flex justify-end'>
                    <p className='text-black text-sm '>Call Now +92-300-111-81-87</p>
                </div>
            </div>
            <div className='px-4 sm:px-6 md:px-8'>
                <header className='max-w-[1300px] py-2 sm:py-1 mx-auto flex items-center justify-between'>
                    <HamburgerIcon onClick={() => { setMobileNavShow('block') }} />
                    <Link to={'/'} className='LOGO cursor-pointer sm:block hidden'>
                        <img className='w-40' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
                    </Link>
                    <nav className={`absolute top-0 left-0 right-0 p-6 lg:p-0 z-50 lg:relative ${mobileNavshow} lg:block`} >
                        <ul className="flex items-center text-xs gap-1 pentutor-shadow lg:shadow-none lg:flex-row py-5 flex-col bg-white relative">
                            <span className='absolute top-3 left-5 text-xl cursor-pointer lg:hidden' onClick={() => { setMobileNavShow('hidden') }}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            <NavLink nextPath='/' text='Home' />
                            <NavLink nextPath='/courses/' text='Courses' />
                            <NavLink nextPath='/our-tutor/' text='Our Tutors' />
                            <NavLink nextPath='/about-us/' text='About Us' />
                            <NavLink nextPath='/contact-us/' text='Contact Us' />
                            <NavLink nextPath='/blogs/' text='Blogs' />
                            <NavLink nextPath='/jobs/' text='Jobs' />
                        </ul>
                    </nav>
                    <ul className='flex items-center text-xs gap-2'>
                        {
                            props.user.loggedIn ?
                                <LoggedUser />
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
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    getUserProfile: getUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
