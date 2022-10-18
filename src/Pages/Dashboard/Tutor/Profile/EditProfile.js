



import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'
import { connect } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { apiBaseURL } from "../../../../redux/apiURLs"

import { UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import { getCity } from "../../../../redux/Actions/UtilityActions/UtilityActions"
import SelectDropDown from "../../../../components/FormSection/Dropdown"
import { ProfileTab } from "../../Student/Profile/EditProfile"

import TutorBasicInfoEdit from './BasicInfo'
import TutorDocumentMediaEdit from "./DocumentMedia"

const EditProfileTutor = (props) => {
    const [user_profile, setUserProfile] = useState({})
    const [all_cities, setAllCities] = useState([])
    const [active_tab, setActiveTab] = useState('BASIC')


    const [selected_image, setSelectedImage] = useState(undefined)
    const [selected_degree, setSelectedDegree] = useState(undefined)
    const [selected_cnic, setSelectedCnic] = useState(undefined)



    const Form_Steps = [
        {
            text: 'Basic Information',
            onClick: () => {
                setActiveTab('BASIC')
            },
            active: active_tab == 'BASIC' ? true : false
        },
        {
            active: active_tab == 'PROFESSIONALDETAILS' ? true : false,
            text: 'Professional Details',
            onClick: () => {
                setActiveTab('PROFESSIONALDETAILS')
            }
        },
        {
            active: active_tab == 'DOCUMENT' ? true : false,
            text: 'Documents/Media',
            onClick: () => {
                setActiveTab('DOCUMENT')

            }
        }
    ]



    const UpdateStudentProfile = () => {
        // delete user_profile.profile_image
        // delete user_profile.degree_image
        // delete user_profile.cnic_image

        // const image_data = {}
        // if (selected_image) {
        //     image_data['profile_image'] = selected_image
        // }
        // if (selected_degree) {
        //     image_data['degree_image'] = selected_degree
        // }
        // if (selected_cnic) {
        //     image_data['cnic_image'] = selected_cnic
        // }

        props.UpdateUserProfile(
            {
                ...user_profile,
                Country: user_profile.Country ? user_profile.Country.id : '',
                city: user_profile.city ? user_profile.city.id : '',
                // ...image_data
            }
        )
        setSelectedImage(undefined)
        setSelectedDegree(undefined)
        setSelectedCnic(undefined)
    }

    const getCity = (country) => {
        props.getCity(
            country,
            (data) => {
                setAllCities(data.response)
            }
        )
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
                <div className="flex items-center justify-between flex-wrap">
                    {
                        Form_Steps.map((step, index) => {
                            return (
                                <>
                                    {
                                        index != 0 &&
                                        <div className="flex-1 border-dashed border-yellow-300 border-t-[2px] h-0 p-0"></div>
                                    }
                                    <ProfileTab
                                        active={step.active}
                                        text={step.text}
                                        onClick={step.onClick}
                                    />
                                </>
                            )
                        })
                    }
                </div>

                <Form
                    btnText='save'
                    onSubmit={() => {
                        UpdateStudentProfile()
                    }}
                >
                    {
                        active_tab == 'BASIC' &&
                        <TutorBasicInfoEdit
                            data={user_profile}
                            onUpdateData={(data) => {
                                setUserProfile({
                                    ...user_profile,
                                    ...data
                                })
                            }}
                        />
                    }
                    {
                        active_tab == 'DOCUMENT' &&
                        <TutorDocumentMediaEdit
                            data={user_profile}
                            onUpdateData={(data) => {
                                setUserProfile({
                                    ...user_profile,
                                    ...data
                                })
                            }}
                        />
                    }
                </Form>
            </DashboardBase>
        </>
    )
}


const mapStateToProps = state => {
    return state
}


const mapDispatchToProps = {
    UpdateUserProfile: UpdateUserProfile,
    getCity: getCity
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileTutor)