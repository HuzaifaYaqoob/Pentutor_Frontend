

import {faCalendarAlt ,  faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DashboardHeader = () =>{
    return(
        <div className='grid grid-cols-5 gap-5 mb-10 z-50 sticky top-0'>
            <div className='col-span-3 flex items-baseline justify-between'>
                <h3 className='capitalize text-indigo-900 font-bold text-xl'>welcome to dashboard</h3>
                <span className='text-gray-500 font-medium flex items-center gap-3'>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <p className='text-xs'>5 July 2021</p>
                </span>
            </div>
            <div className='col-span-2'>
                <div className='bg-white pentutor-shadow rounded flex items-center px-3 text-xs'>
                    <FontAwesomeIcon className='text-gray-400' icon={faSearch} />
                    <div className='flex-1'>
                        <input type="text" className='outline-none text-xs py-0 w-full text-center' placeholder='Search Anything' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardHeader