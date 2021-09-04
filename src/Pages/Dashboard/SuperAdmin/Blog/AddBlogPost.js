



import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import { useState } from 'react'
import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const AddBlogPost = () => {
    const [desc, setdesc] = useState("");
    return (
        <DashboardBase>
            <ContentBox HeaderText='Post New Blog' />
            <Form btnText='Post' >
                <TextInput Label='Post Title' placeholder='Enter Post TItle' />
                <hr className='my-10' />
                <div>
                    <h3 className='font-bold text-lg mb-5'>Blogs Description</h3>
                    <ReactQuill
                        className='h-52'
                        theme='snow'
                        value={desc}
                        style={{ minHeight: '300px' }}
                        placeholder='Enter Blog Description'
                    />
                </div>
                <hr className='my-10' />
                <FileInput Label='Select Feature Image' />
                
            </Form>
        </DashboardBase>
    )
}

export default AddBlogPost