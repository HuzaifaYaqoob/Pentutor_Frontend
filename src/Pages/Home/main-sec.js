import React from 'react'
import './home.css'


const Main = () => {
    return (
        <div className="main-sec">
            <div className="welcome-to-pen-tutor">
                <h1 className="pen-tutor">Welcome To Pen Tutor</h1>
                <div className="studnt-query-button-view">
                    <button type="button" className="studnt-query-button">Student Query Form</button>
                </div>
            </div>
            <div className="student-query-form">
                <div className="container bio">
                    <div className="text-center col-sm-12">
                        <h5>  Bio----------Documents----------Tution----------Verify</h5>
                    </div>
                    <div>
                        <form>
                            <div className="row col-lg-12 mt-4">

                                <div className="input-view col-lg-4 col-md-6 col-sm-12">
                                    <input type="text" placeholder="Enter your Full Name" />
                                    <input type="text" className="mt-1" placeholder="Enter your Number" />
                                </div>
                                <div className="input-view col-lg-4 col-md-6 col-sm-12">
                                    <input type="text" placeholder="Enter your Email Address" />
                                    <input type="text" className="mt-1" placeholder="Enter your City Name" />
                                </div>
                                <div className="input-view col-lg-4 col-md-6 col-sm-12">
                                    <input type="text" name="city" list="cityname" placeholder="Select Your Country" />
                                    <datalist id="cityname">
                                        <option value="Boston" />
                                        <option value="Cambridge" />
                                    </datalist>
                                    <input type="text" className="mt-1" placeholder="Enter your Area" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="next">
                <img src="/images/vector-right.jpg" alt="img" width="50px" height="50px" />
            </div > */}

        </div >
    )
}

export default Main
