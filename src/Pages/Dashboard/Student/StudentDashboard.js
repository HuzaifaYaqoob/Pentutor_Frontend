

import DashboardBase from "../DashboardBase"
import ContentBox from '../ContentBox'
import ContentBoxSubConent from "../ContentBoxSubContent"

const StudentDashboard = () =>{
    return(
        <DashboardBase activeUser='student'>
            <ContentBox/>
            <ContentBoxSubConent/>
            
        </DashboardBase>
    )
}

export default StudentDashboard