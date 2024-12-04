import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'
import { connect } from "react-redux"
import { useState, useEffect } from "react"
import { apiBaseURL } from "../../../../redux/apiURLs"
import { UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import { getCity } from "../../../../redux/Actions/UtilityActions/UtilityActions"
import SelectDropDown from "../../../../components/FormSection/Dropdown"

const TutorBasicInfoEdit = ({ data, onUpdateData, ...props }) => {
    const [all_cities, setAllCities] = useState([])
    const [selected_image, setSelectedImage] = useState(undefined)
    const [selected_degree, setSelectedDegree] = useState(undefined)
    const [selected_cnic, setSelectedCnic] = useState(undefined)

    const [errors, setErrors] = useState({})

    const getCity = (country) => {
        props.getCity(
            country,
            (data) => {
                setAllCities(data.response)
            }
        )
    }

    const updateProfileHandler = (e) => {
        let { name, value } = e.target
        onUpdateData({ [name]: value })
    }

    // Simple validation function
    const validateForm = () => {
        const newErrors = {}
        if (!data?.user?.first_name) newErrors.first_name = "First name is required."
        if (!data?.user?.last_name) newErrors.last_name = "Last name is required."
        if (!data?.user?.email) newErrors.email = "Email is required."
        if (!data?.mobile) newErrors.mobile = "Contact number is required."
        if (!data?.date_of_birth) newErrors.date_of_birth = "Date of birth is required."
        if (!data?.area) newErrors.area = "Area is required."
        if (!data?.Country?.name) newErrors.country = "Country is required."
        if (!data?.city?.name) newErrors.city = "City is required."

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    return (
        <>
            <div className='flex gap-10 mb-5'>
                <TextInput
                    Label='First Name'
                    placeholder='First Name'
                    value={data?.user?.first_name}
                    name='first_name'
                    className={errors.first_name ? 'border-red-500' : ''}
                    onChange={(e) => {
                        onUpdateData({
                            user: {
                                first_name: e.target.value
                            }
                        })
                    }}
                />
                {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}

                <TextInput
                    Label='Last Name'
                    placeholder='Last Name'
                    value={data?.user?.last_name}
                    name='last_name'
                    className={errors.last_name ? 'border-red-500' : ''}
                    onChange={(e) => {
                        onUpdateData({
                            user: {
                                last_name: e.target.value
                            }
                        })
                    }}
                />
                {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}
            </div>

            <div className='flex gap-10'>
                <EmailInput
                    Label='Email Address'
                    placeholder='Yourname@gmail.com'
                    value={data?.user?.email}
                    className={errors.email ? 'border-red-500' : ''}
                    onChange={(e) => {
                        onUpdateData({
                            user: {
                                email: e.target.value
                            }
                        })
                    }}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <ContactNumberInput
                    name='mobile'
                    Label='Contact number'
                    value={data?.mobile}
                    className={errors.mobile ? 'border-red-500' : ''}
                    onChange={updateProfileHandler}
                />
                {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
            </div>

            <div className='flex gap-10 mt-5'>
                <DOBInput
                    Label='Date of birth'
                    value={data?.date_of_birth}
                    className={errors.date_of_birth ? 'border-red-500' : ''}
                    onChange={(e) => {
                        onUpdateData({
                            date_of_birth: e.target.value
                        })
                    }}
                />
                {errors.date_of_birth && <p className="text-red-500">{errors.date_of_birth}</p>}

                <TextInput
                    Label='Add your area'
                    placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore'
                    className={`text-start ${errors.area ? 'border-red-500' : ''}`}
                    value={data?.area}
                    onChange={(e) => {
                        onUpdateData({
                            area: e.target.value
                        })
                    }}
                />
                {errors.area && <p className="text-red-500">{errors.area}</p>}
            </div>

            <div className="flex-1 flex gap-10 mt-5">
                <div className='flex-1'>
                    <SelectDropDown
                        title='Select Country'
                        placeholder='Select Country'
                        value={data?.Country?.name}
                        options={
                            props.utility.countries.length > 0 ?
                                props.utility.countries.map((ct) => {
                                    return {
                                        label: ct.name,
                                        value: ct.id
                                    }
                                }) : []
                        }
                        className={errors.country ? 'border-red-500' : ''}
                        onChange={(e) => {
                            getCity(e.target.value)
                            onUpdateData({
                                Country: {
                                    ...props.utility.countries.filter((ft_ct) => {
                                        if (ft_ct.id == e.target.value) {
                                            return ft_ct
                                        }
                                    })[0]
                                },
                                city: 0
                            })
                        }}
                    />
                    {errors.country && <p className="text-red-500">{errors.country}</p>}
                </div>

                <div className='flex-1'>
                    <SelectDropDown
                        title='Select City'
                        placeholder='Select City'
                        value={data?.city?.name}
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
                        className={errors.city ? 'border-red-500' : ''}
                        onChange={(e) => {
                            onUpdateData({
                                city: {
                                    ...all_cities.filter((ft_ct) => {
                                        if (ft_ct.id == e.target.value) {
                                            return ft_ct
                                        }
                                    })[0]
                                }
                            })
                        }}
                    />
                    {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TutorBasicInfoEdit)
