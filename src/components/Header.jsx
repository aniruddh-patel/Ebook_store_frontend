import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './css/Header.css'
import logo from "../images/icons/logo.png"
import { Context } from '..'
import { toast } from 'react-toastify'
import axios from 'axios'


const Header = () => {
  const { isauthenticated, setIsauthenticated, loading, setLoading } = useContext(Context)
  const logouthandler = async () => {
    setLoading(true)
    try {
      await axios.get("http://localhost:5555/user/logout", {
        withCredentials: true,
      }
      )
      toast.success("Logged out Successfully", {
        hideProgressBar: true,
      });
      setIsauthenticated(false)
      setLoading(false)
    } catch (error) {
      toast.error('error' ,{
        hideProgressBar: true,
      });
      setIsauthenticated(true)
      setLoading(false)
    }
  }



  return (
    <div className='header'>
      <img className='logo' src={logo} alt='BookStore' />
      <div>
        <ul className='pages'>
          <NavLink className={(e) => { return e.isActive ? "red" : "black" }} to="/"><li>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "black" }} to="/about"><li>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "black" }} to="/store"><li>Store</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "black" }} to="/contactUs"><li>Contact Us</li></NavLink>
        </ul>
      </div>
      {isauthenticated ? (<button disabled={loading} onClick={logouthandler} className='signin_button'>Logout</button>
      ) : (<Link to="/Signin" ><button className='signin_button'>Sign in</button></Link>
      )}



    </div>
  )
}

export default Header;