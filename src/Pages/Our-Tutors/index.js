
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
        <div className='flex items-center justify-between mb-4'>
            <p className='font-bold text-gray-900 capitalize'>{props.property}:</p>
            <p className='text-gray-700 font-medium capitalize'>{props.value}</p>
        </div>
    )
}

export const TutorCard = ({ data, ...props }) => {
    return (
        <div className='pentutor-shadow rounded p-7 mb-14 pt-24 relative max-w-sm mx-auto w-full'>
            <div className='absolute w-36 h-36 shadow-xl p-2 flex items-center justify-center top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden'>
                <div
                    className='w-36 h-36 rounded-full bg-center bg-cover bg-no-repeat'
                    style={{backgroundImage : `url('${data?.profile_image ? apiBaseURL + data?.profile_image : process.env.PUBLIC_URL + props.ImagePath}')`}}
                    alt="Profile Image"
                />
            </div>
            <div className='w-full text-center'>
                {/* <p className='bg-yellow-450 py-0.5 px-7 rounded text-white font-medium inline-block'>ID: PT149</p> */}
                <p className='bg-yellow-450 py-0.5 px-7 rounded text-white font-medium inline-block'>{data?.user?.first_name} {data?.user?.last_name}</p>
            </div>
            <div className='my-10 whitespace-nowrap'>
                <TutorPoint property='qualification' value={data?.qualification} />
                {/* <TutorPoint property='experience' value='21 years' /> */}
                <TutorPoint property='areas to teach' value='johar town' />
                <TutorPoint property='experience' value={'21 years'} />
                <TutorPoint property='age' value={data?.date_of_birth} />
                <TutorPoint property='teach online' value='yes' />
            </div>
            <div className='flex items-center justify-evenly'>
                <Link to={`/our-tutor/profile/${data?.slug}`} className='py-2 px-3 rounded-lg cursor-pointer bg-yellow-450 text-white'>View Full Profile</Link>
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
                        props.tutor.all_tutors.length > 0 &&
                        props.tutor.all_tutors.map((tutor, t_ind) => {
                            return (
                                <TutorCard key={t_ind} data={tutor} ImagePath='/images/profilepic.png' />
                            )
                        })
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
