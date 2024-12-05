import React from "react";
import "./contact.css";

const ContactUs = () => {
    return (
        <div className="py-10">
            <div>
                <h3 className='text-yellow-400 w-full text-center font-bold text-2xl'>Send Message</h3>
            </div>
            <div className='max-w-3xl mx-5 lg:mx-auto pentutor-shadow py-8 px-5 my-10 rounded-lg '>
                <div className='mb-8'>
                    <label htmlFor="name" className='text-gray-700 font-semibold block mb-1'>Your Name</label>
                    <input type="text" id='name' placeholder='Enter Your Name' className='outline-none bg-gray-200 w-full rounded px-3 p-2 text-[15px] ' />
                </div>
                <div className='mb-8'>
                    <label htmlFor="mail" className='text-gray-700 font-semibold block mb-1'>Your Email Address</label>
                    <input type="text" id='mail' placeholder='Enter Your Email address' className='outline-none bg-gray-200 w-full rounded px-3 p-2 text-[15px] ' />
                </div>
                <div className='mb-8'>
                    <label htmlFor="text" className='text-gray-700 font-semibold block mb-1'>Your Message</label>
                    <textarea cols="30" id='text' rows="10" placeholder='Enter Your Message' className='w-full resize-none p-3 outline-none bg-gray-200 rounded'></textarea>
                </div>
                <button className='border border-[#F5BB07] bg-[#F5BB07] text-white rounded mx-auto block py-1 px-4'>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;
