

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"
import { connect } from 'react-redux'
import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'

import { getUserProfile, UpdateUserProfile } from '../../../../redux/Actions/ProfileActions/ProfileActions'
import { useEffect, useState } from "react"
import { apiBaseURL } from "../../../../redux/apiURLs"
import { getCity } from "../../../../redux/Actions/UtilityActions/UtilityActions"

// Importing Tabs Content 
import EditBasicDetails from './EditBasic'
import EditQualification from "./Edit Qualification"
import EditDocument from "./EditDocuments"
import EditExperience from "./EditExperience"
import EditReferrence from "./EditReferrence"
import EditProfessionalDetails from "./EditProfessional"

const ProfileTab = (props) => {
    return (
        <div
            className={`py-1 px-4 my-2 rounded cursor-pointer ${props.active ? 'bg-yellow-450 text-white' : ' border border-yellow-400 '} hover:bg-yellow-400 hover:text-white`}
            onClick={props.onClick}
        >
            {props.text}
        </div>
    )

}




const EditProfile = (props) => {
    const [active_tab, setActiveTab] = useState('BASIC')

    const [user_profile, setUserProfile] = useState()

    const [selected_image, setSelectedImage] = useState(undefined)
    const [selected_degree, setSelectedDegree] = useState(undefined)
    const [selected_cnic, setSelectedCnic] = useState(undefined)



    console.log(user_profile)

    const UpdateStudentProfile = () => {
        delete user_profile.profile_image
        delete user_profile.degree_image
        delete user_profile.cnic_image

        const image_data = {}
        if (selected_image) {
            image_data['profile_image'] = selected_image
        }
        if (selected_degree) {
            image_data['degree_image'] = selected_degree
        }
        if (selected_cnic) {
            image_data['cnic_image'] = selected_cnic
        }

        props.UpdateUserProfile(
            {
                ...user_profile,
                Country: user_profile.Country.id,
                city: user_profile.city.id,
                ...image_data
            }
        )
        setSelectedImage(undefined)
        setSelectedDegree(undefined)
        setSelectedCnic(undefined)
    }


    useEffect(() => {
        if (props.user_profile.profile) {
            setUserProfile(props.user_profile.profile)
        }
    }, [props.user_profile.profile])
    return (
        <>
            <DashboardBase>
                <ContentBox HeaderText='Welcome to Profile' />
                <div className="mx-auto max-w-6xl w-full">
                    <div className="flex items-center justify-between flex-wrap">
                        <ProfileTab
                            active={active_tab == 'BASIC' ? true : false}
                            text='Basic Information'
                            onClick={() => {
                                setActiveTab('BASIC')
                            }}
                        />
                        <ProfileTab
                            active={active_tab == 'OTHERDETAILS' ? true : false}
                            text='Other Details'
                            onClick={() => {
                                setActiveTab('OTHERDETAILS')
                            }}
                        />
                        {/* <ProfileTab
                            active={active_tab == 'QUALIFICATION' ? true : false}
                            text='Qualification'
                            onClick={() => {
                                setActiveTab('QUALIFICATION')
                            }}
                        /> */}
                        {/* <ProfileTab
                            active={active_tab == 'EXPERIENCE' ? true : false}
                            text='Experience'
                            onClick={() => {
                                setActiveTab('EXPERIENCE')
                            }}
                        /> */}
                        {/* <ProfileTab
                            active={active_tab == 'REFERRENCE' ? true : false}
                            text='References'
                            onClick={() => {
                                setActiveTab('REFERRENCE')
                            }}
                        /> */}
                        <ProfileTab
                            active={active_tab == 'DOCUMENT' ? true : false}
                            text='Documents/Media'
                            onClick={() => {
                                setActiveTab('DOCUMENT')
                            }}
                        />
                    </div>
                    <div>
                        {
                            active_tab == 'BASIC' &&
                            <EditBasicDetails user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                        {
                            active_tab == 'PROFESSIONAL' &&
                            <EditProfessionalDetails user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                        {
                            active_tab == 'QUALIFICATION' &&
                            <EditQualification user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                        {
                            active_tab == 'EXPERIENCE' &&
                            <EditExperience user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                        {
                            active_tab == 'REFERRENCE' &&
                            <EditReferrence user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                        {
                            active_tab == 'DOCUMENT' &&
                            <EditDocument user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                    </div>
                </div>


                <Form btnText='save' onSubmit={() => { UpdateStudentProfile() }} className='mx-auto max-w-6xl w-full '>
                    <div className='md:flex gap-10'>
                        <TextInput
                            Label='add your qualification'
                            placeholder='Becehlor"s in Science or Computer'
                            value={user_profile && user_profile.qualification}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        qualification: e.target.value
                                    }
                                )
                            }}
                        />
                        <TextInput
                            Label='add your subjects'
                            placeholder='English, Math, Physics'
                            value={user_profile && user_profile.subject}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        subject: e.target.value
                                    }
                                )
                            }}
                        />
                    </div>
                    <br />
                    <TextInput
                        Label='add your insitute'
                        placeholder='Government College University Faislabad'
                        value={user_profile && user_profile.institute}
                        onChange={(e) => {
                            setUserProfile(
                                {
                                    ...user_profile,
                                    institute: e.target.value
                                }
                            )
                        }}
                    />
                    <hr className='my-10' />
                    <div className='md:flex gap-10 mb-5'>
                        <TextInput
                            Label='preferred method of teaching'
                            placeholder='Online'
                            value={user_profile && user_profile.teaching_method}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        teaching_method: e.target.value
                                    }
                                )
                            }}
                        />
                        {/* <DropDownInput Label='preferred method of teaching' placeholder='Online' data={['hola', 'video', 'logo']} /> */}
                        {/* <DropDownInput Label='preferred days of study' placeholder='4 Days Selected' data={['hola', 'video', 'logo']} /> */}
                        <TextInput
                            Label='preferred days of study'
                            placeholder='Saturday, Sunday'
                            value={user_profile && user_profile.study_days}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        study_days: e.target.value
                                    }
                                )
                            }}
                        />
                    </div>
                    <TextInput
                        Label='preferred timing of study'
                        placeholder='11:00 AM -- To -- 3:PM'
                        value={user_profile && user_profile.study_timing}
                        onChange={(e) => {
                            setUserProfile(
                                {
                                    ...user_profile,
                                    study_timing: e.target.value
                                }
                            )
                        }}
                    />
                    <hr className='my-10' />
                    <div className="flex items-center justify-between">
                        {
                            user_profile && user_profile.profile_image ?
                                <>
                                    <div className="w-full text-center">
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${user_profile &&
                                                    user_profile.profile_image && !selected_image ?
                                                    apiBaseURL + user_profile.profile_image :
                                                    user_profile.profile_image
                                                    }')`
                                            }}
                                        >
                                        </div>
                                        <FileInput
                                            remove_logo
                                            accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                                            Label='Change picture'
                                            id='profile-update-picture'
                                            onChange={
                                                (event) => {
                                                    setSelectedImage(event.target.files[0])
                                                    setUserProfile(
                                                        {
                                                            ...user_profile,
                                                            profile_image: URL.createObjectURL(event.target.files[0])
                                                        }
                                                    )
                                                }}
                                            value=''
                                        />
                                    </div>
                                </>
                                :
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
                        }
                        {
                            user_profile && user_profile.degree_image ?
                                <>
                                    <div className="w-full text-center">
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${user_profile &&
                                                    user_profile.degree_image && !selected_degree ?
                                                    apiBaseURL + user_profile.degree_image :
                                                    user_profile.degree_image
                                                    }')`
                                            }}
                                        >
                                        </div>
                                        <FileInput
                                            remove_logo
                                            accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                                            Label='Change degree picture'
                                            id='degree-update-picture'
                                            onChange={
                                                (event) => {
                                                    setSelectedDegree(event.target.files[0])
                                                    setUserProfile(
                                                        {
                                                            ...user_profile,
                                                            degree_image: URL.createObjectURL(event.target.files[0])
                                                        }
                                                    )
                                                }}
                                            value=''
                                        />
                                    </div>
                                </>
                                :
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
                        }
                        {
                            user_profile && user_profile.cnic_image ?
                                <>
                                    <div className="w-full text-center">
                                        {
                                            !selected_cnic ?
                                                <div
                                                    className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                                    style={{
                                                        backgroundImage: `url('${user_profile &&
                                                            user_profile.cnic_image ?
                                                            apiBaseURL + user_profile.cnic_image :
                                                            ''
                                                            }')`
                                                    }}
                                                >
                                                </div>
                                                :
                                                <div
                                                    className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                                    style={{
                                                        backgroundImage: `url('${user_profile.cnic_image
                                                            }')`
                                                    }}
                                                >
                                                </div>
                                        }
                                        <FileInput
                                            remove_logo
                                            accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                                            Label='Change CNIC Image'
                                            id='cnic-update-picture'
                                            onChange={
                                                (event) => {
                                                    setSelectedCnic(event.target.files[0])
                                                    setUserProfile(
                                                        {
                                                            ...user_profile,
                                                            cnic_image: URL.createObjectURL(event.target.files[0])
                                                        }
                                                    )
                                                    console.log(event.target.files)
                                                }}
                                            value=''
                                        />
                                    </div>
                                </>
                                :
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
                        }

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
    getUserProfile: getUserProfile,
    getCity: getCity,
    UpdateUserProfile: UpdateUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)