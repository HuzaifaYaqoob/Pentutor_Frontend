
import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPlusCircle } from "@fortawesome/free-solid-svg-icons"

import DashboardBase from "../../DashboardBase"
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createChapterVideo, createCourseChapter } from '../../../../redux/Actions/CourseActions/CourseActions'


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


const CourseSection = ({ data, onVideoAdd }) => {
    const [dropDownActive, setDropDownActive] = React.useState(false)
    const [selected_file, setSelectedFile] = useState(undefined)
    const dispatch = useDispatch()

    const AddNewVideo = () => {
        if (selected_file) {
            dispatch(
                createChapterVideo(
                    { chapter: data.slug, video: selected_file },
                    (result) => {
                        setSelectedFile(undefined)
                        onVideoAdd && onVideoAdd(result)
                    },
                    () => {
                        setSelectedFile(undefined)
                    }
                )
            )
        }
    }

    return (
        <div className='my-5'>
            <div className='bg-white rounded border border-gray-200 px-2 shadow text-xs text-gray-600 flex gap-8 cursor-pointer items-center' onClick={() => { setDropDownActive(!dropDownActive) }}>
                <FontAwesomeIcon icon={faPlay} className={'transition-all ' + (dropDownActive ? 'rotate-90 transform' : '')} />
                <p className='p-3 block w-full outline-none'>{data.title}</p>
            </div>
            {
                dropDownActive ?
                    <div className='my-3' >
                        {
                            data.videos?.map((vid, index) => {
                                return (
                                    <AddVideo />
                                )
                            })
                        }
                        <div className='flex items-center justify-between text-sm'>
                            <label htmlFor={data.slug} onClick={() => { AddNewVideo() }} className='flex items-center gap-2 bg-indigo-900 text-white rounded py-1 px-3 cursor-pointer'>
                                <FontAwesomeIcon icon={faPlusCircle} />
                                Add Video
                            </label>
                            <input
                                type={'file'}
                                id={data.slug}
                                className='hidden'
                                accept='.mp4,.MP4,.mkv,.MKV'
                                onChange={(e) => {
                                    setSelectedFile(e.target.files[0])
                                }}
                            />
                        </div>
                    </div>
                    :
                    <>
                    </>
            }
        </div>
    )
}


const AddCourseContent = (props) => {
    const [sections, setSections] = React.useState([])
    const [title, setTitle] = useState('Discussion')
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    console.log(params)

    const AddNewSection = () => {
        dispatch(createCourseChapter(
            { course: params.course_id, title: `Chapter ${sections.length + 1} : ${title}` },
            (result) => {
                setSections([
                    ...sections,
                    result
                ])
            }
        ))
    }

    useEffect(() => {
        if (params.course_id) {

        }
        else {
            history.goBack()
        }
    }, [params.course_id])

    return (
        <DashboardBase>
            <button
                to='/dashboard/tutor/courses/add-new/'
                onClick={() => { AddNewSection() }}
                className='bg-yellow-200 text-indigo-900 py-2 px-7 ml-auto block rounded text-lg font-bold cursor-pointer'
            >
                Add Section
                <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
            </button>
            <div className='bg-white rounded shadow border border-gray-200 my-10 px-10 py-8'>
                {
                    sections.map(chapter =>

                        <CourseSection data={chapter} />
                    )
                }
            </div>

        </DashboardBase>
    )
}

export default AddCourseContent