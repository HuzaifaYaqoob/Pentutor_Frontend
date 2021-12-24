import { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import { UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import Form, { DropDownInput, RadioButtons, TextInput, TimeInput } from "../../FormSection/Form"




const AddedSubject = () => {
    return (
        <p>English</p>
    )
}



const EditProfessionalDetails = ({ user_profile_, setUserProfile, ...props }) => {

    const [qualification, setQualification] = useState('')
    const [subject, setSubject] = useState('')
    const [institute, setInstitute] = useState('')
    const [teaching_method, setTeachingMethod] = useState('')
    const [study_time, setStudyTime] = useState('')
    const [preferred_teacher, setPreferredTeacher] = useState('')


    const UpdateStudentProfile = () => {
        props.UpdateUserProfile(
            {
                qualification: qualification,
                subject: subject,
                institute: institute,
                teaching_method: teaching_method,
                study_timing: study_time,
                prefered_teacher: preferred_teacher
            }
        )
    }


    useEffect(() => {
        setQualification(user_profile_ && user_profile_.qualification)
        setSubject(user_profile_ && user_profile_.subject)
        setInstitute(user_profile_ && user_profile_.institute)
        setTeachingMethod(user_profile_ && user_profile_.teaching_method)
        setStudyTime(user_profile_ && user_profile_.study_timing)
        setPreferredTeacher(user_profile_ && user_profile_.prefered_teacher)
    }, [user_profile_])


    return (
        <Form btnText='save' onSubmit={() => { UpdateStudentProfile() }} className='mx-auto max-w-6xl w-full mt-5'>
            <div>
                <div className='md:flex gap-10'>
                    <TextInput
                        Label='your qualification'
                        placeholder='Becehlor"s in Science or Computer'
                        value={qualification}
                        onChange={(e) => {
                            setQualification(e.target.value)
                        }}
                    />
                    <TextInput
                        Label='Subject'
                        placeholder='English, Urdu'
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value)

                        }}
                    />
                </div>
                <div className='md:flex gap-10 mt-4'>
                    <TextInput
                        Label='Institute'
                        placeholder='City Group Of Colleges'
                        value={institute}
                        onChange={(e) => {
                            setInstitute(e.target.value)

                        }}
                    />
                    <DropDownInput
                        Label='Preffered Study Method'
                        placeholder='Select Type'
                        value={teaching_method}
                        data={
                            [
                                {
                                    label: 'Home Tution',
                                    value: 'Home Tution'
                                },
                                {
                                    label: 'Online Tution',
                                    value: 'Online Tution'
                                },
                            ]
                        }
                        onChange={(value) => {
                            setTeachingMethod(value)
                        }}
                    />
                </div>
                <div className='md:flex gap-10 mt-4'>
                    <TimeInput
                        Label='Study Timing'
                        value={study_time}
                        onChange={(e) => {
                            setStudyTime(e.target.value)
                        }}
                    />
                    <RadioButtons Label='Preferred Teacher' >
                        <div className="flex gap-10 items-center">
                            <div>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="gender"
                                    value={preferred_teacher}
                                    id='male'
                                    checked={preferred_teacher == 'Male' ? true : false}
                                    onChange={(e) => {
                                        setPreferredTeacher('Male')
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
                                    value={preferred_teacher}
                                    id='female'
                                    checked={preferred_teacher == 'Female' ? true : false}
                                    onChange={(e) => {
                                        setPreferredTeacher('Female')
                                    }}
                                />
                                <label
                                    htmlFor="female">Female</label>
                            </div>
                        </div>
                    </RadioButtons>
                </div>
            </div>
        </Form>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    UpdateUserProfile: UpdateUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfessionalDetails)