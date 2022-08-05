import React from 'react';

const ShowFav = (props) => {
	const FavouriteComponent = props.favouriteComponent;
    console.log(props.movies);
	return (
		<>
			{props.movies?.map((movies, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-3'>
					<img src={movies.movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movies.movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default ShowFav;