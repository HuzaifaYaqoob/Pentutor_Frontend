
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const QuickMiniCard = (props) => {
    return (
        <div className='flex-1 h-32 flex items-end rounded px-6 pb-6 bg-cover bg-no-repeat overflow-hidden bg-center relative' style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/images/about/about2.jpg'}')` }}>
            <div className={`absolute top-0 right-0 left-0 bottom-0 ${props.colorClass} opacity-90`}>

            </div>
            <div className='relative z-10 '>
                <h3 className='text-md font-bold'>{props.heading}</h3>
                <p className='font-light text-xs'>{props.text}</p>
            </div>
        </div>
    )
}


const QuickOverviewCard = () => {
    return (
        <div className='w-full p-5 bg-center bg-cover bg-no-repeat relative mb-10' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about1.jpg'})` }}>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-indigo-900 bg-opacity-75'>

            </div>
            <div className='relative z-10 text-white flex flex-col gap-3'>
                <div className='text-center'>
                    <h3 className='text-white text-2xl font-bold'>Upcoming Sessions</h3>
                </div>
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
                                                Date/Day
                                            </th>
                                            <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                Timings
                                            </th>
                                            <th scope="col" class="text-sm font-medium p-2 border-r border-[#FBC210]">
                                                Mode
                                            </th>
                                            <th scope="col" class="text-sm font-medium p-2">
                                                Status
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
    )
}

export default QuickOverviewCard