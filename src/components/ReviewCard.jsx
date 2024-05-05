import React from 'react'
import './css/ReviewCard.css'




// const profileImages = [
//     require('../images/icons/profile1.png'),
//     require('../images/icons/profile2.png'),
//     require('../images/icons/profile3.png'),
//     require('../images/icons/profile4.png'),
//     require('../images/icons/profile5.png')
//   ];
const ReviewCard = (props) => {
    // const randomProfileImage = profileImages[Math.floor(Math.random() * profileImages.length)];

    return (
        <div className='review-inner-boxes'>
            <div className='review-profile'>
                <img className='profile-picture' src={props.profileimage} alt="" />
                <div className='profile-name-rating'>
                    <span className='profile-name'>Anne James</span>
                    <span className='profile-rating'>20/12/2002</span>
                </div>
            </div>
            <div className='review-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit laudantium unde accusantium quo impedit voluptate alias repellat, dignissimos sed..</div>
        </div>
    )
}

export default ReviewCard