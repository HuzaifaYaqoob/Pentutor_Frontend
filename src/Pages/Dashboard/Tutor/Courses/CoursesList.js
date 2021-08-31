

import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DashboardBase from "../../DashboardBase"

import { Link } from "react-router-dom"

const FilterTag = ( props) =>{
    return(
        <p className={'rounded-full py-0.5 px-3 cursor-pointer' + ' ' + (props.active ?  'bg-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-500 ')}>
            {props.text}
        </p>
    )
}

const TableData = (props) =>{
    return(
        <p className='table-cell py-5'>{props.text}</p>
    )
}


const TutorCourses = () =>{
    return(
        <div className='bg-white shadow rounded border border-gray-200 mt-10'>
            <div className="table w-full px-5">
                <div className="table-row-group">
                    <div className="table-row">
                        <p className='table-cell py-2 text-indigo-600'>Course Name</p>
                        <p className='table-cell py-2 text-indigo-600'>Duration</p>
                        <p className='table-cell py-2 text-indigo-600'>Date Published</p>
                    </div>
                    <div className="table-row ">
                        <TableData text='Learn Adobe Photoshop: Begginer To Master i 1 months' />
                        <TableData text='5h, 34m, 45s' />
                        <TableData text='september 25, 2021' />
                    </div>
                </div>
            </div>
        </div>
    )
}



const CoursesList = () =>{
    return(
        <DashboardBase>
            <div className='py-10'>
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-5'> 
                        <h3>Filter: </h3>
                        <FilterTag  active text='All' />
                        <FilterTag  text='un-Published' />
                        <FilterTag  text='Published' />
                    </div>
                    <Link to='/dashboard/tutor/courses/add-new/' className='bg-yellow-200 text-indigo-900 py-2 px-7 rounded text-lg font-bold cursor-pointer' >
                        Create A Course
                        <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
                    </Link>

                </div>
                <TutorCourses/>
            </div>
        </DashboardBase>
    )
}


export default CoursesList