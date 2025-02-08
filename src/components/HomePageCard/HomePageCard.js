

const HomePageCard = (props) =>{
    return(
        <div className={ (props.cardReverse ? 'flex-row-reverse justify-end gap-10' : ' justify-between')  + ' max-w-[1300px] mx-auto bg-white shadow-md pb-4 md:pb-10 px-4 md:px-10 pt-0 rounded-lg sm:rounded-2xl my-20 flex items-center lg:flex-row flex-col'}>
            <div className='space-y-1 sm:space-y-2 flex-1 w-full'>
                <h3 className={`capitalize font-bold text-2xl sm:text-3xl md:text-4xl whitespace-nowrap ${props.preferredColor}`}>{props.heading}</h3>
                <div className='font-semibold text-gray-500 mb-10 space-y-4 sm:space-y-6'>
                    <p className='text-[#151E2C] text-lg md:text-xl'>{props.peragraph}</p>
                    {
                        props.students ?
                        <ol className='capitalize list-disc list-inside text-sm sm:text-[16px] md:text-lg'>
                            <li className="text-[#3C3C3C] text-sm">Search Thousands of Expert Tutors - Explore professionals across various subjects.</li>
                            <li className="text-[#3C3C3C] text-sm">Find Tutors in Your Area - Learn in-person or online at your convenience.</li>
                            <li className="text-[#3C3C3C] text-sm">Contact & Arrange Lessons - Connect instantly and schedule sessions easily.</li>
                            <li className="text-[#3C3C3C] text-sm">Flexible Learning Options - Choose 1-on-1 or group sessions based on your needs.</li>
                            <li className="text-[#3C3C3C] text-sm">Personalized Guidance - Get tailored lessons that match your learning style.</li>
                            <li className="text-[#3C3C3C] text-sm">Achieve Your Goals Faster - Improve your skills with expert mentoring.</li>
                        </ol>
                        :
                        <ol className='capitalize list-disc list-inside text-sm sm:text-[16px] md:text-lg'>
                            <li className="text-[#3C3C3C] text-sm">Join a Thriving Tutor Community - Connect with students eager to learn.</li>
                            <li className="text-[#3C3C3C] text-sm">Get Discovered by Students - Appear in searches and attract the right learners.</li>
                            <li className="text-[#3C3C3C] text-sm">Manage Your Lessons Easily - Set your availability and schedule sessions flexibly.</li>
                            <li className="text-[#3C3C3C] text-sm">Earn for Your Expertise - Set your own rates and get paid securely.</li>
                            <li className="text-[#3C3C3C] text-sm">Teach Online or In-Person - Offer 1-on-1 or group lessons based on your preference.</li>
                            <li className="text-[#3C3C3C] text-sm">Build Your Reputation - Get reviews, referrals, and grow your tutoring career.</li>
                        </ol>
                    }
                    <button className={`capitalize ${props.bgpreferredColor} py-2 px-4 rounded text-white text-md`}>Read more</button>
                </div>
            </div>
            <div className={`sm:px-10 pt-7 sm:pt-20 w-full lg:w-auto `}>
                <div className={`w-full sm:w-96 rounded h-96 mx-auto ${props.bgpreferredColor} relative flex justify-center shadow-md`}>
                    <img className='absolute bottom-0 w-60 sm:w-5/6 ' src={process.env.PUBLIC_URL + props.imagePath} alt="Girl Image" />
                </div>
            </div>
        </div>
    )
}

export default HomePageCard