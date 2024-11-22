

const HomePageCard = (props) =>{
    return(
        <div className={ (props.cardReverse ? 'flex-row-reverse justify-end gap-10' : ' justify-between')  + ' max-w-6xl mx-auto bg-white shadow-md p-3 lg:p-7 pt-0 rounded-2xl my-40 flex items-center lg:flex-row flex-col'}>
            <div className='space-y-2'>
                <h3 className={`capitalize font-bold text-4xl whitespace-nowrap ${props.preferredColor}`}>{props.heading}</h3>
                <div className='font-semibold text-gray-500 mb-10 space-y-6'>
                    <p className='text-gray-500 text-2xl'>Search thousand of tutors</p>
                    <ol className='capitalize list-disc list-inside text-lg'>
                        <li>find tutors in your area</li>
                        <li>contact & arrange lessons with tutor </li>
                    </ol>
                    <button className={`capitalize ${props.bgpreferredColor} py-2 px-4 rounded text-white text-md`}>Read more</button>
                </div>
            </div>
            <div className='px-10 pt-20'>
                <div className={`w-96 rounded h-96 ${props.bgpreferredColor} relative flex justify-center shadow-md`}>
                    <img className='absolute bottom-0 w-5/6 ' src={process.env.PUBLIC_URL + props.imagePath} alt="Girl Image" />
                </div>
            </div>
        </div>
    )
}

export default HomePageCard