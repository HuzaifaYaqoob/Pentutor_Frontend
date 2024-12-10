import { Link } from "react-router-dom/cjs/react-router-dom.min"
import DashboardBase from "../../DashboardBase"
import { useEffect, useState } from "react"
import { apiBaseURL, get_video_sessions } from "../../../../redux/apiURLs"
import Cookies from "js-cookie"




const UpcommingClassesPage = () => {
    const [data, setData] = useState([])
    console.log(data)

    const getVideoSessions = async () =>{
        const response = await fetch(
            apiBaseURL + get_video_sessions,
            {headers: {'Authorization' : `Token ${Cookies.get('auth_token')}`}}
        )
        let results = await response.json()
        setData(results?.response?.data || [])

    }

    useEffect(() =>{
        getVideoSessions()
    }, [])
    return (
        <>
            <DashboardBase >
                <div className="">
                    <div>
                        <h3 className="text-2xl font-medium ">Upcomming Classes</h3>
                    </div>
                    <div className="mt-10">
                        <div className="relative overflow-x-auto sm:rounded-lg border">
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            User
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Date
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Start Time
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                End Time
                                            </div>
                                        </th>
                                        {/* <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Category
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Price
                                            </div>
                                        </th> */}
                                        <th scope="col" className="px-6 py-3">
                                            <span className="flex items-center">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((itm, index) =>{
                                            return (
                                                <tr className="bg-white border-b ">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {itm.name}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {itm.partner || '--'}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {itm.date}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {itm.start_time}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {itm.end_time}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {
                                                            itm?.start_meeting ? 
                                                                <Link to='#' className="font-medium text-blue-600 hover:underline">
                                                                    Join
                                                                </Link>
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
        </>
    )
}

export default UpcommingClassesPage