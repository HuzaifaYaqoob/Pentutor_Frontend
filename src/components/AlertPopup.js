




const AlertPopup = ({type , message, callBack}) =>{

    return(
        <div className='fixed flex items-center justify-center bg-gray-800 bg-opacity-50 top-0 right-0 bottom-0 left-0 z-50 '>
            <div className='max-w-lg w-full bg-white rounded-xl overflow-hidden '>
                <div className='py-4 pt-10 text-center px-7'>
                    <img src={process.env.PUBLIC_URL + `/images/${type}.png`} className='w-32 mx-auto mb-5' />
                    <h3 className='text-xl mb-1 lg:text-3xl text-gray-900 font-medium capitalize'>{type} !</h3>
                    <p className='text-gray-600'>{message}</p>
                </div>
                <div className='w-full bg-yellow-450 py-2 text-white text-center rounded-xl cursor-pointer hover:bg-yellow-400' onClick={()=>{callBack()}}>
                    Ok
                </div>
            </div>
        </div>
    )
}

export default AlertPopup