

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DashboardBase from "../../DashboardBase"

import { Link } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteCourse, getMyCourses } from "../../../../redux/Actions/CourseActions/CourseActions"
import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Svgs from "../../../../Assets/svgs"

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
        <div className='bg-white rounded-lg border border-gray-200 mt-10'>
            <div className="table w-full">
                <div className="table-row-group">
                    <div className="table-row !border-b border-red-400">
                        <p className='table-cell border-b border-gray-200 py-3 px-5 text-[#706F6F] font-medium'>Course Name</p>
                        <p className='table-cell border-b border-gray-200 py-3 px-5 text-[#706F6F] font-medium'>Duration</p>
                        <p className='table-cell border-b border-gray-200 py-3 px-5 text-[#706F6F] font-medium'>Date Published</p>
                        <p className='table-cell border-b border-gray-200 py-3 px-5 text-[#706F6F] font-medium'>Actions</p>
                    </div>
                    {
                        state.course.updated_ ?
                            state.course.my_courses.length > 0 ?
                                state.course.my_courses.map((course, index) => {
                                    return (
                                        <>
                                            <div className="table-row">
                                                <TableData
                                                    className='text-indigo-900 cursor-pointer px-5 font-medium'
                                                    text={course.title}
                                                    onClick={() => {
                                                        history.push(`/dashboard/tutor/courses/${course.slug}/add-videos/`)
                                                    }}
                                                />
                                                <TableData className='px-5' text={new Date(course?.duration * 1000).toISOString().substr(11, 8)} />
                                                <TableData className='px-5' text='September 25, 2021' />
                                                <div className="flex items-center px-5 gap-4">
                                                    <p
                                                        className="text-red-600 cursor-pointer"
                                                        onClick={() => {
                                                            DeleteCourseHandler(course.slug)
                                                        }}
                                                    >Delete</p>
                                                    <span className="cursor-pointer"
                                                        onClick={() => {
                                                            history.push(`/dashboard/tutor/courses/${course.slug}/add-videos/`)
                                                        }}
                                                    >
                                                        <Svgs.EditIcon/>
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                :
                                <>
                                    <p className="my-4 text-sm px-5" >No Couse Added</p>
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
            <div className='py-5'>
                <div className="flex items-center justify-end">
                    {/* <div className='flex items-center gap-5'>
                        <h3>Filter: </h3>
                        <FilterTag active text='All' />
                        <FilterTag text='un-Published' />
                        <FilterTag text='Published' />
                    </div> */}
                    <Link to='/dashboard/tutor/courses/add-new/' className='bg-indigo-900 select-none text-white py-2 px-7 rounded-md text-lg font-bold cursor-pointer' >
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