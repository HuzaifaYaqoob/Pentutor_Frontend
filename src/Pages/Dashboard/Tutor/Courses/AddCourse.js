



import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"



const Content = () => {
    return (
        <div className='my-4'>
            <div className='flex items-center justify-between text-xs mb-6'>
                <div className='flex items-center gap-4'>
                    <FontAwesomeIcon className='text-gray-700' icon={faPlay} />
                    <p>Getting Started</p>
                </div>
                <p>3 Lectures. 1 attachement. 1 assignment. 25m</p>
            </div>
            <hr />
        </div>
    )
}




const AddCourse = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='Add Course' />
            <Form btnText='Publish' >
                <TextInput Label='Course Title / Name' placeholder='Learn Seo: Begginer To Advance In 1 Month | Rank Your Website On 1st Page ' />
                <hr className='my-10' />
                <TextInput Label='Set Course Price' placeholder='20K' />
                <hr className='my-10' />
                <h3 className='mb-5'>Things you will Learn</h3>
                <div className='pentutor-shadow bg-white rounded p-4'>
                    <textarea placeholder='Enter Your Text Here' className='w-full outline-none h-40'>

                    </textarea>
                </div>

                <div className='pentutor-shadow rounded my-8 overflow-hidden'>
                    <div className='bg-yellow-450 p-7 flex items-center justify-between'>
                        <h3>Course Content</h3>
                        <span className='bg-gray-500 bg-opacity-60 px-3 py-1 rounded text-white cursor-pointer'>
                            Add Section
                        </span>
                    </div>
                    <div className='p-6'>
                        <Content />
                        <Content />
                        <Content />

                    </div>

                </div>
                <div className='pentutor-shadow p-5 mb-10'>
                    <h3 className='mb-5 text-lg font-medium'>Course Detail</h3>
                    <textarea className='text-xs w-full outline-none' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a dignissim neque aliquam dis dui gravida. Pretium sed risus scelerisque bibendum sagittis. Tristique cursus id sed amet. Sit nisl vivamus ultricies phasellus malesuada in libero, et. Quis sollicitudin purus dolor ipsum, dictumst egestas pretium sit. Nunc, risus, feugiat egestas consectetur. Lectus nulla morbi ut est tincidunt elit eu, bibendum. Quis turpis eu adipiscing integer at at nulla nisl. Nunc, vivamus tortor augue at tellus. Tincidunt ipsum a vel lorem lectus ac in at turpis. Orci, tempor nec arcu velit facilisis posuere egestas suspendisse. 
                        Ultrices arcu venenatis nulla non, eget senectus diam. Blandit quis egestas et pellentesque est. Id fermentum, arcu pellentesque sed eu nunc, lacus. Sit dui nisl, dui duis cursus amet aenean. Id sit elementum proin sapien a malesuada at sit diam. Vitae tortor maecenas sit nibh in diam interdum. Porttitor risus sed eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna a dignissim neque aliquam dis dui gravida. Pretium sed risus scelerisque bibendum sagittis. Tristique cursus id sed amet. Sit nisl vivamus ultricies phasellus malesuada in libero, et. Quis sollicitudin purus dolor ipsum, dictumst egestas pretium sit. Nunc, risus, feugiat egestas consectetur. Lectus nulla morbi ut est tincidunt elit eu, bibendum. Quis turpis eu adipiscing integer at at nulla nisl. Nunc, vivamus tortor augue at tellus. Tincidunt ipsum a vel lorem lectus ac in at turpis. Orci, tempor nec arcu velit facilisis posuere egestas suspendisse. 
                        Ultrices arcu venenatis nulla non, eget senectus diam. Blandit quis egestas et pellentesque est. Id fermentum, arcu pellentesque sed eu nunc, lacus. Sit dui nisl, dui duis cursus amet aenean. Id sit elementum proin sapien a malesuada at sit diam. Vitae tortor maecenas sit nibh in diam interdum. Porttitor risus sed eleifend.</textarea>

                </div>

            </Form>
        </DashboardBase>
    )
}

export default AddCourse