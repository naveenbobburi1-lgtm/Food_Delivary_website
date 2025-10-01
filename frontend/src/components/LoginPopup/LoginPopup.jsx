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
            {currState==="Sing Up"?<input type="text" placeholder='Enter your name' />:<></>}
            <input type="text" placeholder='Enter your email' />
            <input type="text" placeholder='Enter your password' />
        </div>
        <button>{currState==="Sing Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing,I agree terms of use and privacy policy</p>
        </div>
        {
          currState==="login"?
          <p>Create a New Account? <span onClick={()=>setCurrState("Sing Up")}>Click here</span></p>
          :<p>Already have an Account? <span onClick={()=>setCurrState("login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
