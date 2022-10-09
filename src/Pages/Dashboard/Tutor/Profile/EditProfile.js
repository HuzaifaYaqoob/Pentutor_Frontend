



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

const EditProfileTutor = (props) => {
    const [user_profile, setUserProfile] = useState()
    const [all_cities, setAllCities] = useState([])

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
                Country: user_profile.Country ? user_profile.Country.id : '',
                city: user_profile.city ? user_profile.city.id : '',
                ...image_data
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
                <Form
                    btnText='save'
                    onSubmit={() => {
                        UpdateStudentProfile()
                    }}
                >
                    <div className='flex gap-10 mb-5'>
                        <TextInput
                            Label='First Name'
                            placeholder='First Name'
                            value={user_profile && user_profile.user && user_profile.user.first_name}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        user: {
                                            first_name: e.target.value
                                        }
                                    }
                                )
                            }}
                        />
                        <TextInput
                            Label='Last Name'
                            placeholder='Last Name'
                            value={user_profile && user_profile.user && user_profile.user.last_name}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        user: {
                                            last_name: e.target.value
                                        }
                                    }
                                )
                            }}
                        />
                        <EmailInput
                            Label='E-Mail Address'
                            placeholder='Yourname@gmail.com'
                            value={user_profile && user_profile.user && user_profile.user.email}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        user: {
                                            email: e.target.value
                                        }
                                    }
                                )
                            }}
                        />
                    </div>
                    <div className='flex gap-10'>
                        <ContactNumberInput
                            Label='contact number'
                            value={user_profile && user_profile.mobile}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        mobile: e.target.value
                                    }
                                )
                            }}
                        />
                        <DOBInput
                            Label='date of birth'
                            value={user_profile && user_profile.date_of_birth ? user_profile.date_of_birth : ''}
                            onChange={(e) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        date_of_birth: e.target.value
                                    }
                                )
                            }}
                        />
                    </div>
                    <hr className='my-10' />
                    <div className='flex gap-10'>
                        <div className="flex-1">
                            <SelectDropDown
                                title='Select Country'
                                placeholder='Select Country'
                                value={user_profile && user_profile.Country && user_profile.Country.name}
                                options={
                                    props.utility.countries.length > 0 ?
                                        props.utility.countries.map((ct) => {
                                            return {
                                                label: ct.name,
                                                value: ct.id
                                            }
                                        }) : []
                                }
                                onChange={(e) => {
                                    getCity(e.target.value)
                                    setUserProfile(
                                        {
                                            ...user_profile,
                                            Country: {
                                                ...props.utility.countries.filter((ft_ct) => {
                                                    if (ft_ct.id == e.target.value) {
                                                        return ft_ct
                                                    }
                                                })[0]
                                            },
                                            city: 0
                                        }
                                    )
                                }}
                            />
                        </div>
                        <div className="flex-1">
                            <SelectDropDown
                                title='Select City'
                                placeholder='Select City'
                                value={user_profile && user_profile.city && user_profile.city.name}
                                options={
                                    all_cities.length > 0 ?
                                        all_cities.map((ct) => {
                                            return {
                                                label: ct.name,
                                                value: ct.id
                                            }
                                        })
                                        : []
                                }
                                onChange={(e) => {
                                    setUserProfile(
                                        {
                                            ...user_profile,
                                            city: {
                                                ...all_cities.filter((ft_ct) => {
                                                    if (ft_ct.id == e.target.value) {
                                                        return ft_ct
                                                    }
                                                })[0]
                                            }
                                        }
                                    )
                                }}
                            />
                        </div>

                    </div>
                    <br />
                    <TextInput
                        Label='add your area'
                        placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore'
                        className='text-start'
                        value={user_profile && user_profile.area ? user_profile.area : ''}
                        onChange={(e) => {
                            setUserProfile(
                                {
                                    ...user_profile,
                                    area: e.target.value
                                }
                            )
                        }}
                    />
                    <hr className='my-10' />
                    <div className="flex flex-col md:flex-row items-center justify-between">

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
                                            setSelectedCnic(event.target.files[0])
                                            setUserProfile(
                                                {
                                                    ...user_profile,
                                                    cnic_image: URL.createObjectURL(event.target.files[0])
                                                }
                                            )
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
    UpdateUserProfile: UpdateUserProfile,
    getCity: getCity
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileTutor)