

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,  faArrowLeft , faArrowRight} from '@fortawesome/free-solid-svg-icons'

const ProfileDisplayCard = () => {
    return (
        <div className='pentutor-shadow bg-white rounded-md w-64 item'>
            <div>
                <img className='w-28 -mt-10 mx-auto' src={process.env.PUBLIC_URL + '/images/profilepic.png'} alt="" />
            </div>
            <div className='my-4 px-10'>
                <h1 className='text-yellow-400 w-full text-center'>ID : 838</h1>
                <p className='text-xs text-gray-400'>Masters In Methematics <br />& Physics</p>
            </div>
            <hr />
            <div className='p-7'>
                <p className='text-yellow-400 text-xs' >
                    <span>4.5</span>
                    <FontAwesomeIcon className='mx-3.5' icon={faStar} />
                    <span>Instructor Rating</span>
                </p>
                <p className='text-xs my-4'>
                    <span className='text-yellow-400 mr-1'>500</span>
                    <span className='capitalize'>Students</span>
                </p>
                <p className='text-xs my-4'>
                    <span className='text-yellow-400 mr-1'>5</span>
                    <span className='capitalize'>courses</span>
                </p>
                <p className='text-xs my-4'>
                    <span className='text-yellow-400 mr-1'>384</span>
                    <span className='capitalize'>Reviews</span>
                </p>
            </div>
        </div>
    )
}

export const CourseCard = () => {
    return (
        <div className='w-full max-w-xs relative pentutor-shadow rounded-md overflow-hidden px-3 pt-1'>
            <div  >
                <img className='w-full block' src={process.env.PUBLIC_URL + '/images/blog/blogImage.png'} alt="Image" />
            </div>
            <div className='px-3 mt-3'>
                <p className='bg-green-200 text-green-600 py-1 px-4 text-sm rounded-full inline-block'>Design</p>
                <h3 className='text-sm my-4'>Adobe Photoshop: Begginer To Advance In 1 Month</h3>
                <p className='text-xs flex items-center justify-between mb-4'>
                    <span>
                        <span className='text-yellow-400'>4.5</span>
                        <FontAwesomeIcon className='mx-2 text-yellow-400' icon={faStar} />
                        <span className='text-gray-400'>(579)</span>
                    </span>
                    <span>
                        770 <span className='text-gray-400'>students</span>
                    </span>
                </p>
                <p className='text-xs flex items-center justify-between mb-2 pl-4'>
                    <span>
                        1 hr 45 Min
                    </span>
                    <span>
                        46 Lectures
                    </span>
                </p>
                <p className='text-sm pl-4'>Advanced</p>
                <hr className='mt-4' />
                <div className='flex items-center justify-between my-4'>

                    <div className='flex items-center'>
                        <img className='mr-2 w-12' src={process.env.PUBLIC_URL + '/images/user.png' }  />
                        <h3 className='capitalize text-sm'>ibrahim kamran</h3>
                    </div>
                    <span className='text-red-500 text-sm'>
                        20k PKR
                    </span>

                </div>
            </div>
        </div>
    )
}


const ViewProfile = () => {
    return (
        <>
            <div className='container mx-auto my-20 flex lg:flex-row flex-col-reverse px-5 items-start '>
                <div className='flex-1 px-5 mt-5 lg:mt-0 lg:px-20'>
                    <h3 className='text-md font-medium mb-6'>About Me</h3>
                    <p className='text-xs text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi urna quis ut lacus viverra eleifend natoque porttitor. Magna aenean ullamcorper cum ultrices sed netus enim blandit amet. Enim neque, sociis risus risus pharetra. Mattis habitant orci, mi mattis morbi platea euismod. Sagittis scelerisque semper pretium mauris. Et nisl nullam quis ut ut elit. Leo, amet, egestas tempor mauris integer nulla felis at morbi. <br />
                        Quam nulla pellentesque mattis quis fermentum laoreet. Tempus pellentesque a ut egestas quam. In bibendum eu in sed at sapien curabitur at. Id mauris feugiat egestas sed odio tempus. Libero ut tempus aenean egestas. Sed ultrices nulla venenatis rhoncus volutpat. Amet, orci est nunc, eget porta bibendum odio viverra. Pharetra et augue imperdiet urna morbi hendrerit amet sollicitudin proin. Massa sed sagittis faucibus lacinia lorem quis. Sed id amet, amet in sed nisi. Sed aliquet nunc donec morbi adipiscing tellus. Nunc amet in aliquam metus egestas et praesent. Posuere velit egestas ipsum varius viverra porta nibh id donec. Vehicula pharetra massa in eget nec. <br />                    Cursus sit est, et odio lacus diam eleifend nulla. Bibendum fringilla ullamcorper amet, blandit arcu tincidunt. Laoreet dui faucibus sed a mauris enim purus. Feugiat nibh phasellus elit nunc risus sem nibh. Hendrerit eget nulla feugiat id volutpat porta sem. Aliquam purus, id velit a congue. Lacus pharetra consectetur turpis ultrices sed morbi nisi. Mattis amet, sed vitae eu arcu. Vulputate lacus, laoreet mauris at. Tortor commodo, amet sit gravida sagittis quam sit lobortis. Rutrum sed ipsum id consequat ut. Purus eget dapibus in pellentesque nunc eu. Facilisis cras diam imperdiet vitae facilisi. <br />
                        Et viverra varius eget mauris, nunc. Amet nec faucibus volutpat facilisi. Consequat vel ullamcorper iaculis diam aliquam. Faucibus aenean consectetur maecenas et ac tellus lorem. Aliquam et porttitor neque egestas posuere eu arcu. Pulvinar pulvinar ac tortor faucibus ornare cras. </p>
                </div>
                <ProfileDisplayCard />
            </div>
            <div className='container mx-auto' >
                <h3 className='mb-8 font-medium'>Courses I Offer</h3>
                <div className='grid md:grid-cols-2 place-content-center lg:grid-cols-3 gap-10'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>

                <div className=' mx-auto my-10 flex items-center justify-center gap-10'>
                    <span className='w-10 h-10 rounded-full bg-yellow-450 flex items-center justify-center cursor-pointer text-indigo-900'> 
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <div className='flex items-center justify-center gap-5 font-medium'>
                        <span className='text-yellow-400'>1</span>
                        <span className='text-indigo-900'>2</span>
                        <span className='text-indigo-900'>3</span>
                        <span className='text-indigo-900'>4</span>
                    </div>
                    <span className='w-10 h-10 rounded-full bg-yellow-450 flex items-center justify-center cursor-pointer text-indigo-900'> 
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </div>
            </div>

        </>
    )
}

export default ViewProfile