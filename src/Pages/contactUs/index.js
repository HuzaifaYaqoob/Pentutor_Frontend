import React from "react";
import "./contact.css";

const ContactUs = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-5">Send Message</h2>
            <div className="p-5">
                <div className="form-block shadow-lg border border-light p-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Your Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Please Type Your Message
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                        ></textarea>
                    </div>
                    <div className="button-view">
                        <button type="button" className="btn btn-primary">Read More</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
