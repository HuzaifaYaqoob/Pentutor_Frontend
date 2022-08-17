
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLowVision } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthBase from './AuthBase'
import Cookies from 'js-cookie'
import { LoginUser } from '../../redux/Actions/UserActions/UserActions'
import { connect } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import AlertPopup from '../../components/AlertPopup'

const LoginPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [show_alert, setAlert] = useState(undefined)
    const [show_pw, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [username_err, setUsernameErr] = useState(undefined)

    const [password, setPassword] = useState('')
    const [password_err, setPasswordErr] = useState(undefined)


    const Validation = () => {
        setUsername(username.trim())
        setPassword(password.trim())
        if (username == '' || password == '') {
            if (username == '') {
                setUsernameErr('Username is required')
            }
            if (password == '') {
                setPasswordErr('Password is required')
            }
            return false
        }
        return true
    }

    const Submit = () => {
        if (Validation()) {
            setLoading(true)
            let login_data = {
                username: username,
                password: password
            }
            props.LoginUser(
                login_data,
                () => {
                    setLoading(false)
                },
                () => {
                    setLoading(false)
                    setAlert(
                        {
                            type: 'error',
                            message: 'Invalid Credentials'
                        }
                    )
                    setUsernameErr('Invalid Credentials')
                    setPasswordErr('Invalid Credentials')
                }
            )
        }
    }

    useEffect(() => {
        const user_token = Cookies.get('auth_token')
        if (user_token) {
            props.history.push('/')
        }
    }, [props.user.loggedIn])


    return (
        <AuthBase Heading='Login' CurrentImage='/images/auth/LoginPageImage.png' >
            {
                loading &&
                <Loader />
            }
            {
                show_alert &&
                <AlertPopup
                    type={show_alert.type}
                    message={show_alert.message}
                    callBack={() => {
                        setAlert(undefined)
                    }}
                />
            }
            <div className='rounded-md bg-white pentutor-shadow p-10 max-w-sm mx-auto'>
                <div className='text-gray-800 mb-3'>
                    <label htmlFor="Username" className={`block text-sm mb-1 ${username_err && 'text-red-700'}`}>Email</label>
                    <div >
                        <input
                            value={username}
                            type="text" id='Username'
                            placeholder='Enter Your Email'
                            className={`outline-none w-full bg-gray-200 block rounded-lg text-sm p-2 ${username_err && 'border border-red-700'}`}
                            onChange={(e) => { setUsername(e.target.value); setUsernameErr(undefined) }}
                        />
                    </div>
                </div>
                <div className='text-gray-800 mb-3'>
                    <label htmlFor="Password" className={`${password_err && 'text-red-700'} block text-sm mb-1`}>Password</label>
                    <div className='relative'>
                        <input
                            value={password}
                            type={show_pw ? 'text' : "password"}
                            id='Password'
                            placeholder='Enter Your Password'
                            className={`outline-none bg-gray-200 rounded-lg  text-sm w-full block p-2 ${password_err && 'border border-red-700'}`}
                            onChange={(e) => { setPassword(e.target.value); setPasswordErr(undefined) }}
                        />
                        <span
                            className='cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2'
                            onClick={() => { setShowPassword(!show_pw) }}
                        >
                            <FontAwesomeIcon icon={faLowVision} />
                        </span>
                    </div>
                </div>
                <Link to={'/auth/forgot-password/'} className='text-yellow-600 text-xs'>Forgot Password?</Link>
                <button
                    className='w-full text-white capitalize py-2 mt-4 bg-indigo-900 rounded'
                    onClick={() => { Submit() }}
                >
                    Login
                </button>
                <p className='text-xs mt-5'>
                    Don't Have an account?
                    <Link className='text-yellow-600 capitalize' to='/auth/register/student/'>
                        Register!
                    </Link>
                </p>
            </div>

        </AuthBase>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    LoginUser: LoginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)