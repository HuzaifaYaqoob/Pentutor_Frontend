

const ServiceCard = (props) => {
    return (
        <div className={'container rounded-xl mx-auto px-5 flex items-center flex-col  justify-between mb-20 ' + (props.reverse ? 'md:flex-row-reverse  flex-col' : 'md:flex-row')}  >
            <div className='flex-1 pl-10 pr-5'>
                <h3 className='text-indigo-900 font-bold mb-5 text-2xl'>{props.Heading}</h3>
                <p className='text-gray-800 mb-10 pr-20'>{props.text}</p>
                <button className='py-2 px-4 bg-indigo-900 rounded text-white'>Read More</button>
            </div>
            <div className='relative mt-10 md:mt-0'>
                <span className='absolute -top-4 -left-4 bg-indigo-900 rounded-lg w-40 h-20 block'></span>
                <img className='w-80 relative z-30' src={process.env.PUBLIC_URL + props.imagePath} alt="" />
                <span className='absolute -bottom-4 -right-4 bg-yellow-400 rounded-lg w-40 h-20 block'></span>
            </div>
        </div>
    )
}


const OurServices = () => {
    return (
        <div className=' bg-yellow-50 py-20 '>
            <div className="max-w-[1200px] mx-auto">

                <div className='mb-16'>
                    <h3 className='w-full text-center text-4xl text-yellow-500 font-bold capitalize'><span className='text-gray-800'>Our</span> Services</h3>
                </div>
                <ServiceCard imagePath='/images/babyStudent.png' Heading='Home Tutoring' text='If you are looking for qualified home tutors, your search ends here. Pen Tutor is providing tutors for all the classes and all subjects your child needs help in. Our experienced tutors are available to give your child 100% personalized attention and the freedom to ask questions resulting in improved performance.' />
                <ServiceCard reverse imagePath='/images/img4.png' Heading='Online Tutoring' text='If you are looking for qualified Online tutors, your search ends here. Pen Tutor is providing tutors for all the classes and all subjects your child needs help in. Our experienced tutors are available to give your child 100% personalized attention and the freedom to ask questions resulting in improved performance.' />
            </div>
        </div>
    )
}

export default OurServices