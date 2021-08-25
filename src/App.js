import React, { useEffect, useState } from "react";

//  Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/index";
import Home from "./Pages/Home/HomePage";
import Courses from "./Pages/Courses/index";
import CourseView from "./Pages/Courses/CourseView";
import OurTutor from "./Pages/Our-Tutors/index";
import ViewProfile from "./Pages/Our-Tutors/ViewProfile";
import AboutUsPage from "./Pages/about_us/AboutUsPage";
import ContactUS from "./Pages/contactUs";
import BlogPage from "./Pages/Blogs/BlogPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";

import AddBlogPost from "./Pages/Dashboard/SuperAdmin/Blog/AddBlogPost";


import StudentDashboard from './Pages/Dashboard/Student/StudentDashboard'
import EditProfile from "./Pages/Dashboard/Student/Profile/EditProfile";

import TutorDashboard from "./Pages/Dashboard/Tutor/TutorDashboard";
import EditProfileTutor from "./Pages/Dashboard/Tutor/Profile/EditProfile";
import AddCourse from "./Pages/Dashboard/Tutor/Courses/AddCourse";

import AdminDashboard from "./Pages/Dashboard/SuperAdmin/AdminDashboard";
import RegisterStudent from "./Pages/Dashboard/SuperAdmin/Register/RegisterStudent";
import RegisterTutor from "./Pages/Dashboard/SuperAdmin/Register/RegisterTutor";
import RegisterAdmin from "./Pages/Dashboard/SuperAdmin/Register/RegisterAdmin";

import PostNewJob from "./Pages/Dashboard/SuperAdmin/Jobs/PostNew";

import Loader from './components/Loader/Loader'
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {

      setLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      {
        loading &&

        <Loader />
      }
      <Route exact path={
        [
          '/',
          '/courses',
          '/courses/:course_slug/view/',
          '/our-tutor',
          '/our-tutor/profile/:profile_slug/',
          '/about-us',
          '/contact-us',
          '/blogs',
        ]
      } component={Header} />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:course_slug/view/" component={CourseView} />
        <Route exact path="/our-tutor" component={OurTutor} />
        <Route exact path="/our-tutor/profile/:profile_slug/" component={ViewProfile} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/contact-us" component={ContactUS} />
        <Route exact path="/blogs" component={BlogPage} />
        <Route exact path='/auth/login/' component={LoginPage} />
        <Route exact path={
          [
            '/auth/register/:UserStatus/',
            '/auth/register/:UserStatus/:step_status/',
          ]
        } component={RegisterPage} />
      </Switch>
      <Route exact path={
        [
          '/',
          '/courses',
          '/courses/:course_slug/view/',
          '/our-tutor',
          '/our-tutor/profile/:profile_slug/',
          '/about-us',
          '/contact-us',
          '/blogs',
        ]
      } component={Footer} />
      <Route exact path='/dashboard/student/' component={StudentDashboard} />
      <Route exact path='/dashboard/student/profile/edit/' component={EditProfile} />

      <Route exact path='/dashboard/tutor/' component={TutorDashboard} />
      <Route exact path='/dashboard/tutor/profile/edit/' component={EditProfileTutor} />
      <Route exact path='/dashboard/tutor/course/add-new/' component={AddCourse} />

      <Route exact path='/dashboard/super-admin/' component={AdminDashboard} />
      <Route exact path='/dashboard/super-admin/register/student/' component={RegisterStudent} />
      <Route exact path='/dashboard/super-admin/register/tutor/' component={RegisterTutor} />
      <Route exact path='/dashboard/super-admin/register/admin/' component={RegisterAdmin} />
      <Route exact path='/dashboard/super-admin/jobs/post-new/' component={PostNewJob} />
      <Route exact path='/dashboard/super-admin/blog/post-new/' component={AddBlogPost} />
    </>
  );
}

export default App;
