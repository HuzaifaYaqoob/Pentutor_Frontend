


import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'
import { connect } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { apiBaseURL } from "../../../../redux/apiURLs"

import { UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import { getCity } from "../../../../redux/Actions/UtilityActions/UtilityActions"
import SelectDropDown from "../../../../components/FormSection/Dropdown"



const TutorBasicInfoEdit = ({ data, onUpdateData, ...props }) => {
    const [all_cities, setAllCities] = useState([])


    const [selected_image, setSelectedImage] = useState(undefined)
    const [selected_degree, setSelectedDegree] = useState(undefined)
    const [selected_cnic, setSelectedCnic] = useState(undefined)

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

    return (
        <>
            <div className='flex gap-10 mb-5'>
                <TextInput
                    Label='First Name'
                    placeholder='First Name'
                    value={data?.user?.first_name}
                    name='first_name'
                    onChange={(e) => {
                        onUpdateData(
                            {
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
                    value={data?.user?.last_name}
                    name='last_name'
                    onChange={(e) => {
                        onUpdateData(
                            {
                                user: {
                                    last_name: e.target.value
                                }
                            }
                        )
                    }}
                />

            </div>
            <div className='flex gap-10'>
                <EmailInput
                    Label='E-Mail Address'
                    placeholder='Yourname@gmail.com'
                    value={data?.user?.email}
                    onChange={(e) => {
                        onUpdateData(
                            {
                                user: {
                                    email: e.target.value
                                }
                            }
                        )
                    }}
                />
                <ContactNumberInput
                    name='mobile'
                    Label='contact number'
                    value={data?.mobile}
                    onChange={updateProfileHandler}
                />

            </div>
            <div className='flex gap-10 mt-5'>
                <DOBInput
                    Label='date of birth'
                    value={data?.date_of_birth}
                    onChange={(e) => {
                        onUpdateData(
                            {
                                date_of_birth: e.target.value
                            }
                        )
                    }}
                />
                <TextInput
                    Label='add your area'
                    placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore'
                    className='text-start'
                    value={data?.area}
                    onChange={(e) => {
                        onUpdateData(
                            {
                                area: e.target.value
                            }
                        )
                    }}
                />
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
                        onChange={(e) => {
                            getCity(e.target.value)
                            onUpdateData(
                                {
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
                        onChange={(e) => {
                            onUpdateData(
                                {
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