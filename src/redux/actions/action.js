
import axios from "axios"

export const GET_MOVIES="GET_MOVIES"
export const actionTypes = {
    GET_MOVIES,
  };

export function getMoviesSuccess(movie) {
   
  return { type: GET_MOVIES, payload: movie }
}
export function getMovies() {
 
  return function (dispatch) {

    let url = "http://www.omdbapi.com/?s=batman&apikey=5afdbd1a";
   
    axios.get(url)
      .then(response => response.data.Search)
      .then(result => dispatch(getMoviesSuccess(result)));
  }
}
