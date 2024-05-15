import React, { useState } from 'react';
import StarRating from 'react-native-star-rating-widget';

const Ratings = () => {
  const [rating, setRating] = useState(0);

  return (
    <StarRating
      rating={rating}
      onChange={setRating}
    />
  );
};

export default Ratings;
