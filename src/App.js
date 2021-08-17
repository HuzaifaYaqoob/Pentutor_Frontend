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


import StudentDashboard from './Pages/Dashboard/Student/StudentDashboard'
import TutorDashboard from "./Pages/Dashboard/Tutor/TutorDashboard";
import AdminDashboard from "./Pages/Dashboard/SuperAdmin/AdminDashboard";

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
      <Route exact path='/dashboard/tutor/' component={TutorDashboard} />
      <Route exact path='/dashboard/super-admin/' component={AdminDashboard} />
    </>
  );
}

export default App;
