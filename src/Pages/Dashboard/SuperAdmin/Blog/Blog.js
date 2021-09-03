


import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"



const TableData = (props) => {
    const { className, otherProps } = props
    return (
        <p className={'table-cell py-5 align-top ' + className}>{props.text}</p>
    )
}


const Job = () => {
    return (
        <div className="table-row mb-7">
            <img className='w-40' src={process.env.PUBLIC_URL + '/images/blog/BlogImage.png'} alt="" />
            <TableData text='Adobe Photoshop Beginner to Advance' />
            <TableData text='september 25, 2021' />
            <TableData className='text-green-400' text='Published' />
            <span className='table-cell align-top py-5 '>

                <div className=' flex items-center gap-4'>
                    <span className='text-xs w-6 h-6 bg-red-400 text-red-600 rounded-full flex items-center justify-center cursor-pointer'>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                    <span className='text-xs w-6 h-6 bg-gray-400 text-gray-600 rounded-full flex items-center justify-center cursor-pointer'>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                </div>
            </span>
        </div>
    )
}

const SuperAdminBlogListing = () => {
    return (
        <div className='bg-white shadow rounded border border-gray-200 mt-10'>
            <div className="table w-full px-5">
                <div className="table-row-group">
                    <div className="table-row">
                        <p className='table-cell py-2 text-indigo-600'>Preview</p>
                        <p className='table-cell py-2 text-indigo-600'>Job Title</p>
                        <p className='table-cell py-2 text-indigo-600'>Creation Date</p>
                        <p className='table-cell py-2 text-indigo-600'>Status</p>
                        <p className='table-cell py-2 text-indigo-600'>Action</p>
                    </div>
                    <Job />
                    <Job />
                </div>
            </div>
        </div>
    )
}


const BlogListing = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='All Blogs' />
            <div>
                <div className='text-right'>

                    <Link to='/dashboard/super-admin/blog/post-new/' className='bg-yellow-200 text-indigo-900 py-2 px-7 rounded text-lg font-bold cursor-pointer ' >
                        Add New Post
                        <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
                    </Link>
                </div>
                <div>
                    <SuperAdminBlogListing />
                </div>
            </div>
        </DashboardBase>
    )
}

export default BlogListing