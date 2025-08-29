import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Foodie</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="face" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="food-content-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>delivery</li>
                <li>privacy policy</li>
              </ul>
            </div>
            <div className="food-content-right">
              <h2>Get in Touch</h2>
              <ul>
                <li>+91 938538429</li>
                <li>naveenbobburi60@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className='footer-bottom-text'>Copyright @2024 Foodie. All rights reserved</p>
    </div>
  )
}

export default Footer
