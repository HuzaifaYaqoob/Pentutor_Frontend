

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getAllCourses } from "../../redux/Actions/CourseActions/CourseActions"
import { CourseCard } from "../Our-Tutors/ViewProfile"


const ProfessionalTraining = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const location = useHistory()


    useEffect(() => {
        if (!state.course.all_courses_updated) {
            dispatch(
                getAllCourses()
            )
        }
    }, [])
    return (
        <div className='bg-gray-100 py-20 px-4 sm:px-6 md:px-8'>
            <div className="max-w-[1300px] w-full mx-auto space-y-10">
                <h3 className='text-indigo-900 font-bold text-3xl text-center'>Professional <span className='text-yellow-400'>Training</span></h3>
                {
                    state.course.all_courses_updated ?
                        state.course.all_courses.length > 0 ?
                            <div className='grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                                {
                                    state.course.all_courses.map((course, index) => {
                                        return (
                                            <CourseCard data={course} />
                                        )
                                    })
                                }
                            </div>
                            :
                            <>
                                <p className="text-center">Not found</p>
                            </>
                        :
                        <>
                            <p className="text-center">Loading...</p>
                        </>
                }
                <button
                    className='mx-auto block rounded border border-[#F5BB07] bg-[#F5BB07] text-white py-1.5 px-4'
                    onClick={() => {
                        location.push('/courses')
                    }}
                >View All</button>

            </div>
        </div>
    )
}

export default ProfessionalTraining
