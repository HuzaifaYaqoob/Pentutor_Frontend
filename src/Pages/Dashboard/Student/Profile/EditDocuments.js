import { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import { toast } from "react-toastify"
import { UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import { apiBaseURL } from "../../../../redux/apiURLs"
import Form, { FileInput } from "../../FormSection/Form"

const EditDocument = ({ user_profile_, setUserProfile, ...props }) => {
    const [selected_image, setSelectedImage] = useState(undefined)
    const [selected_degree, setSelectedDegree] = useState(undefined)
    const [selected_cnic, setSelectedCnic] = useState(undefined)
    const [selected_cnic_back, setSelectedCnicBack] = useState(undefined)

    const [loading, setLoading] = useState(false)

    const UpdateStudentProfile = () => {

        const image_data = {}
        if (selected_image && typeof selected_image != 'string') {
            image_data['profile_image'] = selected_image
        }
        if (selected_degree && typeof selected_degree != 'string') {
            image_data['degree_image'] = selected_degree
        }
        if (selected_cnic && typeof selected_cnic != 'string') {
            image_data['cnic_image'] = selected_cnic
        }
        if (selected_cnic_back && typeof selected_cnic_back != 'string') {
            image_data['cnic_back'] = selected_cnic_back
        }

        setLoading(true)

        props.UpdateUserProfile(
            {
                ...image_data
            },
            () => {
                setLoading(false)
                setSelectedImage(undefined)
                setSelectedDegree(undefined)
                setSelectedCnic(undefined)
                setSelectedCnicBack(undefined)
                toast.success('Updated Successfully')
            },
            () => {
                toast.error('Something went wrong')
                setLoading(false)
            }
        )
    }

    useEffect(() => {
        let user = props.user.userData
        if (Object.keys(user).length > 0) {
            setSelectedImage(user?.profile_image)
            setSelectedDegree(user?.degree_image)
            setSelectedCnic(user?.cnic_image)
            setSelectedCnicBack(user?.cnic_back)
        }

    }, [])

    return (
        <Form btnText='save' btnLoading={loading} onSubmit={() => { UpdateStudentProfile() }} className='mx-auto max-w-6xl w-full mt-4'>
            <div className="flex items-center justify-between">

                <FileInput
                    label='Profile Image'
                    accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                    Label='Change picture'
                    id='profile-update-picture'
                    onChange={
                        (event) => {
                            setSelectedImage(event.target.files[0])
                            setUserProfile(
                                {
                                    ...user_profile_,
                                    profile_image: URL.createObjectURL(event.target.files[0])
                                }
                            )
                        }}
                    value={selected_image ? selected_image : ''}
                />
                <FileInput
                    label='Degree Image'
                    accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                    Label='Change degree picture'
                    id='degree-update-picture'
                    onChange={
                        (event) => {
                            setSelectedDegree(event.target.files[0])
                            setUserProfile(
                                {
                                    ...user_profile_,
                                    degree_image: URL.createObjectURL(event.target.files[0])
                                }
                            )
                        }}
                    value={selected_degree ? selected_degree : ''}
                />
                <FileInput
                    label='CNIC Front Image'
                    accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                    Label='Change CNIC Image'
                    id='cnic-front-picture'
                    onChange={
                        (event) => {
                            setSelectedCnic(event.target.files[0])
                            setUserProfile(
                                {
                                    ...user_profile_,
                                    cnic_image: URL.createObjectURL(event.target.files[0])
                                }
                            )
                        }}
                    value={selected_cnic ? selected_cnic : ''}
                />
                <FileInput
                    label='CNIC Back Image'
                    accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                    Label='Change CNIC Back'
                    id='cnic-back-update-picture'
                    onChange={
                        (event) => {
                            setSelectedCnicBack(event.target.files[0])
                            setUserProfile(
                                {
                                    ...user_profile_,
                                    cnic_back: URL.createObjectURL(event.target.files[0])
                                }
                            )
                        }}
                    value={selected_cnic_back ? selected_cnic_back : ''}
                />
            </div>
            <hr className='my-10' />

        </Form>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    UpdateUserProfile: UpdateUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDocument)