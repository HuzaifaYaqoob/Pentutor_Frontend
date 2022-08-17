

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
                            active_tab == 'OTHERDETAILS' &&
                            <EditProfessionalDetails user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                        {/* {
                            active_tab == 'QUALIFICATION' &&
                            <EditQualification user_profile_={user_profile} setUserProfile={setUserProfile} />
                        } */}
                        {/* {
                            active_tab == 'EXPERIENCE' &&
                            <EditExperience user_profile_={user_profile} setUserProfile={setUserProfile} />
                        } */}
                        {/* {
                            active_tab == 'REFERRENCE' &&
                            <EditReferrence user_profile_={user_profile} setUserProfile={setUserProfile} />
                        } */}
                        {
                            active_tab == 'DOCUMENT' &&
                            <EditDocument user_profile_={user_profile} setUserProfile={setUserProfile} />
                        }
                    </div>
                </div>

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