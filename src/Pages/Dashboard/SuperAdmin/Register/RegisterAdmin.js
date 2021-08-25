



import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"


const RegisterAdmin = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='Register Admin' />
            <Form btnText='Register' >
                <div className='md:flex gap-10 mb-5'>
                    <TextInput Label='admin Name' placeholder='Enter Student Name' />
                    <EmailInput Label='admin E-Mail Address' placeholder='Enter Student Email Address' />
                </div>
                <div className='md:flex gap-10 mb-5'>
                    <ContactNumberInput Label='admin contact number' />
                    <ContactNumberInput Label='emergency contact number' />
                </div>
                <div className='md:flex gap-10 mb-5'>
                    <DropDownInput Label='select gender' placeholder='Male' data={['hola', 'video', 'logo']} />
                    <DOBInput Label='Date of birth' />
                </div>
                <hr className='my-10' />
                <TextInput Label='add current address' placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore' />
                <TextInput Label='add parmanent address' placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore' />
                <hr className='my-10' />
                <FileInput Label='upload Photo (Optional)' />

            </Form>
        </DashboardBase>
    )
}

export default RegisterAdmin