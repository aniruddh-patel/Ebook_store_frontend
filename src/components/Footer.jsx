import React from 'react'
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
                        <li><a href="#FAQ">FAQ</a></li>
                        <li><a href="#Help Centre">Help Centre</a></li>
                        <li><a href="#Account">Account</a></li>
                        <li><a href="#Media Centre">Ebook Store</a></li>
                        <li><a href="#Jobs">Jobs</a></li>
                        <li><a href="#Terms of Use">Terms of Use</a></li>
                        <li><a href="#Privacy">Privacy</a></li>
                        <li><a href="#Cookies Prefernces">Cookies Prefernces</a></li>
                        <li><a href="#Corporate Information">About us </a></li>
                        <li><a href="#Speed Test">Browse Genre</a></li>
                        <li><a href="#Contact Us">Contact Us</a></li>
                        <li><a href="#Legal Notices">Report Complaint</a></li>
                        <li><a href="#Only on Netflix">Only on StudyBuzz</a></li>
                        <li><a href="#Only on Netflix">Donate</a></li>
                        <li><a href="#Only on Netflix">Add Book</a></li>
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