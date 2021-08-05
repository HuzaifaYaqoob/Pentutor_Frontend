
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const QuickMiniCard = (props) => {
    return (
        <div className='flex-1 h-44 flex items-end rounded px-6 pb-6 bg-cover bg-no-repeat overflow-hidden bg-center relative' style={{backgroundImage:`url('${process.env.PUBLIC_URL + '/images/about/about2.jpg'}')`}}>
            <div className={`absolute top-0 right-0 left-0 bottom-0 ${props.colorClass} opacity-90`}>

            </div>
            <div className='relative z-10'>
                <h3 className='text-xl font-bold'>{props.heading}</h3>
                <p className='font-light text-sm'>{props.text}</p>
            </div>
        </div>
    )
}


const QuickOverviewCard = () => {
    return (
        <div className='w-full p-5 bg-center bg-cover bg-no-repeat relative mb-10' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/about1.jpg'})` }}>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-indigo-900 bg-opacity-75'>

            </div>
            <div className='relative z-10 text-white '>
                <div className='flex items-start justify-between mb-20'>
                    <div>
                        <h3 className='text-white text-3xl font-bold '>Quick Overview</h3>
                        <p className='font-light text-gray-200'>Courses & Tutions</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='text-xl font-light'>Courses</p>
                        <FontAwesomeIcon className='font-light text-sm' icon={faChevronRight} />
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <QuickMiniCard heading='English' text='20% completed' colorClass='bg-yellow-450' />
                    <QuickMiniCard heading='French' text='10% completed' colorClass='bg-blue-500' />
                    <QuickMiniCard heading='Web Development' text='40% completedcolor' colorClass='bg-pink-300' />
                </div>
            </div>
        </div>
    )
}

export default QuickOverviewCard