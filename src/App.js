import React from "react";

//  Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/index";
import Home from "./Pages/Home/HomePage";
import Courses from "./Pages/Courses/index";
import OurTutor from "./Pages/Our-Tutors/index";
import AboutUsPage from "./Pages/about_us/AboutUsPage";
import ContactUS from "./Pages/contactUs";
import BlogPage from "./Pages/Blogs/BlogPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";

import StudentDashboard from './Pages/Dashboard/Student/StudentDashboard'
import TutorDashboard from "./Pages/Dashboard/Tutor/TutorDashboard";
import AdminDashboard from "./Pages/Dashboard/SuperAdmin/AdminDashboard";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route exact path={
        [
          '/',
          '/courses',
          '/our-tutor',
          '/about-us',
          '/contact-us',
          '/blogs',
        ]
      } component={Header} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/our-tutor" component={OurTutor} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/blogs" component={BlogPage} />
        <Route path='/auth/login/' component={LoginPage} />
        <Route path='/auth/register/:UserStatus/' component={RegisterPage} />
      </Switch>
      <Route exact path={
        [
          '/',
          '/courses',
          '/our-tutor',
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
