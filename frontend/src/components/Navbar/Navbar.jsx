import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({ setShowLogin }) => {
    const [Menu, setMenu] = useState("Home");
  return (
    <div className = 'navbar'>
        <Link to= "/"><img src = {assets.logo} alt ="" className="logo"/></Link>
        <ul className="navbar-menu">
            <Link to= "/" onClick={()=>setMenu("Home")} className={Menu === "Home"?"active":""} >Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={Menu === "menu"?"active":""} >menu</a>
            <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={Menu === "mobile-app"?"active":""} >mobile-app</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")} className={Menu === "contact-us"?"active":""} >contact us</a>
        </ul>
        <div className="navbar-right">
            <img src = {assets.search_icon} alt ="" />
            <div className='navbar-search-icon'>
                <Link to="/cart"><img src = {assets.basket_icon} alt ="" /></Link>
            </div>
            <div className={getTotalCartAmount()===0?"":"dot"}> 
                <button onClick={()=>setShowLogin(true)}>sing in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
