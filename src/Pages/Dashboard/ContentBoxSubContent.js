
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignature, faMonument, faGlobeEurope, faFunnelDollar } from '@fortawesome/free-solid-svg-icons'

import QuickOverviewCard from './QuickOverviewCard'

import AttendanceCard from './AttendanceCard'
import PaymentCard from './PaymentCard'


const CourseCard = (props) => {
    return (
        <div className={`w-full h-24 ${props.colorClass} p-4 flex items-stretch gap-3`}>
            <div className='w-12 h-full bg-white bg-opacity-40 flex items-center justify-center rounded'>
                <FontAwesomeIcon className='text-xl text-opacity-50 text-white' icon={props.icon} />
            </div>
            <div className='text-white flex flex-col justify-between'>
                <div>
                    <h3 className='mb-0 text-md font-medium capitalize'>{props.heading}</h3>
                    <p className='capitalize text-xs'>{props.content}</p>
                </div>
                <button className='text-xs text-white bg-white bg-opacity-30 px-2 py-1'>Start now</button>
            </div>
        </div>
    )
}

const ContentBoxSubConent = () => {
    return (
        <div className='lg:grid grid-cols-5 gap-5'>
            <div className='col-span-3'>
                <QuickOverviewCard />
                <div>
                    <div className='mb-5 text-center'>
                        <h3 className='font-bold text-gray-700 text-2xl'>My Scheduled Classes</h3>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-semibold text-lg text-black'>My Scheduled Home Tuitions</h2>
                            <div className='w-full p-5 bg-center bg-cover bg-no-repeat relative mb-10' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about1.jpg'})` }}>
                                <div className='absolute top-0 right-0 bottom-0 left-0 bg-indigo-900 bg-opacity-75'>
                                </div>
                                <div className='relative z-10 text-white flex flex-col gap-3'>
                                    <div class="flex flex-col">
                                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div class="overflow-hidden">
                                                    <table class="table-auto w-full border text-center text-[#FBC210] border-[#FBC210]">
                                                        <thead class="border-b border-[#FBC210]">
                                                            <tr>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    &nbsp;
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Student Id
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Class/Level
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Subject
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Days & Timings
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Location
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="border-b border-[#FBC210]">
                                                                <td class="p-2 whitespace-nowrap text-sm font-medium border-r border-[#FBC210]">1</td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Mark
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Mark
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Mark
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Otto
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap">
                                                                    @mdo
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h2 className='font-semibold text-lg text-black'>My Scheduled Online Tuitions</h2>
                            <div className='w-full p-5 bg-center bg-cover bg-no-repeat relative mb-10' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about1.jpg'})` }}>
                                <div className='absolute top-0 right-0 bottom-0 left-0 bg-indigo-900 bg-opacity-75'>
                                </div>
                                <div className='relative z-10 text-white flex flex-col gap-3'>
                                    <div class="flex flex-col">
                                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div class="overflow-hidden">
                                                    <table class="table-auto w-full border text-center text-[#FBC210] border-[#FBC210]">
                                                        <thead class="border-b border-[#FBC210]">
                                                            <tr>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    &nbsp;
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Student Id
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Class/Level
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Subject
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Days & Timings
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="border-b border-[#FBC210]">
                                                                <td class="p-2 whitespace-nowrap text-sm font-medium border-r border-[#FBC210]">1</td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Mark
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Mark
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Otto
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap">
                                                                    @mdo
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h2 className='font-semibold text-lg text-black'>My Scheduled Online Group Sessions</h2>
                            <div className='w-full p-5 bg-center bg-cover bg-no-repeat relative mb-10' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about1.jpg'})` }}>
                                <div className='absolute top-0 right-0 bottom-0 left-0 bg-indigo-900 bg-opacity-75'>
                                </div>
                                <div className='relative z-10 text-white flex flex-col gap-3'>
                                    <div class="flex flex-col">
                                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div class="overflow-hidden">
                                                    <table class="table-auto w-full border text-center text-[#FBC210] border-[#FBC210]">
                                                        <thead class="border-b border-[#FBC210]">
                                                            <tr>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    &nbsp;
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Student Id
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Class/Level
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Subject
                                                                </th>
                                                                <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                                    Days & Timings
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="border-b border-[#FBC210]">
                                                                <td class="p-2 whitespace-nowrap text-sm font-medium border-r border-[#FBC210]">1</td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Mark
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Mark
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap border-r border-[#FBC210]">
                                                                    Otto
                                                                </td>
                                                                <td class="text-sm font-light p-2 whitespace-nowrap">
                                                                    @mdo
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='mb-5 text-center'>
                                <h3 className='font-bold text-gray-700 text-2xl'>My Video Courses</h3>
                            </div>
                            <div className='grid md:grid-cols-3 gap-3'>
                                <div className='bg-[#F5BB07E5] rounded-lg h-[8rem] flex flex-col gap-4 items-center justify-center'>
                                    <FontAwesomeIcon icon={faFunnelDollar} className='text-2xl' />
                                    <p className='font-semibold'>O Level Chemistry</p>
                                </div>
                                <div className='bg-[#02C8C8CC] rounded-lg h-[8rem] flex flex-col gap-4 items-center justify-center'>
                                    <FontAwesomeIcon icon={faFunnelDollar} className='text-2xl' />
                                    <p className='font-semibold'>O Level Chemistry</p>
                                </div>
                                <div className='bg-[#F50740E5] rounded-lg h-[8rem] flex flex-col gap-4 items-center justify-center'>
                                    <FontAwesomeIcon icon={faFunnelDollar} className='text-2xl' />
                                    <p className='font-semibold'>O Level Chemistry</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div className='mb-5 text-center'>
                                <h3 className='font-bold text-gray-700 text-2xl'>My Video Courses</h3>
                            </div>
                            <div className='grid md:grid-cols-3 gap-3'>
                                <div className='bg-[#F5BB07E5] rounded-lg h-[8rem] flex flex-col gap-4 items-center justify-center'>
                                    <FontAwesomeIcon icon={faFunnelDollar} className='text-2xl' />
                                    <p className='font-semibold'>O Level Chemistry</p>
                                </div>
                                <div className='bg-[#02C8C8CC] rounded-lg h-[8rem] flex flex-col gap-4 items-center justify-center'>
                                    <FontAwesomeIcon icon={faFunnelDollar} className='text-2xl' />
                                    <p className='font-semibold'>O Level Chemistry</p>
                                </div>
                                <div className='bg-[#F50740E5] rounded-lg h-[8rem] flex flex-col gap-4 items-center justify-center'>
                                    <FontAwesomeIcon icon={faFunnelDollar} className='text-2xl' />
                                    <p className='font-semibold'>O Level Chemistry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 px-5 lg:mt-0 mt-10'>
                <AttendanceCard />
                <PaymentCard />
            </div>

        </div>
    )
}

export default ContentBoxSubConent