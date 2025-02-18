import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { apiBaseURL, get_jobs } from "../../redux/apiURLs";
import Cookies from "js-cookie";
import Moment from "react-moment";

const JobKeys = (props) => {
    return (
        <div className="flex items-center justify-between mb-3">
            <p className="font-bold capitalize">{props.data.property}:</p>
            <p className="font-medium">{props.data.value}</p>
        </div>
    );
};

const JobsCard = ({ job }) => {
    return (
        <div className="border border-[#CACBE6] rounded-lg bg-white">
            <div className="px-4 sm:px-5 py-5 text-center border-b border-[#CACBE6]">
                <h3 className="font-bold text-[#151E2C] text-xl">{job.title}</h3>
                <p className="text-[#111111] text-sm line-clamp-2 mt-1">{job.description}</p>
                <p className="bg-yellow-450 rounded px-4 text-sm font-medium py-1.5 text-white inline-block mt-4">
                    {job.method}
                </p>
                <span className="flex items-center justify-between text-[#151E2C] text-sm mt-5">
                    <p className="font-medium">Job ID: {job.id}</p>
                    <p>Posted: <Moment fromNow>{job.created_at}</Moment></p>
                </span>
            </div>
            <div className="px-4 sm:px-5 border-b border-[#CACBE6] mt-4">
                <JobKeys data={{'property' : 'Class', 'value' : job.class_teach}} />
                <JobKeys data={{'property' : 'Subject', 'value' : job.subject_teach}} />
                <JobKeys data={{'property' : 'Experience', 'value' : job.experience}} />
                <JobKeys data={{'property' : 'Salary', 'value' : `${job.salary} PKR`}} />
                <JobKeys data={{'property' : 'Prefered Gender', 'value' : job.gender}} />
                {
                    job.time && 
                    <JobKeys data={{'property' : 'Prefered Time', 'value' : job.time}} />
                }
                {
                    job.location && 
                    <JobKeys data={{'property' : 'Location', 'value' : job.location}} />
                }
                {job?.details?.map((detail, index) => (
                    <JobKeys key={index} data={detail} />
                ))}
            </div>
            <div className="py-2.5 text-center flex items-center justify-end px-3">
                <Link
                    to={{
                        pathname: `/jobs/job_details/${job?.id}`,
                        state: { job },
                    }}
                    className="bg-[#313D6A] text-white px-8 py-2.5 text-sm font-medium rounded-md"
                >
                    Apply
                </Link>
            </div>
        </div>
    );
};

const AvailableJobs = () => {
    const [jobs, setJobs] = useState([])
    console.log(jobs)

    const getAllJobs = async () =>{
        const response = await fetch(
            apiBaseURL + get_jobs,
            {
                headers: {'Authorization' : `Token ${Cookies.get('auth_token')}`}, 
            }
        )
        let result = await response.json()
        console.log(result)
        setJobs(result.data || [])

    }
    useEffect(() =>{
        getAllJobs()
    }, [])

    return (
        <div className="px-4 sm:px-6 md:px-8">
            <div className="max-w-[1300px] mx-auto my-5">
                <div className="flex items-center justify-center gap-4">
                    <div className="text-indigo-900">
                        <h1 className="font-bold text-3xl text-center">Available Jobs</h1>
                        <p className="font-medium text-center">Teaching / Other Jobs</p>
                    </div>
                </div>
                {jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                        {jobs.map((job) => (
                            <JobsCard key={job.id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 mt-10">
                        No jobs available.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AvailableJobs;
