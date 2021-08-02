

const HomePageCard = () =>{
    return(
        <div className='max-w-7xl mx-auto bg-white shadow-md p-7 rounded-2xl my-20 flex items-center flex-row-reverse'>
            <div className='w-full'>
                <div>
                    <h3 className='capitalize font-bold text-6xl whitespace-nowrap text-yellow-450'>for students</h3>
                </div>
                <div className='text-2xl font-semibold text-gray-500 '>
                    <p className='text-gray-500'>Search thousand of tutors</p>
                    <ol className='capitalize list-disc list-inside'>
                        <li>find tutors in your area</li>
                        <li>contact & arrange lessons with tutor </li>
                    </ol>
                </div>
            </div>
            <div className='px-10'>
                <div className='w-96 h-96 bg-yellow-450'>

                </div>
            </div>
        </div>
    )
}

export default HomePageCard