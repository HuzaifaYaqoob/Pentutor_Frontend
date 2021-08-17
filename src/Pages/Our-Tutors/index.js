
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'

import HeroSection from '../../components/HeroSection/HeroSection'
import FormSection from '../../components/FormSection/FormSection'
import InputField from '../../components/FormSection/InputField'


const TutorPoint = (props) => {
    return (
        <div className='flex items-center justify-between mb-4'>
            <p className='font-bold text-gray-900 capitalize'>{props.property}:</p>
            <p className='text-gray-700 font-medium capitalize'>{props.value}</p>
        </div>
    )
}

const TutorCard = (props) => {
    return (
        <div className='pentutor-shadow rounded p-7 mb-14 pt-24 relative max-w-sm mx-auto w-full'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img className='w-36' src={process.env.PUBLIC_URL + props.ImagePath} alt="Profile Image" />
            </div>
            <div className='w-full text-center'>
                <p className='bg-yellow-450 py-0.5 px-7 rounded text-white font-medium inline-block'>ID: PT149</p>
            </div>
            <div className='my-10'>
                <TutorPoint property='qualification' value='master' />
                <TutorPoint property='experience' value='21 years' />
                <TutorPoint property='areas to teach' value='johar town' />
                <TutorPoint property='experience' value='21 years' />
                <TutorPoint property='age' value='39' />
                <TutorPoint property='teach online' value='yes' />
            </div>
            <div className='flex items-center justify-evenly'>
                <Link to='/our-tutor/profile/userprofileHuzaifaID' className='py-2 px-3 rounded-lg cursor-pointer bg-yellow-450 text-white'>View Full Profile</Link>
                <button className='py-2 px-3 rounded-lg cursor-pointer bg-indigo-900 text-white'>Take Trial Class</button>
            </div>
        </div>
    )
}

const OurTutors = () => {
    return (
        <div>
            <HeroSection Text='certified tutors' ImagePath='/images/girlImage1.png' />
            <FormSection formHeading='Search Tutor'>
                <div className='container mx-auto my-10'>
                    <div className='grid grid-cols-3 gap-6'>
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
            <div className='container mx-auto my-20'>
                <div>
                    <h3 className='w-full text-center text-indigo-900 font-bold text-2xl'>Registered Tutors</h3>
                </div>
                <div className='grid grid-cols-2 gap-20 my-20'>
                    <TutorCard ImagePath='/images/profilepic.png' />
                    <TutorCard ImagePath='/images/profilepic.png' />
                    <TutorCard ImagePath='/images/profilepic.png' />
                    <TutorCard ImagePath='/images/profilepic.png' />
                </div>
            </div>
        </div>
    )
}
export default OurTutors
