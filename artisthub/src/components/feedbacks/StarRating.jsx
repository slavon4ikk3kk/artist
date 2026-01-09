import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({
  totalStars = 5,
  onChange,
  rating,
  setRating,
  hover,
  setHover,
}) => {
  const handleClick = (value) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={value}
            className={`star ${value <= (hover || rating) ? "active" : ""}`}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
