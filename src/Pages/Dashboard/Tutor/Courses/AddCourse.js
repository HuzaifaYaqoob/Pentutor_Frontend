

import { useState } from 'react'

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import Form, { TextInput, EmailInput, ContactNumberInput, DOBInput, DropDownInput, FileInput } from "../../FormSection/Form"

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import SelectDropDown from '../../../../components/FormSection/Dropdown'
import { connect, useDispatch } from 'react-redux'
import { createCourse } from '../../../../redux/Actions/CourseActions/CourseActions'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddCourse = (props) => {
    const [course_data, setCourseData] = useState({})
    const [btn_clicked, setButtonClicked] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCourseData({
            ...course_data,
            [name]: value
        })
    }

    const handleSubmit = () => {

        if (course_data.title && course_data.price && course_data.image && course_data.level && course_data.course_category && course_data.language && course_data.description && course_data.things_you_will_learn) {
            setLoading(true)
            dispatch(
                createCourse(
                    course_data,
                    (result) => {
                        toast.success('Course Created Successfully')
                        setLoading(false)
                        history.push(`/dashboard/tutor/courses/${result.slug}/add-videos/`)
                    },
                    () => {
                        setLoading(false)
                        toast.error('Something went wrong')
                        setLoading(false)
                    }
                )
            )
        }
        else {
            toast.info('All Fields are Required')
        }
    }


    return (
        <DashboardBase>
            <div className="mb-3">
                <h3 className="text-2xl font-medium ">Add Course</h3>
            </div>
            <Form
                btnText='Create'
                btnLoading={loading}
                onSubmit={() => {
                    setButtonClicked(true)
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
                            error={btn_clicked && !course_data.title ? true : false}
                        />
                        <br />
                        <div className='flex gap-5 items-start'>
                            <TextInput
                                type='number'
                                name='price'
                                Label='Set Course Price'
                                placeholder='20K PKR'
                                className='text-start'
                                onChange={handleChange}
                                value={course_data.price}
                                error={btn_clicked && !course_data.price ? true : false}

                            />
                            <SelectDropDown
                                title={'Select Language'}
                                placeholder='English'
                                name='language'
                                value={course_data.language}
                                options={[
                                    {
                                        label: 'English',
                                        value: 'English'
                                    },
                                    {
                                        label: 'Urdu',
                                        value: 'Urdu'
                                    },
                                    {
                                        label: 'Punjabi',
                                        value: 'Punjabi'
                                    },
                                    {
                                        label: 'Hindi',
                                        value: 'Hindi'
                                    },
                                ]}
                                onChange={handleChange}
                                error={btn_clicked && !course_data.language ? true : false}
                            />
                        </div>
                    </div>
                    <div className='px-10 border border-dashed border-gray-300 rounded-md min-w-[400px]'>
                        <FileInput
                            id='course-image'
                            name='image'
                            onChange={
                                (e) => {
                                    handleChange({ ...e, target: { ...e.target, value: e.target.files[0], name: 'image' } })
                                }
                            }
                            error={btn_clicked && !course_data.image ? true : false}
                        />
                        <p className='text-center my-1'>Upload Thumbnail</p>
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
                            error={btn_clicked && !course_data.level ? true : false}
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
                            error={btn_clicked && !course_data.course_category ? true : false}
                        />
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='font-bold text-lg mb-5'>Course Details</h3>
                    <ReactQuill
                        className='h-52'
                        theme='snow'
                        value={course_data.description ? course_data.description : ''}
                        style={{ minHeight: '300px', borderRadius: '12px' }}
                        placeholder='Enter Course Detail'
                        name='description'
                        onChange={(text_val) => {
                            handleChange({ target: { value: text_val, name: 'description' } })
                        }}
                        error={btn_clicked && !course_data.description ? true : false}
                    />
                </div>
                <div className='my-16'>
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
                        error={btn_clicked && !course_data.things_you_will_learn ? true : false}
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