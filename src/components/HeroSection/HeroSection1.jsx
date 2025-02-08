


const WelcomePTHeroSection = () => {
    return (
        <>
            <div className="w-full relative bg-[#FFFCE0]">
                <div className="px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between max-w-[1300px] mx-auto z-[3] relative pt-12 sm:gap-0 gap-12 sm:pt-0">
                    <h1 className="text-3xl sm:text-start text-center sm:text-4xl md:text-5xl text-[#313D6A] font-semibold z-[3]">Welcome To Pen Tutor</h1>
                    <div className="relative">
                        <img src={`${process.env.PUBLIC_URL}/images/studentImages.png`} className='relative z-[3]' alt="" />
                        <div className="bg-[#F5BB07] w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] rounded-full absolute top-0 right-0 z-[1]"></div>
                    </div>
                </div>
                <div className="absolute border-[#F5BB07] border-[18px] sm:border-[24px] md:border-[30px] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full top-0 sm:top-1/2 sm:-translate-y-1/2 left-0 -translate-x-1/2 z-[1]"></div>
            </div>
        </>
    )
}

export default WelcomePTHeroSection