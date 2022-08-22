import React from 'react';
import './Footer.css';
import logo from '../../../assets/img/Rectangle 58.png'
import googleIcon from '../../../assets/img/googleicon.png'

const Footer = () => {
    return (
        <>
         <div className='footer-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img className='logo' src={logo} alt=""/>
                        {/* <p>Lorem ipsum dolor sit amet, elit adipiscing, sed do eiusmod</p> */}
                    </div>
                    <div className='col-md-3'>
                        <div className='quick-link'>
                            <h4>QUICK LINKS</h4>
                            <p><a href="">SITE MAP</a></p>
                            <p><a href="">PRICING</a></p>
                            <p><a href="">PAYMENT METHOD</a></p>
                            <p><a href="">SUPPORT</a></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className='important-link'>
                            <h4>IMPORTANT LINKS</h4>
                            <p><a href="">DRIBBLE</a></p>
                            <p><a href="">BEHANCE</a></p>
                            <p><a href="">THEMEFOREST</a></p>
                            <p><a href="">ENVATO</a></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className='get-in-touch'>
                            <h4>GET IN TOUCH</h4>
                            <div className='social-link'>
                                <span><i class="bi bi-facebook"></i></span>
                                <span><i class="bi bi-twitter"></i></span>
                                <span><i class="bi bi-linkedin"></i></span>
                                <span><img src={googleIcon} alt=""/></span>
                            </div>
                            <p>Contact: +88012457896</p>
                        </div>
                    </div>
                </div>
            </div>
            
         </div>   
        </>
    );
};

export default Footer;