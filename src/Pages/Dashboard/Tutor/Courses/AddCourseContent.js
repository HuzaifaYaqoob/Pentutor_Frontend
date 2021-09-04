
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPlusCircle } from "@fortawesome/free-solid-svg-icons"

import DashboardBase from "../../DashboardBase"


const AddVideo = () => {
    return (
        <div className='rounded border border-gray-200 my-2 py-1 px-5 flex justify-between items-center'>
            <p className='outline-none flex-1' placeholder='Add Video Title' contentEditable={true}>Video Title</p>
            <span>
                <label htmlFor="videoFile" className='text-indigo-900 text-xs'>Select Video</label>
                <input id='videoFile' type='file' className='hidden' />
            </span>
        </div>
    )
}


const CourseSection = (props) => {
    const [dropDownActive, setDropDownActive] = React.useState(false)
    const [AddedVideos, setAddedVideos] = React.useState([<AddVideo/>])

    const AddNewVideo = () =>{
        setAddedVideos([...AddedVideos , <AddVideo/>])
    }
    return (
        <div className='my-5'>
            <div className='bg-white rounded border border-gray-200 px-2 shadow text-xs text-gray-600 flex gap-8 cursor-pointer items-center' onClick={() => { setDropDownActive(!dropDownActive) }}>
                <FontAwesomeIcon icon={faPlay} className={'transition-all ' + (dropDownActive ? 'rotate-90 transform' : '')} />
                <p className='p-3 block w-full outline-none' contentEditable={true}>{props.title}</p>
            </div>
            {
                dropDownActive ?
                    <div className='my-3' >
                        {
                            AddedVideos.map(item => item)
                        }
                        <div className='flex items-center justify-between text-sm'>
                            <button onClick={()=>{AddNewVideo()}} className='flex items-center gap-2 bg-indigo-900 text-white rounded py-1 px-3'>
                                <FontAwesomeIcon icon={faPlusCircle} />
                                Add Video
                            </button>
                            <button className='flex items-center gap-2 bg-green-500 text-white rounded py-1 px-3'>
                                Save
                            </button>
                        </div>
                    </div>
                    :
                    <>
                    </>
            }
        </div>
    )
}


const AddCourseContent = () => {
    const [sections, setSections] = React.useState([
        'Chapter 1: Discussion',
        'Chapter 2',
        'Chapter 3',
    ])

    const AddNewSection = () => {
        setSections([...sections, 'New Section'])
    }
    return (
        <DashboardBase>
            <button to='/dashboard/tutor/courses/add-new/' onClick={() => { AddNewSection() }} className='bg-yellow-200 text-indigo-900 py-2 px-7 ml-auto block rounded text-lg font-bold cursor-pointer' >
                Add Section
                <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
            </button>
            <div className='bg-white rounded shadow border border-gray-200 my-10 px-10 py-8'>
                {
                    sections.map(item =>

                        <CourseSection title={item} />
                    )
                }
            </div>

        </DashboardBase>
    )
}

export default AddCourseContent