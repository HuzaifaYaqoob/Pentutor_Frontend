

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"
import { connect } from 'react-redux'
import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'

import { getUserProfile } from '../../../../redux/Actions/ProfileActions/ProfileActions'
import { useEffect } from "react"

const EditProfile = (props) => {
    console.log(props)

    useEffect(() => {
    }, [])
    return (
        <>
            <DashboardBase>
                <ContentBox HeaderText='Welcome to Profile' />
                <Form btnText='save' className='mx-auto max-w-6xl w-full '>
                    <div className='md:flex gap-10 mb-5'>
                        <TextInput
                            Label='Your Name'
                            placeholder='Maryam Safdar'
                            value={props.user_profile.profile && props.user_profile.profile.user && props.user_profile.profile.user.first_name && props.user_profile.profile.user.last_name && `${props.user_profile.profile.user.first_name} ${props.user_profile.profile.user.last_name}`}
                        />
                        <EmailInput
                            Label='E-Mail Address'
                            placeholder='Yourname@gmail.com'
                            value={props.user_profile.profile && props.user_profile.profile.user && props.user_profile.profile.user.email}
                        />
                    </div>
                    <div className='md:flex gap-10'>
                        <ContactNumberInput
                            Label='contact number'
                            value={props.user_profile.profile && props.user_profile.profile.mobile}
                        />
                        <DOBInput
                            Label='date of birth'
                            value={props.user_profile.profile && props.user_profile.profile.mobile && props.user_profile.profile.date_of_birth}
                        />
                    </div>
                    <hr className='my-10' />
                    <div className='md:flex gap-10'>
                        <TextInput
                            Label='add country'
                            placeholder='Pakistan'
                            value={props.user_profile.profile && props.user_profile.profile.Country && props.user_profile.profile.Country.name}
                        />
                        <TextInput
                            Label='add city'
                            placeholder='Lahore'
                            value={props.user_profile.profile && props.user_profile.profile.city && props.user_profile.profile.city.name}
                        />
                    </div>
                    <br />
                    <TextInput
                        Label='add your area'
                        placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore'
                        value={props.user_profile.profile && props.user_profile.profile.area}
                    />
                    <hr className='my-10' />
                    <div className='md:flex gap-10'>
                        <TextInput
                            Label='add your qualification'
                            placeholder='Pakistan'
                            value={props.user_profile.profile && props.user_profile.profile.qualification}
                        />
                        <TextInput Label='add your subjects' placeholder='English, Math, Physics' value={props.user_profile.profile && props.user_profile.profile.subject} />
                    </div>
                    <br />
                    <TextInput Label='add your insitute' placeholder='Government College University Faislabad' value={props.user_profile.profile && props.user_profile.profile.institute} />
                    <hr className='my-10' />
                    <div className='md:flex gap-10 mb-5'>
                        <DropDownInput Label='preferred method of teaching' placeholder='Online' data={['hola', 'video', 'logo']} />
                        <DropDownInput Label='preferred days of study' placeholder='4 Days Selected' data={['hola', 'video', 'logo']} />
                    </div>
                    <TextInput Label='preferred timing of study' placeholder='11:00 AM -- To -- 3:PM' value={props.user_profile.profile && props.user_profile.profile.study_timing} />
                    <hr className='my-10' />
                    <div className="flex items-center justify-between">
                        <FileInput
                            accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                            Label='Profile Picture'
                            id='profile-picture'
                            onChange={
                                (event) => {
                                    console.log(event.target.files)
                                }}
                            value=''
                        />
                        <FileInput
                            accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                            Label='add CNIC/b-form'
                            id='cnic-picture'
                            onChange={
                                (event) => {
                                    console.log(event.target.files)
                                }}
                            value=''
                        />
                        <FileInput
                            accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                            Label='add degree picture'
                            id='degree-picture'
                            onChange={
                                (event) => {
                                    console.log(event.target.files)
                                }}
                            value=''
                        />
                    </div>
                    <hr className='my-10' />

                </Form>
            </DashboardBase>
        </>
    )
}


const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    getUserProfile: getUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)