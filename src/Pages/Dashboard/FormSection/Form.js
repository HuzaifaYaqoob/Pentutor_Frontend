

import { useEffect, useState } from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faTimes, faFile } from '@fortawesome/free-solid-svg-icons'


const InputLabel = (props) => {
    return (
        <p className='mb-2 capitalize text-sm'>{props.text}</p>
    )
}



export const TextArea = (props) => {
    return (
        <div className='flex-1 my-4'>
            <InputLabel text={props.Label} />
            <textarea
                placeholder={props.placeholder}
                className='w-full text-start outline-none p-2 border border-gray-200 rounded h-40 '
                value={props.value && props.value}
                onChange={(e) => {
                    props.onChange && props.onChange(e)
                }}
            >

            </textarea>
        </div>
    )
}

export const TextInput = ({ name, ...props }) => {
    return (
        <div className='flex-1'>
            <InputLabel text={props.Label} />
            <input
                type={props.type ? props.type : 'text'}
                name={name}
                placeholder={props.placeholder}
                className={`w-full outline-none p-2.5 border text-sm rounded-md ${props.error ? 'border-red-500 border-[1.5px]' : 'border-gray-200 '} ${props.className}`}
                value={props.value && props.value}
                onChange={(e) => {
                    props.onChange && props.onChange(e)
                }}
            />
        </div>
    )
}

export const EmailInput = (props) => {
    return (
        <div className='flex-1 '>
            <InputLabel text={props.Label} />
            <div className='flex border border-gray-200 rounded'>
                <input
                    type="email"
                    placeholder={props.placeholder}
                    className='w-full flex-1 text-start px-2 rounded my-0 outline-none py-2'
                    value={props.value && props.value}
                    onChange={(e) => {
                        props.onChange && props.onChange(e)
                    }}
                />
                {
                    props.verify &&
                    <button className='color-green rounded text-white text-xs py-0 block px-4'>Verify</button>
                }
            </div>
        </div>
    )
}


export const ContactNumberInput = (props) => {
    return (
        <div className='flex-1'>
            <InputLabel text={props.Label} />
            <div className='flex gap-5'>
                {/* <span className='pentutor-shadow px-3 text-sm flex items-center'>
                    +92
                </span> */}
                <div className='flex flex-1'>
                    <input
                        type="text"
                        placeholder='3********'
                        className='outline-none my-0 flex-1 p-2 border border-gray-200 rounded '
                        value={props.value && props.value}
                        name={props.name && props.name}
                        onChange={(e) => {
                            props.onChange && props.onChange(e)
                        }}
                    />
                    {/* <button className='color-green rounded text-white text-xs py-0 block px-4'>Verify</button> */}
                </div>
            </div>
        </div>
    )
}


export const DOBInput = (props) => {
    return (
        <div className='flex-1'>
            <InputLabel text={props.Label} />
            <input
                type="date"
                className='w-full bg-white outline-none p-2 border border-gray-200 rounded '
                value={props.value && props.value}
                onChange={(e) => {
                    props.onChange && props.onChange(e)
                }}
            />
        </div>
    )
}

export const TimeInput = (props) => {
    return (
        <div className='flex-1'>
            <InputLabel text={props.Label} />
            <input
                type="time"
                className='w-full bg-white outline-none p-2 border border-gray-200 rounded '
                value={props.value && props.value}
                onChange={(e) => {
                    props.onChange && props.onChange(e)
                }}
            />
        </div>
    )
}

export const DropDownItem = ({ label, value, onClick, ...props }) => {
    return (
        <p
            className='cursor-pointer hover:bg-gray-100 px-2 py-2'
            onClick={() => {
                onClick(value)
            }}
        >{label}</p>
    )
}


export const DropDownInput = (props) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    return (
        <div className='flex-1 relative'>
            <InputLabel text={props.Label} />
            <div className='relative'>
                <div className='flex items-center cursor-pointer px-2 border border-gray-200 rounded ' onClick={() => { setDropDownActive(!dropDownActive) }} s >
                    <p className='w-full text-center  text-gray-500 my-2'  >{props.value ? props.value : props.placeholder}</p>
                    {
                        dropDownActive ?
                            <FontAwesomeIcon icon={faTimes} className='absolute top-3 right-5 cursor-pointer ' onClick={() => { setDropDownActive(!dropDownActive) }} />
                            :
                            <FontAwesomeIcon icon={faChevronDown} className='absolute right-5 cursor-pointer' onClick={() => { setDropDownActive(!dropDownActive) }} />
                    }

                </div>
                {
                    dropDownActive &&
                    <div className='absolute w-full top-full bg-white py-3 px-1 pentutor-shadow z-50'>
                        {
                            props?.data?.map((item) => {
                                return (
                                    <DropDownItem
                                        label={item.label}
                                        value={item.value}
                                        onClick={
                                            (value) => {
                                                props.onChange && props.onChange(value)
                                                setDropDownActive(false)
                                            }
                                        }
                                    />
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}


export const RadioButtons = (props) => {
    return (
        <div className='flex-1 relative'>
            <InputLabel text={props.Label} />
            <div>
                {props.children}
            </div>
        </div>
    )
}


export const FileInput = (props) => {
    const [selected_file, setSelectedFile] = useState(undefined)

    useEffect(() => {
        if (props.value && typeof props.value != 'object') {
            setSelectedFile(props.value)
        }
    }, [props.value])


    return (
        <div className='h-full flex items-center justify-center'>
            <label
                className='capitalize cursor-pointer flex items-center justify-center'
                htmlFor={props.id && props.id}
            >
                {/* { props.Label } */}
                {
                    selected_file ?
                        <div className='w-[120px] h-[120px] rounded-full bg-center bg-cover bg-no-repeat border border-gray-200' style={{ backgroundImage: `url('${selected_file}')` }}></div>
                        :
                        <>
                            {
                                !props.remove_logo &&
                                <FontAwesomeIcon icon={faFile} className='text-6xl text-gray-400 block mx-auto my-10 cursor-pointer' />
                            }
                        </>
                }
                <p className='text-center my-3'>{props.label}</p>
            </label>
            <input
                type="file"
                id={props.id && props.id}
                onChange={(e) => {
                    props.onChange && props.onChange(e)
                    setSelectedFile(URL.createObjectURL(e.target.files[0]))
                }}
                accept={props.accept && props.accept}
                hidden
                value={''}
                name={props.name}
            />
        </div>
    )
}


const Form = ({ className, btnLoading, ...props }) => {
    return (
        <div className={`my-10 container ${className}`}>
            {props.children}
            <div className='flex items-center justify-end'>
                <button
                    disabled={btnLoading}
                    className='bg-indigo-900 py-2 px-5 mt-4 text-white rounded-md capitalize disabled:bg-gray-700 disabled:cursor-not-allowed'
                    onClick={() => {
                        props.onSubmit ? props.onSubmit() : alert('onSubmit Event Lister required')
                    }}
                >
                    {props.btnText}
                </button>
            </div>
        </div>
    )
}

Form.defaultProps = {
    btnLoading: false,
    onSubmit: () => { },
    btnText: 'Button'
}

export default Form