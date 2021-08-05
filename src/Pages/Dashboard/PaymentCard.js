
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'


const PaymentButton = (props) =>{
    return(
        <div className={`flex items-center justify-between mb-5 p-4 rounded text-white cursor-pointer ${props.colorClass}`}>
            <p className='capitalize'>{props.property}:</p>
            <p className='uppercase'>{props.value}</p>
        </div>
    )
}

const PaymentCard = () =>{
    return(
        <div className='mt-10 pentutor-shadow bg-white p-5 pb-10'>
            <div className='flex items-center justify-between mb-10'>
                <h3 className='font-bold '>Payment</h3>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <PaymentButton property='Due Payment' value='1500 RS' colorClass='bg-gray-700' />
            <PaymentButton property='paid' value='1500 RS' colorClass='color-green' />
        </div>
    )
}

export default PaymentCard