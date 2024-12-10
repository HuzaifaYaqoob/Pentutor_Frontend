

import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"



const TableData = (props) => {
    const { className, otherProps } = props
    return (
        <p className={'table-cell py-5 ' + className}>{props.text}</p>
    )
}


const TutorJobsTable = () => {
    return (
        <div className='bg-white shadow rounded-md border border-gray-200 mt-10'>
            <p className="text-center text-black/60 my-10">No Job at the moment</p>
            {/* <div className="table w-full px-5">
                <div className="table-row-group">
                    <div className="table-row">
                        <p className='table-cell py-2 text-indigo-600'>Job Title</p>
                        <p className='table-cell py-2 text-indigo-600'>Creation Date</p>
                        <p className='table-cell py-2 text-indigo-600'>Status</p>
                        <p className='table-cell py-2 text-indigo-600'>Action</p>
                    </div>
                    <div className="table-row ">
                        <TableData text='Adobe Photoshop Beginner to Advance' />
                        <TableData text='september 25, 2021' />
                        <TableData className='text-yellow-400' text='Requested' />
                        <div className='flex items-center gap-4'>
                            <span className='text-xs w-6 h-6 bg-red-400 text-red-600 rounded-full flex items-center justify-center cursor-pointer'>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </span>
                            <span className='text-xs w-6 h-6 bg-gray-400 text-gray-600 rounded-full flex items-center justify-center cursor-pointer'>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}




const TutorJobs = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='All Jobs' />
            <div>
                {/* <div className='text-right'>
                    <Link to='/dashboard/tutor/jobs/add-new/' className='bg-indigo-900 select-none max-w-max text-white py-2 px-7 ml-auto block rounded-md text-lg font-bold cursor-pointer' >
                        Add Job
                        <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
                    </Link>
                </div> */}
                <div>
                    <TutorJobsTable />
                </div>
            </div>
        </DashboardBase>
    )
}

export default TutorJobs