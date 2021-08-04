

const HomePageCard = (props) =>{
    return(
        <div className={ (props.cardReverse ? 'flex-row-reverse justify-end gap-10' : ' justify-between')  + ' max-w-6xl mx-auto bg-white shadow-md p-7 pt-0 rounded-2xl my-40 flex items-center'}>
            <div className=''>
                <div className='mb-2'>
                    <h3 className={`capitalize font-bold text-6xl whitespace-nowrap text-${props.preferredColor}`}>{props.heading}</h3>
                </div>
                <div className='text-2xl font-semibold text-gray-500 mb-10'>
                    <p className='text-gray-500 mb-10'>Search thousand of tutors</p>
                    <ol className='capitalize list-disc list-inside text-xl'>
                        <li>find tutors in your area</li>
                        <li>contact & arrange lessons with tutor </li>
                    </ol>
                </div>
                <div>
                    <button className={`capitalize bg-${props.preferredColor} py-3 px-4 rounded text-white text-md`}>Read more</button>
                </div>
            </div>
            <div className='px-10 pt-20'>
                <div className={`w-96 rounded h-96 bg-${props.preferredColor} relative flex justify-center shadow-md`}>
                    <img className='absolute bottom-0 w-5/6 ' src={process.env.PUBLIC_URL + props.imagePath} alt="Girl Image" />
                </div>
            </div>
        </div>
    )
}

export default HomePageCard