import React, { Component } from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import Error from '../modules/error'
import IsFetching from '../modules/is-fetching'
import MovieDetailsInfo from './movie-details-info';
import MovieDetailsReviews from './movie-details-reviews';

export default class MovieDetails extends Component {

    shouldComponentUpdate = (nextProps) => {
        return (
          !Immutable.is(nextProps.moviesStates,this.props.moviesStates) ||
          !Immutable.is(nextProps.reviewStates,this.props.reviewStates)
        )
      }

    componentWillMount = () => {
        debugger
        const { moviesStates } = this.props,
            popularMovies = moviesStates.get('popularMovies'),
            movieId = parseInt(this.props.match.params.id);
        //Obtiene popular movies para su info si es que no la tiene, esto si el usuario recarga la página
        if (popularMovies.size === 0) {
            this.props.getPopularMovies();
        }
        this.props.getReviewMovie(movieId);
    }

    fillMovie = () => {
        const { moviesStates, reviewStates } = this.props,
            movieId = parseInt(this.props.match.params.id),
            popularMovies = moviesStates.get('popularMovies');
            debugger
        if (popularMovies.size === 0 || reviewStates === null) {
            return null;
        }
        //obtendo la película a mostrar
        const movie = popularMovies.filter(mov => mov.get('id') === movieId).get(0),
            reviews = reviewStates.get('reviews');
        return (
            <div className="details-movie">
                <MovieDetailsInfo movie={movie} />
                <MovieDetailsReviews reviews={reviews} />
            </div>
        )
    }

    content = () => {
        //Verifico si movieStates y reviewStates se están cargando
        const { moviesStates, reviewStates } = this.props,
            error = moviesStates.get('error'),
            isFetching = moviesStates.get('isFetching'),
            errorReviews = reviewStates.get('error'),
            isFetchingReviews = reviewStates.get('isFetching');
        if (error !== "" || errorReviews !== "") {
            return <Error error={error} />;
        }
        return (
            <IsFetching isFetching={isFetching || isFetchingReviews ? true : false}>
                {this.fillMovie()}
            </IsFetching>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h1>Detalle película</h1>
                </div>
                <div className='container'>
                    {this.content()}
                </div>
            </React.Fragment>
        )
    }
}

MovieDetails.propTypes = {
    moviesStates: PropTypes.any.isRequired,
    reviewStates: PropTypes.any.isRequired,
}