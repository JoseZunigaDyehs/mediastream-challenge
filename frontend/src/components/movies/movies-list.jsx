import React, { Component } from 'react'
import Immutable from 'immutable';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default class MoviesList extends Component {
  shouldComponentUpdate = (nextProps) => {
    return (
      !Immutable.is(nextProps.moviesStates, this.props.moviesStates)
    )
  }
  addToFavMovie = (id) => {
    this.props.addToFavMovie(id);
  }
  orderByPopularity = (movieList) => {
    return movieList.toJS().sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    })
  }
  isInList = (id) => {
    const { moviesStates } = this.props,
      moviesFavs = moviesStates.get('moviesFavs');
    if (moviesFavs.size === 0 || moviesFavs.filter(mov => mov.get('id') == id).size===0) {
      return (
        <button className="btn" onClick={() => {
          this.addToFavMovie(id);
        }}>Agregar a favorito</button>
      )
    } else {
      return (
        <button className="btn disabled" onClick={() => {
        }}>En favorito</button>
      )
    }
  }
  fillMovies = (movieList) => {
    return movieList.map((movie, i) => {
      return (
        <tr key={i}>
          <td>{movie.title}</td>
          <td>{movie.popularity}</td>
          <td>{movie.vote_average}</td>
          <td>{movie.release_date}</td>
          <td>
            <Link to={`/movie/${movie.id}`} className="btn m-r-10">Ver detalle</Link>
            {this.isInList(movie.id)}

          </td>
        </tr>
      )
    });

  }
  content = () => {
    const { moviesStates } = this.props,
      movieList = moviesStates.get('popularMovies');
    if (movieList.size === 0) return null;
    const orderByPopularity = this.orderByPopularity(movieList);

    return (
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Popularidad</th>
              <th>Promedio de votos</th>
              <th>Fecha de salida</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.fillMovies(orderByPopularity)}
          </tbody>
        </table>
      </div>
    )
  }

  render = () => {

    return (
      <React.Fragment>
        <div className="title">
          <h1>Películas populares</h1>
        </div>
        {this.content()}
      </React.Fragment>
    )
  }
}

MoviesList.propTypes = {
  moviesStates: PropTypes.any.isRequired
}
