

import DashboardHeader from "./DashboardHeader"

const ContentBox = (props) =>{
    return(
        <div className='relative'>
            <DashboardHeader HeaderText={props.HeaderText ? props.HeaderText : 'Welcome To Dashboard'} />
        </div>
    )
}

export default ContentBox