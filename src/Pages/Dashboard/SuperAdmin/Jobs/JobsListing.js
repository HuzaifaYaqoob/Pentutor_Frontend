

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


const Job = () => {
    return (
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
    )
}

const AdminJobsTable = () => {
    return (
        <div className='bg-white shadow rounded border border-gray-200 mt-10'>
            <div className="table w-full px-5">
                <div className="table-row-group">
                    <div className="table-row">
                        <p className='table-cell py-2 text-indigo-600'>Job Title</p>
                        <p className='table-cell py-2 text-indigo-600'>Creation Date</p>
                        <p className='table-cell py-2 text-indigo-600'>Status</p>
                        <p className='table-cell py-2 text-indigo-600'>Action</p>
                    </div>
                    <Job/>
                    <Job/>
                    <Job/>
                </div>
            </div>
        </div>
    )
}




const FilterTag = (props) => {
    return (
        <p className={'rounded-full py-0.5 px-3 cursor-pointer' + ' ' + (props.active ? 'bg-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-500 ')}>
            {props.text}
        </p>
    )
}



const AdminJobs = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='All Jobs' />
            <div className='flex items-center gap-5'>
                    <h3>Filter: </h3>
                    <FilterTag active text='All' />
                    <FilterTag text='Approved' />
                    <FilterTag text='Requested' />
                </div>
            <div>
                <AdminJobsTable />
            </div>
        </DashboardBase>
    )
}

export default AdminJobs