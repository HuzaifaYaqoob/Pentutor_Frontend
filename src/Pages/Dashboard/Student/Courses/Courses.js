


import DashboardBase from "../../DashboardBase"

import { Link } from "react-router-dom"


const FilterTag = (props) => {
    return (
        <p className={'rounded-full py-0.5 px-3 cursor-pointer' + ' ' + (props.active ? 'bg-gray-600 text-white' : 'bg-white border border-gray-300 text-gray-500 ')}>
            {props.text}
        </p>
    )
}

const TableData = (props) => {
    const { className, otherProps } = props
    return (
        <p className={'table-cell py-5 px-2 whitespace-nowrap align-top ' + className}>{props.text}</p>
    )
}


const Course = () => {
    return (
        <>
        <div className="table-row">
            <img className='w-40' src={process.env.PUBLIC_URL + '/images/blog/BlogImage.png'} alt="" />
            <TableData className='w-auto' text='Learn Adobe Photoshop: Begginer To Mas...' />
            <TableData text='september 25, 2021' />
            <TableData text='36 Lectures' />
            <TableData className='text-yellow-400' text='56% Completed' />
        </div>
        <br />
        </>
    )
}

const StudentCourses = () => {
    return (
        <div className='bg-white shadow rounded border border-gray-200 mt-10'>
            <div className="table w-full px-5 overflow-x-auto">
                <div className="table-row-group">
                    <div className="table-row">

                        <p className='table-cell py-2 text-indigo-600'>Preview</p>
                        <p className='table-cell py-2 text-indigo-600'>Course Name</p>
                        <p className='table-cell py-2 text-indigo-600'>Buying Date</p>
                        <p className='table-cell py-2 text-indigo-600'>Total Lectures</p>
                        <p className='table-cell py-2 text-indigo-600 text-center'>Progress Rate</p>
                    </div>
                    <Course/>
                    <Course/>
                    <Course/>
                </div>
            </div>
        </div>
    )
}



const PurchasesCourses = () => {
    return (
        <DashboardBase>
            <div className='py-10'>
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-5'>
                        <h3>Filter: </h3>
                        <FilterTag active text='All' />
                        <FilterTag text='Completed' />
                        <FilterTag text='Un-Completed' />
                    </div>

                </div>
                <StudentCourses />
            </div>
        </DashboardBase>
    )
}

export default PurchasesCourses