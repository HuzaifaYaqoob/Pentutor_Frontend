
import { Link } from 'react-router-dom'

const FooterLink = (props) => {
    return (
        <li>
            <Link to={props.nextPath} className='text-gray-200 text-sm'>
                {props.text}
            </Link>
        </li>
    )
}

const Footer = () => {
    return (
        <footer className='footer-gray mt-10'>
            <div className='flex container mx-auto py-16'>
                <div className='w-full flex gap-20'>
                    <div className='space-y-3'>
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
                    <div className='space-y-3'>
                        <h3 className='text-yellow-400 font-bold text-xl underline'>Quick Links</h3>
                        <ul>
                            <FooterLink nextPath='/' text='Home' />
                            <FooterLink text="FAQs" />
                            <FooterLink nextPath='contact-us/' text="Contact Us" />
                        </ul>
                    </div>

                </div>
                <div className='w-full'>
                    <div className='max-w-sm mx-auto space-y-3'>
                        <h3 className='w-full text-center text-yellow-400 text-xl underline font-bold'>Subscribe to Our Newsletter</h3>
                        <div className='space-y-3 pt-5'>
                            <input type="text" className='bg-white rounded w-full outline-none py-2 px-3' placeholder='Enter Your Name' />
                            <input type="email" className='bg-white rounded w-full outline-none py-2 px-3' placeholder='Enter Your Email' />
                        </div>
                        <button className='text-white bg-yellow-450 rounded mx-auto py-1.5 px-4 block'>Subscribe</button>
                    </div>
                </div>
            </div>
            <p className='py-5 w-full text-white text-center'>Copyright © 2021 | Pen Tutor</p>
        </footer>
    )
}

export default Footer
