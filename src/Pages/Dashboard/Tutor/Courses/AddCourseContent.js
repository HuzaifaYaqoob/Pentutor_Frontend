
import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPlusCircle } from "@fortawesome/free-solid-svg-icons"

import DashboardBase from "../../DashboardBase"
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createChapterVideo, createCourseChapter, deleteCourseChapter, deleteCourseChapterVideo, getSingleCourse } from '../../../../redux/Actions/CourseActions/CourseActions'
import Popup from '../../../../components/Popup'
import Form, { TextInput } from '../../FormSection/Form'


const VideoCard = ({ data, onDeleteClick, deleting }) => {

    return (
        <div className='rounded border border-gray-200 my-2 py-1 pr-5 pl-1 flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <div
                    className='w-[80px] h-[80px] border border-gray-200 bg-center bg-cover bg-no-repeat'
                    style={{
                        backgroundImage: `url('${data.vid_thumbnail}')`
                    }}
                ></div>
                <p className='outline-none flex-1' placeholder='Add Video Title' >{data.title}</p>
            </div>
            {
                deleting ?
                    <span>deleting...</span>
                    :
                    <span
                        className='text-red-600 cursor-pointer'
                        onClick={() => {
                            onDeleteClick()
                        }}
                    >
                        Delete
                    </span>
            }
        </div>
    )
}


const CourseSection = ({ data, onVideoAdd, onDeleteVideo, onDeleteChapter }) => {
    const [dropDownActive, setDropDownActive] = React.useState(false)
    const [selected_file, setSelectedFile] = useState(undefined)
    const [uploading, setUploading] = useState(false)
    const [deleting_chpt, setDeletingChptr] = useState(undefined)
    const [deleting, setDeleting] = useState(undefined)
    const dispatch = useDispatch()

    const AddNewVideo = () => {
        if (selected_file) {
            setUploading(true)
            dispatch(
                createChapterVideo(
                    { chapter: data.slug, video: selected_file, title: selected_file.name },
                    (result) => {
                        setSelectedFile(undefined)
                        onVideoAdd && onVideoAdd(result)
                        setUploading(false)
                    },
                    () => {
                        setSelectedFile(undefined)
                        setUploading(false)
                    }
                )
            )
        }
    }

    const DeleteChapter = () => {
        setDeletingChptr(true)
        dispatch(
            deleteCourseChapter(
                { id: data.slug },
                () => {
                    onDeleteChapter && onDeleteChapter()
                    setDeletingChptr(false)
                },
                () => {
                    setDeletingChptr(false)
                }
            )
        )
    }

    const DeleteVideo = (id) => {
        setDeleting(id)
        dispatch(
            deleteCourseChapterVideo(
                { id: id },
                () => {
                    onDeleteVideo(id)
                    setDeleting(undefined)
                },
                () => {
                    setDeleting(undefined)
                }
            )
        )
    }

    useEffect(() => {
        if (selected_file) {
            AddNewVideo()
        }
    }, [selected_file])

    return (
        <div className='my-5'>
            <div className='bg-white rounded border border-gray-200 px-2 shadow text-xs text-gray-600 flex justify-between  items-center'
            >
                <div className='flex items-center justify-between w-full px-4 gap-8'>
                    <div
                        className='flex items-center gap-8 cursor-pointer'
                        onClick={() => { setDropDownActive(!dropDownActive) }}
                    >
                        <FontAwesomeIcon icon={faPlay} className={'transition-all ' + (dropDownActive ? 'rotate-90 transform' : '')} />
                        <p className='p-3 block w-full outline-none'>{data.title}</p>
                    </div>
                    {
                        deleting_chpt ?
                            <>
                                <span>Deleting...</span>
                            </>
                            :
                            <span
                                className='text-red-600 cursor-pointer'
                                onClick={() => {
                                    DeleteChapter()
                                }}
                            >Delete</span>
                    }
                </div>
            </div>
            {
                dropDownActive ?
                    <div className='my-3' >
                        {
                            data.video?.map((vid, index) => {
                                return (
                                    <VideoCard
                                        data={vid}
                                        key={index}
                                        onDeleteClick={() => { DeleteVideo(vid.slug) }}
                                        deleting={deleting && deleting == vid.slug ? true : false}
                                    />
                                )
                            })
                        }
                        <div className='flex items-center justify-end text-sm'>
                            <label
                                htmlFor={data.slug}
                                className={`flex items-center gap-2 text-white rounded py-1 px-3  ${uploading ? 'bg-gray-500 cursor-not-allowed' : 'cursor-pointer bg-indigo-900 '}`}
                            >
                                {
                                    uploading ?
                                        <p>Uploading...</p>
                                        :
                                        <>
                                            <FontAwesomeIcon icon={faPlusCircle} />
                                            Add Video
                                        </>
                                }
                            </label>
                            <input
                                disabled={uploading}
                                type={'file'}
                                id={data.slug}
                                className='hidden'
                                accept='.mp4,.MP4,.mkv,.MKV'
                                value={''}
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
    const [title, setTitle] = useState('Discussion')
    const [course_data, setCourseData] = useState(undefined)
    const [title_popup, setTitlePopup] = useState(false)
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    const AddNewSection = () => {
        dispatch(createCourseChapter(
            { course: params.course_id, title: `${title}` },
            (result) => {
                setTitlePopup(false)
                setCourseData({
                    ...course_data,
                    chapter: [
                        ...course_data.chapter,
                        result
                    ]
                })
            },
            () => {
                setTitlePopup(false)
            }
        ))
    }


    useEffect(() => {
        if (params.course_id) {
            getSingleCourse(
                { id: params.course_id },
                (result) => {
                    setCourseData(result)
                },
                () => {
                    history.goBack()
                }
            )
        }
        else {
            history.goBack()
        }
    }, [params.course_id])

    const handleAddNewVideo = (chapter_id, data) => {
        setCourseData({
            ...course_data,
            chapter: [
                ...course_data.chapter.map(chpt => {
                    if (chpt.slug == chapter_id) {
                        return {
                            ...chpt,
                            video: [
                                ...chpt.video,
                                data
                            ]
                        }
                    }
                    return chpt
                })
            ]
        })
    }

    const handleDeleteVideo = (chapter_id, vid_id) => {
        setCourseData({
            ...course_data,
            chapter: [
                ...course_data.chapter.map(chptr => {
                    if (chptr.slug == chapter_id) {
                        return {
                            ...chptr,
                            video: [
                                ...chptr.video.filter(vid => vid.slug != vid_id)
                            ]
                        }
                    }
                    return chptr
                })
            ]
        })

    }

    return (
        <DashboardBase>
            <button
                to='/dashboard/tutor/courses/add-new/'
                onClick={() => { setTitlePopup(true) }}
                className='bg-yellow-200 text-indigo-900 py-2 px-7 ml-auto block rounded text-lg font-bold cursor-pointer'
            >
                Add Section
                <FontAwesomeIcon className='ml-2' icon={faPlusCircle} />
            </button>
            {
                course_data && course_data.chapter &&
                course_data.chapter.length > 0 &&
                <div className='bg-white rounded shadow border border-gray-200 my-10 p-3'>
                    {
                        course_data.chapter.map((chapter, index) => {
                            return (
                                <CourseSection
                                    data={chapter}
                                    key={index}
                                    onDeleteVideo={(video_id) => {
                                        handleDeleteVideo(chapter.slug, video_id)
                                    }}
                                    onVideoAdd={(data) => { handleAddNewVideo(chapter.slug, data) }}
                                    onDeleteChapter={() => {
                                        setCourseData({
                                            ...course_data,
                                            chapter: [
                                                ...course_data.chapter.filter(itm => itm.slug != chapter.slug)
                                            ]
                                        })
                                    }}
                                />
                            )
                        })
                    }
                </div>
            }
            {
                title_popup &&
                <Popup
                    heading='Add Chapter Title'
                    onclose={() => {
                        setTitlePopup(false)
                    }}
                >
                    <div>
                        <Form
                            btnText='Submit'
                            onSubmit={() => {
                                AddNewSection()
                            }}
                        >
                            <TextInput
                                className='text-start'
                                placeholder='Enter Title'
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                        </Form>
                    </div>
                </Popup>
            }
        </DashboardBase>
    )
}

export default AddCourseContent