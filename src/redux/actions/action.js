
import axios from "axios"

export const GET_MOVIES="GET_MOVIES"
export const actionTypes = {
    GET_MOVIES,
  };

export function getMoviesSuccess(movie) {
   console.log("movie", movie)
  return { type: GET_MOVIES, payload: movie }
}
export function getMovies(data) {
  
 console.log(data);
  return function (dispatch) {
    let url;
/*if(data.year){console.log("girdi"); url = `http://www.omdbapi.com/?s=${data.title}&s=${data.year}&apikey=5afdbd1a`;}
else if(data.option){url = `http://www.omdbapi.com/?s=${data.title}&s=${data.year}&apikey=5afdbd1a`;}
else{url = `http://www.omdbapi.com/?s=${data.title}&apikey=5afdbd1a`;}*/
url = `http://www.omdbapi.com/?s=${data.title}&y=${data.year}&type=${data.option}&apikey=5afdbd1a`;
    axios.get(url)
      .then(response => response.data.Search)
      .then(result => dispatch(getMoviesSuccess(result)));
  }
}
