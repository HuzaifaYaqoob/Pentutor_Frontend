

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DashboardBase from "../../DashboardBase"

import { Link } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteCourse, getMyCourses } from "../../../../redux/Actions/CourseActions/CourseActions"
import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"

const FilterTag = (props) => {
    return (
        <p className={'rounded-full py-0.5 px-3 cursor-pointer' + ' ' + (props.active ? 'bg-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-500 ')}>
            {props.text}
        </p>
    )
}

const TableData = (props) => {
    return (
        <p
            className={`table-cell py-5 ${props.className}`}
            onClick={props.onClick}
        >{props.text}</p>
    )
}

TableData.defaultProps = {
    onClick: () => { },
    className: ''
}


const TutorCourses = () => {
    const state = useSelector(state => state)
    const history = useHistory()
    const dispatch = useDispatch()

    const DeleteCourseHandler = (course_id) => {
        dispatch(
            deleteCourse({ id: course_id })
        )
    }

    return (
        <div className='bg-white shadow rounded border border-gray-200 mt-10'>
            <div className="table w-full px-5">
                <div className="table-row-group">
                    <div className="table-row">
                        <p className='table-cell py-2 text-indigo-600'>Course Name</p>
                        <p className='table-cell py-2 text-indigo-600'>Duration</p>
                        <p className='table-cell py-2 text-indigo-600'>Date Published</p>
                        <p className='table-cell py-2 text-indigo-600'>Actions</p>
                    </div>
                    {
                        state.course.updated_ ?
                            state.course.my_courses.length > 0 ?
                                state.course.my_courses.map((course, index) => {
                                    return (
                                        <>
                                            <div className="table-row ">
                                                <TableData
                                                    className='text-blue-700 cursor-pointer'
                                                    text={course.title}
                                                    onClick={() => {
                                                        history.push(`/dashboard/tutor/courses/${course.slug}/add-videos/`)
                                                    }}
                                                />
                                                <TableData text={course.duration} />
                                                <TableData text='september 25, 2021' />
                                                <div>
                                                    <p
                                                        className="text-red-600 cursor-pointer"
                                                        onClick={() => {
                                                            DeleteCourseHandler(course.slug)
                                                        }}
                                                    >Delete</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                :
                                <>
                                    <p className="text-center">Not found</p>
                                </>
                            :
                            <>
                                <p>Loading...</p>
                            </>
                    }

                </div>
            </div>
        </div>
    )
}



const CoursesList = ({ getMyCourses, ...props }) => {

    useEffect(() => {
        // get_my_courses
        if (!props.course.updated_) {
            getMyCourses()
        }
    }, [])
    return (
        <DashboardBase>
            <div className='py-10'>
                <div className="flex items-center justify-between">
                    {/* <div className='flex items-center gap-5'>
                        <h3>Filter: </h3>
                        <FilterTag active text='All' />
                        <FilterTag text='un-Published' />
                        <FilterTag text='Published' />
                    </div> */}
                    <Link to='/dashboard/tutor/courses/add-new/' className='bg-yellow-200 text-indigo-900 py-2 px-7 rounded text-lg font-bold cursor-pointer' >
                        Create A Course
                        <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
                    </Link>

                </div>
                <TutorCourses />
            </div>
        </DashboardBase>
    )
}


const mapState = (state) => {
    return state
}

const mapDispatchToProps = {
    getMyCourses: getMyCourses
}

export default connect(mapState, mapDispatchToProps)(CoursesList)