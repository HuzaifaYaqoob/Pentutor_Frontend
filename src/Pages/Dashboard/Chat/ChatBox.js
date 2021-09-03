

import DashboardBase from '../DashboardBase'
import ContentBox from '../ContentBox'


const InboxCard = () => {
    return (
        <div className='flex items-center gap-7 mb-5'>
            <div className='w-12 h-12 overflow-hidden relative rounded-full'>
                <img src={process.env.PUBLIC_URL + '/images/img3.png'} alt="" />
            </div>
            <div className='border border-gray-300 px-3 py-2 rounded flex-1 shadow'>
                <p>maryam.safdar@gmail.com</p>
            </div>
        </div>
    )
}

const ChatBox = () => {
    return (
        <DashboardBase>
            <ContentBox HeaderText='Chat Box' />
            <div className='my-10'>

                <InboxCard />
                <InboxCard />
                <InboxCard />
                <InboxCard />
            </div>
        </DashboardBase>
    )
}


export default ChatBox