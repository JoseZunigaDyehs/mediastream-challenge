import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default class MoviesList extends Component {
  shouldComponentUpdate = (nextProps) => {
    return (nextProps.moviesStates !== this.props.moviesStates)
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
            <button className="btn" onClick={() => {
              this.addToFavMovie(movie.id);
            }}>Agregar a favorito</button>
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
