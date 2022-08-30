

import { useState } from 'react'

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import SelectDropDown from '../../../../components/FormSection/Dropdown'
import { connect, useDispatch } from 'react-redux'
import { createCourse } from '../../../../redux/Actions/CourseActions/CourseActions'


const AddCourse = (props) => {
    const [course_data, setCourseData] = useState({})
    const dispatch = useDispatch()


    console.log(props.utility.categories)


    const handleChange = (e) => {
        const { name, value } = e.target
        setCourseData({
            ...course_data,
            [name]: value
        })
    }

    const handleSubmit = () => {
        dispatch(
            createCourse(
                course_data,
                (result) => {
                    console.log(result)
                }
            )
        )
    }


    return (
        <DashboardBase>
            <ContentBox HeaderText='Add Course' />
            <Form
                btnText='Create'
                onSubmit={() => {
                    handleSubmit()
                }}
            >
                <div className='block lg:flex items-stretch gap-5'>
                    <div className='flex-1'>
                        <TextInput
                            name='title'
                            Label='Course Title / Name'
                            placeholder='Learn Seo: Begginer To Advance In 1 Month ...'
                            className='text-start'
                            onChange={handleChange}
                            value={course_data.title}
                        />
                        <br />
                        <TextInput
                            type='number'
                            name='price'
                            Label='Set Course Price'
                            placeholder='20K PKR'
                            className='text-start'
                            onChange={handleChange}
                            value={course_data.price}
                        />
                    </div>
                    <div className='flex-1 border border-dashed border-gray-300 rounded'>
                        <FileInput
                            id='course-image'
                            name='image'
                            onChange={
                                (e) => {
                                    handleChange({ ...e, target: { ...e.target, value: e.target.files[0], name: 'image' } })
                                }
                            }
                        />
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row my-7 gap-6'>
                    <div className='flex-1'>
                        <SelectDropDown
                            title={'Select Level'}
                            placeholder='Advance'
                            name={'level'}
                            value={course_data.level}
                            options={[
                                {
                                    label: 'Easy',
                                    value: 'Easy'
                                },
                                {
                                    label: 'Medium',
                                    value: 'Medium'
                                },
                                {
                                    label: 'Advance',
                                    value: 'Advance'
                                },
                            ]}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex-1'>
                        <SelectDropDown
                            title={'Select Category'}
                            placeholder='Marketing'
                            name='course_category'
                            value={course_data.course_category}
                            options={
                                props.utility.categories.map(cat => {
                                    return {
                                        label: cat.title,
                                        value: cat.slug
                                    }
                                })
                            }
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <SelectDropDown
                    title={'Select Language'}
                    placeholder='English'
                    name='language'
                    value={course_data.language}
                    options={[
                        {
                            label: 'Easy',
                            value: 'Easy'
                        },
                    ]}
                    onChange={handleChange}
                />
                <div>
                    <h3 className='font-bold text-lg mb-5'>Course Details</h3>
                    <ReactQuill
                        className='h-52'
                        theme='snow'
                        value={course_data.description ? course_data.description : ''}
                        style={{ minHeight: '300px' }}
                        placeholder='Enter Course Detail'
                        name='description'
                        onChange={(text_val) => {
                            handleChange({ target: { value: text_val, name: 'description' } })
                        }}
                    />
                </div>
                <div className='my-16 mb-32'>
                    <h3 className='font-bold text-lg mb-5'>Things You Will Learn</h3>
                    <ReactQuill
                        className='h-52'
                        theme='snow'
                        value={course_data.things_you_will_learn ? course_data.things_you_will_learn : ''}
                        style={{ minHeight: '300px' }}
                        placeholder='Things You Will Learn'
                        name='things_you_will_learn'
                        onChange={(text_val) => {
                            handleChange({ target: { value: text_val, name: 'things_you_will_learn' } })
                        }}
                    />
                </div>

            </Form>
        </DashboardBase>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse)