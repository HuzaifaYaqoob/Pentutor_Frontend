import React from "react";
import "./contact.css";

const ContactUs = () => {
    return (
        <div className="py-10 px-4 sm:px-6 md:px-8">
            <div className="max-w-[1300px] w-full mx-auto">
                <div>
                    <h3 className='text-yellow-400 w-full text-center font-bold text-2xl'>Send Message</h3>
                </div>
                <div className='max-w-3xl lg:mx-auto py-5 px-4 my-10 rounded-lg border border-[#CACBE6]'>
                    <div className='mb-6'>
                        <label htmlFor="name" className='text-[#151E2C] font-semibold block mb-1'>Your Name</label>
                        <input type="text" id='name' placeholder='Enter Your Name' className='outline-none bg-gray-200 text-[#151E2C] font-medium text-sm w-full rounded px-3 py-2.5'/>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="mail" className='text-[#151E2C] font-semibold block mb-1'>Your Email Address</label>
                        <input type="text" id='mail' placeholder='Enter Your Email address' className='outline-none bg-gray-200 text-[#151E2C] font-medium text-sm w-full rounded px-3 py-2.5'/>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="text" className='text-[#151E2C] font-semibold block mb-1'>Your Message</label>
                        <textarea cols="30" id='text' rows="10" placeholder='Enter Your Message' className='w-full resize-none px-3 py-2.5 outline-none bg-gray-200 text-[#151E2C] font-medium text-sm rounded'></textarea>
                    </div>
                    <button className='border border-[#F5BB07] bg-[#F5BB07] text-white text-sm rounded ml-auto block py-2 px-5'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
