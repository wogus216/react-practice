import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        'https://react-http-62af5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
      );
      if (response.statusText !== 'OK') {
        throw new Error('Something went wrong!');
      }

      console.log('response', response);
      const data = await response.data;
      console.log('data', data);

      const loadedMoveis = [];

      for (const key in data) {
        loadedMoveis.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMoveis);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const addMovieHandler = useCallback(async (movie) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://react-http-62af5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
        movie
      );
      const data = await response.data;
      console.log('postdata', data);

      alert('전송 성공');
      fetchMoviesHandler();
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log('fetchHandler 동작');
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
