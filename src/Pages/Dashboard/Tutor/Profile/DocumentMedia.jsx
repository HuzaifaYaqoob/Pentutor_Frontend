


import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'
import { connect } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { apiBaseURL } from "../../../../redux/apiURLs"



const TutorDocumentMediaEdit = ({ data, onUpdateData, ...props }) => {
    console.log(data)

    const updateProfileHandler = (e) => {
        let { name, files } = e.target
        onUpdateData({ [name]: files[0] })
    }

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between mb-5">
                {
                    data && data.profile_image &&
                    <FileInput
                        accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                        Label='Profile Picture'
                        id='profile-picture'
                        name='profile_image'
                        onChange={updateProfileHandler}
                        value={data?.profile_image}
                    />
                }
                {
                    data && data.degree_image &&
                    <FileInput
                        accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                        Label='add degree picture'
                        id='degree-picture'
                        name='degree_image'
                        onChange={updateProfileHandler}
                        value={data?.degree_image}
                    />
                }
                {
                    data && data.cnic_image &&
                    <FileInput
                        accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                        Label='add CNIC Front'
                        id='cnic-picture'
                        name='cnic_image'
                        onChange={updateProfileHandler}
                        value={data?.cnic_image}
                    />
                }
                {
                    data && data.cnic_back &&
                    <FileInput
                        accept='.png,.jpg,.jpeg,.PNG,.JPG,.JPEG'
                        Label='add CNIC Back'
                        id='cnic-Back-picture'
                        name='cnic_back'
                        onChange={updateProfileHandler}
                        value={data?.cnic_back}
                    />
                }
            </div>

        </>
    )
}



export default TutorDocumentMediaEdit