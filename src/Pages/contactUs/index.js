import React from "react";
import "./contact.css";

const ContactUs = () => {
    return (
        <div >
            <div >
                <h3 className='text-yellow-400 w-full text-center font-bold text-lg'>Send Message</h3>
            </div>
            <div className='max-w-3xl mx-5 lg:mx-auto pentutor-shadow py-8 px-5 my-10 rounded-lg '>
                <div className='mb-8'>
                    <label htmlFor="name" className='text-gray-700 font-semibold block'>Your Name</label>
                    <input type="text" id='name' placeholder='Enter Your Name' className='outline-none bg-gray-200 w-full rounded p-2' />
                </div>
                <div className='mb-8'>
                    <label htmlFor="mail" className='text-gray-700 font-semibold block'>Your Email Address</label>
                    <input type="text" id='mail' placeholder='Enter Your Email address' className='outline-none bg-gray-200 w-full rounded p-2' />
                </div>
                <div className='mb-8'>
                    <label htmlFor="text" className='text-gray-700 font-semibold block mb-2'>Your Message</label>
                    <textarea cols="30" id='text' rows="10" placeholder='Enter Your Message' className='w-full p-4 outline-none bg-gray-200 rounded'></textarea>
                </div>
                <button className='text-white bg-yellow-450 rounded mx-auto block py-1 px-5'>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;
