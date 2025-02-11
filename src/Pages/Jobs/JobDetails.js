import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faCalendarAlt, faCheckCircle, faFile, faCheck } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import { TextInput, TextArea } from "../Dashboard/FormSection/Form";
import { apiBaseURL, apply_job, get_single_job } from "../../redux/apiURLs";
import Cookies from "js-cookie";
import Moment from "react-moment";

const JobKeys = ({ data }) => {
    return (
        <div className="flex items-center justify-between mb-3 gap-1">
            <p className="font-bold capitalize">{data.property}:</p>
            <p className="font-medium">{data.value}</p>
        </div>
    );
};

const JobDetails = (props) => {
    const location = useLocation();
    const [job, setJob] = useState({});
    const { job_id } = props?.match?.params;
    console.log(job_id);

    const [formData, setFormData] = useState({
        message: "",
        resume: null,
    });

    const [formErrors, setFormErrors] = useState({
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [field]: "",
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.message.trim()) {
            errors.message = "Cover letter is required.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleApplyJob = async () => {
        if (validateForm()) {
            setIsSubmitted(true);
            let form_data = new FormData();
            form_data.append('message', formData.message);
            if (formData.resume) {
                form_data.append('resume', formData.resume);
            }

            const response = await fetch(
                apiBaseURL + apply_job + `${job_id}/`,
                {
                    headers: { 'Authorization': `Token ${Cookies.get('auth_token')}` },
                    method: 'POST',
                    body: form_data,
                }
            );
            const result = await response.json();
            if (response.status === 200) {
                toast.success("Job application submitted successfully!");
            }
            setFormData({
                message: "",
                resume: null,
            });
        } else {
            toast.error("Please fill in all the required fields.");
        }
    };

    const getSingleJob = async () => {
        const response = await fetch(
            apiBaseURL + get_single_job + `${job_id}/`,
            {
                headers: { 'Authorization': `Token ${Cookies.get('auth_token')}` },
            }
        );
        const result = await response.json();
        console.log(result);
        setJob(result || {});
    };

    useEffect(() => {
        if (job_id) {
            getSingleJob();
        }
    }, [job_id]);

    return (
        <main>
            <section className="w-full bg-indigo-900 py-12 px-4 sm:px-6 md:px-8">
                <div className="max-w-[1300px] mx-auto my-5">
                    {job ? (
                        <>
                            <h3 className="text-white font-semibold text-3xl text-center max-w-[400px] mx-auto">
                                {job.title}
                            </h3>
                            <p className="text-white text-sm text-center mt-5 max-w-[600px] mx-auto">
                                {job.description}
                            </p>
                            <div className="text-white mt-12 max-w-[900px] mx-auto grid sm:grid-cols-2 gap-3">
                                <p className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faIdBadge} className="mr-3" />
                                    <span>Gender: {job.gender}</span>
                                </p>
                                <p className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                                    <span>Posted At: <Moment fromNow>{job.posted}</Moment></span>
                                </p>
                                <p className="flex">
                                  <JobKeys data={{ 'property': 'Class', 'value': job.class_teach }} />
                                </p>
                                <p className="flex">
                                  <JobKeys data={{ 'property': 'Subject', 'value': job.subject_teach }} />
                                </p>
                                <p className="flex">
                                  <JobKeys data={{ 'property': 'Experience', 'value': job.experience }} />
                                </p>
                                <p className="flex">
                                  <JobKeys data={{ 'property': 'Salary', 'value': `${job.salary} PKR` }} />
                                </p>
                                <p className="flex">
                                  <JobKeys data={{ 'property': 'Preferred Gender', 'value': job.gender }} />
                                </p>
                                <p className="flex">
                                  {job.time && <JobKeys data={{ 'property': 'Preferred Time', 'value': job.time }} />}
                                </p>
                                <p className="flex">
                                  {job.location && <JobKeys data={{ 'property': 'Location', 'value': job.location }} />}
                                </p>
                                <p className="flex">
                                  {job?.details?.map((detail, index) => (
                                      <p key={index} className="mb-2 flex items-center">
                                          <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                                          <span>{detail.property}: {detail.value}</span>
                                      </p>
                                  ))}
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <FontAwesomeIcon
                                icon={faFile}
                                className="text-5xl text-gray-400 block mx-auto my-5 cursor-pointer"
                            />
                            <h3 className="text-white font-semibold text-2xl">No job details available.</h3>
                        </div>
                    )}
                </div>
            </section>
            <div className="px-4 sm:px-6 md:px-8">
                <section className="max-w-[900px] mx-auto py-10 space-y-5">
                    {!isSubmitted ? (
                        <>
                            <h3 className="text-2xl font-semibold text-center">Apply for this Job</h3>
                            <div className="space-y-3">
                                <div>
                                    <TextArea
                                        Label="Cover Letter"
                                        placeholder="Write a short cover letter"
                                        value={formData.message}
                                        onChange={(e) => handleInputChange("message", e.target.value)}
                                        error={formErrors.message || ""}
                                        className='resize-none'
                                    />
                                </div>
                                <div className="space-y-1.5 cursor-pointer">
                                    <label htmlFor="resume" className="block font-medium text-sm">Resume (Optional)</label>
                                    <div className="relative border text-sm border-gray-200 p-2.5 w-full rounded-lg font-medium cursor-pointer flex items-center">
                                        <FontAwesomeIcon
                                            icon={faFile}
                                            className="mr-2 text-gray-500 text-lg"
                                        />
                                        <p className="inline-block">
                                            {formData.resume ? formData.resume.name : "Upload Resume"}
                                        </p>
                                        <input
                                            type="file"
                                            id="resume"
                                            name="resume"
                                            accept=".pdf,.doc,.docx,.txt"
                                            onChange={(e) => handleInputChange("resume", e.target.files[0])}
                                            className="opacity-0 absolute h-full w-full inset-0 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleApplyJob}
                                className="bg-indigo-900 select-none text-white py-2 px-7 ml-auto block rounded-md text-lg font-semibold cursor-pointer"
                            >
                                Apply Now
                            </button>
                        </>
                    ) : (
                        <div className="text-center border border-[#CACBE6] rounded-xl px-4 py-8 space-y-3 max-w-[510px] w-full mx-auto">
                            <div className="rounded-full bg-green-500 p-5 sm:p-6 mx-auto max-w-max flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-3xl sm:text-4xl text-white block mx-auto"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-green-500">
                                Application Submitted Successfully!
                            </h3>
                        </div>
                    )}
                    {
                        job?.applied_jobs?.length > 0 &&
                        <>
                            <h3 className="text-2xl font-semibold">Job Applications</h3>
                            <div className="mt-10">
                                <div className="relative overflow-x-auto sm:rounded-lg border border-[#CACBE6]">
                                    <table className="w-full text-sm text-left text-gray-500 ">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Tutor
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Cover Letter
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Applied At
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                job?.applied_jobs?.map((itm, index) =>{
                                                    return (
                                                        <tr className="bg-white border-b ">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                {itm.tutor_id || '---'}
                                                            </th>
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                {itm.message}
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                <Moment fromNow>{itm.created_at}</Moment>
                                                            </td>
                                                            <td className="px-6 py-4 text-blue-600 cursor-pointer hover:underline">
                                                                Hire
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    }
                </section>
            </div>
        </main>
    );
};

export default JobDetails;
