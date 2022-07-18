import React from 'react';

const MovieList = (props) => {
	return (
		<>

				<div className='image-container d-flex justify-content-start m-3'>
			{props.movies.map((movie) => (
					<img src={movie.Poster} alt='movie'></img>
			))}

				</div>
		</>
	);
};

export default MovieList;