
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { apiBaseURL } from '../../redux/apiURLs'
import { Link } from 'react-router-dom'

import HeroSection from '../../components/HeroSection/HeroSection'
import FormSection from '../../components/FormSection/FormSection'
import InputField from '../../components/FormSection/InputField'
import { connect } from 'react-redux'
import { getAllTutors } from '../../redux/Actions/TutorActions/TutorActions'
import { useEffect } from 'react'


const TutorPoint = (props) => {
    return (
        <div className='flex items-center justify-between mb-2.5'>
            <p className='font-bold text-gray-900 capitalize text-sm'>{props.property}:</p>
            <p className='text-gray-700 font-medium capitalize text-sm'>{props.value || 'N/A'}</p>
        </div>
    )
}

export const TutorCard = ({ data, ...props }) => {

    console.log(data)
    return (
        <div className='rounded-xl p-3 mb-16 pt-20 relative w-full border border-[#CACBE6] !z-0'>
            <div className='absolute w-24 h-24 border border-[#CACBE6] flex items-center bg-white justify-center top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden !z-40'>
                <div
                    className="w-24 h-24 rounded-full bg-center bg-cover bg-no-repeat flex items-center justify-center"
                    style={data?.profile_image ? { backgroundImage: `url('${data.profile_image}')` } : {}}
                >
                    {!data?.profile_image && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-10 h-10 fill-gray-500">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                        </svg>
                    )}
                </div>
            </div>
            <div className='w-full text-center'>
                <p className='bg-yellow-450 py-0.5 px-7 text-sm rounded text-white font-medium inline-block'>ID: PT{data?.id}</p>
                {/* <p className='bg-yellow-450 py-0.5 px-7 rounded text-white font-medium inline-block'>{data?.user?.first_name} {data?.user?.last_name}</p> */}
            </div>
            <div className='my-5 whitespace-nowrap'>
                <TutorPoint property='qualification' value={data?.qualifications ? data?.qualifications[0]?.degree : 'N/A'} />
                {/* <TutorPoint property='experience' value='21 years' /> */}
                <TutorPoint property='areas to teach' value='johar town' />
                <TutorPoint property='experience' value={'21 years'} />
                <TutorPoint property='age' value={data?.date_of_birth} />
                <TutorPoint property='teach online' value='yes' />
            </div>
            <div className='flex items-center justify-evenly'>
                <Link to={`/our-tutor/profile/${data?.slug}`} className='capitalize bg-[#313D6A] py-1.5 px-4 rounded-md text-white text-sm'>View Profile</Link>
                {/* <button className='py-2 px-3 rounded-lg cursor-pointer bg-indigo-900 text-white'>Take Trial Class</button> */}
            </div>
        </div>
    )
}

const OurTutors = (props) => {

    useEffect(() => {
        if (props.tutor.all_tutors.length == 0) {
            props.getAllTutors()
        }
    }, [])

    return (
        <div>
            <HeroSection Text='certified tutors' ImagePath='/images/girlImage1.png' />
            <FormSection formHeading='Search Tutor'>
                <div className='container mx-auto my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                        <InputField placeholder='Enter Any Subject' type='text' />
                        <InputField placeholder='Enter Any Grade to Search' type='text' />
                        <InputField placeholder='Enter City/Area to Search' type='text' />
                    </div>
                    <div className='absolute bottom-0 transform left-1/2 translate-y-1/2 -translate-x-1/2'>
                        <button className='w-12 h-12 bg-yellow-450 rounded-full'>
                            <FontAwesomeIcon icon={faArrowRight} className='text-indigo-900 hover:scale-110 transition-all' />
                        </button>
                    </div>
                </div>
            </FormSection>
            <div className='container mx-auto my-20 px-5'>
                <div>
                    <h3 className='w-full text-center text-indigo-900 font-bold text-2xl'>Registered Tutors</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap5 my-20'>
                    {
                        props.tutor.all_tutors.length > 0 ?
                            props.tutor.all_tutors.map((tutor, t_ind) => {
                                return (
                                    <TutorCard key={t_ind} data={tutor} ImagePath='/images/profilepic.png' />
                                )
                            })
                            :
                            <>
                                <div>
                                    <p className='text-center'>No Tutor Registered yet</p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    getAllTutors: getAllTutors
}


export default connect(mapStateToProps, mapDispatchToProps)(OurTutors)
