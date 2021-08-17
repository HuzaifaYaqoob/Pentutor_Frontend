
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignature , faMonument , faGlobeEurope} from '@fortawesome/free-solid-svg-icons'

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
        <div className='grid grid-cols-5 gap-5'>
            <div className='col-span-3'>
                <QuickOverviewCard />
                <div>
                    <div className='mb-5'>
                        <h3 className='font-bold text-gray-700 text-xl'>Your Upcomming Courses/Tution</h3>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <CourseCard heading='calculus' content='10 courses' colorClass='bg-yellow-450' icon={faSignature} />
                        <CourseCard heading='German' content='10 courses' colorClass='bg-blue-600' icon={faGlobeEurope} />
                        <CourseCard heading='History' content='10 courses' colorClass='bg-red-600' icon={faMonument} />
                    </div>
                </div>
            </div>
            <div className='col-span-2'>
                <AttendanceCard />
                <PaymentCard />
            </div>

        </div>
    )
}

export default ContentBoxSubConent