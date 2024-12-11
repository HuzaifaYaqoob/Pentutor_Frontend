import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faIdBadge,
    faCalendarAlt,
    faCheckCircle,
    faFile,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
    const location = useLocation();
    const job = location.state?.job;

    return (
        <main>
            <section className="w-full bg-indigo-900 py-12">
                <div className="container mx-auto my-5">
                    {job ? (
                        <>
                            <h3 className="text-white font-semibold text-3xl text-center max-w-[400px] mx-auto">
                                {job.title}
                            </h3>
                            <p className="text-white text-sm text-center mt-5 max-w-[600px] mx-auto">
                                {job.description}
                            </p>
                            <div className="text-white mt-12 max-w-[900px] mx-auto grid grid-cols-2 gap-3">
                                <p className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faIdBadge} className="mr-3" />
                                    <span>Job ID: {job.id}</span>
                                </p>
                                <p className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                                    <span>Posted: {job.posted} Ago</span>
                                </p>
                                {job.details.map((detail, index) => (
                                    <p key={index} className="mb-2 flex items-center">
                                        <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                                        <span>
                                            {detail.property}: {detail.value}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </>
                    ) : (
                      <div className="text-center">
                          <FontAwesomeIcon
                              icon={faFile}
                              className="text-5xl text-gray-400 block mx-auto my-5 cursor-pointer"
                          />
                          <h3 className="text-white font-semibold text-2xl">
                              No job details available.
                          </h3>
                      </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default JobDetails;
