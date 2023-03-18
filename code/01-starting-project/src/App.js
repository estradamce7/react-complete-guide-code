import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // async on the function, await on the fetch -> this can remove "then" chains
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // with async-away we need to use a try-catch to catch any error response
    // with "then" chain, we can add a ".catch" for error capturing
    try{
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const data = await response.json();

      // .then(response => {
      //   return response.json();
      // }).then(data => {
        const transformedMovies = data.results.map(movieData => {
          // movieData key returned should match the api key
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          };
        });
        setMovies(data.results);
      // });
    } catch (error) {
      setError(error.message); // error.message will contain the error we set in the try block
    } 
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])


  let content = <p>Found no movies</p>;

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
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
        { content }
      </section>
    </React.Fragment>
  );
}

export default App;
