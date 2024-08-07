// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDescription from './components/MovieDescription';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://example.com/inception.jpg',
      rating: 4.5,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    // Add more initial movies if needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    trailer: '',
  });

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0, trailer: '' });
  };

  return (
    <Router>
      <div className="App">
        <h1>My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  titleFilter={titleFilter}
                  ratingFilter={ratingFilter}
                  setTitleFilter={setTitleFilter}
                  setRatingFilter={setRatingFilter}
                />
                <MovieList movies={filteredMovies} />
                <form onSubmit={addMovie}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={newMovie.description}
                    onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Poster URL"
                    value={newMovie.posterURL}
                    onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Rating"
                    value={newMovie.rating}
                    onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Trailer URL"
                    value={newMovie.trailer}
                    onChange={(e) => setNewMovie({ ...newMovie, trailer: e.target.value })}
                    required
                  />
                  <button type="submit">Add Movie</button>
                </form>
              </>
            }
          />
          <Route path="/movies/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

