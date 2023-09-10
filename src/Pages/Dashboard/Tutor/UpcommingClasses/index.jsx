import { Link } from "react-router-dom/cjs/react-router-dom.min"
import DashboardBase from "../../DashboardBase"




const UpcommingClassesPage = () => {
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
                                            User
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Date/Time
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
                                    <tr className="bg-white border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            PT-USER-0001
                                        </th>
                                        <td className="px-6 py-4">
                                            02-02-2023/11:00 AM
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Link to='#' className="font-medium text-blue-600 hover:underline">
                                                Join
                                            </Link>
                                        </td>
                                    </tr>
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