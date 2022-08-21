

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { apiBaseURL, get_tutor } from '../../redux/apiURLs'
import LineHeader from '../../components/LineHeading'

const ProfileDisplayCard = ({ data }) => {
    return (
        <div className='pentutor-shadow bg-white rounded-md w-64 item'>
            <div>
                <div className='w-28 h-28 rounded-full shadow-xl bg-center bg-cover bg-no-repeat -mt-10 mx-auto' style={{ backgroundImage: `url('${data?.profile_image ? apiBaseURL + data.profile_image : process.env.PUBLIC_URL + '/images/profilepic.png'}')` }} alt="" />
            </div>
            <div className='my-4 px-10'>
                <h1 className='text-yellow-400 w-full text-center'>ID : 838</h1>
                <p className='text-xs text-gray-400'>{data?.qualification}</p>
            </div>
            <hr />
            <div className='p-7'>
                <p className='text-yellow-400 text-xs' >
                    <span>4.5</span>
                    <FontAwesomeIcon className='mx-3.5' icon={faStar} />
                    <span>Instructor Rating</span>
                </p>
                <p className='text-xs my-4'>
                    <span className='text-yellow-400 mr-1'>500</span>
                    <span className='capitalize'>Students</span>
                </p>
                <p className='text-xs my-4'>
                    <span className='text-yellow-400 mr-1'>5</span>
                    <span className='capitalize'>courses</span>
                </p>
                <p className='text-xs my-4'>
                    <span className='text-yellow-400 mr-1'>384</span>
                    <span className='capitalize'>Reviews</span>
                </p>
            </div>
        </div>
    )
}

export const CourseCard = ({ data }) => {
    return (
        <div className='w-full max-w-xs relative pentutor-shadow rounded-md overflow-hidden px-3 pt-1'>
            <div  >
                <img className='w-full block' src={process.env.PUBLIC_URL + '/images/blog/blogImage.png'} alt="Image" />
            </div>
            <div className='px-3 mt-3'>
                <p className='bg-green-200 text-green-600 py-1 px-4 text-sm rounded-full inline-block'>{data?.category}</p>
                <h3 className='text-sm my-4'>{data?.title}</h3>
                <p className='text-xs flex items-center justify-between mb-4'>
                    <span>
                        <span className='text-yellow-400'>{data?.star_rating}</span>
                        <FontAwesomeIcon className='mx-2 text-yellow-400' icon={faStar} />
                        <span className='text-gray-400'>({data?.review_count})</span>
                    </span>
                    <span>
                        {data?.students} <span className='text-gray-400'>students</span>
                    </span>
                </p>
                <p className='text-xs flex items-center justify-between mb-2 pl-4'>
                    <span>
                        {data?.duration}
                    </span>
                    <span>
                        {data?.lectures} Lectures
                    </span>
                </p>
                <p className='text-sm pl-4'>{data?.level}</p>
                <hr className='mt-4' />
                <div className='flex items-center justify-between my-4'>

                    <div className='flex items-center'>
                        <img className='mr-2 w-12' src={process.env.PUBLIC_URL + '/images/user.png'} />
                        <h3 className='capitalize text-sm'>ibrahim kamran</h3>
                    </div>
                    <span className='text-red-500 text-sm'>
                        {data?.price} PKR
                    </span>

                </div>
            </div>
        </div>
    )
}


const ProfileDetails = ({ heading, text }) => {
    return (
        <>
            <div className='mb-1'>
                <span className='text-sm text-[#F5BB07] font-bold'>{heading} : </span>
                <span className='text-sm text-white'>{text}</span>
            </div>
        </>
    )
}


const ViewProfile = ({ match, ...props }) => {
    const { profile_slug } = match.params
    const [tutor_data, setTutorData] = useState({})
    console.log(tutor_data)

    const getTutorProfile = () => {
        fetch(
            apiBaseURL + get_tutor + `?slug=${profile_slug}`
        )
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                }
                else {
                    // props.history.goBack()
                }
            })
            .then(result => {
                setTutorData(result.data)
            })
            .catch(() => {
                // props.history.goBack()
            })
    }

    useEffect(() => {
        if (profile_slug) {
            getTutorProfile()
        }
    }, [profile_slug])
    return (
        <>
            <div className='max-w-[1300px] mx-auto my-10 flex itemrounded-tr-[30px]s-start justify-between gap-10'>
                <div className='max-w-[250px] w-full bg-[#313D6A] rounded-tr-[30px] overflow-hidden'>
                    <div className='my-10'>
                        <div className='w-[100px] mb-3 h-[100px] mx-auto rounded-full bg-gray-100'></div>
                        <p className='text-white text-center text-sm'>Tutor ID: PT143</p>
                        <p className='text-[#F5BB07] text-center text-2xl font-medium'>Kashif Liaqat</p>
                    </div>
                    <div className='flex items-start gap-3 pl-3 text-white'>
                        <span>icon</span>
                        <p className='text-sm'>House No.110, Block A, PIA Housing Society, Johar Town, Lahore</p>
                    </div>
                    <hr className='bg-red-500 my-4' />
                    <div className='flex items-start gap-3 pl-3 text-white'>
                        <span>icon</span>
                        <p className='text-sm'>+92 321-8815888 <br />
                            +92 321-8815888</p>
                    </div>
                    <hr className='bg-red-500 my-4' />
                    <div className='pl-3 mb-4'>
                        <ProfileDetails heading='City' text='Lahore' />
                        <ProfileDetails heading='Province' text='Punjab' />
                        <ProfileDetails heading='Country' text='Pakistan' />
                        <ProfileDetails heading='Nationality' text='Pakistani' />
                        <ProfileDetails heading='Birth Place' text='Lahore' />
                        <ProfileDetails heading='Date of Birth' text='date here' />
                        <ProfileDetails heading='CNIC No.' text='cnic' />
                        <ProfileDetails heading='Gender' text='Male' />
                    </div>
                    <div className='flex gap-3 mb-4'>
                        <span className='w-[40px] h-[40px] block rounded-full bg-gray-100'></span>
                        <span className='w-[40px] h-[40px] block rounded-full bg-gray-100'></span>
                        <span className='w-[40px] h-[40px] block rounded-full bg-gray-100'></span>
                        <span className='w-[40px] h-[40px] block rounded-full bg-gray-100'></span>
                    </div>
                </div>
                <div className='flex-1'>
                    <div>
                        <LineHeader text={'Qualification'} />
                        <div>
                            <p>Master in Chemistry</p>
                            <p>Punjab University (2006)</p>
                        </div>
                        <LineHeader text={'Experience'} bgClass='bg-[#313D6A]' />
                        <LineHeader text={'references'}  />
                        <LineHeader text={'demo video'} bgClass='bg-[#313D6A]' />
                        <LineHeader text={'My document'}  />
                    </div>
                </div>
                <div className='max-w-[250px] w-full bg-[#F5BB0759]/[35%] rounded-tl-[30px] overflow-hidden'>
                    <h3 className='text-center text-black text-xl my-5 font-bold'>Professional Details</h3>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
{/* 
            <div className='container mx-auto my-20 flex lg:flex-row flex-col-reverse px-5 items-start '>
                <div className='flex-1 px-5 mt-5 lg:mt-0 lg:px-20'>
                    <h3 className='text-md font-medium mb-6'>About Me</h3>
                    {
                        tutor_data &&
                        <p className='text-xs text-gray-700'>{tutor_data?.detail}</p>
                    }
                </div>
                <ProfileDisplayCard data={tutor_data} />
            </div>
            <div className='container mx-auto' >
                <h3 className='mb-8 font-medium'>Courses I Offer</h3>
                <div className='grid md:grid-cols-2 place-content-center lg:grid-cols-3 gap-10'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>

                <div className=' mx-auto my-10 flex items-center justify-center gap-10'>
                    <span className='w-10 h-10 rounded-full bg-yellow-450 flex items-center justify-center cursor-pointer text-indigo-900'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <div className='flex items-center justify-center gap-5 font-medium'>
                        <span className='text-yellow-400'>1</span>
                        <span className='text-indigo-900'>2</span>
                        <span className='text-indigo-900'>3</span>
                        <span className='text-indigo-900'>4</span>
                    </div>
                    <span className='w-10 h-10 rounded-full bg-yellow-450 flex items-center justify-center cursor-pointer text-indigo-900'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </div>
            </div> */}

        </>
    )
}

export default ViewProfile