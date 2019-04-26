import { API_URL, API_KEY } from "./constants";
import axios from "axios";

//MOVIES
export function getPopularMovies() {
  return function action(dispatch) {
    dispatch(getPopularMoviesStart());

    const request = axios({
      method: "GET",
      url: API_URL + "/popular" + API_KEY
    });
    return request.then(
      response => {
        if (response.status === 200) {
          dispatch(getPopularMoviesEnd(response.data.results));
        } else {
          dispatch(getPopularMoviesError(response.statusText));
        }
      },
      err => {
        dispatch(
          getPopularMoviesError(
            "Error de conexión con el servidor, intente nuevamente"
          )
        );
      }
    );
  };
}

function getPopularMoviesStart() {
  return { type: "GET_POPULAR_MOVIES_START" };
}

function getPopularMoviesError(error) {
  return { type: "GET_POPULAR_MOVIES_ERROR", error };
}
function getPopularMoviesEnd(data) {
  return { type: "GET_POPULAR_MOVIES_END", data };
}

export function addToFavMovie(id){
  return function action(dispatch){
    dispatch({type:'ADD_TO_FAV_MOVIE', id})
  }
}

//REVIEW
export function getReviewMovie(id) {
  return function action(dispatch) {
    dispatch(getReviewMovieStart());

    const request = axios({
      method: "GET",
      url: API_URL + `/${id}/reviews` + API_KEY
    });
    return request.then(
      response => {
        if (response.status === 200) {
          dispatch(getReviewMovieEnd(response.data.results));
        } else {
          dispatch(getReviewMovieError(response.statusText));
        }
      },
      err => {
        dispatch(
          getPopularMoviesError(
            "Error de conexión con el servidor, intente nuevamente"
          )
        );
      }
    );
  };
}
function getReviewMovieStart() {
  return { type: "GET_REVIEW_MOVIE_START" };
}

function getReviewMovieError(error) {
  return { type: "GET_REVIEW_MOVIE_ERROR", error };
}
function getReviewMovieEnd(data) {
  return { type: "GET_REVIEW_MOVIE_END", data };
}