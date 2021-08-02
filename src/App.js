import React from "react";

//  Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/index";
import Home from "./Pages/Home/HomePage";
import Courses from "./Pages/Courses/index";
import OurTutor from "./Pages/Our-Tutors/index";
import AboutUs from "./Pages/about_us";
import ContactUS from "./Pages/contactUs";
import Blogs from "./Pages/Blogs";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/our-tutor" component={OurTutor} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/blogs" component={Blogs} />
        <Route path='/auth' >
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
