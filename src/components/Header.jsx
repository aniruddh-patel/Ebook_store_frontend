import React from 'react'
import logo from "../images/logo.png"


const Header = () => {
  return (
    <div className='header'>
      <img className='logo'  src={logo} alt='BookStore' />
      <div>
        <ul className='pages'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Store">Store</a></li>
          <li><a href="Contact Us">Contact Us</a></li>
        </ul>
      </div>
      <button className='signin_button'>Sign in</button>
    </div>
  )
}

export default Header;