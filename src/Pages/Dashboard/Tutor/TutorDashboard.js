

import DashboardBase from "../DashboardBase"
import ContentBox from '../ContentBox'
import ContentBoxSubConent from "../ContentBoxSubContent"

import DashboardChart from "../DashboardChart"


const TutorDashboard = () =>{
    return(
        <DashboardBase activeUser='tutor'>
            <ContentBox/>
            <ContentBoxSubConent/>
            
            <DashboardChart color='#314866'/>
        </DashboardBase>
    )
}

export default TutorDashboard