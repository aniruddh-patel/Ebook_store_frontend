import React, { useState } from 'react';
import './css/Accordion.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={item.title} className={`accordion-item ${active}`}>
        <div className="accordion-title" onClick={() => onTitleClick(index)}>
          <span>{item.title}</span>
          <span className="accordion-icon">{active ? '-' : '+'}</span>
        </div>
        <div className="accordion-content">{item.content}</div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
