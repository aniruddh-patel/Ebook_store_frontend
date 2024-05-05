import React from 'react'
import book from '../images/temp_images/book.jpg'
import "./css/Bookbox.css"
const Bookbox = () => {
  return (
    <div className='inner-bookbox'>
      <img src={book} alt="art" />
      <div className='Title'>Title: The end of world</div>
      <div className='Author'>Author: Rd sharma</div>
      <div className='rating'>Rating:  00000</div>
    </div>

  )
}

export default Bookbox;