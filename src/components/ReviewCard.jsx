import React from 'react'
import './css/ReviewCard.css'
const ReviewCard = (props) => {

    return (
        <div className='review-inner-boxes'>
            <div className='review-profile'>
                <img className='profile-picture' src={props.profileImage} alt="" />
                <div className='profile-name-rating'>
                    <span className='profile-name'>{props.name}</span>
                    <span className='profile-rating'>{props.date}</span>
                </div>
            </div>
            <div className='review-text'>{props.message}</div>
        </div>
    )
}

export default ReviewCard