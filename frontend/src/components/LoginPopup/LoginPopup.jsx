import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useState } from 'react'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("login")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<input type="text" placeholder='Enter your name' />:<></>}
            <input type="text" placeholder='Enter your email' />
            <input type="text" placeholder='Enter your password' />
        </div>
        <button>{currState==="Sing Up"?"Create Account":"Login "}</button>
      </form>
    </div>
  )
}

export default LoginPopup
