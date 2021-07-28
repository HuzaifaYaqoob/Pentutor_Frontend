import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="mt-5">
            <footer class=" py-5 footer">
                <div class="row">
                    <div className="row col-6">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <h5 className="footer-heading">Features</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="link-secondary" href="/">Youtube</a></li>
                                <li><a class="link-secondary" href="/">Instagram</a></li>
                                <li><a class="link-secondary" href="/">Linkedin</a></li>
                                <li><a class="link-secondary" href="/">Skype</a></li>
                                <li><a class="link-secondary" href="/">Pinterest</a></li>
                                <li><a class="link-secondary" href="/">Reddit</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <h5 className="footer-heading">Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="link-secondary" href="/">home</a></li>
                                <li><a class="link-secondary" href="/">FAQs</a></li>
                                <li><a class="link-secondary" href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div className="subscribe-newsletter">
                            <h5 className="footer-heading">Subscribe To Our Newsletter</h5>
                            <input type="text" placeholder="Enter Your Name" size="30" />
                            <input type="text" placeholder="Enter Your Email" size="30" className="mt-2" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button type="button" class="subscribe mt-2">Subscribe</button>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer
