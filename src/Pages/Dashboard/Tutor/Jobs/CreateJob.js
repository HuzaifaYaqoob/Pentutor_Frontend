

import DashboardBase from "../../DashboardBase"

import ContentBox from "../../ContentBox"
import Form , {TextInput , DropDownInput} from "../../FormSection/Form"


const CreateJob = () =>{
    return(
        <DashboardBase>
            <ContentBox HeaderText='Create Job' />
            <div>
                <TextInput placeholder='Enter Job Title' Label='Enter Job Title' />
                <div className='flex flex-col md:flex-row gap-8 my-5'>
                    <TextInput placeholder='I.C.S' Label='Enter Class To Teach' />
                    <TextInput placeholder='English' Label='Enter Subject To Teach' />
                </div>
                <div className='flex flex-col md:flex-row gap-8 my-5'>
                    <DropDownInput placeholder='Monday, Tuesday, Wednesday, Thursday' data={['Monday' , 'Tuesday']} Label='Select Preferred Days' />
                    <TextInput placeholder='11:00 AM - 3:00 PM' Label='Enter Time To Teach' />
                </div>
                <div className='flex flex-col md:flex-row gap-8 my-5'>
                    <DropDownInput placeholder='Online' data={['Ofline' , 'Online']} Label='Teaching Method' />
                    <TextInput placeholder='10K PKR' Label='Enter your Fee' />
                </div>
                <div className='md:w-96'>
                    <DropDownInput placeholder='Male' data={['Female' , 'Male' , 'Others']} Label='Select Your Gender' />
                </div>
                <button className='bg-yellow-500 text-white py-2 px-7 w-full md:w-auto rounded-lg text-lg my-5'>Request</button>
            </div>
        </DashboardBase>
    )
}

export default CreateJob