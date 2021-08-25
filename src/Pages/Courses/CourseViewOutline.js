
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo, faTv, faFile } from "@fortawesome/free-solid-svg-icons"


const Outline = (props) => {
    return (
        <p className='flex items-center gap-2 text-gray-500 text-xs mb-3' >
            <FontAwesomeIcon icon={props.icon} />
            <span className='text-gray-500'>{props.text}</span>
        </p>
    )
}

const LearnThings = (props) =>{
    return(
        <p className='text-xs mb-7'>
            <span className='mr-4'>{props.ol_value}.</span>
            {props.text}
        </p>
    )
}


const CourseOutline = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row items-start my-16 gap-10 px-5'>
            <div className='w-60 pentutor-shadow '>
                <h3 className='py-4 w-full text-center font-bold'>This course includes</h3>
                <hr />
                <div className='p-6'>
                    <Outline text='Latest Record Lectures' icon={faVideo} />
                    <Outline text='Life Time Access' icon={faVideo} />
                    <Outline text='Mobile & Web View' icon={faTv} />
                    <Outline text='Assignement' icon={faFile} />
                    <Outline text='Certificate on Completion' icon={faVideo} />
                    <button className='bg-yellow-300 mr-2 py-3 px-5 w-full mt-3 rounded-md '>Add to Cart</button>
                </div>
            </div>
            <div className='p-6 bg-white pentutor-shadow flex-1 rounded '>
                <h3 className='font-bold mb-10'>This you will Learn</h3>
                <LearnThings text='Latest Recorder Lectures Latest Recorder Lectures' ol_value={1} />
                <LearnThings text='Latest Recorder Lectures Latest Recorder Lectures Latest Recorder Lectures' ol_value={2} />
                <LearnThings text='Latest Recorder Lectures' ol_value={3} />
                <LearnThings text='Latest Recorder Lectures' ol_value={4} />
                <LearnThings text='Latest Recorder Lectures' ol_value={5} />
                <LearnThings text='Latest Recorder Lectures' ol_value={6} />
                <LearnThings text='Latest Recorder Lectures' ol_value={7} />
                <LearnThings text='Latest Recorder Lectures' ol_value={8} />
            </div>
        </div>
    )
}

export default CourseOutline