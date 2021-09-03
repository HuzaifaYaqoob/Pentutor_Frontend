

const JobKeys = (props) =>{
    return(
        <div className='flex items-center justify-between mb-3'>
            <p className='font-bold'>{props.data.property}:</p>
            <p className='font-medium'>{props.data.value}</p>
        </div>
    )
}


const JobsCard = () =>{
    return(
        <div className='shadow-lg rounded-lg bg-white'>
            <div className='px-16 py-5 text-center'>
                <h3 className='font-bold text-gray-700 mb-10'>English Teacher Required for FSC-||</h3>
                <p className='bg-yellow-450 rounded px-4 py-1 text-white inline-block'>Home Tutor</p>
                <span className='flex items-center justify-between text-gray-500 text-sm mt-5'>
                    <p>Job ID: 49</p>
                    <p>Posted 4 Days Ago</p>
                </span>
            </div>
            <hr />
            <div className='my-10 px-10'>
                <JobKeys data={{property : 'Qualification Rquired' , value:'Masters'}} />
                <JobKeys data={{property : 'Experiene Rquired' , value:'5 Years'}} />
                <JobKeys data={{property : 'Location' , value:'Johar Town'}} />
                <JobKeys data={{property : 'Experience' , value:'21 Years'}} />
                <JobKeys data={{property : 'Salary' , value:'18K-25K'}} />
            </div>
            <hr />
            <div className='my-5 text-center'>
                <button className='bg-yellow-450 text-white px-8 py-2 rounded-lg'>Apply</button>
            </div>
        </div>
    )
}


const AvailableJobs = () =>{
    return(
        <div className='container mx-auto my-5'>
            <div className='flex items-center justify-center gap-4'>
                <div className='text-indigo-900'>
                    <h1 className='font-bold text-3xl'>Available Jobs</h1>
                    <p className='text-lg font-light'>Teaching / Other Jobs</p>
                </div>
                <div className='bg-indigo-900 text-white rounded-lg py-2 px-5'>
                    Post Job
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-6 my-10'>
                <JobsCard/>
                <JobsCard/>
                <JobsCard/>
                <JobsCard/>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <div className='text-indigo-900'>
                    <h1 className='font-bold text-3xl'>Available Jobs</h1>
                    <p className='text-lg font-light'>Online / Home Tution Jobs</p>
                </div>
                <div className='bg-indigo-900 text-white rounded-lg py-2 px-5'>
                    Post Job
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-6 my-10'>
                <JobsCard/>
                <JobsCard/>
            </div>
        </div>
    )
}



export default AvailableJobs