
import useTitle from "../../Hooks/useTitle"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import CourseOutline from "./CourseViewOutline"
import CourseDetailAbout from "./CourseDetailAbout"
import CourseContent from "./CourseContent"
import StudentFeedback from "./StudentFeedback"

import { CourseCard } from "../Our-Tutors/ViewProfile"
import { useEffect, useState } from "react"
import { AddToCartCourse, getSingleCourse, getUserCourses } from "../../redux/Actions/CourseActions/CourseActions"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

const CourseViewHeroSection = ({ data }) => {
    const dispatch = useDispatch()

    const AddtoCartCourseHandler = () => {
        dispatch(
            AddToCartCourse(
                {
                    id: data.slug
                },
                () => {
                    toast.success('Added to cart')
                },
                () => {
                    toast.error('Something went wrong')
                }
            )
        )
    }
    return (
        <div className='bg-indigo-900 px-4 sm:px-6 md:px-8 py-9'>
            <div className='max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between gap-4'>
                <div className='flex-1 space-y-3'>
                    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold line_clamp_2'>{data?.title}</h1>
                    <p className='text-xs text-white font-medium'>Use Advance tools to rank your website on 1st page</p>
                    <p className='flex items-center gap-2 text-yellow-300 text-xs'>
                        <span>{data?.star_rating}</span>
                        <FontAwesomeIcon icon={faStar} />
                        <span>Instructor Rating,</span>
                        <span>({data?.review_count} reviews),</span>
                        <span>{data?.students} Students</span>
                    </p>
                    <p className='text-yellow-300 text-xs'>
                        Language: {data?.language}
                    </p>
                    <div className='!mt-10'>
                        <button
                            className='bg-yellow-300 mr-2 py-2.5 px-5 rounded-md text-sm border border-yellow-300 font-medium '
                            onClick={() => {
                                AddtoCartCourseHandler()
                            }}
                        >Add to Cart</button>
                        <button className='bg-transparent border border-white py-2.5 px-5 rounded-md text-white text-sm font-medium'>Buy Now</button>
                    </div>
                </div>
                <div className='max-w-sm w-full bg-white lg:mt-0 mt-10 rounded-lg overflow-hidden'>
                    <div
                        className='bg-gray-200 flex items-center justify-center w-full h-56 relative bg-center bg-cover bg-no-repeat'
                        style={{
                            backgroundImage: `url('${data?.media?.length > 0 ? data?.media[0].image : ''}')`
                        }}
                    >
                        {/* <img className='w-full' src={process.env.PUBLIC_URL + '/images/seo.png'} alt="SEO" /> */}
                        {/* <img className='w-10 absolute cursor-pointer' src={process.env.PUBLIC_URL + '/images/yt.png'} alt="" /> */}
                    </div>
                    <div className='px-4 py-3'>
                        <p className='flex items-center justify-between gap-4'>
                            <h3 className="font-medium text-[#151E2C]">Price:</h3>
                            <span className='text-green-500 font-semibold'>{data?.price} PKR</span>
                        </p>
                        {/* <p className='text-xs text-red-500 mt-1'><span className='text-sm font-medium'>2 Days</span> left at this price</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


const CourseView = (props) => {
    useTitle('Courses Title Here | Pentutor')
    const dispatch = useDispatch()
    const { course_slug } = props.match.params
    const [courseData, setCourseData] = useState({})
    const [user_courses, setUserCourse] = useState([])


    useEffect(() => {
        if (course_slug) {
            getSingleCourse(
                { id: course_slug },
                (result) => {
                    setCourseData(result)
                    dispatch(
                        getUserCourses({ id: result.user.id, course: result?.slug }, (result) => { setUserCourse(result) })
                    )
                }
            )
        }
    }, [course_slug])
    return (
        <div>
            <CourseViewHeroSection data={courseData} />
            <CourseOutline data={courseData} />
            <CourseDetailAbout data={courseData} />
            <CourseContent data={courseData} />
            <StudentFeedback data={courseData} />
            <hr className='container mx-auto' />
            <div className='container mx-auto my-10'>
                <h3 className='mb-4'>More Course By  <span className='text-yellow-400'>{courseData?.user?.first_name} {courseData?.user?.last_name}</span> </h3>
                {
                    user_courses.length > 0 ?
                        <div className='md:grid-cols-2 place-content-center lg:grid-cols-3 grid gap-10'>
                            {
                                user_courses.map(course => {
                                    return (
                                        <CourseCard data={course} />
                                    )
                                })
                            }
                        </div>
                        :
                        <>
                            <p>Not found</p>
                        </>
                }
            </div>
        </div>
    )
}

export default CourseView