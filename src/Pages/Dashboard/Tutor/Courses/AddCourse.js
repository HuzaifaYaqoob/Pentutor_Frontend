

import { useState } from 'react'

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


const AddCourse = () => {
    const [details, setDetail] = useState("");
    const [yourWillLearn, setyourWillLearn] = useState("");

    return (
        <DashboardBase>
            <ContentBox HeaderText='Add Course' />
            <Form btnText='Create' >
                <div className='block lg:flex items-stretch gap-5'>
                    <div className='flex-1'>
                        <TextInput Label='Course Title / Name' placeholder='Learn Seo: Begginer To Advance In 1 Month ...' />
                        <br />
                        <TextInput Label='Set Course Price' placeholder='20K PKR' />
                    </div>
                    <div className='flex-1 border border-dashed border-gray-300 rounded'>
                        <FileInput />
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row my-7 gap-6'>
                    <DropDownInput Label='Select Level' placeholder='Advance' data={['Advance', 'Medium', 'Low']} />
                    <DropDownInput Label='Select Category' placeholder='Marketing' data={['Marketing', 'Agency']} />
                </div>
                <div>
                    <h3 className='font-bold text-lg mb-5'>Course Details</h3>
                    <ReactQuill
                        className='h-52'
                        theme='snow'
                        value={details}
                        style={{ minHeight: '300px' }}
                        placeholder='Enter Course Detail'
                    />
                </div>
                <div className='my-16 mb-32'>
                    <h3 className='font-bold text-lg mb-5'>Things You Will Learn</h3>
                    <ReactQuill
                        className='h-52'
                        theme='snow'
                        value={yourWillLearn}
                        style={{ minHeight: '300px' }}
                        placeholder='Things You Will Learn'
                    />
                </div>

            </Form>
        </DashboardBase>
    )
}

export default AddCourse