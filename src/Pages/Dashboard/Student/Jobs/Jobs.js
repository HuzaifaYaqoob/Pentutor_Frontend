import { Link } from "react-router-dom"
import ContentBox from "../../ContentBox"
import DashboardBase from "../../DashboardBase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const TableData = ({ text, className }) => {
    return <p className={'table-cell py-5 ' + className}>{text}</p>
}

const TutorJobsTable = ({ jobs }) => {
    return (
        <div className='bg-white rounded-md border border-gray-200 mt-10'>
            {jobs && jobs.length > 0 ? (
                <div className="table w-full px-5">
                    <div className="table-row-group">
                        <div className="table-row">
                            <p className='table-cell py-2 text-indigo-600'>Job Title</p>
                            <p className='table-cell py-2 text-indigo-600'>Creation Date</p>
                            <p className='table-cell py-2 text-indigo-600'>Status</p>
                            <p className='table-cell py-2 text-indigo-600'>Action</p>
                        </div>
                        {jobs.map((job, index) => (
                            <div className="table-row" key={index}>
                                <TableData text={job.title} />
                                <TableData text={job.creationDate} />
                                <TableData className='text-yellow-400' text={job.status} />
                                <div className=' py-5 flex items-center gap-4'>
                                    <span className='text-xs w-6 h-6 bg-red-400 text-red-600 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </span>
                                    <span className='text-xs w-6 h-6 bg-gray-400 text-gray-600 rounded-full flex items-center justify-center cursor-pointer'>
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center text-black/60 py-10 text-sm">No Job at the moment</p>
            )}
        </div>
    )
}

const JobsPage = () => {
    const jobs = [
        {
            title: "Adobe Photoshop Beginner to Advance",
            creationDate: "September 25, 2021",
            status: "Requested",
        },
    ]

    return (
        <DashboardBase>
            <ContentBox HeaderText='All Jobs' />
            <div>
                <div className='text-right'>
                    <Link to='/dashboard/student/jobs/add-new/' className='bg-indigo-900 select-none max-w-max text-white py-2 px-7 ml-auto block rounded-md text-lg font-bold cursor-pointer'>
                        Add Job
                        <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
                    </Link>
                </div>
                <div>
                    <TutorJobsTable jobs={jobs} />
                </div>
            </div>
        </DashboardBase>
    )
}

export default JobsPage
