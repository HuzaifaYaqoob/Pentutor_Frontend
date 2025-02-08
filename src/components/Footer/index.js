
import { Link } from 'react-router-dom'

const FooterLink = (props) => {
    return (
        <li>
            <Link to={props.nextPath} className='text-gray-200 text-sm font-medium'>
                {props.text}
            </Link>
        </li>
    )
}

const Footer = () => {
    return (
        <footer className='footer-gray mt-10'>
            <div className='flex max-w-[1300px] mx-auto py-16 px-4 sm:px-6 md:px-8 flex-col md:flex-row gap-10 md:gap-0'>
                <div className='w-full flex gap-20 flex-1'>
                    <div className='space-y-3'>
                        <h3 className='text-yellow-400 underline font-bold text-xl'>Follow Us</h3>
                        <ul className='space-y-0.5'>
                            <FooterLink text='Youtube' />
                            <FooterLink text='Instagram' />
                            <FooterLink text='LinkedIn' />
                            <FooterLink text='Skype' />
                            <FooterLink text='Pinterest' />
                            <FooterLink text='Reddit' />
                        </ul>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-yellow-400 font-bold text-xl underline'>Quick Links</h3>
                        <ul className='space-y-0.5'>
                            <FooterLink nextPath='/' text='Home' />
                            <FooterLink text="FAQs" />
                            <FooterLink nextPath='contact-us/' text="Contact Us" />
                        </ul>
                    </div>
                </div>
                <div className='w-full md:max-w-sm mx-auto'>
                    <div className='space-y-3'>
                        <h3 className='w-full md:text-center text-yellow-400 text-xl underline font-bold'>Subscribe to Our Newsletter</h3>
                        <div className='space-y-3'>
                            <input type="text" className='bg-white rounded w-full outline-none py-2.5 px-3 font-medium placeholder:text-[#3C3C3C] text-[#3C3C3C] text-sm' placeholder='Enter Your Name' />
                            <input type="email" className='bg-white rounded w-full outline-none py-2.5 px-3 font-medium placeholder:text-[#3C3C3C] text-[#3C3C3C] text-sm' placeholder='Enter Your Email' />
                        </div>
                        <div>
                        <button className='text-white bg-yellow-450 rounded ml-auto md:mx-auto py-2 px-4 block text-sm font-medium'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='py-2.5 text-xs sm:text-sm bg-[#313D6A] w-full text-white text-center px-4 sm:px-6 md:px-8 line-clamp-1'>Copyright © 2024 | Pen Tutor. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
