
const ListItem = ({ index, title }) => {
    return (
        <li className='flex items-center gap-3 mb-2'>
            {
                index == 1 ?
                    <span className='w-2 h-2 sm:w-2.5  sm:h-2.5 rounded-full bg-yellow-450 block'></span>
                    :
                    <span className='w-2 h-2 sm:w-2.5  sm:h-2.5 rounded-full bg-[#313D6A] block'></span>
            }
            <p className="text-sm md:text-[17px]">{title}</p>
        </li>
    )
}

const WhyChoose = () => {
    return (
        <div className='container mx-auto px-6 md:px-10 mb-10 mt-32'>
            <div className='mb-4 sm:mb-7'>
                <h3 className='text-indigo-900 font-bold text-2xl sm:text-3xl md:text-4xl capitalize w-full text-center'>Why Choose <span className='text-yellow-500'> Pen Tutor</span></h3>
            </div>
            <div>
                <p className="text-center text-sm sm:text-lg md:text-xl">Pen Tutor is a 'Network of Trained Tutors' committed to provide you highly qualified & experienced Online & Home tutoring services, individual and group sessions anywhere, anytime.
                    <br />
                    <br />
                    Pen Tutor provides the best conceptual study environment. Our staff is equipped with unique teaching techniques and methodologies. Our mode of teaching is flexible, engaging and advanced. We keep the deficiencies and needs of students in focus to cover the gaps. we provide the best and right Tutors.
                    <br />
                    <br />
                    Pen Tutor is your personalized tutoring service to fit your needs. Our goal is to provide a world-class education to anyone, anywhere. We focus on skill mastering to help learners establish strong basics so there is no limit to what they can pursue next!</p>
            </div>
            <div className="my-6 flex items-center justify-between lg:flex-row flex-col">
                <div className="flex-1 w-full">
                    <ListItem index={1} title={'Conceptual Study Environment'} />
                    <ListItem index={0} title={'Advance Teaching Methodology'} />
                    <ListItem index={1} title={'Advance Teaching Methodology'} />
                    <ListItem index={0} title={'Updated & Emerging Knowledge'} />
                    <ListItem index={1} title={'Quick Learning Methods'} />
                    <ListItem index={0} title={'Right Content and Format'} />
                    <ListItem index={1} title={'Regular Classes'} />
                    <ListItem index={0} title={'Question Answer Sessions'} />
                    <ListItem index={1} title={'Weekly Tests & Regular Feedback'} />
                    <ListItem index={0} title={'Past Paper Preparations'} />
                    <ListItem index={1} title={'Guaranteed Success'} />
                    <ListItem index={0} title={'Economical Fee Packages'} />
                </div>
                <img className="max-w-[500px]" src={`${process.env.PUBLIC_URL}/images/zFSo6bnZJTw.png`} />
            </div>
        </div>
    )
}

export default WhyChoose