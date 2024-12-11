import { useEffect, useState } from "react"
import DashboardBase from "../../DashboardBase"
import { apiBaseURL, get_student_demo_classes_requests } from "../../../../redux/apiURLs"
import Cookies from "js-cookie"
import Moment from "react-moment"



const DemoClassRequestStudentPage = () =>{
    const [requests, setRequests] = useState([])

    const getRequest = async () => {
        const response = await fetch(
            apiBaseURL + get_student_demo_classes_requests,
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
        <>
            <DashboardBase>
                <div className="mb-3">
                    <h3 className="text-2xl font-medium ">Demo Classes Requests</h3>
                </div>
                <div>
                    <div className="relative overflow-x-auto border sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Tutor
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    requests?.map((item, index) => {
                                        return (
                                            <tr className="odd:bg-white even:bg-gray-50 border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {item?.tutor_id}
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
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardBase>
        </>
    )
}

export default DemoClassRequestStudentPage