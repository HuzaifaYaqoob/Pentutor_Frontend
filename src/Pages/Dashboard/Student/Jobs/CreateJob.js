import DashboardBase from "../../DashboardBase"
import ContentBox from "../../ContentBox"
import Form, { TextInput, DropDownInput, TextArea } from "../../FormSection/Form"
import { toast } from "react-toastify"
import { useState } from "react"
import { apiBaseURL, create_user_job } from "../../../../redux/apiURLs"
import Cookies from "js-cookie"

const CreateJob = () => {
    const [formData, setFormData] = useState({
        title: "",
        class_teach: "",
        subject_teach: "",
        preferredDays: '',
        time: "",
        method: "Online",
        salary: "",
        description: "",
        gender: "Male",
        experience: "",
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

    const handleCreateJob = async () =>{
        let tid = toast.loading('Please wait...')
        const response = await fetch(
            apiBaseURL + create_user_job,
            {
                headers: {'Authorization' : `Token ${Cookies.get('auth_token')}`, 'Content-Type' : 'application/json'}, 
                method : 'POST',
                body : JSON.stringify(formData)
            }
        )
        let status_code = response?.status
        
        let result = response.json()

        if (status_code == '200'){
            toast.update(tid, {
                render : 'Job Created',
                type : 'success',
                isLoading : false
            })

            setFormData({
                title: "",
                class_teach: "",
                subject_teach: "",
                preferredDays: "",
                time: "",
                method: "",
                salary: "",
                description: "",
                gender: "",
            });
        }
        else{
            toast.update(tid, {
                render : 'Something went wrong',
                type : 'error',
                isLoading : false
            })
        }
    }

    const handleSubmit = async () => {
        if (validateForm()) {
            await handleCreateJob()
            // toast.success("Job request submitted successfully!", {
            //     position: "top-right",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
    
            setFormErrors({});
        }
    };
    console.log(formData)

    return (
        <DashboardBase>
            <ContentBox HeaderText="Create Job" />
            <div>
                <TextInput
                    placeholder="Enter Job Title"
                    Label="Enter Job Title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    error={formErrors.title}
                />

                <div className="flex flex-col md:flex-row gap-8 my-5">
                    <TextInput
                        placeholder="I.C.S"
                        Label="Enter Class"
                        value={formData.class_teach}
                        onChange={(e) => handleInputChange("class_teach", e.target.value)}
                        error={formErrors.class_teach}
                    />
                    <TextInput
                        placeholder="English"
                        Label="Enter Subject"
                        value={formData.subject_teach}
                        onChange={(e) => handleInputChange("subject_teach", e.target.value)}
                        error={formErrors.subject_teach}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-8 my-5">
                    <TextInput
                        placeholder="5 Years"
                        Label="Enter Experience Required"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        error={formErrors.experience}
                    />
                    <DropDownInput
                        placeholder="Select Your Gender"
                        data={[
                            { label: "Male", value: "Male" },
                            { label: "Female", value: "Female" },
                            // { label: "Others", value: "Others" },
                        ]}
                        Label="Gender"
                        value={formData.gender}
                        onChange={(value) => handleInputChange("gender", value)}
                        error={formErrors.gender}
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
                        // value={formData.preferredDays}
                        onChange={(value) => handleInputChange("preferredDays", value)}
                        error={formErrors.preferredDays}
                    />
                    <TextInput
                        type='time'
                        placeholder="11:00 AM - 3:00 PM"
                        Label="Enter Time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        error={formErrors.time}
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
                        value={formData.method}
                        onChange={(value) => handleInputChange("method", value)}
                        error={formErrors.method}
                    />
                    <TextInput
                        type='number'
                        placeholder="10K PKR"
                        Label="Enter Salary"
                        value={formData.salary}
                        onChange={(e) => handleInputChange("salary", e.target.value)}
                        error={formErrors.salary}
                    />
                </div>
                {
                    formData?.method == 'Onsite' && 
                    <div className="flex flex-col md:flex-row gap-8 my-5">
                        <TextInput
                            type='number'
                            placeholder="Johar Town, Lahore"
                            Label="Enter your Location"
                            value={formData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                            error={formErrors.location}
                        />
                    </div>
                }


                <div className="my-5">
                    <TextArea
                        Label="Description"
                        placeholder="Write here your Description!"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        error={formErrors.description}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-indigo-900 select-none text-white py-2 px-7 ml-auto block rounded-md text-lg font-bold cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </DashboardBase>
    );
};

export default CreateJob;
