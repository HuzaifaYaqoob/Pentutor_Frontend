

import { faPlusCircle, faStar, faTrashAlt, faPencilAlt, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DashboardBase from "../../DashboardBase"

import { Link } from "react-router-dom"



const FilterTag = (props) => {
    return (
        <p className={'rounded-full py-0.5 px-3 cursor-pointer' + ' ' + (props.active ? 'bg-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-500 ')}>
            {props.text}
        </p>
    )
}

const AdminCourseCard = () => {
    return (
        <div className='bg-white p-1 shadow-lg rounded border border-gray-300 w-full mb-5 flex gap-3'>
            <img className='w-52' src={process.env.PUBLIC_URL + '/images/blog/blogImage.png'} alt="" />
            <div className='flex flex-col justify-between py-1 flex-1'>
                <div>

                    <h3>Adobe Photoshop : Beginner to Advance in 1 Month</h3>
                    <p className='text-gray-400 text-xs mt-1'>By Ibrahim Akram</p>
                </div>
                <span className='text-sm'>
                    <span className='mr-3'>
                        <span className='text-yellow-400 mr-3'>4.8</span>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 mr-3' />
                        <span className='text-gray-400'>(579)</span>
                    </span>
                    <span className='text-gray-400'>
                        <span className='text-gray-700'>770</span>
                        students
                    </span>
                </span>
            </div>
            <div className='text-gray-500 text-right text-sm '>
                September 25, 2021
            </div>
            <div className='text-center px-10 text-red-500'>
                Un-Published
            </div>
            <div className='flex items-center gap-4 px-5'>
                <span className='text-xs w-6 h-6 bg-red-400 text-red-600 rounded-full flex items-center justify-center cursor-pointer'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </span>
                <span className='text-xs w-6 h-6 bg-gray-400 text-gray-600 rounded-full flex items-center justify-center cursor-pointer'>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </span>
                <span className='text-xs w-6 h-6 bg-green-400 text-green-600 rounded-full flex items-center justify-center cursor-pointer'>
                    <FontAwesomeIcon icon={faUpload} />
                </span>
            </div>
        </div>
    )
}


const AdminCoursesList = () => {
    return (
        <DashboardBase>
            <div className='py-10'>
                <div className='flex items-center gap-5'>
                    <h3>Filter: </h3>
                    <FilterTag active text='All' />
                    <FilterTag text='Approved' />
                    <FilterTag text='Requested' />
                </div>
                <div className='my-10'>
                    <AdminCourseCard />
                    <AdminCourseCard />
                    <AdminCourseCard />
                </div>
            </div>
        </DashboardBase>
    )
}


export default AdminCoursesList