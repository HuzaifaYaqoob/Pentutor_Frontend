import { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import { UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import { apiBaseURL } from "../../../../redux/apiURLs"
import Form, { FileInput } from "../../FormSection/Form"



const EditDocument = ({ user_profile_, setUserProfile, ...props }) => {
    const [selected_image, setSelectedImage] = useState(undefined)
    const [selected_degree, setSelectedDegree] = useState(undefined)
    const [selected_cnic, setSelectedCnic] = useState(undefined)
    const [selected_cnic_back, setSelectedCnicBack] = useState(undefined)



    const UpdateStudentProfile = () => {

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
        if (selected_cnic_back) {
            image_data['cnic_back'] = selected_cnic_back
        }

        props.UpdateUserProfile(
            {
                ...image_data
            },
            () => {
                setSelectedImage(undefined)
                setSelectedDegree(undefined)
                setSelectedCnic(undefined)
                setSelectedCnicBack(undefined)
            }
        )
    }

    useEffect(() => {

    }, [user_profile_])

    return (
        <Form btnText='save' onSubmit={() => { UpdateStudentProfile() }} className='mx-auto max-w-6xl w-full mt-4'>
            <div className="flex items-center justify-between">
                {
                    user_profile_ && user_profile_.profile_image ?
                        <>
                            <div className="w-full text-center">
                                {
                                    !selected_image ?
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${user_profile_ &&
                                                    user_profile_.profile_image && !selected_image ?
                                                    apiBaseURL + user_profile_.profile_image :
                                                    ''
                                                    }')`
                                            }}
                                        >
                                        </div>
                                        :
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${URL.createObjectURL(selected_image)
                                                    }')`
                                            }}
                                        >
                                        </div>
                                }
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
                                                    ...user_profile_,
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

                                }}
                            value=''
                        />
                }
                {
                    user_profile_ && user_profile_.degree_image ?
                        <>
                            <div className="w-full text-center">
                                {
                                    !selected_degree ?
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${user_profile_ &&
                                                    user_profile_.degree_image && !selected_degree ?
                                                    apiBaseURL + user_profile_.degree_image :
                                                    ''
                                                    }')`
                                            }}
                                        >
                                        </div>
                                        :
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${URL.createObjectURL(selected_degree)
                                                    }')`
                                            }}
                                        >
                                        </div>
                                }
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
                                                    ...user_profile_,
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
                                }}
                            value=''
                        />
                }
                {
                    user_profile_ && user_profile_.cnic_image ?
                        <>
                            <div className="w-full text-center">
                                {
                                    !selected_cnic ?
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${user_profile_ &&
                                                    user_profile_.cnic_image ?
                                                    apiBaseURL + user_profile_.cnic_image :
                                                    ''
                                                    }')`
                                            }}
                                        >
                                        </div>
                                        :
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${URL.createObjectURL(selected_cnic)
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
                                                    ...user_profile_,
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
                                }}
                            value=''
                        />
                }
                {
                    user_profile_ && user_profile_.cnic_back ?
                        <>
                            <div className="w-full text-center">
                                {
                                    !selected_cnic_back ?
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${user_profile_ &&
                                                    user_profile_.cnic_back ?
                                                    apiBaseURL + user_profile_.cnic_back :
                                                    ''
                                                    }')`
                                            }}
                                        >
                                        </div>
                                        :
                                        <div
                                            className="mb-4 image-preview mx-auto w-32 h-32 bg-gray-200  bg-center bg-cover bg-no-repeat rounded-full"
                                            style={{
                                                backgroundImage: `url('${URL.createObjectURL(selected_cnic_back)
                                                    }')`
                                            }}
                                        >
                                        </div>
                                }
                                <FileInput
                                    remove_logo
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
                                    setSelectedCnicBack(event.target.files[0])
                                }}
                            value=''
                        />
                }

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