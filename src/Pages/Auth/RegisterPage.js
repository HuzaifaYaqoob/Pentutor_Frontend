
import { useState } from 'react'

import AuthBase from "./AuthBase"

import { Link, Route, useParams } from 'react-router-dom'

import StudentForm from "./StudentForm"
import TutorRegisterForm from "./TutorRegisterForm"
import RegisterForm from './RegisterForm'

const RegisterTab = (props) => {
    const ChangeTab = () => {
        props.path &&
            props.history.push(`/auth/register/${props.path}/`)
    }
    return (
        <div className={'w-full py-6 text-center cursor-pointer ' + (props.active ? 'bg-blue-900 hover:bg-blue-900 ' : 'bg-gray-200 ') + (props.path && 'hover:bg-gray-100 ')} onClick={() => { ChangeTab() }}>
            <p className={'font-bold text-sm ' + (props.active ? 'text-yellow-500' : 'text-gray-500')}>{props.Title}</p>
        </div>
    )
}



const RegisterPage = (props) => {
    const params = useParams()

    if (props?.location?.pathname == '/auth/register/') {
        props.history.push('/auth/register/student/')
    }

    return (
        <AuthBase Heading='Register' CurrentImage={params.UserStatus == 'student' ? '/images/auth/registerStudent.png' : '/images/auth/registerTutor.png'}>
            <div className='pentutor-shadow max-w-sm mx-auto rounded'>
                <div className='flex rounded overflow-hidden'>
                    <Route exact path='/auth/register/:user_status/'>
                        <RegisterTab Title='Student' active={params.UserStatus == 'student' ? true : false} path='student' {...props} />
                        <RegisterTab Title='Tutor' active={params.UserStatus == 'tutor' ? true : false} path='tutor' {...props} />
                    </Route>
                    <Route exact path='/auth/register/student/:step_status/'>
                        <RegisterTab Title='Student' active={params.UserStatus == 'student' ? true : false} {...props} />
                    </Route>
                    <Route exact path='/auth/register/tutor/:step_status/'>
                        <RegisterTab Title='Tutor' active={params.UserStatus == 'tutor' ? true : false} {...props} />
                    </Route>

                </div>
                <div className='bg-white p-8 pt-3 relative'>
                    {/* <Route path='/auth/register/student/' component={StudentForm} />
                    <Route path='/auth/register/tutor/' component={TutorRegisterForm} /> */}
                    <RegisterForm />
                    <div className='text-center mt-8 flex items-center gap-1 justify-center' >
                        <p className='text-center text-black text-sm'>Already have an account?</p><Link to='/auth/login/' className='text-sm text-yellow-500'>Login!</Link>
                    </div>
                </div>
            </div>
        </AuthBase>
    )
}

export default RegisterPage