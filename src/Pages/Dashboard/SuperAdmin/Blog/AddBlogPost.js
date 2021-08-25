



import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

const AddBlogPost = () =>{
    return(
        <DashboardBase>
            <ContentBox HeaderText='Post New Blog' />
            <Form btnText='Register' >
                    <TextInput Label='Post Title' placeholder='Enter Post TItle' />
                    <DropDownInput Label='Post Category' placeholder='Select Post Category' data={['hola', 'video', 'logo']} />

                <hr className='my-10' />
                <div className='pentutor-shadow p-5 mb-10'>
                    <h3 className='mb-5 text-lg font-medium'>Post Description</h3>
                    <textarea className='text-xs w-full outline-none'  placeholder='Description ...'></textarea>

                </div>
                <hr className='my-10' />
                <FileInput Label='Select Feature Image' />

            </Form>
        </DashboardBase>
    )
}

export default AddBlogPost