

const HomePageCard = (props) =>{
    return(
        <div className={ (props.cardReverse ? 'flex-row-reverse justify-end gap-10' : ' justify-between')  + ' max-w-[1300px] mx-auto bg-white shadow-md pb-4 md:pb-10 px-4 md:px-10 pt-0 rounded-lg sm:rounded-2xl my-20 flex items-center lg:flex-row flex-col'}>
            <div className='space-y-1 sm:space-y-2 flex-1 w-full'>
                <h3 className={`capitalize font-bold text-2xl sm:text-3xl md:text-4xl whitespace-nowrap ${props.preferredColor}`}>{props.heading}</h3>
                <div className='font-semibold text-gray-500 mb-10 space-y-4 sm:space-y-6'>
                    <p className='text-gray-500 text-xl sm:text-2xl md:text-2xl'>Search thousand of tutors</p>
                    <ol className='capitalize list-disc list-inside text-sm sm:text-[16px] md:text-lg'>
                        <li>find tutors in your area</li>
                        <li>contact & arrange lessons with tutor </li>
                    </ol>
                    <button className={`capitalize ${props.bgpreferredColor} py-2 px-4 rounded text-white text-md`}>Read more</button>
                </div>
            </div>
            <div className='sm:px-10 pt-7 sm:pt-20 w-full lg:w-auto'>
                <div className={`w-full sm:w-96 rounded h-96 ${props.bgpreferredColor} relative flex justify-center shadow-md`}>
                    <img className='absolute bottom-0 w-5/6 ' src={process.env.PUBLIC_URL + props.imagePath} alt="Girl Image" />
                </div>
            </div>
        </div>
    )
}

export default HomePageCard