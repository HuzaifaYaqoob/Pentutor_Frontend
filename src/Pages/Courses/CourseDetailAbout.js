import parse from 'html-react-parser';


const CourseDetailAbout = ({ data }) => {
    return (
        <div className='px-5'>
            <div className='container mx-auto bg-white p-4 pentutor-shadow'>
                <h3 className='font-bold mb-6'>Course Detail</h3>
                <p className='text-xs'>{data?.description ? parse(data?.description) : ''}</p>
            </div>
        </div>
    )
}

export default CourseDetailAbout