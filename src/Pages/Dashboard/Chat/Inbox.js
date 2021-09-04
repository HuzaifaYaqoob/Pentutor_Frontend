

import DashboardBase from "../DashboardBase"
import ContentBox from "../ContentBox"
import useTitle from "../../../Hooks/useTitle"

const Inbox = () => {
    useTitle('Inbox')
    return (
        <DashboardBase>

            <div className='w-full h-full flex flex-col'>
                <ContentBox HeaderText='Chats' />
                <div className='w-full flex-grow bg-white shadow rounded-lg'>

                </div>

            </div>
        </DashboardBase>
    )
}

export default Inbox