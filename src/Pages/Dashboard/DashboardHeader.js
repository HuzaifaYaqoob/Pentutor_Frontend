

import {faCalendarAlt ,  faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DashboardHeader = (props) =>{
    return(
        <div className='md:grid grid-cols-5 gap-5 mb-10 z-40 sticky top-0'>
            <div className='col-span-3 flex items-baseline justify-between'>
                <h3 className='capitalize text-indigo-900 font-bold text-xl'>{props.HeaderText}</h3>
                <span className='text-gray-500 font-medium flex items-center gap-3'>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <p className='text-xs'>5 July 2021</p>
                </span>
            </div>
            <div className='col-span-2 mt-5 md:mt-0'>
                <div className='bg-white pentutor-shadow rounded flex items-center px-3 text-xs'>
                    <FontAwesomeIcon className='text-gray-400' icon={faSearch} />
                    <div className='flex-1'>
                        <input type="text" className='outline-none text-xs py-2 w-full text-center' placeholder='Search Anything' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardHeader