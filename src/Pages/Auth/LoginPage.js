
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLowVision } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthBase from './AuthBase'
import Cookies from 'js-cookie'
import { LoginUser } from '../../redux/Actions/UserActions/UserActions'
import { connect } from 'react-redux'


const LoginPage = (props) => {
    const [show_pw, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    console.log(props)

    const Validation = () => {
        setUsername(username.trim())
        setPassword(password.trim())
        if (username == '' || password == '') {
            return false
        }
        return true
    }

    const Submit = () => {
        // if(Validation()){
        //     let login_form = new FormData()

        //     login_form.append('username' , username)
        //     login_form.append('password' , password)

        //     let rs_code;
        //     let req_ = {
        //         method : 'POST' ,
        //         body : login_form
        //     }
        // }
        props.LoginUser()
    }

    useEffect(() => {
        const user_token = Cookies.get('auth_token')
        if (user_token) {
            props.history.push('/')
        }
    }, [])


    return (
        <AuthBase Heading='Login' CurrentImage='/images/auth/LoginPageImage.png' >
            <div className='rounded-md bg-white pentutor-shadow p-10 max-w-sm mx-auto'>
                <div className='text-gray-800 mb-3'>
                    <label htmlFor="Username" className='block text-sm mb-1'>Username</label>
                    <div >
                        <input
                            value={username}
                            type="text" id='Username'
                            placeholder='Enter Your Username/ User ID'
                            className='outline-none w-full bg-gray-200 block rounded-lg text-sm p-2'
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </div>
                </div>
                <div className='text-gray-800 mb-3'>
                    <label htmlFor="Password" className='block text-sm mb-1'>Password</label>
                    <div className='relative'>
                        <input
                            value={password}
                            type={show_pw ? 'text' : "password"}
                            id='Password'
                            placeholder='Enter Your Password'
                            className='outline-none bg-gray-200 rounded-lg  text-sm w-full block p-2'
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <span
                            className='cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2'
                            onClick={() => { setShowPassword(!show_pw) }}
                        >
                            <FontAwesomeIcon icon={faLowVision} />
                        </span>
                    </div>
                </div>
                <Link className='text-yellow-600 text-xs  '>Forgot Password?</Link>
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