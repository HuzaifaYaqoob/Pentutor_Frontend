

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

const RegisterStudent = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='Register Student' />
            <Form btnText='Register' >
                <div className='gap-10 sm:flex mb-5'>
                    <TextInput Label='student  Name' placeholder='Enter Student Name' />
                    <EmailInput Label='student E-Mail Address' placeholder='Enter Student Email Address' />
                </div>
                <div className='sm:flex gap-10 mb-5'>
                    <ContactNumberInput Label='contact number' />
                    <DropDownInput Label='Your Relation with Student' placeholder='Online' data={['hola', 'video', 'logo']} />
                </div>
                <hr className='my-10' />
                <div className='sm:flex gap-10'>
                    <TextInput Label='add country' placeholder='Pakistan' />
                    <TextInput Label='add city' placeholder='Lahore' />
                </div>
                <br />
                <TextInput Label='add area' placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore' />
                <hr className='my-10' />
                <div className='sm:flex gap-10'>
                    <TextInput Label='add your Class' placeholder='Pakistan' />
                    <TextInput Label='add your subjects' placeholder='English, Math, Physics' />
                </div>
                <br />
                <TextInput Label='add your insitute' placeholder='Government College University Faislabad' />
                <hr className='my-10' />
                <div className='sm:flex gap-10 mb-5'>
                    <DropDownInput Label='preferred method of teaching' placeholder='Online' data={['hola', 'video', 'logo']} />
                    <DropDownInput Label='preferred days of study' placeholder='4 Days Selected' data={['hola', 'video', 'logo']} />
                </div>
                <div className='sm:flex gap-10 mb-5'>
                    <TextInput Label='preferred timing of study' placeholder='11:00 Am -- To 3:00 PM' />
                    <DropDownInput Label='preferred tutor of gender' placeholder='4 Days Selected' data={['hola', 'video', 'logo']} />
                </div>
                <div className='sm:flex gap-10 mb-5'>
                    <TextInput Label='please specify the budget' placeholder='Enter Your Budget' />
                    <DropDownInput Label='student gender' placeholder='4 Days Selected' data={['hola', 'video', 'logo']} />
                </div>
                <hr className='my-10' />
                <FileInput Label='upload Photo (Optional)' />

            </Form>
        </DashboardBase>
    )
}

export default RegisterStudent