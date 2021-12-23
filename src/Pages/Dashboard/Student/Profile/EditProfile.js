

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"
import { connect } from 'react-redux'
import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'

import { getUserProfile, UpdateUserProfile } from '../../../../redux/Actions/ProfileActions/ProfileActions'
import { useEffect, useState } from "react"
import { apiBaseURL } from "../../../../redux/apiURLs"
import { getCity } from "../../../../redux/Actions/UtilityActions/UtilityActions"



const ProfileTab = (props) => {
    return (
        <div className={`py-1 px-4 rounded cursor-pointer ${props.active ? 'bg-yellow-450 text-white' : ' border border-yellow-400 '} hover:bg-yellow-400 hover:text-white`}>
            {props.text}
        </div>
    )

}




const EditProfile = (props) => {
    const [user_profile, setUserProfile] = useState()
    const [all_cities, setAllCities] = useState([])

    const [selected_image, setSelectedImage] = useState(undefined)
    const [selected_degree, setSelectedDegree] = useState(undefined)
    const [selected_cnic, setSelectedCnic] = useState(undefined)



    console.log(props)

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

    const getCity = (country) => {
        props.getCity(
            country,
            (data) => {
                console.log(data)
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
                <div className="mx-auto max-w-6xl w-full">
                    <div className="flex items-center justify-between">
                        <ProfileTab text='Basic Information' />
                        <ProfileTab text='Professional Details' />
                        <ProfileTab text='Qualification' />
                        <ProfileTab text='References' />
                        <ProfileTab text='Documents/Media' />
                    </div>
                    <h1>edit profi</h1>
                </div>
                <Form btnText='save' onSubmit={() => { UpdateStudentProfile() }} className='mx-auto max-w-6xl w-full '>
                    <div className='md:flex gap-10 mb-5'>
                        <TextInput
                            Label='First Name'
                            placeholder='First Name'
                            value={
                                user_profile && user_profile.user && user_profile.user.first_name && user_profile.user.first_name
                            }
                            onChange={(e) => {
                                console.log(e.target.value)
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        user: {
                                            ...user_profile.user,
                                            first_name: e.target.value
                                        }
                                    }
                                )
                            }}
                        />
                        <TextInput
                            Label='Last Name'
                            placeholder='Last Name'
                            value={
                                user_profile && user_profile.user && user_profile.user.last_name && user_profile.user.last_name
                            }
                            onChange={(e) => {
                                console.log(e.target.value)
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        user: {
                                            ...user_profile.user,
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
                                            ...user_profile.user,
                                            email: e.target.value
                                        }
                                    }
                                )
                            }}
                        />
                    </div>
                    <div className='md:flex gap-10'>
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
                            value={user_profile && user_profile.date_of_birth && user_profile.date_of_birth}
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
                    <div className='md:flex gap-10'>
                        <DropDownInput
                            Label='Select Country'
                            placeholder='Select Country'
                            value={user_profile && user_profile.Country && user_profile.Country.name}
                            data={
                                props.utility.countries.length > 0 &&
                                props.utility.countries.map((ct) => {
                                    return {
                                        label: ct.name,
                                        value: ct.id
                                    }
                                })
                            }
                            onChange={(value) => {
                                getCity(value)
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        Country: {
                                            ...props.utility.countries.filter((ft_ct) => {
                                                if (ft_ct.id == value) {
                                                    console.log(ft_ct)
                                                    return ft_ct
                                                }
                                            })[0]
                                        },
                                        city: 0
                                    }
                                )
                            }}
                        />
                        <DropDownInput
                            Label='Select City'
                            placeholder='Select City'
                            value={user_profile && user_profile.city && user_profile.city.name}
                            data={
                                all_cities.length > 0 ?
                                    all_cities.map((ct) => {
                                        return {
                                            label: ct.name,
                                            value: ct.id
                                        }
                                    })
                                    : []
                            }
                            onChange={(value) => {
                                setUserProfile(
                                    {
                                        ...user_profile,
                                        city: {
                                            ...all_cities.filter((ft_ct) => {
                                                if (ft_ct.id == value) {
                                                    console.log(ft_ct)
                                                    return ft_ct
                                                }
                                            })[0]
                                        }
                                    }
                                )
                            }}
                        />
                    </div>
                    <br />
                    <TextInput
                        Label='add your area'
                        placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore'
                        value={user_profile && user_profile.area}
                    />
                    <hr className='my-10' />
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