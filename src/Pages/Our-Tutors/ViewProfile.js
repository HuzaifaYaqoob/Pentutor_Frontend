

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { apiBaseURL, get_tutor } from '../../redux/apiURLs'
import LineHeader from '../../components/LineHeading'
import Table from '../../components/Table'
import { useHistory } from 'react-router-dom'

const ProfHeading = ({ text }) => {
    return (
        <>
            <p className='bg-[#313D6A] text-white px-4 my-2 py-1 rounded-xl max-w-max'>{text}</p>
        </>
    )
}

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
    const location = useHistory()
    return (
        <div className='w-full max-w-xs relative pentutor-shadow rounded-md overflow-hidden px-3 pt-1'>
            <div
                className='w-full min-h-[200px] bg-center bg-cover bg-no-repeat rounded-md'
                style={{
                    backgroundImage: `url('${data.media && data.media.length > 0 ? data.media[0].image : process.env.PUBLIC_URL + '/images/blog/blogImage.png'}')`
                }}
            >
            </div>
            <div className='px-3 mt-3'>
                <p className='bg-green-200 text-green-600 py-1 px-4 text-sm rounded-full inline-block'>{(data?.category && data?.category?.title) ? data?.category?.title : 'N/A'}</p>
                <h3
                    className='text-sm my-4 cursor-pointer'
                    onClick={() => {
                        location.push(`/courses/${data.slug}/view/`)
                    }}
                >{data?.title}</h3>
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
                        <h3 className='capitalize text-sm'>{data?.user?.first_name} {data?.user?.last_name}</h3>
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
            <div className='mb-1 flex items-center justify-between'>
                <span className='text-sm text-[#F5BB07] font-bold'>{heading}</span>
                <span className='text-sm text-white'>{text}</span>
            </div>
        </>
    )
}


const ViewProfile = ({ match, ...props }) => {
    const { profile_slug } = match.params
    const [tutor_data, setTutorData] = useState({})

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
            <div className='max-w-[1300px] mx-auto my-10 flex items-start rounded-tr-[30px] justify-between gap-10'>
                <div className='max-w-[250px] w-full bg-[#313D6A] rounded-tr-[30px] overflow-hidden'>
                    <div className='my-10'>
                        <div
                            className='w-[100px] mb-3 h-[100px] mx-auto rounded-full bg-cover bg-center bg-no-repeat bg-gray-100'
                            style={{
                                backgroundImage: `url('${tutor_data?.profile_image}')`
                            }}
                        ></div>
                        <p className='text-white text-center text-sm'>Tutor ID: PT143</p>
                        <p className='text-[#F5BB07] text-center text-2xl font-medium'>{tutor_data?.name}</p>
                    </div>
                    <div className='flex items-start gap-3 pl-3 text-white'>
                        <span>icon</span>
                        <p className='text-sm'>{tutor_data?.area}</p>
                    </div>
                    <hr className='bg-red-500 my-4' />
                    <div className='flex items-start gap-3 pl-3 text-white'>
                        <span>icon</span>
                        <p className='text-sm'>{tutor_data?.mobile}</p>
                    </div>
                    <hr className='bg-red-500 my-4' />
                    <div className='px-3 mb-4'>
                        <ProfileDetails heading='City' text={`${tutor_data?.city?.name}`} />
                        <ProfileDetails heading='Province' text={`${tutor_data?.state?.name}`} />
                        <ProfileDetails heading='Country' text={`${tutor_data?.Country?.name}`} />
                        <ProfileDetails heading='Nationality' text={`${tutor_data?.nationality}`} />
                        <ProfileDetails heading='Birth Place' text={`${tutor_data?.brith_place}`} />
                        <ProfileDetails heading='Date of Birth' text={`${tutor_data?.date_of_birth}`} />
                        <ProfileDetails heading='CNIC No.' text={`${tutor_data?.cnic_number}`} />
                        <ProfileDetails heading='Gender' text={`${tutor_data?.gender}`} />
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
                        <Table
                            header={['Degree', 'Subject', 'Passing year', 'institute']}
                            data={
                                tutor_data?.qualifications ?
                                    tutor_data?.qualifications.map(itm => {
                                        return [
                                            itm.degree,
                                            itm.subject,
                                            itm.institute,
                                            itm.passing_year,
                                        ]
                                    })
                                    :
                                    []
                            }
                        />
                        <LineHeader text={'Experience'} bgClass='bg-[#313D6A]' />
                        <Table
                            header={['position', 'from', 'to', 'institute', 'experience']}
                            data={
                                tutor_data?.experiences ?
                                    tutor_data?.experiences.map(itm => {
                                        return [
                                            itm.position,
                                            itm.from_date,
                                            itm.to_date,
                                            itm.institute,
                                            itm.exprience_years,
                                        ]
                                    })
                                    :
                                    []
                            }
                        />
                        <LineHeader text={'references'} />
                        <Table
                            header={['name', 'contact', 'relation']}
                            data={
                                tutor_data?.references ?
                                    tutor_data?.references.map(itm => {
                                        return [
                                            itm.name,
                                            itm.mobile_number,
                                            itm.relation,
                                        ]
                                    })
                                    :
                                    []
                            }
                        />
                        <LineHeader text={'demo video'} bgClass='bg-[#313D6A]' />
                        <div className='flex flex-wrap'>
                            {
                                tutor_data?.videos?.length > 0 ?
                                    tutor_data?.videos.map((vid, index) => {
                                        return (
                                            <>
                                                <div className='w-[100px] h-[80px] flex items-center justify-center bg-gray-100'>video</div>
                                            </>
                                        )
                                    })
                                    :
                                    <>No Video</>
                            }
                        </div>
                        <LineHeader text={'My document'} />
                        <div>
                            my documents
                        </div>
                    </div>
                </div>
                <div className='max-w-[250px] pb-5 px-4 w-full bg-[#F5BB0759]/[35%] rounded-tl-[30px] overflow-hidden'>
                    <h3 className='text-center text-black text-xl my-5 font-bold'>Professional Details</h3>
                    <div>
                        <ProfHeading text={'Days Availablity'} />
                        <div className='flex items-center gap-3 my-2'>
                            <input type={'checkbox'} disabled checked={tutor_data?.days?.monday} />
                            <p>Monday</p>
                        </div>
                        <div className='flex items-center gap-3 my-2'>
                            <input type={'checkbox'} disabled checked={tutor_data?.days?.tuesday} />
                            <p>Tuesday</p>
                        </div>
                        <div className='flex items-center gap-3 my-2'>
                            <input type={'checkbox'} disabled checked={tutor_data?.days?.wednesday} />
                            <p>Wednesday</p>
                        </div>
                        <div className='flex items-center gap-3 my-2'>
                            <input type={'checkbox'} disabled checked={tutor_data?.days?.thursday} />
                            <p>Thursday</p>
                        </div>
                        <div className='flex items-center gap-3 my-2'>
                            <input type={'checkbox'} disabled checked={tutor_data?.days?.friday} />
                            <p>Friday</p>
                        </div>
                        <div className='flex items-center gap-3 my-2'>
                            <input type={'checkbox'} disabled checked={tutor_data?.days?.saturday} />
                            <p>Saturday</p>
                        </div>
                        <div className='flex items-center gap-3 my-2'>
                            <input type={'checkbox'} disabled checked={tutor_data?.days?.sunday} />
                            <p>Sunday</p>
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Time Availability'} />
                        <div>
                            <p>{tutor_data?.professional_details?.time_availability ? tutor_data?.professional_details?.time_availability : 'N/A'}</p>
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Areas to Teach'} />
                        <div>
                            <p>{tutor_data?.professional_details?.areas_to_teach ? tutor_data?.professional_details?.areas_to_teach : 'N/A'}</p>
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Available for online Teaching'} />
                        <div>
                            <p>{tutor_data?.professional_details?.online_teaching ? 'Yes' : 'N/A'}</p>
                            {
                                tutor_data?.professional_details?.online_teaching &&
                                <p>Teaching Method : {tutor_data?.professional_details?.online_teaching}</p>
                            }
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Home Tutoring Status'} />
                        <div>
                            <p>{tutor_data?.professional_details?.home_tutor_status ? 'Yes' : 'N/A'}</p>
                            {
                                tutor_data?.professional_details?.home_tutor_status &&
                                <p>{tutor_data?.professional_details?.home_tutor_status}</p>
                            }
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Own Institute'} />
                        <div>
                            <p>{tutor_data?.professional_details?.own_institute ? 'Yes' : 'N/A'}</p>
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Offering Subjects'} />
                        {
                            tutor_data?.professional_details?.subjects?.length > 0 ?
                                <div>
                                    {
                                        tutor_data?.professional_details?.subjects?.map(sb => {
                                            return (
                                                <p>{sb.subject}</p>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <>
                                    <p>N/A</p>
                                </>
                        }
                    </div>
                    <div>
                        <ProfHeading text={'Teaching Language'} />
                        {
                            tutor_data?.professional_details?.languages?.length > 0 ?
                                <div>
                                    {
                                        tutor_data?.professional_details?.languages?.map(sb => {
                                            return (
                                                <p>{sb.name}</p>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <>
                                    <p>N/A</p>
                                </>
                        }
                    </div>
                    <div>
                        <ProfHeading text={'Short Couse'} />
                        <div>
                            <p>{tutor_data?.professional_details?.short_courses ? 'Yes' : 'N/A'}</p>
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Fee'} />
                        <div>
                            <p>{tutor_data?.professional_details?.fee ? tutor_data?.professional_details?.fee : 'N/A'}</p>
                        </div>
                    </div>
                    <div>
                        <ProfHeading text={'Currently Employeed'} />
                        <div>
                            <p>{tutor_data?.professional_details?.currently_employeed ? tutor_data?.professional_details?.currently_employeed : 'N/A'}</p>
                        </div>
                    </div>
                    {/* <div>
                        <ProfHeading text={'Languages'} />
                        <div>
                            <p>Urdu 5 star</p>
                            <p>English 5 star</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ViewProfile