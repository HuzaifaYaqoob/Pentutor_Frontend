import React from 'react'
import Main from "./main-sec";
import StudentTutor from "./student_tutors";
import FutureTutor from "./featured_tutor";
import PenTutor from "./choose_pen-tutor";
import Services from "./services";
import OnlineTutoring from "./online-tutoring";

// Components 
import HeroSection from '../../components/HeroSection/HeroSection'
import FormSection from '../../components/FormSection/FormSection';
import InputField from '../../components/FormSection/InputField';
import DropDown from '../../components/FormSection/DropDown';
import HomePageCard from '../../components/HomePageCard/HomePageCard';
import WhyChoose from './whyChoose';
import OurServices from './OurServices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const HomePage = (props) => {
    return (
        <main>
            <HeroSection Text='welcome to pen tutor' ImagePath='/images/studentImages.png' />
            <FormSection formHeading='student query form'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-3 gap-6'>
                        <InputField placeholder='Enter Your Full Name' type='text' />
                        <InputField placeholder='Enter Your Email Address' type='email' />
                        <DropDown  />
                        <InputField placeholder='Enter Your Number' className='hide-input-arrow-button' type='number' />
                        <InputField placeholder='Enter Your City Name' type='text' />
                        <InputField placeholder='Enter Your Area' className='hide-input-arrow-button' type='number' />
                    </div>
                    <div className='absolute bottom-0 transform left-1/2 translate-y-1/2 -translate-x-1/2'>
                        <button className='w-12 h-12 bg-yellow-450 rounded-full'>
                            <FontAwesomeIcon icon={faArrowRight} className='text-indigo-900 hover:scale-110 transition-all' />
                        </button>
                    </div>
                </div>
            </FormSection>
            <HomePageCard cardReverse={true}  preferredColor='yellow-450' imagePath='/images/girlImage.png' heading='for students' />
            <HomePageCard preferredColor='indigo-900' imagePath='/images/girlImage1.png' heading='for tutors' />
            <WhyChoose/>
            <OurServices/>
        </main>
    )
}

export default HomePage
