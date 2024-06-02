import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../components/Category.jsx';
import Bookbox from '../components/Bookbox.jsx';

const Store = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRandomBooks();
  }, []);

  const fetchRandomBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5555/api/v1/books/random');
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching random books:', error);
    }
  };

  const fetchBooksByCategory = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(`http://localhost:5555/api/v1/books/category/${category}`);
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
