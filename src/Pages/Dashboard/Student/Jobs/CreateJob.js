import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"
import Form, { TextInput, DropDownInput, TextArea } from "../../FormSection/Form"
import { toast } from "react-toastify"
import { useState } from "react"

const CreateJob = () => {
    const [formData, setFormData] = useState({
        jobTitle: "",
        classToTeach: "",
        subjectToTeach: "",
        preferredDays: "",
        teachingTime: "",
        teachingMethod: "",
        fee: "",
        message: "",
        gender: "",
    });

    const [formErrors, setFormErrors] = useState({});

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
        if (!value || !value.trim()) {
            return true;
        }
        return false;
    };

    const validateForm = () => {
        const errors = {};
        for (const [key, value] of Object.entries(formData)) {
            errors[key] = validateField(key, value);
        }
        setFormErrors(errors);
        return !Object.values(errors).includes(true);
    };

    const handleSubmit = () => {
        if (validateForm()) {
            toast.success("Job request submitted successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
    
            setFormData({
                jobTitle: "",
                classToTeach: "",
                subjectToTeach: "",
                preferredDays: "",
                teachingTime: "",
                teachingMethod: "",
                fee: "",
                message: "",
                gender: "",
            });
    
            setFormErrors({});
        }
    };

    return (
        <DashboardBase>
            <ContentBox HeaderText="Create Job" />
            <div>
                <TextInput
                    placeholder="Enter Job Title"
                    Label="Enter Job Title"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    error={formErrors.jobTitle}
                />

                <div className="flex flex-col md:flex-row gap-8 my-5">
                    <TextInput
                        placeholder="I.C.S"
                        Label="Enter Class To Teach"
                        value={formData.classToTeach}
                        onChange={(e) => handleInputChange("classToTeach", e.target.value)}
                        error={formErrors.classToTeach}
                    />
                    <TextInput
                        placeholder="English"
                        Label="Enter Subject To Teach"
                        value={formData.subjectToTeach}
                        onChange={(e) => handleInputChange("subjectToTeach", e.target.value)}
                        error={formErrors.subjectToTeach}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-8 my-5">
                    <DropDownInput
                        placeholder="Monday, Tuesday, Wednesday, Thursday"
                        data={[
                            { label: "Monday", value: "Monday" },
                            { label: "Tuesday", value: "Tuesday" },
                            { label: "Wednesday", value: "Wednesday" },
                            { label: "Thursday", value: "Thursday" },
                            { label: "Friday", value: "Friday" },
                        ]}
                        Label="Select Preferred Days"
                        value={formData.preferredDays}
                        onChange={(value) => handleInputChange("preferredDays", value)}
                        error={formErrors.preferredDays}
                    />
                    <TextInput
                        placeholder="11:00 AM - 3:00 PM"
                        Label="Enter Time To Teach"
                        value={formData.teachingTime}
                        onChange={(e) => handleInputChange("teachingTime", e.target.value)}
                        error={formErrors.teachingTime}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-8 my-5">
                    <DropDownInput
                        placeholder="Online"
                        data={[
                            { label: "Online", value: "Online" },
                            { label: "Onsite", value: "Onsite" },
                        ]}
                        Label="Teaching Method"
                        value={formData.teachingMethod}
                        onChange={(value) => handleInputChange("teachingMethod", value)}
                        error={formErrors.teachingMethod}
                    />
                    <TextInput
                        placeholder="10K PKR"
                        Label="Enter your Fee"
                        value={formData.fee}
                        onChange={(e) => handleInputChange("fee", e.target.value)}
                        error={formErrors.fee}
                    />
                </div>

                <div className="my-5">
                    <TextArea
                        Label="Message"
                        placeholder="Write here your message!"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        error={formErrors.message}
                    />
                </div>

                <div className="md:w-96">
                    <DropDownInput
                        placeholder="Select Your Gender"
                        data={[
                            { label: "Male", value: "Male" },
                            { label: "Female", value: "Female" },
                            { label: "Others", value: "Others" },
                        ]}
                        Label="Gender"
                        value={formData.gender}
                        onChange={(value) => handleInputChange("gender", value)}
                        error={formErrors.gender}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-indigo-900 select-none text-white py-2 px-7 ml-auto block rounded-md text-lg font-bold cursor-pointer"
                >
                    Request
                </button>
            </div>
        </DashboardBase>
    );
};

export default CreateJob;
