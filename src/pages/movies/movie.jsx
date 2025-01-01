import React, { useState } from 'react';

import AllData from '../../data/alldata';
import './styles/movie.css';

import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/navbar/navbar';
import MovieCard from './moviecard';

const Movie = () => {
  const [isFetch, setIsFetch] = useState(true);
  // calls movie api for handleMovies
  const [movies, setMovies] = useState([]);
  // for loading animation
  const [loading, setLoading] = useState(false);

  const handleMovies = async () => {

    try {
      setIsFetch(false);
      setLoading(true);

      const response = await fetch("https://swapi.py4e.com/api/films/");
      const data = await response.json();

      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  return (
    <div className='movies' style={{background:'black', color:'gold'}}>
      <div>
        <Navbar />
      </div>

      {isFetch && <button className="film-button" onClick={handleMovies}>Films of the Force</button>}
      {loading && (
        <div className="loading-bar">
          <Loader />
        </div>
      )}

      <div className="movies-container">
        {movies.map((result) => {
          const movieInfo = AllData.MovieData.find(
            (movie) => movie.title === result.title
          );

          return (
            <div className="movies-items" key={result.title}>
              <MovieCard
                title={'Star Wars: ' + result.title}
                director={'Director: ' + result.director}
                producer={'Producer: ' + result.producer}
                releasedate={'Release Date: ' + result.release_date}
                image={movieInfo.movieImageLink}
                description={result.opening_crawl}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Movie;