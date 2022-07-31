import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddToFavourites';
import DeleteFavourite from './components/DeleteFavourite';
 import { db } from './firebase';
 import {collection, addDoc } from "firebase/firestore"

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('avengers');
    const [favourites, setFavourites] = useState([]); 
	

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
  


	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	
  
//   useEffect(() => {
// 		const movieFavourites = JSON.parse(
// 			localStorage.getItem('react-movie-app-favourites')
// 		);
// 		console.log(movieFavourites);
// 		setFavourites(movieFavourites);
// 	}, []);



	 const saveToFirebase = (items) => {
        
	 	//localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	 };

    // const postData = async (arr) =>{
    //     const URL = "https://reactmovieapp-7021d-default-rtdb.firebaseio.com/mridul.json";
	// 	const res = await fetch(URL,
	// 		{
	// 			method : "POST",
	// 			headers : {
	// 				"Content-Type" : "application/json",
	// 			},
	// 			body : JSON.stringify(arr)
	// 		});
	// }
	const postData = async (arr) =>{
        const URL = "https://reactmovieapp-7021d-default-rtdb.firebaseio.com/mridul.json";
		const res = await addDoc(collection(db, "todos"),
			{
				method : "POST",
				headers : {
					"Content-Type" : "application/json",
				},
				body : JSON.stringify(arr)
			});
	}
	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
        //saveToFirebase(newFavouriteList);
		postData(newFavouriteList);
	};

  const deleteHandler = (movie) =>{
     var array = [...favourites]; 
     var index = array.indexOf(movie);
    
       array.splice(index, 1);
       setFavourites(array);
       //saveToLocalStorage(array);
	   postData(array);
  }

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					favouriteComponent={AddFavourites}
					handleFavouritesClick={addFavouriteMovie}
				/>
			</div>
      
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourite' />
			</div>
      
      <div className='row'>
      <MovieList  movies={favourites} favouriteComponent={DeleteFavourite} handleFavouritesClick={deleteHandler}/>
      </div>
      
		</div>
	);
};

export default App;
