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
