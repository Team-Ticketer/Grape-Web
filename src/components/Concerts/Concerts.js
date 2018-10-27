import React from 'react'
import ConcertsItem from './ConcertsItem';

import './Concerts.css'

const Concerts = ({concertsList}) => {
  const concertsArray = concertsList.map(data => 
    <ConcertsItem data={data}/>)
  return (
    <div className="concerts--wrapper">
      <div className="concerts--search--wrapper">
        <div className="concerts--search--form">
          <input type="text" className="concerts--search--input" placeholder="Title"/>
          <div className="concerts--search--form--bottom">
            <input type="text" placeholder="Artist" className="concerts--search--input--bottom" />
            <input type="text" placeholder="Date" className="concerts--search--input--bottom"/>
            <input type="text" placeholder="Location" className="concerts--search--input--bottom"/>
          </div>
        </div>
        <div className="concerts--search--btn--wrapper">
          <img src={`/images/search.png`} alt="search" className="concerts--search--btn" />
        </div>
      </div>
      <div className="concerts--list--wrapper">
        <span className="concerts--list--title">
          Concerts Lists (999+)
        </span>
        <div className="concerts--list--items--wrapper">
          {concertsArray}
        </div>
      </div>
    </div>
  );
};

export default Concerts