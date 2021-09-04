
import React from 'react'

import DashboardBase from "../DashboardBase"
import ContentBox from "../ContentBox"
import useTitle from "../../../Hooks/useTitle"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ChatMessage = (props) => {
    return (
        <div className={'flex items-start gap-4 py-1 mb-3 ' + (props.right ? 'flex-row-reverse' : 'flex-row')}>
            <span className='w-10 h-10 rounded-full overflow-hidden block'>
                <img src={process.env.PUBLIC_URL + '/images/img3.png'} alt="" />
            </span>
            <p className={'py-1 px-3 rounded-md shadow bg-white border border-gray-100 ' + (props.right ? 'rounded-tr-none' : 'rounded-tl-none')}>{props.text}</p>
        </div>
    )
}


const Inbox = () => {
    useTitle('Inbox')
    const [input_msg, setInputMessage] = React.useState('')
    const [messages, setMessages] = React.useState(
        [
            { msg: 'Hello', itself: true },
            { msg: 'Hi', itself: false },
            { msg: 'How are you doing', itself: true },
            { msg: 'I"m Good', itself: false },
            { msg: 'Hope You also doing well.', itself: false },
        ]
    )
    const SubmitMessage = () => {
        setMessages([...messages, { msg: input_msg, itself: true }])
    }
    return (
        <DashboardBase>

            <div className='w-full h-full flex flex-col'>
                <ContentBox HeaderText='Chats' />
                <div className='w-full flex-grow flex flex-col bg-white shadow rounded-lg'>
                    <div className='p-5 flex-grow overflow-y-scroll relative'>
                        {
                            messages.map((item) => <ChatMessage text={item.msg} right={item.itself ? true : false} />)
                        }
                    </div>
                    <div className='border border-gray-200 py-2 w-full rounded flex items-center gap-5 px-5'>
                        <div className='flex-1 px-5'>
                            <input className='w-full outline-none ' type="text" placeholder='Enter Message...' onChange={(event) => { setInputMessage(event.target.value) }} />
                        </div>
                        <span className='text-gray-600 cursor-pointer' onClick={() => { SubmitMessage() }}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </span>
                    </div>
                </div>

            </div>
        </DashboardBase>
    )
}

export default Inbox