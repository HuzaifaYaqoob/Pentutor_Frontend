import React, { useEffect, useState } from 'react'

// Components 
import HomeHeroSection from './HomeHeroSection';
import FormSection from '../../components/FormSection/FormSection';
import InputField from '../../components/FormSection/InputField';
import DropDown from '../../components/FormSection/DropDown';
import FeaturedTutors from './FeaturedTutors';
import WhyChoose from './whyChoose';
import OurServices from './OurServices';

import ProfessionalTraining from './ProfessionalTraining';
import BlogSection from './BlogSections';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import BlogPost from '../Blogs/BlogPost'

import useTitle from '../../Hooks/useTitle'


const HomePagePromotCard = (props) =>{
    return(
        <div  className='w-full rounded-md overflow-hidden p-10 py-32 bg-center bg-cover relative flex items-center justify-center flex-col bg-no-repeat text-white' style={{backgroundImage : `url(${process.env.PUBLIC_URL + props.ImagePath})`}}>
            <span className='w-full absolute h-full block top-0 left-0 bg-black bg-opacity-25'></span>
            <h3 className='text-3xl relative z-20 capitalize mb-10'>{props.heading}</h3>
            <button className={'text-white rounded-full z-20 relative py-3 px-5 text-xl capitalize ' + (props.activeBtn ? 'bg-yellow-400 border-0' : 'bg-transparent border-2 border-white' )}>{props.btnText}</button>
        </div>
    )
}



const HomePage = (props) => {
    useTitle('Home')

    let slides = [
        <BlogPost />,
        <BlogPost />,
        <BlogPost />
    ];


    return (
        <main>
            {/* <Loader  /> */}
            <HomeHeroSection Text='welcome to pen tutor' ImagePath='/images/studentImages.png' />


            {/* Form Section Student QUery Form  */}
            <div className='mt-20'>
                <h3 className='w-full text-center font-bold text-indigo-900 text-4xl capitalize' >student query form</h3>
            </div>
            <FormSection formHeading='student query form' className='my-10 bg-cover bg-center bg-no-repeat bg-image-studentqueryform' hideLabel  >
                <span className='w-full h-full absolute top-0 left-0 bg-black block bg-opacity-50'></span>

                <div className='container mx-auto relative  z-20'>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                        <InputField placeholder='Enter Your Full Name' type='text' />
                        <InputField placeholder='Enter Your Email Address' type='email' />
                        <DropDown dropDownList={{}} />
                        <InputField placeholder='Enter Your Number' className='hide-input-arrow-button' type='number' />
                        <InputField placeholder='Enter Your City Name' type='text' />
                        <InputField placeholder='Enter Your Area' className='hide-input-arrow-button' type='number' />
                    </div>
                </div>
                <div className='absolute bottom-0 transform left-1/2 translate-y-1/2 -translate-x-1/2'>
                    <button className='w-12 h-12 bg-yellow-450 rounded-full'>
                        <FontAwesomeIcon icon={faArrowRight} className='text-indigo-900 hover:scale-110 transition-all' />
                    </button>
                </div>
            </FormSection>


            <WhyChoose />
            <div className='flex flex-col sm:flex-row gap-5 container mx-auto px-5'>
                <HomePagePromotCard ImagePath='/images/img1.png'  heading='for tutors' btnText='start a course' />
                <HomePagePromotCard ImagePath='/images/img2.png' activeBtn  heading='for students' btnText='take a course' />
            </div>
            <FeaturedTutors/>
            <OurServices />
            <ProfessionalTraining/>
            <BlogSection/>
           
        </main>
    )
}

export default HomePage
