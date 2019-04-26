import React from 'react'
import PropTypes from 'prop-types'
const MovieDetailsInfo = (props) => {

    const content = () => {
        const { movie } = props
        return (
            <div className="movie-info">
                <h1>{movie.get('title')}</h1>
                <p><strong>Fecha de salida:</strong> {movie.get('release_date')}</p>
                <p><strong>Lenguaje original:</strong> {movie.get('original_language')}</p>
                <p><strong>Promedio de votos:</strong> {movie.get('vote_average')}</p>
                <p><strong>Popularidad:</strong> {movie.get('popularity')}</p>
                <p><strong>Overview:</strong> {movie.get('overview')}</p>
                <p><strong>Adulto:</strong> {movie.get('adult') ? 'Si' : 'No'}</p>
                <p><strong>Recuento de votos:</strong> {movie.get('vote_count')}</p>
            </div>
        )
    }

    return content();
}

export default MovieDetailsInfo;

MovieDetailsInfo.propTypes = {
    movie: PropTypes.any.isRequired
}