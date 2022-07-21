import React from 'react';
import DeleteFavourite from './DeleteFavourite';

const FavouriteList = (props) => {
    let DeleteFavourite = props.delete;
    return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div onClick={() => props.deleteHandler(movie)} className='delete'>
                        <DeleteFavourite />
                    </div>
				</div>
			))}
		</>
	);
};

export default FavouriteList ;