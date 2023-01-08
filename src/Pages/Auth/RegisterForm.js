

import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { RegisterUser } from '../../redux/Actions/UserActions/UserActions'
import Loader from '../../components/Loader/Loader'
import { toast } from 'react-toastify'

const RegisterForm = (props) => {
    const params = useParams()
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [first_name, setFIrstName] = useState('')
    const [first_name_err, setFIrstNameErr] = useState('')

    const [last_name, setLastName] = useState('')
    const [last_name_err, setLastNameErr] = useState('')

    const [email, setEmail] = useState('')
    const [email_err, setEmailErr] = useState('')

    const [password, setPassword] = useState('')
    const [password_err, setPasswordErr] = useState('')

    const ValidateData = () => {
        setFIrstName(first_name.trim())
        setLastName(last_name.trim())
        setEmail(email.trim())
        setPassword(password.trim())

        if (first_name == '' || last_name == '' || email == '' || password == '') {
            if (first_name == '') {
                setFIrstNameErr('First Name is required')
            }
            if (last_name == '') {
                setLastNameErr('First Name is required')
            }
            if (email == '') {
                setEmailErr('First Name is required')
            }
            if (password == '') {
                setPasswordErr('First Name is required')
            }
            return false
        }
        return true
    }

    const Submit = () => {
        if (ValidateData()) {
            setLoading(true)
            props.RegisterUser(
                params.UserStatus,
                {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password,
                    type: params.UserStatus
                },
                () => {
                    history.push('/auth/login/')
                    setLoading(false)
                },
                (data) => {
                    toast.info(data)
                    setLoading(false)
                }
            )
        }
    }

    return (
        <>
            {
                loading &&
                <Loader />
            }
            <div className='mb-2'>
                <label htmlFor="f_name" className={`text-xs font-semibold mb-1 ${first_name_err && 'text-red-700'}`}>First Name</label>
                <div>
                    <input value={first_name} className={`${first_name_err && 'border border-red-700'} bg-gray-200 block text-xs rounded outline-none w-full p-2`} type="text" id='f_name' placeholder='Enter Your First Name...' onChange={(e) => { setFIrstName(e.target.value); setFIrstNameErr(undefined) }} />
                </div>
            </div>
            <div className='mb-2'>
                <label htmlFor="l_name" className={`${last_name_err && 'text-red-700'} text-xs font-semibold mb-1`}>Last Name</label>
                <div>
                    <input value={last_name} className={`${last_name_err && 'border border-red-700'} bg-gray-200 block text-xs rounded outline-none w-full p-2`} type="text" id='l_name' placeholder='Enter Your Last Name...' onChange={(e) => { setLastName(e.target.value); setLastNameErr(undefined) }} />
                </div>
            </div>
            <div className='mb-2'>
                <label htmlFor="email" className={`${email_err && 'text-red-700'} text-xs font-semibold`}>Your Email</label>
                <div>
                    <input value={email} className={`${email_err && 'border border-red-700'} bg-gray-200 block text-xs rounded outline-none w-full p-2`} type="email" id='email' placeholder='Enter Your Email...' onChange={(e) => { setEmail(e.target.value); setEmailErr(undefined) }} />
                </div>
            </div>
            <div className='mb-2'>
                <label htmlFor="pw" className={`${password_err && 'text-red-700'} text-xs font-semibold`}>Password</label>
                <div>
                    <input value={password} className={`${password_err && 'border border-red-700'} bg-gray-200 block text-xs rounded outline-none w-full p-2`} type="password" id='pw' placeholder='*******' onChange={(e) => { setPassword(e.target.value); setPasswordErr(undefined) }} />
                </div>
            </div>
            <div className='bg-yellow-450 text-center text-indigo-900 py-2 rounded mt-4 cursor-pointer hover:bg-yellow-400' onClick={() => { Submit() }}>
                Submit
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    RegisterUser: RegisterUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)