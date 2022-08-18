


const WelcomePTHeroSection = () => {
    return (
        <>
            <div className="w-full relative bg-[#FFFCE0]">
                <div className="flex items-center justify-between max-w-[1300px] mx-auto z-[3] relative">
                    <div>
                        <h1 className="text-5xl text-[#313D6A] font-semibold z-[3]">Welcome To Pen Tutor</h1>
                    </div>
                    <div className="relative">
                        <img src={`${process.env.PUBLIC_URL}/images/studentImages.png`} className='relative z-[3]' alt="" />
                        <div className="bg-[#F5BB07] w-[280px] h-[280px] rounded-full absolute top-0 right-0 z-[1]">
                        </div>
                    </div>
                </div>
                <div className="absolute border-[#F5BB07] border-[30px] w-[350px] h-[350px] rounded-full top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-[1]">
                </div>
            </div>
        </>
    )
}

export default WelcomePTHeroSection