import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../components/Category.jsx';
import Bookbox from '../components/Bookbox.jsx';
import { apiDomain } from '../config';


const Store = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRandomBooks();
  }, []);

  const fetchRandomBooks = async () => {
    try {
      const response = await fetch(`${apiDomain}/api/v1/books`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.success) {
          console.log(data)
          setBooks(data.books);
      }
  }
  catch (error) {
      console.error('Error fetching books:', error);
  }
  };

  const fetchBooksByCategory = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(`${apiDomain}/api/v1/books/category/${category}`);
      setBooks(response.data.books);
      document.getElementById('book-cards').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error(`Error fetching books for category ${category}:`, error);
    }
  };

  return (
    <>
      <Category onCategorySelect={fetchBooksByCategory} />
      <div className='new-arrival-box' id='book-cards'>
        <div className='inner-featured'>
          {books.map((book) => (
            <Bookbox key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
