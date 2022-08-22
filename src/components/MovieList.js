import React from 'react';
import './Movielist.css'

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	
	return (
		<>
			{props.movies?.map((movie, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>   
					<pre>
					    <div className='head'>Title: {movie.Title}</div>
						<div className='head'>Type: {movie.Type}</div>
						<div className='head'>Year: {movie.Year}</div>
						<FavouriteComponent />
						</pre>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;