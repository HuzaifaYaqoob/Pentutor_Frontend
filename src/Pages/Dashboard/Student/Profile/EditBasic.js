import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getUserProfile, UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import { getCity } from "../../../../redux/Actions/UtilityActions/UtilityActions"
import Form, { ContactNumberInput, DOBInput, DropDownInput, EmailInput, RadioButtons, TextArea, TextInput } from "../../FormSection/Form"



const EditBasicDetails = ({ user_profile_, setUserProfile, ...props }) => {
    const [all_cities, setAllCities] = useState([])
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [mobile, setMobile] = useState('')
    const [date_of_birth, setDOB] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [cnic_number, SetCnicNumber] = useState('')
    const [gender, setGender] = useState('')
    const [area, SetArea] = useState('')
    const [detail, setDetail] = useState('')

    console.log(user_profile_)


    const UpdateStudentProfile = () => {
        props.UpdateUserProfile(
            {
                user: {
                    first_name: first_name,
                    last_name: last_name
                },
                mobile : mobile,
                date_of_birth : date_of_birth,
                Country: country.id,
                city: city.id,
                cnic_number: cnic_number,
                gender: gender,
                area: area,
                detail: detail,
            }
        )
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
        setFirstName(user_profile_ && user_profile_.user && user_profile_.user.first_name)
        setLastName(user_profile_ && user_profile_.user && user_profile_.user.last_name)
        setMobile(user_profile_ && user_profile_.mobile)
        setDOB(user_profile_ && user_profile_.date_of_birth)
        setCountry(user_profile_ && user_profile_.Country && user_profile_.Country)
        setCity(user_profile_ && user_profile_.city && user_profile_.city)
        SetCnicNumber(user_profile_ && user_profile_.cnic_number)
        setGender(user_profile_ && user_profile_.gender)
        SetArea(user_profile_ && user_profile_.area)
        setDetail(user_profile_ && user_profile_.detail)
    }, [user_profile_])

    return (
        <div>
            <Form btnText='save' onSubmit={() => { UpdateStudentProfile() }} className='mx-auto max-w-6xl w-full '>
                <div className='md:flex gap-10 mb-5'>

                    <TextInput
                        Label='First Name'
                        placeholder='First Name'
                        value={
                            first_name
                        }
                        onChange={(e) => {
                            console.log(e.target.value)
                            setFirstName(e.target.value)
                        }}
                    />
                    <TextInput
                        Label='Last Name'
                        placeholder='Last Name'
                        value={
                            last_name
                        }
                        onChange={(e) => {
                            console.log(e.target.value)
                            setLastName(e.target.value)

                        }}
                    />
                </div>

                <div className='md:flex gap-10'>
                    <ContactNumberInput
                        Label='contact number'
                        value={mobile}
                        onChange={(e) => {
                            setMobile(e.target.value)

                        }}
                    />
                    <DOBInput
                        Label='date of birth'
                        value={date_of_birth}
                        onChange={(e) => {
                            setDOB(e.target.value)

                        }}
                    />
                </div>
                <div className='md:flex gap-10 my-4'>
                    <DropDownInput
                        Label='Select Country'
                        placeholder='Select Country'
                        value={country && country.name}
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
                            console.log(value)
                            props.utility.countries.filter((ct) => {
                                if (ct.id == value) {
                                    console.log(ct)
                                    setCountry(ct)
                                }
                            })

                        }}
                    />
                    <DropDownInput
                        Label='Select City'
                        placeholder='Select City'
                        value={city && city.name}
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
                            all_cities.filter((ct) => {
                                if (ct.id == value) {
                                    setCity(ct)
                                }
                            })
                        }}
                    />
                </div>
                <div className='md:flex gap-10 my-4'>
                    <TextInput
                        Label='CNIC Number'
                        placeholder='34***-*******-*'
                        value={cnic_number}
                        onChange={(e) => {
                            SetCnicNumber(e.target.value)
                        }}
                    />
                    <RadioButtons Label='Gender' >
                        <div className="flex gap-10 items-center">
                            <div>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    id='male'
                                    checked={gender == 'Male' ? true: false}
                                    onChange={(e) => {
                                        setGender('Male')
                                    }}
                                />
                                <label
                                    htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    id='female'
                                    checked={gender == 'Female' ? true : false}
                                    onChange={(e) => {
                                        setGender('Female')
                                    }}
                                />
                                <label
                                    htmlFor="female">Female</label>
                            </div>
                        </div>
                    </RadioButtons>
                </div>
                <TextInput
                    Label='Street Address'
                    placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore'
                    value={area}
                    onChange={(e)=>{
                        SetArea(e.target.value)
                    }}
                />
                <TextArea
                    className='my-4'
                    Label='Description'
                    placeholder='Enter Your Details Here...'
                    value={detail}
                    onChange={(e)=>{
                        setDetail(e.target.value)
                    }}
                />
            </Form>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditBasicDetails)