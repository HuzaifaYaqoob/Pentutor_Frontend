import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardBase from "../../DashboardBase";
import ContentBox from "../../ContentBox";
import Form from '../../FormSection/Form';
import { UpdateUserProfile } from "../../../../redux/Actions/ProfileActions/ProfileActions";
import { ProfileTab } from "../../Student/Profile/EditProfile";
import TutorBasicInfoEdit from './BasicInfo';
import ProfesionalDetails from './ProfessionalInfo';
import TutorDocumentMediaEdit from "./DocumentMedia";
import { toast } from 'react-toastify';

const EditProfileTutor = (props) => {
    const [user_profile, setUserProfile] = useState({});
    const [active_tab, setActiveTab] = useState('BASIC');
    const [isSaving, setIsSaving] = useState(false);
    const [buttonText, setButtonText] = useState('Save');

    const Form_Steps = [
        { text: 'Basic Information', onClick: () => handleTabChange('BASIC'), active: active_tab === 'BASIC' },
        { text: 'Professional Details', onClick: () => handleTabChange('PROFESSIONALDETAILS'), active: active_tab === 'PROFESSIONALDETAILS' },
        { text: 'Documents/Media', onClick: () => handleTabChange('DOCUMENT'), active: active_tab === 'DOCUMENT' },
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setButtonText('Save');
    };

    console.log(user_profile);

    const validateFields = () => {

        if (active_tab === 'BASIC') {
            if (!user_profile.user.first_name && user_profile.user.first_name === '') {
                toast.error('First Name is required.');
                return false;
            }
            if (!user_profile.user.last_name && user_profile.user.last_name === '') {
                toast.error('Last Name is required.');
                return false;
            }
            if (!user_profile.user.email && user_profile.user.email === '' || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user_profile.user.email)) {
                toast.error('Valid email is required.');
                return false;
            }
            if (!user_profile.mobile && user_profile.mobile === '' || !/^\d{9,}$/.test(user_profile.mobile)) {
                toast.error('Phone Number is required.');
                return false;
            }            
            if (!user_profile.date_of_birth && user_profile.date_of_birth === '') {
                toast.error('Date of birth is required.');
                return false;
            }
            if (!user_profile.area && user_profile.area === '') {
                toast.error('Area is required.');
                return false;
            }
        }
        return true;
    };

    const UpdateStudentProfile = async () => {
        console.log("Profile update initiated...");
    
        if (!validateFields()) {
            return;
        }
    
        setIsSaving(true);
        setButtonText('Saving...');
    
        try {
            const result = await props.UpdateUserProfile({
                ...user_profile,
                Country: user_profile.Country ? user_profile.Country.id : '',
                city: user_profile.city ? user_profile.city.id : '',
            });
    
            setButtonText('Saving...');
    
            setTimeout(() => {
                setButtonText('Save');
            }, 2000);
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error('Error updating profile. Please try again.');
            setButtonText('Save');
        } finally {
            setIsSaving(false);
        }
    };

    useEffect(() => {
        if (props.user_profile.profile) {
            setUserProfile(props.user_profile.profile);
        }
    }, [props.user_profile.profile]);

    return (
        <DashboardBase>
            <ContentBox HeaderText="Welcome to Profile" />
            <div className="flex items-center justify-between flex-wrap">
                {Form_Steps.map((step, index) => (
                    <>
                        {index !== 0 && <div className="flex-1 border-dashed border-yellow-300 border-t-[2px] h-0 p-0"></div>}
                        <ProfileTab
                            active={step.active}
                            text={step.text}
                            onClick={step.onClick}
                        />
                    </>
                ))}
            </div>

            <Form btnText={buttonText} onSubmit={UpdateStudentProfile}>
                {active_tab === 'BASIC' && (
                    <TutorBasicInfoEdit
                        data={user_profile}
                        onUpdateData={(data) => setUserProfile({ ...user_profile, ...data })}
                    />
                )}
                {active_tab === 'PROFESSIONALDETAILS' && (
                    <ProfesionalDetails
                        data={user_profile}
                        onUpdateData={(data) => setUserProfile({ ...user_profile, ...data })}
                    />
                )}
                {active_tab === 'DOCUMENT' && (
                    <TutorDocumentMediaEdit
                        data={user_profile}
                        onUpdateData={(data) => setUserProfile({ ...user_profile, ...data })}
                    />
                )}
            </Form>
        </DashboardBase>
    );
};

const mapStateToProps = state => state;
const mapDispatchToProps = { UpdateUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileTutor);
