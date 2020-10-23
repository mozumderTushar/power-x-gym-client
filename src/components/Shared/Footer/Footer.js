import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#171426' }} className="footer mt-5">
            <div className="container pt-5">
                <div className="row mb-5 p-3">
                    <div className="col-md-3">
                        <h3 style={{ color: '#fff' }}>POWER <span style={{ color: '#F9D542' }}>X</span></h3>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3">
                                <p>Need Help?</p>
                                <a href="">Help Center</a> <br />
                                <a href="">Email Support</a> <br />
                                <a href="">Live Chat</a><br />
                                <a href="">Gift Certificates</a>
                                <a href="">Send Us Feedback</a>
                            </div>
                            <div className="col-md-3">
                                <p>Digital Resources</p>
                                <a href="">Articles</a> <br />
                                <a href="">e-books</a>
                            </div>
                            <div className="col-md-3">
                                <p>Connect with us</p>
                                <div className="row">
                                    <img src="https://i.ibb.co/Z1Wf8cZ/bxl-youtube.png" alt="" />
                                    <img src="https://i.ibb.co/ZLvw5F9/bxl-facebook.png" alt="" />
                                    <img src="https://i.ibb.co/Qbcyskz/bxl-instagram.png" alt="" />
                                    <img src="https://i.ibb.co/fSVcL05/bxl-twitter.png" alt="" />
                                    <img src="https://i.ibb.co/H2qkdKN/bxl-whatsapp.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <p>Join Our Newsletter</p>
                                <p><small>Get exclusive news,features and updates from The Shredder Weight  Loss Academy</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-5 footerBtm"> &#169; {( new Date().getFullYear())} Mozumder Tushar. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;