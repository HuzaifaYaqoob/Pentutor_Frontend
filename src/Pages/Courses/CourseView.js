
import useTitle from "../../Hooks/useTitle"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import CourseOutline from "./CourseViewOutline"
import CourseDetailAbout from "./CourseDetailAbout"
import CourseContent from "./CourseContent"
import StudentFeedback from "./StudentFeedback"

import { CourseCard } from "../Our-Tutors/ViewProfile"

const CourseViewHeroSection = () => {
    return (
        <div className='pt-10 bg-indigo-900 '>
            <div className='container mx-auto flex lg:flex-row flex-col items-center justify-between'>
                <div className=''>
                    <h1 className='text-white text-2xl font-medium mb-4'>Learn SEO: Begginer To Advance | <br />Rank Your Website On 1st Page</h1>
                    <p className='text-xs text-white font-light'>Use Advance tools to rank your website on 1st page</p>
                    <p className='flex items-center gap-3 text-yellow-300 text-xs mt-4'>
                        <span>4.8</span>
                        <FontAwesomeIcon icon={faStar} />
                        <span>Instructor Rating,</span>
                        <span>(369 reviews),</span>
                        <span>560 Students</span>
                    </p>
                    <p className='text-yellow-300 text-xs mt-4'>
                        Language: Urdu
                    </p>
                    <div className='mt-10'>
                        <button className='bg-yellow-300 mr-2 py-3 px-5 rounded-md '>Add to Cart</button>
                        <button className='bg-transparent border border-white py-3 px-5 rounded-md text-white text-sm'>Buy Now</button>
                    </div>
                </div>
                <div className='max-w-sm w-full bg-white lg:mt-0 mt-10'>
                    <div className='bg-gray-200 flex items-center justify-center w-full h-56 px-16 relative'>
                        <img className='w-full' src={process.env.PUBLIC_URL + '/images/seo.png'} alt="SEO" />
                        <img className='w-10 absolute' src={process.env.PUBLIC_URL + '/images/yt.png'} alt="" />
                    </div>
                    <div className='px-6 py-3'>
                        <p className='flex items-center gap-4'>
                            <span className='text-lg'>20k PKR</span>
                            <span className='text-xs text-gray-400'><del>40k pkr</del></span>
                            <span className='text-xs text-gray-400'>50% Off</span>
                        </p>
                        <p className='text-xs text-red-500 mt-1'><span className='text-sm font-medium'>2 Days</span> left at this price</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const CourseView = () => {
    useTitle('Courses Title Here | Pentutor')
    return (
        <div>
            <CourseViewHeroSection />
            <CourseOutline />
            <CourseDetailAbout />
            <CourseContent />
            <StudentFeedback />
            <hr className='container mx-auto' />
            <div className='container mx-auto my-10'>
                <h3 className='mb-4'>More Course By  <span className='text-yellow-400'>Ibrahim Akram</span> </h3>
                <div className='md:grid-cols-2 place-content-center lg:grid-cols-3 grid gap-10'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </div>
    )
}

export default CourseView