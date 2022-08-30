import React, { useEffect, useState } from "react";

import { getUserData } from "./redux/Actions/UserActions/UserActions";
import { getUserProfile } from "./redux/Actions/ProfileActions/ProfileActions";
import { getAllCountries, getAllCourseCategories } from "./redux/Actions/UtilityActions/UtilityActions";
import { connect, useDispatch } from "react-redux";

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
import BlogView from "./Pages/Blogs/BlogView";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";

import UserCart from "./Pages/Cart/UserCart";
import Checkout from "./Pages/Checkout/Checkout";
import Wishlist from "./Pages/Wishlist/Wishlist";

import AvailableJobs from "./Pages/Jobs/AvailableJobs";

import ChatBox from "./Pages/Dashboard/Chat/ChatBox";
import Inbox from "./Pages/Dashboard/Chat/Inbox";

import StudentDashboard from './Pages/Dashboard/Student/StudentDashboard'
import EditProfile from "./Pages/Dashboard/Student/Profile/EditProfile";
import PurchasesCourses from "./Pages/Dashboard/Student/Courses/Courses";

import TutorDashboard from "./Pages/Dashboard/Tutor/TutorDashboard";
import EditProfileTutor from "./Pages/Dashboard/Tutor/Profile/EditProfile";
import CoursesList from "./Pages/Dashboard/Tutor/Courses/CoursesList";
import AddCourse from "./Pages/Dashboard/Tutor/Courses/AddCourse";
import AddCourseContent from "./Pages/Dashboard/Tutor/Courses/AddCourseContent";
import TutorJobs from "./Pages/Dashboard/Tutor/Jobs/Jobs";
import CreateJob from "./Pages/Dashboard/Tutor/Jobs/CreateJob";

import AdminDashboard from "./Pages/Dashboard/SuperAdmin/AdminDashboard";
import RegisterStudent from "./Pages/Dashboard/SuperAdmin/Register/RegisterStudent";
import RegisterTutor from "./Pages/Dashboard/SuperAdmin/Register/RegisterTutor";
import RegisterAdmin from "./Pages/Dashboard/SuperAdmin/Register/RegisterAdmin";
import BlogListing from "./Pages/Dashboard/SuperAdmin/Blog/Blog";
import AddBlogPost from "./Pages/Dashboard/SuperAdmin/Blog/AddBlogPost";
import AdminCoursesList from "./Pages/Dashboard/SuperAdmin/Courses/Courses";

import AdminJobs from "./Pages/Dashboard/SuperAdmin/Jobs/JobsListing";
import PostNewJob from "./Pages/Dashboard/SuperAdmin/Jobs/PostNew";

import Loader from './components/Loader/Loader'
import { Switch, Route, useHistory } from "react-router-dom";
import Cookies from "js-cookie";


const App = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const USER_URLs = [
    '/',
    '/courses/',
    '/courses/:course_slug/view/',
    '/our-tutor/',
    '/our-tutor/profile/:profile_slug/',
    '/about-us/',
    '/contact-us/',
    '/blogs/',
    '/blogs/view/:blog_id/',
    '/wishlist/',
    '/cart/',
    '/checkout/',
    '/jobs/',
    '/home/',
    '/auth/logn/',
    '/auth/register/',
  ]

  useEffect(() => {
    props.getAllCountries()
    props.getAllCourseCategories()
  }, [])

  useEffect(() => {
    const user_token = Cookies.get('auth_token')
    if (user_token) {
      dispatch(
        getUserData(
          user_token
        )
      )
      dispatch(
        getUserProfile()
      )
    }
    else {
      if (!USER_URLs.includes(history?.location?.pathname)) {
        history.push('/auth/login/')
      }
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [props.user.loggedIn])

  return (
    <>
      {
        loading &&

        <Loader />
      }
      <Route exact path={
        [
          '/',
          '/courses/',
          '/courses/:course_slug/view/',
          '/our-tutor/',
          '/our-tutor/profile/:profile_slug/',
          '/about-us/',
          '/contact-us/',
          '/blogs/',
          '/blogs/view/:blog_id/',
          '/wishlist/',
          '/cart/',
          '/checkout/',
          '/jobs/',
        ]
      } component={Header} />


      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path='/wishlist/' component={Wishlist} />
        <Route exact path='/cart/' component={UserCart} />
        <Route exact path='/checkout/' component={Checkout} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:course_slug/view/" component={CourseView} />
        <Route exact path="/our-tutor" component={OurTutor} />
        <Route exact path="/our-tutor/profile/:profile_slug/" component={ViewProfile} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/contact-us" component={ContactUS} />
        <Route exact path="/blogs" component={BlogPage} />
        <Route exact path="/blogs/view/:blog_id/" component={BlogView} />
        <Route exact path="/jobs" component={AvailableJobs} />


        <Route exact path="/chat/" component={ChatBox} />
        <Route exact path="/chat/message/:username/" component={Inbox} />




        <Route exact path='/auth/login/' component={LoginPage} />
        <Route exact path='/auth/forgot-password/' component={LoginPage} />
        <Route exact path={
          [
            '/auth/register/:UserStatus/',
            '/auth/register/:UserStatus/:step_status/',
          ]
        } component={RegisterPage} />


        <Route exact path='/dashboard/student/' component={StudentDashboard} />
        <Route exact path='/dashboard/student/profile/edit/' component={EditProfile} />
        <Route exact path='/dashboard/student/courses/' component={PurchasesCourses} />

        <Route exact path='/dashboard/tutor/' component={TutorDashboard} />
        <Route exact path='/dashboard/tutor/profile/edit/' component={EditProfileTutor} />
        <Route exact path='/dashboard/tutor/courses/' component={CoursesList} />
        <Route exact path='/dashboard/tutor/courses/add-new/' component={AddCourse} />
        <Route exact path='/dashboard/tutor/courses/:course_id/add-videos/' component={AddCourseContent} />



        <Route exact path='/dashboard/tutor/jobs/' component={TutorJobs} />
        <Route exact path='/dashboard/tutor/jobs/add-new/' component={CreateJob} />

        <Route exact path='/dashboard/super-admin/' component={AdminDashboard} />
        <Route exact path='/dashboard/super-admin/register/student/' component={RegisterStudent} />
        <Route exact path='/dashboard/super-admin/register/tutor/' component={RegisterTutor} />
        <Route exact path='/dashboard/super-admin/register/admin/' component={RegisterAdmin} />
        <Route exact path='/dashboard/super-admin/jobs/' component={AdminJobs} />
        <Route exact path='/dashboard/super-admin/jobs/post-new/' component={PostNewJob} />
        <Route exact path='/dashboard/super-admin/blog/' component={BlogListing} />
        <Route exact path='/dashboard/super-admin/blog/post-new/' component={AddBlogPost} />
        <Route exact path='/dashboard/super-admin/courses/' component={AdminCoursesList} />


      </Switch>
      <Route exact path={
        [
          '/',
          '/courses/',
          '/courses/:course_slug/view/',
          '/our-tutor/',
          '/our-tutor/profile/:profile_slug/',
          '/about-us/',
          '/contact-us/',
          '/blogs/',
          '/blogs/view/:blog_id/',
          '/wishlist/',
          '/cart/',
          '/checkout/',
          '/jobs/',
        ]
      } component={Footer} />

    </>
  );
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  getAllCountries: getAllCountries,
  getAllCourseCategories: getAllCourseCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
