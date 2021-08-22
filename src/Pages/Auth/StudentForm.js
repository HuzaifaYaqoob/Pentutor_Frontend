

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faFileAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link, Route } from 'react-router-dom'


const NavNext = (props) => {
    return (
        <Link className='w-10 h-10 flex items-center justify-center bg-yellow-450 rounded-full cursor-pointer' to={props.nextPath} >
            <FontAwesomeIcon className='text-indigo-900' icon={faArrowRight} />
        </Link>
    )
}

const NavigateButton = (props) => {
    return (
        <>
            <div className='rounded-full flex items-center justify-around absolute bottom-0 left-0 right-0  transform translate-y-1/2 '>
                <Route exact path={
                    [
                        '/auth/register/student/address/',
                        '/auth/register/student/record/',
                        '/auth/register/student/study_plan/',
                        '/auth/register/student/document/',
                    ]
                } >
                    <span className='w-10 h-10 flex items-center justify-center bg-yellow-450 rounded-full cursor-pointer' onClick={() => { props.history.goBack() }}>
                        <FontAwesomeIcon className='text-indigo-900' icon={faArrowLeft} />
                    </span>
                </Route>
                <Route exact path='/auth/register/student/' >
                    <NavNext nextPath='/auth/register/student/address/' />
                </Route>
                <Route exact path='/auth/register/student/address/' >
                    <NavNext nextPath='/auth/register/student/record/' />
                </Route>
                <Route exact path='/auth/register/student/record/' >
                    <NavNext nextPath='/auth/register/student/study_plan/' />
                </Route>
                <Route exact path='/auth/register/student/study_plan/' >
                    <NavNext nextPath='/auth/register/student/document/' />
                </Route>
                <Route exact path='/auth/register/student/document/' >
                    <NavNext nextPath='/auth/register/student/' />
                </Route>
            </div>


        </>
    )
}


const Bio = () => {
    return (
        <>
            <div>
                <label htmlFor="name" className='text-xs font-semibold'>Your Name</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='name' placeholder='Enter Your Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="email" className='text-xs font-semibold'>Your Email</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="email" id='email' placeholder='Enter Your Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className='text-xs font-semibold'>Your Phone Number</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="number" id='phone' placeholder='Enter Your Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="db" className='text-xs font-semibold'>Date Of Birth</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="date" id='db' placeholder='Enter Your Name...' />
                </div>
            </div>
        </>
    )
}

const Address = () => {
    return (
        <>
            <div>
                <label htmlFor="country" className='text-xs font-semibold'>Add Country</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='country' placeholder='Country Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="city" className='text-xs font-semibold'>Add City</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='city' placeholder='City Name...' />
                </div>
            </div>
            <div>
                <label htmlFor="area" className='text-xs font-semibold'>Add Area</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='area' placeholder='Area Name...' />
                </div>
            </div>
        </>
    )
}

const Record = () => {
    return (
        <>
            <div>
                <label htmlFor="qualification" className='text-xs font-semibold'>Add Your Qualification</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='qualification' placeholder='Highest Qualification...' />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className='text-xs font-semibold'>Add Your Subject</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='subject' placeholder='Add Subject Seperated By Comma ,' />
                </div>
            </div>
            <div>
                <label htmlFor="school" className='text-xs font-semibold'>Add Your Institute</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='school' placeholder='Institute Name...' />
                </div>
            </div>
        </>
    )
}

const StudyPlan = () => {
    return (
        <>
            <div>
                <label htmlFor="teaching_method" className='text-xs font-semibold'>Preferred Method of Teaching</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='teaching_method' placeholder='Method of Teaching...' />
                </div>
            </div>
            <div>
                <label htmlFor="study" className='text-xs font-semibold'>Add Days to Study</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='study' placeholder='Check the right days to study...' />
                </div>
            </div>
            <div>
                <label htmlFor="timeStudy" className='text-xs font-semibold'>Add Timing to study</label>
                <div>
                    <input className='bg-gray-200 block text-xs rounded outline-none w-full' type="text" id='timeStudy' placeholder='11:00 AM - 5:00 PM' />
                </div>
            </div>
        </>
    )
}


const DocumentForm = () => {
    return (
        <>
            <div>
                <label htmlFor="name" className='text-xs font-semibold'>Add CNIC/B-Form</label>
                <div>
                    <input type='file' className='hidden' id='cnic' />
                    <label htmlFor="cnic" className='text-xs font-semibold'>
                        <FontAwesomeIcon icon={faFileAlt} className='text-4xl mx-auto block my-2 text-gray-300 hover:text-gray-400 cursor-pointer' />
                    </label>

                </div>
            </div>
            <div>
                <label htmlFor="degree" className='text-xs font-semibold'>Add Degree Picture</label>
                <div>
                    <input type='file' className='hidden' id='degree' />
                    <label htmlFor="degree" className='text-xs font-semibold'>
                        <FontAwesomeIcon icon={faFileAlt} className='text-4xl mx-auto block my-2 text-gray-300 hover:text-gray-400 cursor-pointer' />
                    </label>

                </div>
            </div>
            <div>
                <label htmlFor="profile" className='text-xs font-semibold'>Add Profile Picture</label>
                <div>
                    <input type='file' className='hidden' id='profile' />
                    <label htmlFor="profile" className='text-xs font-semibold'>
                        <FontAwesomeIcon icon={faUserCircle} className='text-4xl mx-auto block my-2 text-gray-300 hover:text-gray-400 cursor-pointer' />
                    </label>

                </div>
            </div>
        </>
    )
}


const StudentForm = (props) => {
    return (
        <>
            <div className='bg-white p-8 pt-3 relative'>
                <Route exact path='/auth/register/student' component={Bio} />
                <Route exact path='/auth/register/student/address/' component={Address} />
                <Route exact path='/auth/register/student/record/' component={Record} />
                <Route exact path='/auth/register/student/study_plan/' component={StudyPlan} />
                <Route exact path='/auth/register/student/document/' component={DocumentForm} />

                <NavigateButton {...props} />
            </div>
            <div className='bg-yellow-450 text-white fixed left-0 top-1/2 transform -translate-y-1/2 px-2 py-3 rounded-r-lg h-96 flex flex-col-reverse items-center'>
                <Link to='/auth/register/student/document/' className='cursor-pointer hover:text-gray-800 text-white text-xs'>Document</Link>
                <span className='w-0.5 flex-1 block bg-white rounded-full'></span>
                <Link to='/auth/register/student/study_plan/' className='cursor-pointer hover:text-gray-800 text-white text-xs'>Study Plan</Link>
                <span className='w-0.5 flex-1 block bg-white rounded-full'></span>
                <Link to='/auth/register/student/record/' className='cursor-pointer hover:text-gray-800 text-white text-xs'>Record</Link>
                <span className='w-0.5 flex-1 block bg-white rounded-full'></span>
                <Link to='/auth/register/student/address/' className='cursor-pointer hover:text-gray-800 text-white text-xs'>Address</Link>
                <span className='w-0.5 flex-1 block bg-white rounded-full'></span>
                <p to='/auth/register/student' className='cursor-pointer hover:text-gray-800 text-gray-900 text-xs'>Bio</p>
            </div>
        </>
    )
}

export default StudentForm