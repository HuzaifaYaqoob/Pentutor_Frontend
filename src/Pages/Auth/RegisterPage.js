
import React from 'react'

import AuthBase from "./AuthBase"

import { Route, useParams } from 'react-router-dom'

import StudentForm from "./StudentForm"
import TutorRegisterForm from "./TutorRegisterForm"

const RegisterTab = (props) =>{
    const ChangeTab = () =>{
        props.history.push(`/auth/register/${props.path}/`)
    }
    return(
        <div className={'w-full py-5 hover:bg-gray-100 text-center cursor-pointer ' + (props.active ? 'bg-white' : 'bg-gray-200')} onClick={()=>{ChangeTab()}}>
            <p className={'font-bold text-lg ' + (props.active? 'text-yellow-500' : 'text-gray-500') }>{props.Title}</p>
        </div>
    )
}


const RegisterPage = (props) => {
    const params = useParams()
    
    if(props.location.pathname == '/auth/register/'){
        props.history.push('/auth/register/student/')
    }
   
    return (
        <AuthBase Heading='Register' CurrentImage={ params.UserStatus =='student' ?'/images/auth/registerStudent.png' : '/images/auth/registerTutor.png'}>
            <div className='pentutor-shadow max-w-sm mx-auto rounded'>
                <div className='flex rounded overflow-hidden'>
                    <RegisterTab Title='Student' active={params.UserStatus=='student' ? true : false} path='student' {...props} />
                    <RegisterTab Title='Tutor' active={params.UserStatus=='tutor' ? true : false}  path='tutor' {...props} />

                </div>
                <div>
                    <Route path='/auth/register/student/' component={StudentForm} />
                    <Route path='/auth/register/tutor/' component={TutorRegisterForm} />
                </div>
            </div>
        </AuthBase>
    )
}

export default RegisterPage