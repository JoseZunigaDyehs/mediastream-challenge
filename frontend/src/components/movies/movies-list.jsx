import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MoviesList extends Component {
  shouldComponentUpdate = (nextProps) => {
    return (nextProps.movieList !== this.props.movieList)
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
    return movieList.map((movie,i)=>{
      return(
        <tr key={i}>
          <td>{movie.title}</td>
          <td>{movie.release_date}</td>
          <td>{movie.popularity}</td>
          <td>{movie.vote_average}</td>
          <td>
            <button>Ver Detalle</button>
            <button>Agregar a favoritos</button>
          </td>
        </tr>
      )
    });
  }
  content = () => {
    const { movieList } = this.props;
    if(movieList.size===0) return null;
    const orderByPopularity = this.orderByPopularity(movieList);
    return (
      <div className='container'>
        <table>
          <thead>
          <tr>
            <th>Título</th>
            <th>Fecha de salida</th>
            <th>Popularidad</th>
            <th>Promedio de votos</th>
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
    return this.content();
  }
}

MoviesList.propTypes = {
  movieList: PropTypes.any.isRequired
}
