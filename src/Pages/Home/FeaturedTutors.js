


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


const FeaturedTutorCard = () =>{
    return(
        <div className='bg-white rounded p-2 flex items-center gap-3'>
            <img src={process.env.PUBLIC_URL + '/images/img3.png'} alt="Image" className='w-20' />
            <div>
                <h3 className='mb-1'>Fatima Azhar</h3>
                <p className='text-gray-500 text-xs mb-1'>Masters in Math</p>
                <p className='text-xs text-yellow-400 mb-1'>4.8 <FontAwesomeIcon icon={faStar} /> Instructor Rating</p>
                <p className='text-gray-500 text-xs mb-1'><span className='font-medium text-gray-800'>560</span> students <span className='font-medium text-gray-800'>6</span> courses</p>
            </div>
        </div>
    )
}



const FeaturedTutors = () =>{
    return(
        <div className='bg-gray-100 py-10 mt-10'>
            <div className='container  mx-auto'>
                <h3 className='text-4xl font-bold w-full lg:text-left text-center text-gray-800 mb-10' >Discover Our <span className="text-yellow-400"> Featured <br />Tutors</span></h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-0 px-5'>
                    <FeaturedTutorCard/>
                    <FeaturedTutorCard/>
                    <FeaturedTutorCard/>
                    <FeaturedTutorCard/>
                    <FeaturedTutorCard/>
                    <FeaturedTutorCard/>
                </div>
                <button className='mx-auto  block my-9 rounded border border-yellow-400 bg-yellow-100 text-yellow-400 py-1 px-3 text-xl'>View All</button>
            </div>
        </div>
    )
}

export default FeaturedTutors