import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './css/Header.css'
import logo from "../images/icons/logo.png"


const Header = () => {
  return (
    <div className='header'>
      <img className='logo'  src={logo} alt='BookStore' />
      <div>
        <ul className='pages'>
          <NavLink className={(e)=>{return e.isActive?"red" : "black"}} to="/"><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red" : "black"}} to="/about"><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red" : "black"}} to="/store"><li>Store</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red" : "black"}} to="/contactUs"><li>Contact Us</li></NavLink>
        </ul>
      </div>
      <Link to="/login" ><button className='signin_button'>Sign in</button></Link>
    </div>
  )
}

export default Header;