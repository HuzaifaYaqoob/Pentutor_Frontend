
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo, faTv, faFile } from "@fortawesome/free-solid-svg-icons"

import parse from 'html-react-parser';
import { useDispatch } from "react-redux";
import { AddToCartCourse } from "../../redux/Actions/CourseActions/CourseActions";
import { toast } from "react-toastify";


const Outline = (props) => {
    return (
        <p className='flex items-center gap-2 text-gray-500 text-xs mb-3' >
            <FontAwesomeIcon className="text-sm" icon={props.icon} />
            <span className='text-[#111111]'>{props.text}</span>
        </p>
    )
}

const LearnThings = (props) => {
    return (
        <p className='text-xs mb-7'>
            <span className='mr-4'>{props.ol_value}.</span>
            {props.text}
        </p>
    )
}


const CourseOutline = ({ data }) => {
    const dispatch = useDispatch()

    const AddtoCartCourseHandler = () => {
        dispatch(
            AddToCartCourse(
                {
                    id: data.slug
                },
                () => {
                    toast.success('Added to cart')
                },
                () => {
                    toast.error('Something went wrong')
                }
            )
        )
    }
    return (
        <section className="px-4 sm:px-6 md:px-8 py-9">
            <div className='max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row items-start gap-4'>
                <div className='w-80 sticky top-[70px] border border-[#CACBE6] rounded-lg'>
                    <h3 className='py-4 w-full text-center font-bold border-b border-[#CACBE6]'>This course includes</h3>
                    <div className='p-3'>
                        <Outline text='Latest Record Lectures' icon={faVideo} />
                        <Outline text='Life Time Access' icon={faVideo} />
                        <Outline text='Mobile & Web View' icon={faTv} />
                        <Outline text='Assignement' icon={faFile} />
                        <Outline text='Certificate on Completion' icon={faVideo} />
                        <button
                            className='bg-yellow-300 py-3 font-medium text-sm px-5 w-full mt-3 rounded-md '
                            onClick={AddtoCartCourseHandler}
                        >Add to Cart</button>
                    </div>
                </div>
                <div className='p-6 bg-white flex-1 border border-[#CACBE6] rounded-lg'>
                    <h3 className='font-bold mb-10'>This you will Learn</h3>
                    {/* <LearnThings text='Latest Recorder Lectures Latest Recorder Lectures' ol_value={1} />
                    <LearnThings text='Latest Recorder Lectures Latest Recorder Lectures Latest Recorder Lectures' ol_value={2} />
                    <LearnThings text='Latest Recorder Lectures' ol_value={3} />
                    <LearnThings text='Latest Recorder Lectures' ol_value={4} />
                    <LearnThings text='Latest Recorder Lectures' ol_value={5} />
                    <LearnThings text='Latest Recorder Lectures' ol_value={6} />
                    <LearnThings text='Latest Recorder Lectures' ol_value={7} />
                    <LearnThings text='Latest Recorder Lectures' ol_value={8} /> */}
                    {data?.things_you_will_learn ? parse(data?.things_you_will_learn) : 'NA'}
                </div>
            </div>
        </section>
    )
}

export default CourseOutline