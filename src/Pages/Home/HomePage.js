import React, { useEffect, useState } from 'react'

// Components 
import HomeHeroSection from './HomeHeroSection';
import FormSection from '../../components/FormSection/FormSection';
import InputField from '../../components/FormSection/InputField';
import FeaturedTutors from './FeaturedTutors';
import WhyChoose from './whyChoose';
import OurServices from './OurServices';

import ProfessionalTraining from './ProfessionalTraining';
import BlogSection from './BlogSections';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import BlogPost from '../Blogs/BlogPost'

import useTitle from '../../Hooks/useTitle'
import WelcomePTHeroSection from '../../components/HeroSection/HeroSection1';
import HomePageCard from '../../components/HomePageCard/HomePageCard';
import { CreateSutedentQuery } from '../../redux/Actions/UtilityActions/UtilityActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import BuildCommunity from './BuildCommunity';


const HomePagePromotCard = (props) => {
    return (
        <div className='w-full rounded-md overflow-hidden p-10 py-32 bg-center bg-cover relative flex items-center justify-center flex-col bg-no-repeat text-white' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + props.ImagePath})` }}>
            <span className='w-full absolute h-full block top-0 left-0 bg-black bg-opacity-25'></span>
            <h3 className='text-3xl relative z-20 capitalize mb-10'>{props.heading}</h3>
            <button className={'text-white rounded-full z-20 relative py-3 px-5 text-xl capitalize ' + (props.activeBtn ? 'bg-yellow-400 border-0' : 'bg-transparent border-2 border-white')}>{props.btnText}</button>
        </div>
    )
}



const HomePage = (props) => {
    useTitle('Home')
    const dispatch = useDispatch()
    const [query_data, setQueryData] = useState({})

    const HandleStudentQueryData = (e) => {
        let { name, value } = e.target
        setQueryData({
            ...query_data,
            [name]: value
        })
    }

    const submitQueryData = () => {
        dispatch(
            CreateSutedentQuery(
                query_data,
                () => {
                    setQueryData({})
                    toast.success('Query sent seuccessfully')
                },
                () => {
                    toast.error('Something went wrong ')
                }
            )
        )
    }

    return (
        <main>
            {/* <Loader  /> */}
            {/* <HomeHeroSection Text='welcome to pen tutor' ImagePath='/images/studentImages.png' /> */}
            <WelcomePTHeroSection />

            {/* Form Section Student QUery Form  */}
            <div className='px-4 sm:px-6 md:px-8 pt-12 space-y-16'>
                <FeaturedTutors />
            </div>
            <h3 className='w-full text-center font-bold text-indigo-900 text-2xl sm:text-3xl md:text-4xl capitalize' >student query form</h3>
            <FormSection formHeading='student query form' className='my-10 bg-cover bg-center bg-no-repeat bg-image-studentqueryform' hideLabel  >
                <span className='w-full h-full absolute top-0 left-0 bg-black block bg-opacity-50'></span>
                <div className='max-w-[1300px] mx-auto relative z-20'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <InputField
                            placeholder='Enter Your Full Name'
                            type='text'
                            name='full_name'
                            onChange={HandleStudentQueryData}
                            value={query_data?.full_name}
                        />
                        <InputField
                            placeholder='Enter Your Email Address'
                            type='email'
                            name='email'
                            onChange={HandleStudentQueryData}
                            value={query_data?.email}
                        />
                        <InputField
                            placeholder='Enter Your Number'
                            className='hide-input-arrow-button'
                            type='number'
                            name='mobile_number'
                            onChange={HandleStudentQueryData}
                            value={query_data?.mobile_number}
                        />
                        <InputField
                            placeholder='Enter Your City Name'
                            type='text'
                            name='city'
                            onChange={HandleStudentQueryData}
                            value={query_data?.city}
                        />
                        <InputField
                            placeholder='Enter Your Area'
                            className='hide-input-arrow-button'
                            type='text'
                            name='area'
                            onChange={HandleStudentQueryData}
                            value={query_data?.area}
                        />
                    </div>
                </div>
                <div className='absolute bottom-0 transform left-1/2 translate-y-1/2 -translate-x-1/2'>
                    <button
                        className='w-12 h-12 bg-yellow-450 rounded-full'
                        onClick={() => {
                            submitQueryData()
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} className='text-indigo-900 hover:scale-110 transition-all' />
                    </button>
                </div>
            </FormSection>
            <div className='px-4 sm:px-6 md:px-8 py-10 space-y-16'>
                <HomePageCard preferredColor={'text-[#F5BB07]'} bgpreferredColor={'bg-[#F5BB07]'} heading={'For Students'} imagePath={'/images/girlImage.png'} cardReverse />
                <HomePageCard preferredColor={'text-[#313D6A]'} bgpreferredColor={'bg-[#313D6A]'} heading={'For Tutors'} imagePath={'/images/girlImage1.png'} />
                <BuildCommunity/>
                <WhyChoose />
                {/* <div className='flex flex-col sm:flex-row gap-5 container mx-auto px-5'>
                    <HomePagePromotCard ImagePath='/images/img1.png' heading='for tutors' btnText='start a course' />
                    <HomePagePromotCard ImagePath='/images/img2.png' activeBtn heading='for students' btnText='take a course' />
                </div> */}
            </div>
            <OurServices />
            <ProfessionalTraining />
            <BlogSection />

        </main>
    )
}

export default HomePage
