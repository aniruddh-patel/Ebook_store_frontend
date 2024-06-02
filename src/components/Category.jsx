import React from 'react';
import horror from '../images/Genre_images/horror.jpg';
import literacyFiction from '../images/Genre_images/literacyFiction.jpg';
import actionAdventure from '../images/Genre_images/actionAdventure.jpg';
import children from '../images/Genre_images/children.jpg';
import fantasy from '../images/Genre_images/fantasy.jpg';
import historicalFiction from '../images/Genre_images/historicalFiction.jpg';
import history from '../images/Genre_images/history.jpg';
import romance from '../images/Genre_images/romance.jpg';
import youngAdult from '../images/Genre_images/youngAdult.jpg';
import nonfiction from '../images/Genre_images/nonfiction.jpg';
import scienceandfiction from '../images/Genre_images/scienceandfiction.jpg';
import mystery from '../images/Genre_images/mystery.jpg';
import { useEffect } from 'react';

const categories = [
  { name: 'Romance', image: romance },
  { name: 'Action & Adventure', image: actionAdventure },
  { name: 'Mystery', image: mystery },
  { name: 'History', image: history },
  { name: 'Children', image: children },
  { name: 'Young Adult', image: youngAdult },
  { name: 'Fantasy', image: fantasy },
  { name: 'Historical Fiction', image: historicalFiction },
  { name: 'Horror', image: horror },
  { name: 'Literary Fiction', image: literacyFiction },
  { name: 'Nonfiction', image: nonfiction },
  { name: 'Science & Fiction', image: scienceandfiction }
];

const Category = ({ onCategorySelect }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='category-box' id='top'>
      <h1>Browse Genres</h1>
      <div className='inner-featured'>
        {categories.map((cat) => (
          <img
            key={cat.name}
            className='category-inner-boxes'
            src={cat.image}
            alt={cat.name}
            onClick={() => onCategorySelect(cat.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
