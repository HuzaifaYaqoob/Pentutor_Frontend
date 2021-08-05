import React from 'react'
import './footer.css'

import { Link } from 'react-router-dom'

const FooterLink = (props) => {
    return (
        <li>
            <Link className='text-gray-200 text-sm'>
                {props.text}
            </Link>
        </li>
    )
}

const Footer = () => {
    return (
        <footer className='footer-gray mt-10'>
            <div className='flex container mx-auto py-20'>
                <div className='w-full flex gap-20'>
                    <div>
                        <h3 className='text-yellow-400 underline font-bold text-xl'>Follow Us</h3>
                        <ul>
                            <FooterLink text='Youtube' />
                            <FooterLink text='Instagram' />
                            <FooterLink text='LinkedIn' />
                            <FooterLink text='Skype' />
                            <FooterLink text='Pinterest' />
                            <FooterLink text='Reddit' />
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-yellow-400 text-bold text-xl underline'>Quick Links</h3>
                        <ul>
                            <FooterLink text='Home' />
                            <FooterLink text="FAQs" />
                            <FooterLink text="Contact Us" />
                        </ul>
                    </div>

                </div>
                <div className='w-full'>
                    <div className='max-w-sm mx-auto'>
                        <h3 className='w-full text-center text-yellow-400 text-xl underline font-bold'>Subscribe to Our Newsletter</h3>
                        <div>
                            <input type="text" className='bg-white rounded w-full outline-none mb-3' placeholder='Enter Your Name' />
                            <input type="email" className='bg-white rounded w-full outline-none mb-3' placeholder='Enter Your Email' />
                        </div>
                        <button className='text-white bg-yellow-450 rounded mx-auto py-1 px-3 block'>Subscribe</button>
                    </div>
                </div>
            </div>
            <p className='py-2 w-full text-white text-center'>Copyright © 2020 | Pen Tutor</p>
        </footer>
    )
}

export default Footer
