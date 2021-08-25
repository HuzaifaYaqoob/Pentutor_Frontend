

import { CourseCard } from "../Our-Tutors/ViewProfile"


const ProfessionalTraining = () =>{
    return(
        <div className='bg-gray-100 py-20'>
            <div className="container mx-auto ">
                <h3 className='text-indigo-900 font-bold text-3xl text-center mb-9'>Professional <span className='text-yellow-400'>Training</span></h3>
                <div className='grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
                <button className='mx-auto  block my-9 rounded border border-yellow-400 bg-yellow-100 text-yellow-400 py-1 px-3 text-xl'>View All</button>

            </div>
        </div>
    )
}

export default ProfessionalTraining
