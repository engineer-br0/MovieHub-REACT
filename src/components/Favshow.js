import React from 'react';

const Favshow = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies?.map((movie, index) => (
				<div key={movie.id} className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default Favshow;