import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'


import Bookbox from '../components/Bookbox.jsx'
import Slider from '../components/Slider.jsx'
import About from './About.jsx'

import mainimage from '../images/main_images/mainimage.png'
import box1image from "../images/main_images/box1-image.jpg"
import box2image from '../images/main_images/box2-image.jpg'
import box3image from '../images/main_images/box3-image.jpg'


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


// for search book
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5555/api/v1/books/search/book?title=${query}`);
            if (response.data) {
                navigate(`/bookDetail/${response.data._id}`);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast.error('Book not found');
            } else {
                toast.error('An error occurred');
            }
        }
    };


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
                    <div className='search'>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for a book..."
                        />
                        <button onClick={handleSearch}>Find</button>
                    </div>
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
                            <a href="#newCollectionbook" ><button className='button2'>Explore</button></a>
                        </div>
                        <img className='boxx1' src={box3image} alt="bookart" />
                    </div>
                </div>
            </div>
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
        </div >
    )
}

export default Mainbody;