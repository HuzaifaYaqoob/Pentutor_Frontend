import { Link } from "react-router-dom/cjs/react-router-dom.min";

const JobKeys = (props) => {
    return (
        <div className="flex items-center justify-between mb-3">
            <p className="font-bold">{props.data.property}:</p>
            <p className="font-medium">{props.data.value}</p>
        </div>
    );
};

const JobsCard = ({ job }) => {
    return (
        <div className="shadow-lg rounded-lg bg-white">
            <div className="px-10 py-5 text-center">
                <h3 className="font-bold text-gray-700 mb-5">{job.title}</h3>
                <p className="bg-yellow-450 rounded px-4 py-1 text-white inline-block">
                    {job.type}
                </p>
                <p className="mt-5 text-gray-500">{job.description}</p>
                <span className="flex items-center justify-between text-gray-500 text-sm mt-5">
                    <p>Job ID: {job.id}</p>
                    <p>Posted {job.posted} Ago</p>
                </span>
            </div>
            <hr />
            <div className="my-10 px-10">
                {job.details.map((detail, index) => (
                    <JobKeys key={index} data={detail} />
                ))}
            </div>
            <hr />
            <div className="py-3 text-center flex items-center justify-end px-3">
                <Link
                    to={{
                        pathname: `/jobs/job_details`,
                        state: { job },
                    }}
                    className="bg-yellow-450 text-white px-8 py-2 rounded-lg"
                >
                    Apply
                </Link>
            </div>
        </div>
    );
};

const AvailableJobs = () => {
    const jobs = [
        {
            id: 1,
            title: "English Teacher Required for FSC-|| MSC",
            type: "Home Tutor",
            description: "Looking for a qualified and experienced English teacher to assist FSC students in Johar Town.",
            posted: "4 Days",
            details: [
                { property: "Qualification Required", value: "Masters" },
                { property: "Experience Required", value: "5 Years" },
                { property: "Location", value: "Johar Town" },
                { property: "Experience", value: "21 Years" },
                { property: "Salary", value: "18K-25K" },
            ],
        },
        {
            id: 2,
            title: "Mathematics Teacher for O-Level",
            type: "Part-Time",
            description: "A Mathematics teacher needed for O-Level students in Model Town. Flexible timings available.",
            posted: "9 Days",
            details: [
                { property: "Qualification Required", value: "Masters in Math" },
                { property: "Experience Required", value: "3 Years" },
                { property: "Location", value: "Model Town" },
                { property: "Experience", value: "15 Years" },
                { property: "Salary", value: "25K-30K" },
            ],
        },
        {
          id: 3,
          title: "Frontend We Developer",
          type: "Full Time",
          description: "A Senior Frontend We Developer needed for our companby in Model Town. Flexible timings available.",
          posted: "6h",
          details: [
              { property: "Qualification Required", value: "Masters in Codding" },
              { property: "Experience Required", value: "3 Years" },
              { property: "Location", value: "Model Town" },
              { property: "Experience", value: "3 Years" },
              { property: "Salary", value: "70K-90K" },
          ],
      },
    ];

    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-center gap-4">
                <div className="text-indigo-900">
                    <h1 className="font-bold text-3xl">Available Jobs</h1>
                    <p className="text-lg font-light">Teaching / Other Jobs</p>
                </div>
                <div className="bg-indigo-900 text-white rounded-lg py-2 px-5">Post Job</div>
            </div>
            {jobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 my-10">
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
    );
};

export default AvailableJobs;
