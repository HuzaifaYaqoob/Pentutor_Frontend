

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import { CourseCard } from "../Our-Tutors/ViewProfile"



const FilterTab = (props) =>{
    console.log(props)
    return(
        <span className={'mx-2 cursor-pointer hover:text-gray-600' + ' ' + (props.active ? 'text-gray-600  border-gray-700 border-b-2 ' : 'text-gray-400 ' ) }>
            {props.displayText}
        </span>
    )
}

const TabDivider = () =>{
    return(
        <span className='w-px h-3 bg-gray-400 inline-block'></span>

    )
}


const Wishlist = () => {
    return (
        <div>
            <div className='w-full bg-indigo-900 text-center text-white py-3'>
                <h3 className='font-bold text-xl'>WishList</h3>
            </div>
            <div className="container mx-auto my-10 lg:px-0 px-5">
                <div className='bg-white shadow-lg px-4 ml-auto my-5 w-96 border border-gray-300 rounded flex gap-3 items-center'>
                    <span>
                        <FontAwesomeIcon icon={faSearch} className='text-gray-400' />
                    </span>
                    <input type="text" placeholder='Search For My Courses' className='outline-none text-center py-0 w-full' />
                </div>
                <div className='mb-10'>
                    <FilterTab active={true} displayText='Recent' />
                    <TabDivider/>
                    <FilterTab displayText='Older' />
                    <TabDivider/>
                    <FilterTab displayText='All Courses' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center'>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>

        </div>
    )
}

export default Wishlist