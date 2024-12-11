

import DashboardBase from "../DashboardBase"
import ContentBox from '../ContentBox'
import ContentBoxSubConent from "../ContentBoxSubContent"

const StudentDashboard = () =>{
    return(
        <DashboardBase activeUser='student'>
            <ContentBox HeaderText='Welcome to Student Portal' />
            <ContentBoxSubConent/>
            
        </DashboardBase>
    )
}

export default StudentDashboard