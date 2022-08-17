import HeroSection from '../../components/HeroSection/HeroSection'
import FormSection from '../../components/FormSection/FormSection'
import InputField from '../../components/FormSection/InputField'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import useTitle from '../../Hooks/useTitle'
import { CourseCard } from '../Our-Tutors/ViewProfile'
import { useEffect, useState } from 'react'
import { apiBaseURL, get_all_courses } from '../../redux/apiURLs'

const SlideDot = (props) => {
    return (
        <span className={'mx-1 w-2 h-2 rounded-full block ' + (props.active ? 'bg-indigo-900 flex-1' : 'bg-gray-400 cursor-pointer')}></span>
    )
}


const CardItem = (props) => {
    return (
        <Link to='/courses/course-id/view/' className='block w-full p-3 text-center bg-gray-200 hover:bg-gray-300 transition-all cursor-pointer mb-2 rounded-lg'>
            {props.text}
        </Link>
    )
}

const CoursesCard = (props) => {
    return (
        <div className='max-w-sm mx-auto'>
            <div>
                <h3 className='w-full text-center text-3xl text-indigo-900 font-bold mb-7'>{props.Heading}</h3>
            </div>
            <div className='bg-white rounded pentutor-shadow p-4'>
                {
                    props.itemsData.map((item) => {
                        return (
                            <CardItem text={item} />
                        )
                    })
                }
                <div className='flex items-center px-20 justify-around my-3'>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-yellow-450'>
                        <FontAwesomeIcon className='text-indigo-900' icon={faArrowLeft} />
                    </div>
                    <div className='flex items-center flex-1 px-4'>
                        <SlideDot active={true} />
                        <SlideDot />
                        <SlideDot />
                        <SlideDot />
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-yellow-450'>
                        <FontAwesomeIcon className='text-indigo-900' icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Courses = () => {
    useTitle('Courses')
    const [course_data, setCourseData] = useState([])
    console.log(course_data)

    const getAllCourses = () => {
        fetch(
            apiBaseURL + get_all_courses
        )
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                }
            })
            .then(result => {
                setCourseData(result.data)
            })
    }

    useEffect(() => {
        getAllCourses()
    }, [])
    return (
        <div>
            <HeroSection Text='courses of your choice' ImagePath='/images/image1.png' />
            <FormSection formHeading='Search Courses'>
                <div className='max-w-2xl mx-auto flex items-center gap-3'>
                    <div className='flex-1'>
                        <InputField placeholder='Search Any Course By Keywords' />
                    </div>
                    <button className='text-center bg-yellow-450 text-indigo-900 h-full py-2 rounded px-7 font-semibold text-xl'>Search</button>
                </div>
            </FormSection>
            <div className='container mx-auto grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 my-20'>
                {/* <CoursesCard Heading='Classes' itemsData={['A Level', 'Bechelors Degree', 'Commerce Degree', 'Engineering', 'Law Degree']} /> */}
                {/* <CoursesCard Heading='Subjects' itemsData={['Accouting', 'Commerce', 'Geography', 'English', 'Math']} /> */}
                {/* <CoursesCard Heading='Test/Exams' itemsData={['A Level', 'Bechelors Degree', 'Commerce Degree', 'Engineering', 'Law Degree']} /> */}
                {/* <CoursesCard Heading='Languages' itemsData={['Arabic', 'Chinese', 'French', 'German', 'English']} /> */}
                {/* <CoursesCard Heading='Short Ceourses' itemsData={['A Level', 'Bechelors Degree', 'Commerce Degree', 'Engineering', 'Law Degree']} /> */}
                {
                    course_data &&
                    course_data.map((course, index) => {
                        return (
                            <>
                                <CourseCard data={course} key={index} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Courses
