// src/components/MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <Link to={`/movies/${title}`}>More Info</Link>
    </div>
  );
};

export default MovieCard;
