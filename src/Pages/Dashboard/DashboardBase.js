

import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import Header from '../../components/Header/Header'

const DashboardBase = (props) => {
    return (
        <>
        <Header/>
            <div className='px-4 sm:px-6 md:px-8 py-5 flex gap-5 sm:gap-6 lg:gap-10 relative'>
                <SideBar activeUser={props.activeUser} />
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