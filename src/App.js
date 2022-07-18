import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
	// const [movies, setMovies] = useState([        {
  //           "Title": "Star Wars: Episode IV - A New Hope",
  //           "Year": "1977",
  //           "imdbID": "tt0076759",
  //           "Type": "movie",
  //           "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  //       },
  //       {
  //           "Title": "Star Wars: Episode V - The Empire Strikes Back",
  //           "Year": "1980",
  //           "imdbID": "tt0080684",
  //           "Type": "movie",
  //           "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  //       },
  //       {
  //           "Title": "Star Wars: Episode VI - Return of the Jedi",
  //           "Year": "1983",
  //           "imdbID": "tt0086190",
  //           "Type": "movie",
  //           "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  //       }]);


	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequesta = async () => {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  const getMovieRequest = () => {
    fetch("http://www.omdbapi.com/?s=star wars&apikey=263d22d8") .then(response => {
      return response.json()
    })
    .then(responseJson =>{
      //if (responseJson.Search) {
        setMovies(responseJson.Search);
      //}
    })
  }



	useEffect(() => {
		getMovieRequest();
	}, []);
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;