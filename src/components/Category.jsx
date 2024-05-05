import React from 'react'
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

const Category = () => {
    return (
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
    )
}

export default Category