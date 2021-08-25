

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from '../../FormSection/Form'


const EditProfile = () => {
    return (
        <>
            <DashboardBase>
                <ContentBox HeaderText='Welcome to Profile' />
                <Form btnText='save'>
                    <div className='md:flex gap-10 mb-5'>
                        <TextInput Label='Your Name' placeholder='Maryam Safdar' />
                        <EmailInput Label='E-Mail Address' placeholder='Yourname@gmail.com' verify />
                    </div>
                    <div className='md:flex gap-10'>
                        <ContactNumberInput Label='contact number' />
                        <DOBInput Label='date of birth' />
                    </div>
                    <hr className='my-10' />
                    <div className='md:flex gap-10'>
                        <TextInput Label='add country' placeholder='Pakistan' />
                        <TextInput Label='add city' placeholder='Lahore' />
                    </div>
                    <br />
                    <TextInput Label='add your area' placeholder='Gulberg Town, House # 89, Main Ferozpur Town, Lahore' />
                    <hr className='my-10' />
                    <div className='md:flex gap-10'>
                        <TextInput Label='add your qualification' placeholder='Pakistan' />
                        <TextInput Label='add your subjects' placeholder='English, Math, Physics' />
                    </div>
                    <br />
                    <TextInput Label='add your insitute' placeholder='Government College University Faislabad' />
                    <hr className='my-10' />
                    <div className='md:flex gap-10 mb-5'>
                        <DropDownInput Label='preferred method of teaching' placeholder='Online' data={['hola', 'video', 'logo']} />
                        <DropDownInput Label='preferred days of study' placeholder='4 Days Selected' data={['hola', 'video', 'logo']} />
                    </div>
                    <TextInput Label='preferred timing of study' placeholder='11:00 AM -- To -- 3:PM' />
                    <hr className='my-10' />
                    <FileInput Label='add CNIC/b-form' />
                    <FileInput Label='add degree picture' />
                    <hr className='my-10' />

                </Form>
            </DashboardBase>
        </>
    )
}


export default EditProfile