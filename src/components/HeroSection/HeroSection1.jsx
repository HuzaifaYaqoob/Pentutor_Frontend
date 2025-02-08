


const WelcomePTHeroSection = () => {
    return (
        <>
            <div className="w-full relative bg-[#FFFCE0]">
                <div className="px-4 sm:px-6 md:px-8 flex flex-col xl:flex-row items-center justify-between max-w-[1300px] mx-auto z-[3] relative py-8 xl:gap-0 gap-12">
                    <div className="space-y-2 flex-1 w-full">
                        <p className="text-[#F5BB07] font-medium text-sm sm:text-[16px]">INDRODUCING INTERACTIVE</p>
                        <h1 className="text-3xl text-start sm:text-4xl md:text-5xl text-[#313D6A] font-bold z-[3] !leading-[44px] sm:!leading-[54px] md:!leading-[60px]">Learning courses by top teachers</h1>
                        <p className="text-[#111111] text-sm sm:text-[16px] font-medium">Choose from over 4,000 courses on topics like cartoon design, graphic design, fashion design, and much more.</p>
                    </div>
                    <img src="/images/hero-section.png" className='relative z-[3]' alt="" />
                </div>
            </div>
        </>
    )
}

export default WelcomePTHeroSection