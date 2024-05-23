import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../components/css/About.css'
import donatelogo from '../images/main_images/donatelogo.png'
import reviewlogo from '../images/main_images/reviewlogo.png'
import aboutimage from '../images/main_images/aboutimage.png'
import logo from "../images/icons/logo.png"



const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [count, setCount] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 40000) {
                setCount(count + 99);
            }else if (count > 40000 && count<50000) {
                setCount(count + 19);
            }
             else {
                setCount(50000);
                clearInterval(interval);
            }
        }, 70); // Adjust the interval for the scrolling speed

        return () => clearInterval(interval);
    }, [count]);


    return (
        <div className='about-box'>
            <div className='inner-mainbox1'>
                <img className='right-inner-mainbox1' src={aboutimage} alt="bookart" />
                <div className='left-inner-mainbox1'>
                    <div className='main-heading'>The antique place for Reading Exploration and Feel "Study <span>Buzz"</span></div>
                    <div className='button-group'>
                        <Link to={{ pathname: '/store', hash: '#top' }}><button className='button2'>Visit Store</button></Link>
                    </div>
                </div>
            </div>
            <div className='aboutus'>
                <div>Welcome to <span>Study Buzz</span>, your premier destination for a world of knowledge at your fingertips! Here at <span>Study Buzz</span>, we're on a mission to make learning and exploration accessible to everyone, regardless of background or location. With an extensive library spanning all genres and topics, from timeless classics to cutting-edge research, we're dedicated to providing a platform where curiosity knows no bounds. <br /> <br />Discover a treasure trove of literature, textbooks, academic papers, and more, all available for free reading and download. Whether you're a student looking to ace your exams, a lifelong learner hungry for new insights, or simply a lover of words and ideas, <span>Study Buzz</span> is your go-to hub for intellectual enrichment. Join our vibrant community of learners, educators, and enthusiasts, and embark on a journey of discovery that's as exhilarating as it is enriching. With <span>Study Buzz</span>, the joy of learning is just a click away.</div>
            </div>
            <div className='inner-mainbox3'>
                <div className='new-arrival-book-box'>
                    <h2>Total ebooks </h2>
                    <h1>{count.toLocaleString()}+</h1>
                    <img height={110} src={logo} alt="bookart" />
                </div>

                <div className='store-box'>
                    <img height={200} src={donatelogo} alt="bookart" />
                    <button className='button1'>Support US</button>
                </div>
                <div className='trending-book-box'>
                    <img height={200} src={reviewlogo} alt="bookart" />
                    <Link to={{ pathname: '/', hash: '#comment' }}><button className='button1'>Comment</button></Link>
                </div>

            </div>
        </div>
    )
}

export default About