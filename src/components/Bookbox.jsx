import React from 'react';
import { useNavigate } from 'react-router-dom';
import notebook from '../images/Placeholder/notebook.png';
import "./css/Bookbox.css";

const Bookbox = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bookDetail/${book._id}`);
  };

  return (
    <div className='inner-bookbox' onClick={handleClick}>
      <img src={book.bookCoverUrl || notebook} alt="art" />
      <div className='Title'>Title: {book.bookName}</div>
      <div className='Author'>Author: {book.author}</div>
    </div>
  );
};

export default Bookbox;
