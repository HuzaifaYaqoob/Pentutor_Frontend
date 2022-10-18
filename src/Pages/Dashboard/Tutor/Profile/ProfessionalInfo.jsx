import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import LineHeader from "../../../../components/LineHeading"
import Table from "../../../../components/Table"
import { CreateExperience, CreateQualification } from "../../../../redux/Actions/ProfileActions/ProfileActions"
import { TextInput } from "../../FormSection/Form"



const ProfesionalDetails = ({ data, onUpdateData }) => {
    const dispatch = useDispatch()
    const [add_new_qualification, setAddnew] = useState(false)
    const [add_exp, setAddExp] = useState(false)
    const [qualification_data, setQData] = useState({})
    const [exp_data, setExpData] = useState({})
    console.log(data)

    const add_qualification_handler = () => {
        dispatch(
            CreateQualification(
                qualification_data,
                (result) => {
                    setQData({})
                    setAddnew(false)
                    onUpdateData({
                        qualifications: [
                            ...data.qualifications,
                            result
                        ]
                    })
                    toast.success('Qualification added')
                },
                () => {
                    toast.error('Something went wrong')
                }
            )
        )
    }

    const add_experience_handler = () => {
        dispatch(
            CreateExperience(
                exp_data,
                (result) => {
                    setExpData({})
                    setAddExp(false)
                    onUpdateData({
                        experiences: [
                            ...data.experiences,
                            result
                        ]
                    })
                    toast.success('Experience added')
                },
                () => {
                    toast.error('Something went wrong')
                }
            )
        )
    }
    return (
        <>
            <div>
                <LineHeader
                    text={'Qualification'}
                    line={false}
                    btn={<p
                        className={`${add_new_qualification ? 'bg-gray-500' : 'bg-indigo-900'} text-white px-5 py-2 rounded-md cursor-pointer`}
                        onClick={() => {
                            setAddnew(!add_new_qualification)
                        }}
                    >{add_new_qualification ? 'Cancel' : 'Add New'}</p>}
                />
                <Table
                    header={['Degree', 'Subject', 'Passing year', 'institute']}
                    data={
                        data?.qualifications ?
                            data?.qualifications.map(itm => {
                                return [
                                    itm.degree,
                                    itm.subject,
                                    itm.institute,
                                    itm.passing_year,
                                ]
                            })
                            :
                            []
                    }
                />
                {
                    data?.qualifications?.length > 0 ?
                        <>
                            {
                                data?.qualifications?.map(qual => {

                                    return (
                                        <>

                                        </>
                                    )
                                })
                            }
                        </>
                        :
                        <><p className="text-center my-5">No Qualification</p></>
                }
                {
                    add_new_qualification &&
                    <div className="rounded-lg border border-gray-300 px-5 py-3 my-5">
                        <div className="flex items-center justify-between gap-5 mb-4">
                            <TextInput
                                Label='Your Degree'
                                placeholder='Enter Your Degree'
                                className='text-start'
                                value={qualification_data?.degree}
                                onChange={(e) => {
                                    setQData(
                                        {
                                            ...qualification_data,
                                            degree: e.target.value
                                        }
                                    )
                                }}
                            />
                            <TextInput
                                Label='Your Subject'
                                placeholder='Enter Your Subject'
                                className='text-start'
                                value={qualification_data?.subject}
                                onChange={(e) => {
                                    setQData(
                                        {
                                            ...qualification_data,
                                            subject: e.target.value
                                        }
                                    )
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            <TextInput
                                Label='Passing Year'
                                placeholder='Enter Your Passing year'
                                className='text-start'
                                value={qualification_data?.year}
                                onChange={(e) => {
                                    setQData(
                                        {
                                            ...qualification_data,
                                            year: e.target.value
                                        }
                                    )
                                }}
                            />
                            <TextInput
                                Label='Institute'
                                placeholder='Enter Your Institute'
                                className='text-start'
                                value={qualification_data?.institute}
                                onChange={(e) => {
                                    setQData(
                                        {
                                            ...qualification_data,
                                            institute: e.target.value
                                        }
                                    )
                                }}
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <p
                                className={`bg-indigo-900 text-white px-5 py-2 rounded-md cursor-pointer`}
                                onClick={() => {
                                    add_qualification_handler()
                                }}
                            >Submit</p>
                        </div>
                    </div>
                }
                <LineHeader
                    text={'Experience'}
                    line={false}
                    btn={<p
                        className={`${add_exp ? 'bg-gray-500' : 'bg-indigo-900'} text-white px-5 py-2 rounded-md cursor-pointer`}
                        onClick={() => {
                            setAddExp(!add_exp)
                        }}
                    >{add_exp ? 'Cancel' : 'Add Experience'}</p>}
                />
                <Table
                    header={['position', 'From', 'To', 'institute', 'Years']}
                    data={
                        data?.experiences ?
                            data?.experiences.map(itm => {
                                return [
                                    itm.position,
                                    itm.from_date,
                                    itm.to_date,
                                    itm.institute,
                                    itm.exprience_years,
                                ]
                            })
                            :
                            []
                    }
                />
                <div>
                    {
                        add_exp &&
                        <div className="rounded-lg border border-gray-300 px-5 py-3 my-5">
                            <div className="flex items-center justify-between gap-5 mb-4">
                                <TextInput
                                    Label='Your Postion'
                                    placeholder='Enter Your Position'
                                    className='text-start'
                                    value={exp_data?.position}
                                    onChange={(e) => {
                                        setExpData(
                                            {
                                                ...exp_data,
                                                position: e.target.value
                                            }
                                        )
                                    }}
                                />
                                <TextInput
                                    type='date'
                                    Label='Start Date'
                                    placeholder='Select stating date'
                                    className='text-start'
                                    value={exp_data?.from_date}
                                    onChange={(e) => {
                                        setExpData(
                                            {
                                                ...exp_data,
                                                from_date: e.target.value
                                            }
                                        )
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-between gap-5">
                                <TextInput
                                    type='date'
                                    Label='Ending Date'
                                    placeholder='Select Ending date'
                                    className='text-start'
                                    value={exp_data?.to_date}
                                    onChange={(e) => {
                                        setExpData(
                                            {
                                                ...exp_data,
                                                to_date: e.target.value
                                            }
                                        )
                                    }}
                                />
                                <TextInput
                                    Label='Institute'
                                    placeholder='Enter Your Institute'
                                    className='text-start'
                                    value={exp_data?.institute}
                                    onChange={(e) => {
                                        setExpData(
                                            {
                                                ...exp_data,
                                                institute: e.target.value
                                            }
                                        )
                                    }}
                                />
                            </div>
                            <TextInput
                                type='number'
                                Label='Year of Experience'
                                placeholder='Enter Your Experience'
                                className='text-start'
                                value={exp_data?.exprience_years}
                                onChange={(e) => {
                                    setExpData(
                                        {
                                            ...exp_data,
                                            exprience_years: e.target.value
                                        }
                                    )
                                }}
                            />
                            <div className="flex justify-end mt-4">
                                <p
                                    className={`bg-indigo-900 text-white px-5 py-2 rounded-md cursor-pointer`}
                                    onClick={() => {
                                        add_experience_handler()
                                    }}
                                >Submit</p>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default ProfesionalDetails