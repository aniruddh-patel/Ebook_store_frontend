import React from 'react'
import {Link} from 'react-router-dom'
import './css/Footer.css'
import instagram from '../images/icons/instagram.png'
import twitter from '../images/icons/twitter.png'
import facebook from '../images/icons/facebook.png'
import telegram from '../images/icons/telegram.png'
import logo from "../images/icons/logo.png"


const Footer = () => {
    return (
        <div className='footer-box'>
            <div className='inner-footer-box'>
                <div className='links'>
                    <ul>
                        <li><Link to="/contactUs">FAQ</Link></li>
                        <li><Link to="/contactUs">Help Centre</Link></li>
                        <li><Link to="/signup">Account</Link></li>
                        <li><Link to="/store">Ebook Store</Link></li>
                        <li><Link to="#Jobs">Jobs</Link></li>
                        <li><Link to="/contactUs">Terms of Use</Link></li>
                        <li><Link to="/contactUs">Privacy</Link></li>
                        <li><Link to="/contactUs">Cookies Prefernces</Link></li>
                        <li><Link to="/about">About us </Link></li>
                        <li><Link to="/store">Browse Genre</Link></li>
                        <li><Link to="/contactUs">Contact Us</Link></li>
                        <li><Link to="/contactUs">Report Complaint</Link></li>
                        <li><Link to="/store">Only on StudyBuzz</Link></li>
                        <li><Link to="/contactUs">Donate</Link></li>
                        <li><a href='http://localhost:5555/admin' target='blank' >Add Book</a></li>
                    </ul>
                    <div className='weblogo'>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className='followlink'>
                    <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                    <a href="https://twitter.com/"><img src={twitter} alt="" /></a>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                    <a href="https://telegram.org/"><img src={telegram} alt="" /></a>
                </div>
                <div className='copywrite'>© 2024 Study Buzz by Aniruddh. All Rights Reserved.</div>
            </div>

        </div>
    )
}

export default Footer