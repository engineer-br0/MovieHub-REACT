import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddToFavourites';
import DeleteFavourite from './components/DeleteFavourite';
import ShowFav from './components/ShowFav';
 import { db } from './firebase';
 import {addDoc, collection , query, onSnapshot, doc, deleteDoc, QuerySnapshot, updateDoc} from "firebase/firestore"

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("batman");
    const [favourites, setFavourites] = useState([]); 
	const [title, setTitle] = useState("");
	const [todos, setTodos] = useState([]);

	const getMovieRequest = async (searchValue) => {
		console.log(searchValue);
		  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a9099ac7`;
		const response = await fetch(url);
		const responseJson = await response.json();
       console.log(responseJson);
		if (responseJson.Search) {
			setMovies(responseJson.Search);
			console.log(movies);
		}
	};
	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
var fd=[];
	useEffect(() => {
		const p = query(collection(db, "movies"));
		const punsub =onSnapshot(p, (QuerySnapshot) => {
			let moviesArray = [];
			QuerySnapshot.forEach((doc) => {
				moviesArray.push({...doc.data(), id:doc.id});
			});
			//console.log(moviesArray);
			fd=moviesArray;
			setFavourites(fd);
			
			//console.log(fd);
			//console.log(favourites);
		})
	},[searchValue])

	

	const postData = async ( movie) =>{
		//e.preventDefault();
		await addDoc(collection(db, "movies"),{
			 movie
		  });
	}

	const deleteData = async (id) => {
		await deleteDoc(doc(db, "movies", id));
	  };

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		postData( movie);
	};

  const deleteHandler = (movie) =>{
     var array = [...favourites]; 
     var index = array.indexOf(movie);
    
       array.splice(index, 1);
       setFavourites(array);
	   deleteData( movie);
  }

	return (

		<div className='container-fluid movie-app'>

<div className="App">
      
    </div>
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
      <ShowFav movies={favourites} favouriteComponent={DeleteFavourite} handleFavouritesClick={deleteHandler} />
      </div>
      
		</div>
	);
};

export default App;
