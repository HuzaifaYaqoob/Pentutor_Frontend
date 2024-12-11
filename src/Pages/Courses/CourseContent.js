

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Moment from "react-moment"
import { useState } from "react"


const Content = ({ chapter }) => {
    const [expand, setExpand] = useState(false)

    console.log(chapter)
    return (
        <div className='my-4'>
            <div className='flex items-center justify-between text-xs mb-6'>
                <div className='flex items-center gap-4 cursor-pointer' onClick={()=>{setExpand(!expand)}}>
                    <FontAwesomeIcon className='text-gray-700' icon={faPlay} />
                    <p className="font-medium text-gray-700 text-[16px]">{chapter?.title}</p>
                </div>
                <p>{chapter?.videos?.length} Lectures. {chapter?.duration && <Moment format="m [minute] ss [seconds]">{chapter?.duration * 1000}</Moment>}</p>
            </div>
            {
                expand && 
                <div className="pl-7">
                    {
                        chapter?.videos?.map(video =>{
                            return (
                                <div className="flex items-start gap-2 mb-2">
                                    <div class="w-[80px] h-[80px] border border-gray-200 bg-center bg-cover bg-no-repeat rounded-md" 
                                    style={{
                                        backgroundImage: `url('${video.vid_thumbnail}')`
                                    }}></div>
                                    <div>
                                        <p>{video.title}</p>
                                        <p className="text-sm">{video.duration} Seconds</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            <hr />
        </div>
    )
}


const CourseContent = ({ data }) => {
    return (
        <div className='container mx-auto'>
            <div className='pentutor-shadow mt-16 mb-4 rounded overflow-hidden'>
                <div className='bg-yellow-450 flex items-center justify-between p-5 rounded'>
                    <div>
                        <h3 className='mb-2 font-bold'>Course Content</h3>
                        <p className='text-xs'>{data?.chapters?.length} Section{data?.chapters?.length > 1 && 's'}, {data?.total_videos} Lectures, {<Moment format="m [minute] ss [seconds]">{data?.duration * 1000}</Moment>} total length</p>
                    </div>
                    {/* <span className='bg-gray-700 bg-opacity-50 rounded border text-white text-xs py-1 px-5 cursor-pointer border-gray-500'>Expand All</span> */}
                </div>
                <div className='p-6'>
                    {
                        data?.chapters?.slice(0, 4).map((chapter, index) => {
                            return (
                                <Content chapter={chapter} key={index} />
                            )
                        })
                    }
                </div>
            </div>
            {
                data?.chapters?.length > 4 &&
                <button className='w-full py-2 text-center border border-gray-400 rounded text-sm font-medium'>{data?.chapters.length - 4} More Sections</button>
            }
        </div>
    )
}

export default CourseContent