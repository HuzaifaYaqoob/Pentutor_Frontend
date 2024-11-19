


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Card from "../Our-Tutors/card"
import { TutorCard } from "../Our-Tutors"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { get_featured_tutors } from "../../redux/Actions/TutorActions/TutorActions"


const FeaturedTutorCard = () => {
    return (
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



const FeaturedTutors = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!state.tutor.featured_tutors_updated_) {
            dispatch(
                get_featured_tutors()
            )
        }
    }, [])
    return (
        <>
            <div className="my-10">
                <h3 className="text-center text-3xl font-medium text-[#313D6A] mb-20">Featured Tutors</h3>
                {
                    state.tutor.featured_tutors_updated_ ?
                        state.tutor.featured_tutors.length > 0 ?
                            <div className="mt-10 flex items-center justify-between">
                                {
                                    state.tutor.featured_tutors.map((tutor, index) => {
                                        return (
                                            <TutorCard data={tutor} key={index} />
                                        )
                                    })
                                }
                            </div>
                            :
                            <>
                                Not found
                            </>
                        :
                        <>
                            <p className="text-center">
                                Loading...
                            </p>
                        </>
                }
            </div>
        </>
        // <div className='bg-gray-100 py-10 mt-10'>
        //     <div className='container  mx-auto'>
        //         <h3 className='text-4xl font-bold w-full lg:text-left text-center text-gray-800 mb-10' >Discover Our <span className="text-yellow-400"> Featured <br />Tutors</span></h3>
        //         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-0 px-5'>
        //             <FeaturedTutorCard/>
        //             <FeaturedTutorCard/>
        //             <FeaturedTutorCard/>
        //             <FeaturedTutorCard/>
        //             <FeaturedTutorCard/>
        //             <FeaturedTutorCard/>
        //         </div>
        //         <button className='mx-auto  block my-9 rounded border border-[#F5BB07] bg-[#F5BB07] text-white py-1.5 px-4'>View All</button>
        //     </div>
        // </div>
    )
}

export default FeaturedTutors