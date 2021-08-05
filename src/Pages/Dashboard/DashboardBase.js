

import { Link } from 'react-router-dom'
import SideBar from './SideBar'

const DashboardBase = (props) => {
    return (
        <>
            <div className='p-5 flex gap-10 pr-20 relative'>
                <SideBar />
                <div className='flex-1'>
                    {props.children}
                </div>
            </div>
            <Link to='/dashboard/student/'>GO to student dashboard</Link><br />
            <Link to='/dashboard/tutor/'>GO to tutor dashboard</Link><br />
            <Link to='/dashboard/super-admin/'>GO to admin dashboard</Link>
        </>
    )
}

export default DashboardBase