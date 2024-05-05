import React from 'react'
import Bookbox from '../components/Bookbox.jsx'
import Slider from '../components/Slider.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import About from './About.jsx'
import ReviewWrite from '../components/ReviewWrite.jsx'
import Category from '../components/Category.jsx'

import mainimage from '../images/main_images/mainimage.png'
import box1image from "../images/main_images/box1-image.jpg"
import box2image from '../images/main_images/box2-image.jpg'
import box3image from '../images/main_images/box3-image.jpg'

import profile1 from '../images/icons/profile1.png'
import profile2 from '../images/icons/profile2.png'
import profile3 from '../images/icons/profile3.png'
import profile4 from '../images/icons/profile4.png'
import profile5 from '../images/icons/profile5.png'


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
            <Category />
            <div className='featured-box'>
                <div className='slider-box'>
                    <Slider />
                </div>
                <h1>Featured Books</h1>
                <div className='inner-featured'>
                    <Bookbox />
                    <Bookbox />
                    <Bookbox />
                    <Bookbox />
                    <Bookbox />
                </div>
            </div>
            <div className='new-arrival-box'>
                <h1>New Collection</h1>
                <div className='inner-featured'>
                    <Bookbox />
                    <Bookbox />
                    <Bookbox />
                    <Bookbox />
                    <Bookbox />
                </div>
            </div>
            <About />
            <div className='review-box'>
                <div className='inner-featured'>
                    <ReviewCard profileimage={profile1} />
                    <ReviewCard profileimage={profile2} />
                    <ReviewCard profileimage={profile3} />
                    <ReviewCard profileimage={profile4} />
                    <ReviewCard profileimage={profile5} />
                    <div className='review-inner-boxes'>
                        <ReviewWrite />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Mainbody;