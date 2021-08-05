

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

const AttendanceRow = (props) =>{
    return(
        <li className='flex items-center justify-between text-sm capitalize mb-1'>
            <p>{props.property}</p>
            <p>{props.value}</p>
        </li>
    )
}

const AttendanceCard = () =>{
    return(
        <div className='bg-white pentutor-shadow rounded'>
            <div className='flex items-center justify-between p-3 mb-10'>
                <h3 className='font-bold text-gray-800'>Attendance</h3>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <ul className='px-16'>
                <AttendanceRow property='1st week' value='2 absent' />
                <AttendanceRow property='1st week' value='2 absent' />
                <AttendanceRow property='1st week' value='2 absent' />
            </ul>
            <button className='color-green text-white font-bold mt-20 rounded flex items-center justify-between p-4 w-full'>
                <p>Performance:</p>
                <p>70%</p>
            </button>
        </div>
    )
}


export default AttendanceCard