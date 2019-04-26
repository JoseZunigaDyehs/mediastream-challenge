import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default class MoviesFavs extends Component {
  shouldComponentUpdate = (nextProps) => {
    return (nextProps.moviesStates !== this.props.moviesStates)
  }
  fillMovies = (moviesFavs) => {
    return moviesFavs.toJS().map((movie, i) => {
      return (
        <tr key={i}>
          <td>{movie.title}</td>
          <td>{movie.popularity}</td>
          <td>{movie.vote_average}</td>
          <td>{movie.release_date}</td>
          <td>
            <Link to={`/movie/${movie.id}`} className="btn m-r-10">Ver detalle</Link>
          </td>
        </tr>
      )
    });
  }
  content = () => {
    const { moviesStates } = this.props,
      moviesFavs = moviesStates.get('moviesFavs');
    if (moviesFavs.size === 0) {
      return (
        <div className='container'>
          <p>No existen películas favoritas</p>
        </div>
      )
    }
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
            {this.fillMovies(moviesFavs)}
          </tbody>
        </table>
      </div>
    )
  }

  render = () => {
    return (
      <React.Fragment>
        <div className="title">
          <h1>Favoritas</h1>
        </div>
        {this.content()}
      </React.Fragment>
    )
  }
}

MoviesFavs.propTypes = {
  moviesStates: PropTypes.any.isRequired
}
