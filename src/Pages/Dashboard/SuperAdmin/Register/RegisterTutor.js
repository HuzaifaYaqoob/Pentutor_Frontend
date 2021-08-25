




import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

const RegisterTutor = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='Register Tutor' />
            <Form btnText='Register' >
                <div className='md:flex gap-10 mb-5'>
                    <TextInput Label='tutor  Name' placeholder='Enter Student Name' />
                    <EmailInput Label='tutor E-Mail Address' placeholder='Enter Student Email Address' />
                </div>
                <div className='md:flex gap-10 mb-5'>
                    <ContactNumberInput Label='contact number' />
                    <ContactNumberInput Label='Emergency contact number' />
                </div>
                <div className='md:flex gap-10 mb-5'>
                    <TextInput Label='Place of birth' placeholder='Enter Place of Birth' />
                    <DOBInput Label='Date of Birth' />
                </div>
                <hr className='my-10' />
                <div className='md:flex gap-10'>
                    <TextInput Label='add nationality' placeholder='Enter Your Nationality' />
                    <TextInput Label='add second nationality' placeholder='Enter Your Nationality' />
                </div>
                <div className='md:flex gap-10'>
                    <TextInput Label='CNIC' placeholder='Enter Number' />
                    <DropDownInput Label='Select Gender' placeholder='Online' data={['hola', 'video', 'logo']} />
                </div>
                <hr className='my-10' />
                <div className='md:flex gap-10'>
                    <TextInput Label='add country' placeholder='Pakistan' />
                    <TextInput Label='add city' placeholder='Lahore' />
                </div>
                <br />
                <TextInput Label='add area' placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore' />
                <TextInput Label='add house street #' placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore' />
                <TextInput Label='add permanent address' placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore' />
                
                <FileInput Label='upload Photo (Optional)' />

            </Form>
        </DashboardBase>
    )
}

export default RegisterTutor