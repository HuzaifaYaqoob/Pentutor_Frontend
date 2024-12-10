import { useEffect, useState } from "react"
import DashboardBase from "../../DashboardBase"
import { apiBaseURL, get_tutor_demo_classes_requests, accept_reject_demo_class } from "../../../../redux/apiURLs"
import Cookies from "js-cookie"
import Moment from "react-moment"
import { toast } from "react-toastify"



const DemoClassPage = () => {
    const [requests, setRequests] = useState([])

    const AcceptRejectClassRequest = async (id , slot, status) =>{
        let tid = toast.loading('Please wait...')
        const response = await fetch(
            apiBaseURL + accept_reject_demo_class + `${id}/?status=${status}&slot=${slot}`,
            {headers: {'Authorization' : `Token ${Cookies.get('auth_token')}`}, method : 'POST'}
        )
        let status_code = response?.status
        
        let result = response.json()

        if (status_code == '200'){
            toast.update(tid, {
                render : 'Demo Class Request Updated',
                type : 'success',
                isLoading : false
            })
        }
        else{
            toast.update(tid, {
                render : 'Something went wrong',
                type : 'error',
                isLoading : false
            })
        }
    }

    const getRequest = async () => {
        const response = await fetch(
            apiBaseURL + get_tutor_demo_classes_requests,
            {headers: {'Authorization' : `Token ${Cookies.get('auth_token')}`}}
        )
        let results = await response.json()
        console.log(results)
        setRequests(results?.response?.data || [])
    }

    useEffect(() => {
        // get_my_courses
        getRequest()
    }, [])
    return (
        <DashboardBase>
            <div className='py-5'>
                <div className="mb-3">
                    <h3 className="text-2xl font-medium ">Demo Classes Requests</h3>
                </div>
                <div>
                    <div className="relative overflow-x-auto border sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Request By
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Requested At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Video Room
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    requests?.map((item, index) => {
                                        return (
                                            <tr className="odd:bg-white even:bg-gray-50 border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {item?.user?.first_name} {item?.user?.last_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {item?.time?.date}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.time?.time}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.status}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.created_at ? <Moment fromNow>{item?.created_at}</Moment>: ''}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.video_room}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        item?.status == 'Requested' ? 
                                                        <div className="gap-5 flex">
                                                            <a onClick={()=>{AcceptRejectClassRequest(item?.id, item?.time?.id, 'Accepted')}} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Accept</a>
                                                            <a onClick={()=>{AcceptRejectClassRequest(item?.id, item?.time?.id, 'Rejected')}} href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Reject</a>
                                                        </div>
                                                        :
                                                        '--'
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardBase>
    )
}

export default DemoClassPage