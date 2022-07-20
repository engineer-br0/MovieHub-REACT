import React from 'react';

const favouriteList = (props) => {

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex m-3'>
					<img className='img' src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default favouriteList ;