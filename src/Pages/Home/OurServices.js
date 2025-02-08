
const ServiceCard = (props) => {
    return (
        <div className={'rounded-xl mx-auto flex items-center flex-col gap-7 sm:gap-10 md:gap-14 justify-between ' + (props.reverse ? 'md:flex-row-reverse flex-col' : 'md:flex-row')}  >
            <div className='flex-1 space-y-3'>
                <h3 className='text-indigo-900 font-bold text-2xl'>{props.Heading}</h3>
                <p className='text-gray-800 text-sm sm:text-[16px]'>{props.text}</p>
                <button className='py-2 px-4 bg-indigo-900 rounded text-white !mt-6'>Read More</button>
            </div>
            <div className='relative mt-10 md:mt-0 flex-1 w-full'>
                <span className='absolute -top-4 left-0 md:-left-4 bg-indigo-900 rounded-lg w-40 h-20 block'></span>
                <div
                    className="md:w-full w-[96%] mx-auto h-80 md:h-96 bg-cover bg-center bg-no-repeat relative z-30 rounded-xl"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + props.imagePath})` }}
                ></div>
                <span className='absolute -bottom-4 right-0 md:-right-4 bg-yellow-400 rounded-lg w-40 h-20 block'></span>
            </div>
        </div>
    )
}


const OurServices = () => {
    return (
        <div className='bg-yellow-50 py-20 px-4 sm:px-6 md:px-8'>
            <div className="max-w-[1300px] mx-auto space-y-8 sm:space-y-12 md:space-y-16">
                <h3 className='w-full text-center text-3xl md:text-4xl text-yellow-500 font-bold capitalize'><span className='text-gray-800'>Our</span> Services</h3>
                <ServiceCard imagePath='/images/babyStudent.png' Heading='Home Tutoring' text='If you are looking for qualified home tutors, your search ends here. Pen Tutor is providing tutors for all the classes and all subjects your child needs help in. Our experienced tutors are available to give your child 100% personalized attention and the freedom to ask questions resulting in improved performance.' />
                <ServiceCard className='pt-10' reverse imagePath='/images/img4.png' Heading='Online Tutoring' text='If you are looking for qualified Online tutors, your search ends here. Pen Tutor is providing tutors for all the classes and all subjects your child needs help in. Our experienced tutors are available to give your child 100% personalized attention and the freedom to ask questions resulting in improved performance.' />
            </div>
        </div>
    )
}

export default OurServices