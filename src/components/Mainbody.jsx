import React from 'react'
import Bookbox from './Bookbox.jsx'
import Slider from './Slider.jsx'

import logo from "../images/logo.png"
import mainimage from '../images/mainimage.png'
import aboutimage from '../images/aboutimage.png'
import box1image from "../images/box1-image.jpg"
import box2image from '../images/box2-image.jpg'
import box3image from '../images/box3-image.jpg'
import donatelogo from '../images/donatelogo.png'
import reviewlogo from '../images/reviewlogo.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import telegram from '../images/telegram.png'
import profile1 from '../images/profile1.png'
import profile2 from '../images/profile2.png'
import profile3 from '../images/profile3.png'
import profile4 from '../images/profile4.png'
import profile5 from '../images/profile5.png'
import ReviewWrite from './ReviewWrite.jsx'
// 
import horror from '../images/Genre_images/horror.jpg'
import literacyFiction from '../images/Genre_images/literacyFiction.jpg'
import actionAdventure from '../images/Genre_images/actionAdventure.jpg'
import children from '../images/Genre_images/children.jpg'
import fantasy from '../images/Genre_images/fantasy.jpg'
import historicalFiction from '../images/Genre_images/historicalFiction.jpg'
import history from '../images/Genre_images/history.jpg'
import romance from '../images/Genre_images/romance.jpg'
import youngAdult from '../images/Genre_images/youngAdult.jpg'
import nonfiction from '../images/Genre_images/nonfiction.jpg'
import scienceandfiction from '../images/Genre_images/scienceandfiction.jpg'
import mystery from '../images/Genre_images/mystery.jpg'
// 


const Mainbody = () => {
    return (
        <div className='mainbody'>
            <div className='main-box'>
                <div className='inner-mainbox1'>
                    <div className='left-inner-mainbox1'>
                        <div className='main-heading'>Find <hr />yourself in a Great Book..</div>
                        <div className='quotes-api-box'>Lorem ipslorem44
                            Lcia. Minus, maxime ducimus! um dolor sit amet consectet\rporis, dolorem!</div>
                        <div className='button-group'>
                            <button className='button1'>Get Started</button>
                            <button className='button2'>Learn More</button>
                        </div>
                    </div>
                    <img className='right-inner-mainbox1' src={mainimage} alt="bookart" />
                </div>
                <div className='inner-mainbox2'>
                    <form action="" className='search'>
                        <input type="text" placeholder='Search Book' />
                        <button>Find</button>
                    </form>
                </div>
                <div className='inner-mainbox3'>
                    <div className='trending-book-box'>
                        <img className='boxx1' src={box1image} alt="bookart" />
                        <div className='boxx2'><h2>Trending Books...</h2><p>Explore trending Books of this month.</p> <button className='button2'>Explore</button></div>
                    </div>
                    <div className='store-box'>
                        <img height={200} src={box2image} alt="bookart" />
                        <button className='button1'>Visit Store</button>
                    </div>
                    <div className='new-arrival-book-box'>
                        <div className='boxx2'><h2>New Arrival Books...</h2><p>See latest collection of this month.</p> <button className='button2'>Explore</button></div>
                        <img className='boxx1' src={box3image} alt="bookart" />
                    </div>
                </div>
            </div>
            <div className='category-box'>
                <h1>Browse Genres</h1>
                <div className='inner-featured'>
                    <img className='category-inner-boxes' src={romance} alt='' />
                    <img className='category-inner-boxes' src={actionAdventure} alt='' />
                    <img className='category-inner-boxes' src={mystery} alt='' />
                    <img className='category-inner-boxes' src={history} alt='' />
                    <img className='category-inner-boxes' src={children} alt='' />
                    <img className='category-inner-boxes' src={youngAdult} alt='' />
                    <img className='category-inner-boxes' src={fantasy} alt='' />
                    <img className='category-inner-boxes' src={historicalFiction} alt='' />
                    <img className='category-inner-boxes' src={horror} alt='' />
                    <img className='category-inner-boxes' src={literacyFiction} alt='' />
                    <img className='category-inner-boxes' src={nonfiction} alt='' />
                    <img className='category-inner-boxes' src={scienceandfiction} alt='' />


                </div>
            </div>
            <div className='featured-box'>
                <div className='slider-box'>
                    <Slider />
                </div>
                <h1>Featured Books</h1>
                <Bookbox />
            </div>
            <div className='new-arrival-box'>
                <h1>New Collection</h1>
                <Bookbox />
            </div>
            <div className='about-box'>
                <div className='inner-mainbox1'>
                    <img className='right-inner-mainbox1' src={aboutimage} alt="bookart" />
                    <div className='left-inner-mainbox1'>
                        <div className='main-heading'>The antique place for Reading Exploration and Feel "Study <span>Buzz"</span></div>
                        <div className='button-group'>
                            <button className='button2'>Visit Store</button>
                        </div>
                    </div>
                </div>
                <div className='aboutus'>
                    <div>Welcome to <span>Study Buzz</span>, your premier destination for a world of knowledge at your fingertips! Here at <span>Study Buzz</span>, we're on a mission to make learning and exploration accessible to everyone, regardless of background or location. With an extensive library spanning all genres and topics, from timeless classics to cutting-edge research, we're dedicated to providing a platform where curiosity knows no bounds. <br /> <br />Discover a treasure trove of literature, textbooks, academic papers, and more, all available for free reading and download. Whether you're a student looking to ace your exams, a lifelong learner hungry for new insights, or simply a lover of words and ideas, <span>Study Buzz</span> is your go-to hub for intellectual enrichment. Join our vibrant community of learners, educators, and enthusiasts, and embark on a journey of discovery that's as exhilarating as it is enriching. With <span>Study Buzz</span>, the joy of learning is just a click away.</div>
                </div>
                <div className='inner-mainbox3'>
                    <div className='new-arrival-book-box'>
                        <h2>Total ebooks </h2>
                        <h1>50,000 +</h1>
                        <img height={110} src={logo} alt="bookart" />
                    </div>

                    <div className='store-box'>
                        <img height={200} src={donatelogo} alt="bookart" />
                        <button className='button1'>Support US</button>
                    </div>
                    <div className='trending-book-box'>
                        <img height={200} src={reviewlogo} alt="bookart" />
                        <button className='button1'>Comment</button>
                    </div>

                </div>
            </div>
            <div className='review-box'>
                <div className='inner-featured'>
                    <div className='review-inner-boxes'>
                        <div className='review-profile'>
                            <img className='profile-picture' src={profile1} alt="" />
                            <div className='profile-name-rating'>
                                <span className='profile-name'>Anne James</span>
                                <span className='profile-rating'>20/12/2002</span>
                            </div>
                        </div>
                        <div className='review-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit laudantium unde accusantium quo impedit voluptate alias repellat, dignissimos sed..</div>
                    </div>
                    <div className='review-inner-boxes'>
                        <div className='review-profile'>
                            <img className='profile-picture' src={profile2} alt="" />
                            <div className='profile-name-rating'>
                                <span className='profile-name'>Anne James</span>
                                <span className='profile-rating'>20/12/2002</span>
                            </div>
                        </div>
                        <div className='review-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit laudantium unde accusantium quo impedit voluptate alias repellat, dignissimos sed..</div>
                    </div>
                    <div className='review-inner-boxes'>
                        <div className='review-profile'>
                            <img className='profile-picture' src={profile3} alt="" />
                            <div className='profile-name-rating'>
                                <span className='profile-name'>Anne James</span>
                                <span className='profile-rating'>20/12/2002</span>
                            </div>
                        </div>
                        <div className='review-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit laudantium unde accusantium quo impedit voluptate alias repellat, dignissimos sed..</div>
                    </div>
                    <div className='review-inner-boxes'>
                        <div className='review-profile'>
                            <img className='profile-picture' src={profile4} alt="" />
                            <div className='profile-name-rating'>
                                <span className='profile-name'>Anne James</span>
                                <span className='profile-rating'>20/12/2002</span>
                            </div>
                        </div>
                        <div className='review-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit laudantium unde accusantium quo impedit voluptate alias repellat, dignissimos sed..</div>
                    </div>
                    <div className='review-inner-boxes'>
                        <div className='review-profile'>
                            <img className='profile-picture' src={profile5} alt="" />
                            <div className='profile-name-rating'>
                                <span className='profile-name'>Anne James</span>
                                <span className='profile-rating'>20/12/2002</span>
                            </div>
                        </div>
                        <div className='review-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit laudantium unde accusantium quo impedit voluptate alias repellat, dignissimos sed..</div>
                    </div>

                    <div className='review-inner-boxes'>
                        <ReviewWrite />
                    </div>

                </div>
            </div>
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
        </div >
    )
}

export default Mainbody;