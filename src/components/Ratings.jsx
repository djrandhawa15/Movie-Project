import React from 'react';
import '../styles/movieCard.css';

const Ratings = ({rating}) => {
 

  return (
    <div  className="rating"> 
              <p>{rating.toFixed(1)}</p>
              </div>
  );
};

export default Ratings;
