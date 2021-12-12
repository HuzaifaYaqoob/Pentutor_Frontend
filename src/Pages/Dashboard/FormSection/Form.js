

import { useState } from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faTimes, faFile } from '@fortawesome/free-solid-svg-icons'


const InputLabel = (props) => {
    return (
        <p className='mb-3 capitalize'>{props.text}</p>
    )
}



export const TextInput = (props) => {
    return (
        <div className='flex-1'>
            <InputLabel text={props.Label} />
            <input type='text' placeholder={props.placeholder} className='w-full pentutor-shadow text-center outline-none py-2 ' />
        </div>
    )
}

export const EmailInput = (props) => {
    return (
        <div className='flex-1'>
            <InputLabel text={props.Label} />
            <div className='flex pentutor-shadow '>
                <input type="email" placeholder={props.placeholder} className='w-full flex-1 text-center my-0 outline-none py-2' />
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
                <div className='flex pentutor-shadow flex-1'>
                    <input type="text" placeholder='3********' className='outline-none my-0 flex-1 py-2 px-2' />
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
            <input type="date" className='w-full bg-white pentutor-shadow outline-none py-2 px-2' />
        </div>
    )
}


export const DropDownInput = (props) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    return (
        <div className='flex-1 relative'>
            <InputLabel text={props.Label} />
            <div className='relative'>
                <div className='pentutor-shadow flex items-center cursor-pointer' onClick={() => { setDropDownActive(!dropDownActive) }} s >
                    <p className='w-full text-center  text-gray-500 my-2'  >{props.placeholder}</p>
                    <FontAwesomeIcon icon={faChevronDown} className='absolute right-5 cursor-pointer' onClick={() => { setDropDownActive(!dropDownActive) }} />
                </div>
                {
                    dropDownActive &&
                    <div className='absolute w-full top-0 bg-white py-3 px-4 pentutor-shadow'>
                        {
                            props.data.map((item) => {
                                return (
                                    <p>{item}</p>
                                )
                            })
                        }
                        <FontAwesomeIcon icon={faTimes} className='absolute top-3 right-5 cursor-pointer ' onClick={() => { setDropDownActive(!dropDownActive) }} />
                    </div>
                }
            </div>
        </div>
    )
}


export const FileInput = (props) => {
    return (
        <div>
            <label
                className='mb-3 capitalize'
                htmlFor={props.id && props.id}
            >
                {props.Label}
                <FontAwesomeIcon icon={faFile} className='text-7xl text-gray-400 block mx-auto my-10 cursor-pointer' />
            </label>
            <input
                type="file"
                id={props.id && props.id}
                onChange={props.onChange && props.onChange}
                accept={props.accept && props.accept}
                hidden

            />
        </div>
    )
}


const Form = ({ className, ...props }) => {
    return (
        <div className={`my-10 container ${className}`}>
            {props.children}
            <div>
                <button className='color-green py-2 px-5 text-lg text-white rounded capitalize' >{props.btnText}</button>
            </div>
        </div>
    )
}


export default Form