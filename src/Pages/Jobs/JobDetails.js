import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faCalendarAlt, faCheckCircle, faFile, faCheck } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import { TextInput, TextArea } from "../Dashboard/FormSection/Form";

const JobDetails = () => {
    const location = useLocation();
    const job = location.state?.job;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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

    const validateField = (field, value) => {
        if (!value.trim()) {
            return "This field is required";
        }
        return "";
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email) ? "" : "Please enter a valid email address.";
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{11}$/; // Check if the phone number contains exactly 11 digits
        return phoneRegex.test(phone) ? "" : "Phone number must be 11 digits.";
    };

    const validateForm = () => {
        const errors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) {
                errors[key] = error;
            }
        });

        const emailError = validateEmail(formData.email);
        if (emailError) errors.email = emailError;

        const phoneError = validatePhone(formData.phone);
        if (phoneError) errors.phone = phoneError;

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleApplyJob = () => {
        if (validateForm()) {
            setIsSubmitted(true);
            toast.success("Job application submitted successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } else {
            toast.error("Please fill in all the required fields.");
        }
    };

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

            <section className="max-w-[900px] mx-auto py-10 space-y-5">
                {!isSubmitted ? (
                    <>
                        <h3 className="text-2xl font-semibold text-center">Apply for this Job</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <TextInput
                                    Label="First Name"
                                    placeholder="Enter First Name"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    error={formErrors.firstName || ""}
                                />
                                <TextInput
                                    Label="Last Name"
                                    placeholder="Enter Last Name"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                    error={formErrors.lastName || ""}
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <TextInput
                                    type="email"
                                    Label="Email Address"
                                    placeholder="Enter your Email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    error={formErrors.email || ""}
                                />
                                <TextInput
                                    type="tel"
                                    Label="Phone Number"
                                    placeholder="Enter your Phone"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    error={formErrors.phone || ""}
                                />
                            </div>
                            <div>
                                <TextArea
                                    Label="Cover Message"
                                    placeholder="Write a short message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    error={formErrors.message || ""}
                                />
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
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon={faCheck}
                            className="text-5xl text-green-500 block mx-auto my-5"
                        />
                        <h3 className="text-2xl font-semibold text-green-500">
                            Application Submitted Successfully!
                        </h3>
                    </div>
                )}
            </section>
        </main>
    );
};

export default JobDetails;