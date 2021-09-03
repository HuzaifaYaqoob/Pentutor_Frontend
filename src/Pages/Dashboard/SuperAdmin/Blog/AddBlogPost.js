



import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

const AddBlogPost = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='Post New Blog' />
            <Form btnText='Register' >
                <TextInput Label='Post Title' placeholder='Enter Post TItle' />
                <hr className='my-10' />
                here
                <hr className='my-10' />
                <FileInput Label='Select Feature Image' />

            </Form>
        </DashboardBase>
    )
}

export default AddBlogPost