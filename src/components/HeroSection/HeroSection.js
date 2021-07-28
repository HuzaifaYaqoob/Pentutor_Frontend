

const HeroSection = () => {
    return (
        <div className='w-full bg-yellow-100 relative pt-20' >
            <div className='border-yellow-300 w-52 h-52 rounded-full absolute top-8 transform -translate-x-1/2' style={{ borderWidth: '20px' }}></div>
            <div className='z-10 relative flex items-center container mx-auto flex-col lg:flex-row px-12'>
                <div className='mb-12 w-full text-center lg:text-left'>
                    <h1 className='capitalize text-3xl font-semibold text-indigo-900'>Welcome to Pen Tutor</h1>
                </div>
                <div className='relative w-full'>
                    <div className='w-44 h-44 rounded-full bg-yellow-300 top-3 absolute right-16'></div>
                    <img className='w-96 relative mx-auto' src={process.env.PUBLIC_URL + "/images/studentImages.png"} alt="Student Image" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection