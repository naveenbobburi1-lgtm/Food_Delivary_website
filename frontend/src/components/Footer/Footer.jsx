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
        </div>
      
    </div>
  )
}

export default Footer
