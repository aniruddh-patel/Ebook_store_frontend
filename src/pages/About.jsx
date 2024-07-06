import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../components/css/About.css";
import donatelogo from "../images/main_images/donatelogo.png";
import reviewlogo from "../images/main_images/reviewlogo.png";
import downarrow from "../images/main_images/down-arrow.png";
import aboutimage from "../images/main_images/aboutimage.png";
import logo from "../images/icons/logo.png";
import profile1 from "../images/icons/profile1.png";
import profile2 from "../images/icons/profile2.png";
import profile3 from "../images/icons/profile3.png";
import profile4 from "../images/icons/profile4.png";
import profile5 from "../images/icons/profile5.png";
import ReviewCard from "../components/ReviewCard.jsx";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [count, setCount] = useState(161);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 1000) {
        setCount(count + 1);
      } else {
        setCount(1000);
        clearInterval(interval);
      }
    }, Math.floor(Math.random() * 3000)); 

    return () => clearInterval(interval);
  }, [count]);

  const reviews = [
    {
        name: "Mitali Kumari",
        date: "20/12/2015",
        message: "Amazing free book collection! Easy to navigate and download. Best UI I've seen. The variety of books is impressive, making it a must-visit for avid readers.",
        profileImage: profile1,
    },
    {
        name: "Aviral Jain",
        date: "15/11/2013",
        message:"Incredible site! Tons of free books to read and download. The user interface is top-notch, providing a seamless and enjoyable experience. Highly recommend to all book lovers.",
        profileImage: profile2,
    },
    {
        name: "Ayush Jain",
        date: "09/01/2024",
        message: "Perfect for book lovers! Free books and a fantastic UI. Smooth and enjoyable browsing experience. It's a treasure trove for readers, with easy downloads.",
        profileImage: profile3,
    },
    {
        name: "Shivam Soni",
        date: "12/10/2023",
        message:"The best free book website. User-friendly interface and seamless downloads. Highly satisfied with the collection and the ease of use. An excellent resource for readers.",
        profileImage: profile4,
    },
    {
        name: "Pranay Singh",
        date: "28/06/2021",
        message: "Outstanding free book service with a beautiful UI. Easy to find and download books. The selection is vast and varied, catering to all reading preferences.",
        profileImage: profile5,
    },
    {
        name: "Ayushi Yadav",
        date: "13/05/2020",
        message:"Fantastic free book site! The best user interface and hassle-free downloads. Can't ask for more. It's my go-to place for discovering new reads.",
        profileImage: profile1,
    },
    {
        name: "Anshul Patel",
        date: "09/01/2024",
        message:"Top-tier UI and free book downloads. Easy to navigate and read online. Highly recommended for anyone looking for quality reading materials without any cost.",
        profileImage: profile2,
    },
    {
        name: "Nikhil Malnakar",
        date: "18/11/2019",
        message:"Exceptional site for free books. The UI is sleek and intuitive. Downloading is a breeze, making it my favorite destination for new and classic reads.",
        profileImage: profile3,
    },
    {
        name: "Ashish Kushwaha",
        date: "13/08/2008",
        message:"Wonderful collection of free books with the best UI. Easy to read and download. Highly recommend this site to all my friends who love reading.",
        profileImage: profile4,
    },
    {
        name: "Tanya Singh",
        date: "21/03/2020",
        message:"Love this free book site! The UI is excellent, and downloading books is quick and easy. It's a fantastic resource for book enthusiasts.",
        profileImage: profile5,
    }
];


  const getRandomReviews = (reviews, num) => {
    let shuffled = [...reviews].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    setSelectedReviews(getRandomReviews(reviews, 6));
  }, []);

  return (
    <div>
      <div className="about-box">
        <div className="inner-mainbox1">
          <img
            className="right-inner-mainbox1"
            src={aboutimage}
            alt="bookart"
          />
          <div className="left-inner-mainbox1">
            <div className="main-heading">
              The antique place for Reading Exploration and Feel "Study{" "}
              <span>Buzz"</span>
            </div>
            <div className="button-group">
              <Link to={{ pathname: "/store", hash: "#top" }}>
                <button className="button2">Visit Store</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <div>
            Welcome to <span>Study Buzz</span>, your premier destination for a
            world of knowledge at your fingertips! Here at{" "}
            <span>Study Buzz</span>, we're on a mission to make learning and
            exploration accessible to everyone, regardless of background or
            location. With an extensive library spanning all genres and topics,
            from timeless classics to cutting-edge research, we're dedicated to
            providing a platform where curiosity knows no bounds. <br /> <br />
            Discover a treasure trove of literature, textbooks, academic papers,
            and more, all available for free reading and download. Whether
            you're a student looking to ace your exams, a lifelong learner
            hungry for new insights, or simply a lover of words and ideas,{" "}
            <span>Study Buzz</span> is your go-to hub for intellectual
            enrichment. Join our vibrant community of learners, educators, and
            enthusiasts, and embark on a journey of discovery that's as
            exhilarating as it is enriching. With <span>Study Buzz</span>, the
            joy of learning is just a click away.
          </div>
        </div>
        <div className="inner-mainbox3">
          <div className="new-arrival-book-box">
            <h2>Total ebooks </h2>
            <h1>{count.toLocaleString()}+</h1>
            <img height={110} src={logo} alt="bookart" />
          </div>

          <div className="store-box">
            <img height={200} src={donatelogo} alt="bookart" />
            <Link to="/contactUs" className="button1">
              Support US
            </Link>
          </div>
          <div className="trending-book-box">
            <img height={200} src={reviewlogo} alt="bookart" />
            <img height={70} src={downarrow} alt="bookart" />
          </div>
        </div>
      </div>
      <div className="review-box">
        <div className="inner-featured">
          {selectedReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              date={review.date}
              message={review.message}
              profileImage={review.profileImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
