


import { useState } from "react"
import TopTileCard from "../../../../components/TopTileCard"
import DashboardBase from "../../DashboardBase"

import { Link } from "react-router-dom"
import Breadcrumb from "../../../../components/BreadCrumb"


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
        <div className='bg-white shadow rounded border border-gray-200 mt-10 '>
            <div className="table w-full px-5 overflow-x-scroll">
                <div className="table-row-group">
                    <div className="table-row">
                        <p className='table-cell py-2 text-indigo-600'>Preview</p>
                        <p className='table-cell py-2 text-indigo-600'>Course Name</p>
                        <p className='table-cell py-2 text-indigo-600'>Buying Date</p>
                        <p className='table-cell py-2 text-indigo-600'>Total Lectures</p>
                        <p className='table-cell py-2 text-indigo-600 text-center'>Progress Rate</p>
                    </div>
                    {/* <Course/>
                    <Course/>
                <Course/> */}
                </div>
                <p className="my-10 text-center">No Course Enrolled</p>
            </div>
        </div>
    )
}



const PurchasesCourses = () => {
    const [data, setData] = useState({})
    const cardData = [
        {
            // active: cardFilters == 'today',
            bgColor: "bg-[#E6E9FF]",
            icon: <svg width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0019 0.96875V13.9687C16.002 14.7145 16.2798 15.4335 16.7812 15.9856C17.2826 16.5376 17.9716 16.8832 18.7139 16.9547L19.0019 16.9687H32.0019V36.9687C32.0023 37.9779 31.6211 38.9499 30.9349 39.6898C30.2488 40.4298 29.3082 40.8831 28.3019 40.9587L28.0019 40.9687H4.00195C2.9928 40.9691 2.02082 40.5879 1.28086 39.9018C0.540894 39.2156 0.0876399 38.2751 0.0119535 37.2687L0.00195333 36.9687V4.96875C0.00163397 3.9596 0.382766 2.98762 1.06895 2.24765C1.75513 1.50769 2.69564 1.05444 3.70195 0.97875L4.00195 0.96875H16.0019ZM16.0019 19.9687C15.5121 19.9688 15.0393 20.1487 14.6732 20.4742C14.3071 20.7997 14.0733 21.2482 14.0159 21.7347L14.0019 21.9687V24.9687H11.0019C10.4922 24.9693 10.0019 25.1645 9.63121 25.5144C9.26054 25.8644 9.03748 26.3427 9.0076 26.8515C8.97773 27.3604 9.1433 27.8615 9.47048 28.2524C9.79766 28.6433 10.2618 28.8945 10.7679 28.9547L11.0019 28.9687H14.0019V31.9687C14.0025 32.4785 14.1977 32.9688 14.5476 33.3395C14.8976 33.7102 15.3759 33.9332 15.8847 33.9631C16.3936 33.993 16.8947 33.8274 17.2856 33.5002C17.6765 33.173 17.9277 32.7089 17.9879 32.2027L18.0019 31.9687V28.9687H21.0019C21.5117 28.9682 22.002 28.773 22.3727 28.423C22.7434 28.0731 22.9664 27.5948 22.9963 27.086C23.0262 26.5771 22.8606 26.076 22.5334 25.6851C22.2062 25.2942 21.7421 25.043 21.2359 24.9827L21.0019 24.9687H18.0019V21.9687C18.0019 21.4383 17.7912 20.9296 17.4162 20.5545C17.0411 20.1795 16.5324 19.9687 16.0019 19.9687ZM20.0019 1.05475C20.6487 1.19205 21.2513 1.48753 21.7559 1.91475L22.0019 2.14075L30.8299 10.9687C31.2986 11.437 31.6435 12.0143 31.8339 12.6487L31.9139 12.9687H20.0019V1.05475Z" fill="#5768E6" /></svg>,
            title: "Today's Classes",
            value: data?.todays
        },
        {
            // active: statusFilter == 'In Progress',
            bgColor: "bg-[#30FF45] bg-opacity-10",
            icon: <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 41C31.8221 41 41 31.8221 41 20.5C41 9.17785 31.8221 0 20.5 0C9.17785 0 0 9.17785 0 20.5C0 31.8221 9.17785 41 20.5 41ZM32.8 20.5C32.8024 22.1157 32.4855 23.7159 31.8673 25.2086C31.2492 26.7014 30.3421 28.0572 29.1981 29.1981L20.5 20.5V8.2C23.7622 8.2 26.8907 9.49589 29.1974 11.8026C31.5041 14.1093 32.8 17.2378 32.8 20.5Z" fill="#699635" /></svg>,
            title: "In progress Classes",
            value: data?.inprogress
        },
        {
            // active: cardFilters == 'overdue_pending',
            bgColor: "bg-[#FFC839] bg-opacity-10",
            icon: <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.8889 24.4445C22.7556 24.4445 17.7778 29.4222 17.7778 35.5556C17.7778 41.6889 22.7556 46.6667 28.8889 46.6667C35.0222 46.6667 40 41.6889 40 35.5556C40 29.4222 35.0222 24.4445 28.8889 24.4445ZM32.5556 40.7778L27.7778 36V28.8889H30V35.0889L34.1111 39.2L32.5556 40.7778ZM31.1111 4.44445H24.0444C23.1111 1.86667 20.6667 0 17.7778 0C14.8889 0 12.4444 1.86667 11.5111 4.44445H4.44444C2 4.44445 0 6.44445 0 8.88889V42.2222C0 44.6667 2 46.6667 4.44444 46.6667H18.0222C16.7058 45.392 15.6361 43.8853 14.8667 42.2222H4.44444V8.88889H8.88889V15.5556H26.6667V8.88889H31.1111V20.1778C32.6889 20.4 34.1778 20.8667 35.5556 21.5111V8.88889C35.5556 6.44445 33.5556 4.44445 31.1111 4.44445ZM17.7778 8.88889C16.5556 8.88889 15.5556 7.88889 15.5556 6.66667C15.5556 5.44445 16.5556 4.44445 17.7778 4.44445C19 4.44445 20 5.44445 20 6.66667C20 7.88889 19 8.88889 17.7778 8.88889Z" fill="#FBBB00" /></svg>,
            title: "New Classes",
            value: `${data?.todo ? data?.todo : 0}`
        },
        {
            // active: statusFilter == 'Completed',
            bgColor: "bg-[#19BEEC] bg-opacity-10",
            icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 0C21.29 0 23.0166 0.228516 24.6797 0.685547C26.3428 1.14258 27.8916 1.80273 29.3262 2.66602C30.7607 3.5293 32.0747 4.54492 33.2681 5.71289C34.4614 6.88086 35.4834 8.19482 36.334 9.65479C37.1846 11.1147 37.8384 12.6699 38.2954 14.3203C38.7524 15.9707 38.9873 17.6973 39 19.5C39 21.29 38.7715 23.0166 38.3145 24.6797C37.8574 26.3428 37.1973 27.8916 36.334 29.3262C35.4707 30.7607 34.4551 32.0747 33.2871 33.2681C32.1191 34.4614 30.8052 35.4834 29.3452 36.334C27.8853 37.1846 26.3301 37.8384 24.6797 38.2954C23.0293 38.7524 21.3027 38.9873 19.5 39C17.71 39 15.9834 38.7715 14.3203 38.3145C12.6572 37.8574 11.1084 37.1973 9.67383 36.334C8.23926 35.4707 6.92529 34.4551 5.73193 33.2871C4.53857 32.1191 3.5166 30.8052 2.66602 29.3452C1.81543 27.8853 1.16162 26.3301 0.70459 24.6797C0.247559 23.0293 0.0126953 21.3027 0 19.5C0 17.71 0.228516 15.9834 0.685547 14.3203C1.14258 12.6572 1.80273 11.1084 2.66602 9.67383C3.5293 8.23926 4.54492 6.92529 5.71289 5.73193C6.88086 4.53857 8.19482 3.5166 9.65479 2.66602C11.1147 1.81543 12.6699 1.16162 14.3203 0.70459C15.9707 0.247559 17.6973 0.0126953 19.5 0ZM30.9829 13.0444L28.3931 10.4546L15.8438 23.0039L10.6069 17.7671L8.01709 20.3569L15.8438 28.1836L30.9829 13.0444Z" fill="#19BEEC" /></svg>,
            title: "Overdue Classes",
            value: data?.completed
        },
    ]

    return (
        <DashboardBase>
            <Breadcrumb
                first={'Courses'}
                url={'#'}
            />
            <div className="mb-3">
                <h3 className="text-2xl font-medium ">Courses</h3>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[15px] mb-5">
                {cardData?.map((data, index) => (
                    <TopTileCard
                        // active={data?.active}
                        // onClick={data?.onClick}
                        key={index}
                        bgColor={data?.bgColor}
                        icon={data?.icon}
                        title={data?.title}
                        value={data?.value || 0}
                    />
                ))}
            </div>
            <div className=''>
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