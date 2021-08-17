import React from 'react'

const ContentBanner = (props) => {
    return (
        <div className='py-20 mt-10 mb-20 bg-cover bg-no-repeat bg-center relative text-center text-white' style={{ backgroundImage: `url('${props.bgImage}')` }}>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 z-0'>
            </div>
            <div className='container mx-auto relative z-10 font-light text-xs'>
                {props.children}
            </div>
        </div>
    )
}


const AboutUsPage = () => {
    return (
        <div className='my-9'>
            <div>
                <h1 className='w-full text-center font-bold text-xl text-yellow-400'>"PEN TUTOR COVERS THE GAP BETWEEN<br />STUDENT AND HIS/HER ACADEMIC SUCCESS"</h1>
            </div>
            <ContentBanner bgImage={process.env.PUBLIC_URL + '/images/about/about1.jpg'} >
                <p className='mb-4 '>
                    Pen Tutor is a platform providing all types of national and international learning needs. We provide qualified and dedicated tutors for online, on-campus, individual and group studies. Our tutors are highly specialized and adept in new educational methods and techniques to meet the requirements of this advance era. We enable our students to keep pace with advancement in education and technology through best use of our tutor expertise. We make learning easy, available and affordable for all.
                </p>
                <p className='text-lg'>
                    “PEN TUTORS BRING LEARNING TO STUDENTS INSTEAD OF BRINGING STUDENTS TO LEARNING”
                </p>
            </ContentBanner>
            <h3 className='w-full text-center font-bold text-xl text-yellow-400'>PEN TUTOR Methodology</h3>
            <ContentBanner bgImage={process.env.PUBLIC_URL + '/images/about/about2.jpg'} >
                <p className='mb-4'>
                    Our motto is "learning with concept ". We ensure the needs of students. Our tutors are highly qualified and trained. They assess student's weaknesses and strengths properly, design their effective methodology accordingly, and are committed to student’s improvement and success in achieving his/her targets.
                </p>
                <p className='text-lg'>"WE MAKE LEARNING INTERESTING, QUICK AND EASY"</p>
            </ContentBanner>
            <h3 className='w-full text-center font-bold text-xl text-yellow-400'>Our wide spectrum of services</h3>
            <ContentBanner bgImage={process.env.PUBLIC_URL + '/images/about/about3.jpg'} >
                <p className='mb-4'>
                    Our tutors are specialized in their services for all types of courses at all levels. We provide the best tutors for all classes and all subjects. Preparation of all variety of national and international tests and exams is covered under the cap of Pen Tutor. Professional skill development sessions are also arranged by Pen Tutor. Our services are available on-campus and online.
                </p>
            </ContentBanner>
        </div>
    )
}
export default AboutUsPage
