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


const HomePage = (props) => {
    return (
        <main>
            <HeroSection />
            <FormSection formHeading='student query form'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div>
                            <InputField placeholder='Username' className='outline-none rounded ring-1 ring-yellow-300 ' />
                        </div>
                    </div>
                </div>
            </FormSection>
            <div >
                <Main />
                <StudentTutor />
                {/* <FutureTutor /> */}
                <PenTutor />
                <Services />
                {/* <OnlineTutoring /> */}
            </div>
        </main>
    )
}

export default HomePage
