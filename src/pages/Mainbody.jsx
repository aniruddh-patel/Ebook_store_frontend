import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


import Bookbox from '../components/Bookbox.jsx'
import Slider from '../components/Slider.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import About from './About.jsx'
import ReviewWrite from '../components/ReviewWrite.jsx'
// import Category from '../components/Category.jsx'

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
    // for api fetch
    const [bookdata, setBookdata] = useState([]);
    const [quoteData, setQuoteData] = useState({});
    const [topFiveBooks, setTopFiveBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5555/api/v1/books'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.success) {
                    console.log(data)
                    setBookdata(data.books);
                }
            } 
            catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);
    // for getting top 5 book by likes
    useEffect(() => {
        if (bookdata.length > 0) {
            const sortedBooks = [...bookdata].sort((a, b) => b.likes - a.likes);
            const topFive = sortedBooks.slice(0, 5);
            setTopFiveBooks(topFive);
        }
    }, [bookdata]);

    // for quote fetching
    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('http://localhost:5555/api/v1/quotes'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setQuoteData(data)
                
            } 
            catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };
        fetchQuote();
    }, []);
    

    
    // for scrolling to particular part from another page
    const { hash } = useLocation();
    useEffect(() => {
        // Scroll to the specified ID when the component mounts
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
   

    return (
        <div className='mainbody'>
            <div className='main-box'>
                <div className='inner-mainbox1'>
                    <div className='left-inner-mainbox1'>
                        <div className='main-heading'>Find <hr />yourself in a Great Book..</div>
                        <div className='quotes-api-box'>{quoteData.quote} <span>~{quoteData.author}</span> </div>
                        <div className='button-group'>
                            <Link to='/Signin'><button className='button1'>Get Started</button></Link>
                            <Link to='/about'><button className='button2'>Learn More</button></Link>
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
                        <div className='boxx2'><h2>Trending Books...</h2><p>Explore trending Books of this month.</p>
                            <a href="#trendingbook"><button className='button2'>Explore</button></a>
                        </div>
                    </div>
                    <div className='store-box'>
                        <img height={200} src={box2image} alt="bookart" />
                        <Link to='/store'><button className='button1'>Visit Store</button></Link>
                    </div>
                    <div className='new-arrival-book-box'>
                        <div className='boxx2'><h2>New Arrival Books...</h2><p>See latest collection of this month.</p>
                            <a href="#newCollectionbook" behavior="smooth" ><button className='button2'>Explore</button></a>
                        </div>
                        <img className='boxx1' src={box3image} alt="bookart" />
                    </div>
                </div>
            </div>
            {/* <Category /> */}
            <div className='featured-box' id='trendingbook'>
                <div className='slider-box'>
                    <Slider />
                </div>
                <h1>Featured Books</h1>
                <div className='inner-featured'>
                    {topFiveBooks.map((book) => (
                        <Bookbox key={book._id} book={book} />
                    ))} 
                </div>
            </div>
            <div className='new-arrival-box' id='newCollectionbook'>
                <h1>New Collection</h1>
                <div className='inner-featured'>
                    {bookdata.map((book) => (
                        <Bookbox key={book._id} book={book} />
                    ))}
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
                    <div className='review-inner-boxes' id='comment'>
                        <ReviewWrite />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Mainbody;